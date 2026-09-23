const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const s3 = require("../config/s3Config");
const { uploadDocModel } = require("../model/documentModel")


async function uploadS3(req) {
    const document = req.file;
    const user_id = req.body.user_id;

    const documentKey = `documents/${req.body.name}`;

    const docUpload = new PutObjectCommand({
        Bucket: process.env.AWS_S3_BUCKET, //kaha bhejna hai 
        Key: documentKey, // kese stor hogi  
        Body: document.buffer, // kya bhejna hai 
        ContentType: document.mimetype // jo file aa rhi h uska kya type hai
    })

    await s3.send(docUpload);

    let ObjectUrl = `https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/`;
    let documentUrl = `${ObjectUrl}${documentKey}`

    await uploadDocModel(
        documentKey,
        documentUrl,
        document.size,
        document.mimetype,
        document.originalname,
        user_id
    );

}

module.exports = uploadS3;