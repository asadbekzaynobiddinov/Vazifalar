import jwt from "jsonwebtoken";
import { OTP, User } from "../modules/index.js";
import {
    statusCodes,
    errorMessages,
    ApiError,
    logger,
} from "../utils/index.js";
import { otpGenerator, sendMail } from "../helpers/index.js";


export const registerService = async (data) => {
    try {
        const { email } = data;

        const currentUser = await User.findOne({ email });

        if (!currentUser) {
            const otp = otpGenerator();

            await sendMail(email, "OTP", `this is your OTP: ${otp}`);

            const user = new User(data);
            await user.save();

            const db_otp = new OTP({
                user_id: user._id,
                otp_code: otp,
            });

            await db_otp.save();
            return {
                success: true,
                status: statusCodes.CREATED,
                message: 'Registered'
            }
        }
        return {
            success: false,
            status: statusCodes.CONFLICT,
            message: errorMessages.EMAIL_ALREADY_EXISTS
        }
    } catch (error) {
        throw new ApiError(error.statusCode, error.message)
    }
}

export const loginService = async (data) => {
    try {
        const { email, password } = data;
        const currentUser = await User.findOne({ email });

        if (!currentUser) {
            return {
                success: false,
                status: statusCodes.NOT_FOUND,
                message: errorMessages.USER_NOT_FOUND
            }
        }

        const passwordIsEqual = await currentUser.compare(password);

        console.log(passwordIsEqual);
        if (!passwordIsEqual) {
            return {
                success: false,
                status: statusCodes.CONFLICT,
                message: errorMessages.INVALID_CREDENTIALS
            }
        }

        const payload = {
            sub: email,
            role: currentUser.role,
        };

        const accessSecretKey = process.env.JWT_ACCESS_SECRET;
        const refreshSecretKey = process.env.JWT_REFRESH_SECRET;

        const accessToken = jwt.sign(payload, accessSecretKey, {
            expiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
        });

        const refreshToken = jwt.sign(payload, refreshSecretKey, {
            expiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
        });

        return {
            success: true,
            status: statusCodes.OK,
            access: accessToken,
            refresh: refreshToken,
        }
    } catch (error) {
        throw new ApiError(error.statusCode, error.message)
    }
}

export const refreshService = async (token) => {
    try {
        jwt.verify(token, process.env.JWT_REFRESH_SECRET, (error, decode) => {
            if (error)
                throw new Error(statusCodes.FORBIDDEN, errorMessages.FORBIDDEN);

            logger.info({ decode });

            const accessToken = jwt.sign(
                {
                    sub: decode.sub,
                    role: decode.role,
                },
                process.env.JWT_ACCESS_SECRET,
                {
                    expiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
                }
            );

            return {
                access: accessToken,
                refresh: token
            }
        });
    } catch (error) {
        throw new ApiError(error.statusCode, error.message)
    }
}

export const verifyService = async (data) => {
    try {
        const { otp, email } = data;
        const currentUser = await User.findOne({ email });
        const currentOtp = await OTP.findOne({ user_id: currentUser._id });

        const isEqual = currentOtp.verify(otp);

        if (!isEqual) {
            return {
                success: false,
                status: statusCodes.BAD_REQUEST,
                message: "OTP is not valid"
            }
        }

        await OTP.deleteOne({ user_id: currentUser._id });
        await User.updateOne(
            { email },
            {
                is_active: true,
            }
        );

        return {
            success: true,
            status: statusCodes.OK,
            message: "user is actived"
        }
    } catch (error) {
        throw new ApiError(error.statusCode, error.message)
    }
}

export const forgetPasswordService = async (token, password) => {
    try {
        jwt.verify(token, process.env.JWT_FORGETPASSWORD_SECRET, async (err, payload) => {
            if (err) {
                return {
                    success: false,
                    status: statusCodes.FORBIDDEN,
                    message: "Forbidden"
                }
            }
            const currentUser = await User.findOne({ email: payload.sub });
            currentUser.password = password
            await currentUser.save()
        })
        return {
            success: true,
            status: statusCodes.OK,
            message: "User password updated"
        }
    } catch (error) {
        throw new ApiError(error.statusCode, error.message)
    }
}

export const getTokenService = async (email) => {
    try {
        const currentUser = await User.findOne({ email });

        if (!currentUser) {
            return {
                success: false,
                status: statusCodes.NOT_FOUND,
                message: errorMessages.USER_NOT_FOUND
            }
        }

        const payload = {
            sub: email,
        };

        const forgetToken = jwt.sign(payload, process.env.JWT_FORGETPASSWORD_SECRET, {
            expiresIn: process.env.JWT_FORGETPASSWORD_EXPIRES_IN,
        });

        await sendMail(email, "UPDATE PASSWORD", `this is your UPDATE PASSWOR LINK: http://localhost:3000/auth/updatePassword/${forgetToken}`);
        return {
            success: true,
            status: statusCodes.OK,
            message: `Emailingizga link jo'natildi`
        } 
    } catch (error) {
        throw new ApiError(error.statusCode, error.message)
    }
}