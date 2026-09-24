const uploadS3 = require("../services/s3Service");
const { getDocByIdUser_id, getDocByIdUid } = require("../model/documentModel")
const sendNotification = require("../services/snsService")


const addDocument = async (req, res, next) => {
    try {
        const documentData = await uploadS3(req);
        await sendNotification();
        return res.status(201).json({
            success: true,
            message: "Document uploaded successfully",
            data: documentData
        });

    } catch (err) {
        return next(err);
    }
};

const getDocmentByUId = async (req, res, next) => {
    const user_id = req.params.user_id;
    try {
        const [result] = await getDocByIdUser_id(user_id);
        return res.status(200).json({
            success: true,
            message: "User documents fetched successfully",
            data: result
        });
    } catch (err) {
        return next(err);
    }
};

const getDocmentById = async (req, res, next) => {
    const id = req.params.id;
    try {
        const [result] = await getDocByIdUid(id);

        return res.status(200).json({
            success: true,
            message: "Document fetched successfully",
            data: result
        });
    } catch (err) {
        return next(err);
    }
};

module.exports = { addDocument, getDocmentByUId, getDocmentById };
