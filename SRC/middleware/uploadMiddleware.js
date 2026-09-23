const multer = require("multer");

const storage = multer.memoryStorage();


const upload = multer({
    storage: storage,

    limits: {
        fileSize: 5 * 1024 * 1024
    },
});

module.exports = upload;

// fileFilter: (req, file, cb) => {

//     const allowedTypes = [
//         "application/pdf",
//         "image/jpeg",
//         "image/png"
//     ];

//     if (allowedTypes.includes(file.mimetype)) {
//         cb(null, true);
//     } else {
//         cb(new Error("Only PDF, JPG, JPEG and PNG allowed"));
//     }
// }