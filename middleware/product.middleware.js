export const validateProductData = (req, res, next) => {
    const { name, count, price, category } = req.body;
    if (!name || !count || !price || !category) {
        return res.status(400).send('Barcha maydonlar to\'ldirilishi kerak!');
    }
    next();
};
