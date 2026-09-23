const { addUserModel, getUserModel, getUserModelById } = require('../model/userModel');

const addUsers = async (req, res, next) => {
    try {
        const { id, name, email } = req.body;

        const [result] = await addUserModel(id, name, email);

        res.status(200).send({
            message: "User added successfully",
            data: result
        });

    } catch (err) {
        return next(err)
    }
};


const getUsers = async (req, res, next) => {
    try {
        const [result] = await getUserModel();

        res.send(result);

    } catch (err) {
        return next(err)
    }
};


const getUsersById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const [result] = await getUserModelById(id);

        res.send(result);

    } catch (err) {
        return next(err)
    }
};

module.exports = { addUsers, getUsers, getUsersById };