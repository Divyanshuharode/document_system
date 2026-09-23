const pool = require("../config/dbConfig");

const addUserModel = async (id, name, email) => {

    const sql = "INSERT INTO users (id, name, email) VALUES (?, ?, ?)";

    return await pool.execute(sql, [id, name, email]);
};


const getUserModel = async () => {

    const sql = "SELECT * FROM users";

    return await pool.execute(sql);
};


const getUserModelById = async (id) => {

    const sql = "SELECT * FROM users WHERE id = ?";

    return await pool.execute(sql, [id]);
};


module.exports = { addUserModel, getUserModel, getUserModelById }