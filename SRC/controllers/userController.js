const { addUserModel, getUserModel, getUserModelById } = require('../model/userModel');

const addUsers = async (req, res) => {
    try {
        const { id, name, email } = req.body;

        const [result] = await addUserModel(id, name, email);

        res.status(200).send({
            message: "User added successfully",
            data: result
        });

    } catch (err) {
        res.status(500).send(err.message);
    }
};


const getUsers = async (req, res) => {
    try {
        const [result] = await getUserModel();

        res.send(result);

    } catch (err) {
        res.status(500).send(err.message);
    }
};


const getUsersById = async (req, res) => {
    try {
        const { id } = req.params;

        const [result] = await getUserModelById(id);

        res.send(result);

    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = { addUsers, getUsers, getUsersById };