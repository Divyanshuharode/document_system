const express = require("express");
const { addDocument, getDocmentByUId, getDocmentById } = require("../controllers/documentController");
const upload = require("../middleware/uploadMiddleware")

const documentRoute = express.Router();

documentRoute.post("/api/document", upload.single("document"), addDocument);

documentRoute.get("/api/document/user/:user_id", getDocmentById)

documentRoute.get("/api/document/:id", getDocmentById)

module.exports = documentRoute; 