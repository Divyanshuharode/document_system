
const errMiddleware = (err, req, res, next) => {
    if (err) {
        // res.send({
        return res.status(500).send({
            success: false,
            message: err.message,
            data: null
        });
    }
}

module.exports = errMiddleware;