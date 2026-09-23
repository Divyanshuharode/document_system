const uploadS3 = require("../services/s3Service");
const { getDocByIdUser_id, getDocByIdUid } = require("../model/documentModel")
const sendNotification = require("../services/snsService")
const addDocument = async (req, res, next) => {
    try {
        await uploadS3(req)
        await sendNotification()
        res.status(201).json({ success: " data send on s3 and database " })
    } catch (err) {
        return next(err)
    }
}

const getDocmentByUId = async (req, res, next) => {
    const user_id = req.params.user_id;
    try {
        let [result] = await getDocByIdUser_id(user_id)
        res.status(201).json({ success: " user documents fetched successfully " })
    } catch (err) {
        return next(err)
    }
}

const getDocmentById = async (req, res, next) => {
    const id = req.params.id;
    try {
        let [result] = await getDocByIdUid(id)
        res.status(201).json({ success: " document fetched successfully ", data: result })
    } catch (err) {
        return next(err)
    }
}

module.exports = { addDocument, getDocmentByUId, getDocmentById };
