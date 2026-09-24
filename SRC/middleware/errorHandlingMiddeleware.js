
const errMiddleware = (err, req, res, next) => {
    if (err) {
        return res.status(500).send({
            success: false,
            message: err.message,
            data: null
        });
    }
    next();
}

module.exports = errMiddleware;