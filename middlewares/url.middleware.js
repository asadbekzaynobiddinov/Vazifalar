import validUrl from 'valid-url'

export const validateUrlMiddleware = (req, res, next) => {
    const { photo_url } = req.body

    if (!photo_url) {
        return res.status(400).json({ error: "Photo URL maydoni kiritilishi shart." })
    }

    if (!validUrl.isUri(photo_url)) {
        return res.status(400).json({ error: "Yaroqsiz URL format. To'g'ri URL kiriting." })
    }

    next()
}

