const { PutObjectCommand } = require("@aws-sdk/client-s3");
const s3 = require("../config/s3Config");
const { uploadDocModel } = require("../model/documentModel");

async function uploadS3(req) {
    const document = req.file;
    const user_id = req.body.user_id;
    const documentKey = `documents/${req.body.name}`;

    const docUpload = new PutObjectCommand({
        Bucket: process.env.AWS_S3_BUCKET,
        Key: documentKey,
        Body: document.buffer,
        ContentType: document.mimetype
    });
    await s3.send(docUpload);

    const objectUrl = `https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/`;
    const documentUrl = `${objectUrl}${documentKey}`;

    const [dbResult] = await uploadDocModel(
        documentKey,
        documentUrl,
        document.size,
        document.mimetype,
        document.originalname,
        user_id
    );
    return {
        id: dbResult.insertId,// autoincrement laga h isliye 
        user_id: user_id,
        original_name: document.originalname,
        s3_key: documentKey,
        s3_url: documentUrl,
        file_size: document.size,
        mime_type: document.mimetype
    };
}

module.exports = uploadS3;