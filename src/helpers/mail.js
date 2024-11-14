import nodemailer from "nodemailer";
import { config } from "dotenv";

config();
console.log(process.env.MAILTRAP_PASSWORD);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAILTRAP_USERNAME,
    pass: process.env.MAILTRAP_PASSWORD,
  },
});

export const sendMail = (to, subject, text) => {
  transporter.sendMail(
    {
      from: "khkhkhkhamidullo@gmail.com",
      to,
      subject,
      text,
    },
    function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    }
  );
};
