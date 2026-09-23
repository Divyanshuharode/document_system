const uploadS3 = require("../services/s3Service");
const { getDocByIdUser_id, getDocByIdUid } = require("../model/documentModel")

const addDocument = async (req, res) => {
    try {
        await uploadS3(req)
        res.status(201).json({ success: " data send on s3 and database " })

    } catch (err) {
        console.log(err.message)
        res.status(201).json({ success: " somthing went wrong... ", error: err.message })
    }
}

const getDocmentByUId = async (req, res) => {
    const user_id = req.params.user_id;
    try {

        let [result] = await getDocByIdUser_id(user_id)
        res.status(201).json({ success: " user documents fetched successfully " })

    } catch (err) {
        console.log(err.message)
        res.status(201).json({ success: " somthing went wrong... ", error: err.message })
    }
}

const getDocmentById = async (req, res) => {
    const id = req.params.id;
    try {

        let [result] = await getDocByIdUid(id)
        res.status(201).json({ success: " document fetched successfully ", data: result })

    } catch (err) {
        console.log(err.message)
    }
}

module.exports = { addDocument, getDocmentByUId, getDocmentById };
