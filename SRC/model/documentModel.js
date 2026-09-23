const pool = require("../config/dbConfig");

const uploadDocModel = async (s3_key, s3_url, file_size, mime_type, original_name, user_id) => {

    const sql = 'insert into documents set  user_id = ? , original_name = ? , s3_key = ? , s3_url= ? , file_size = ? , mime_type = ?  ';

    return await pool.execute(sql, [user_id, original_name, s3_key, s3_url, file_size, mime_type])
}

const getDocByIdUser_id = async (uid) => {
    const sql = 'select * from documents where user_id = ?';

    return await pool.execute(sql, [uid])
}

const getDocByIdUid = async (id) => {
    const sql = 'select * from documents where id = ?';

    return await pool.execute(sql, [id])
}

module.exports = { uploadDocModel, getDocByIdUser_id, getDocByIdUid };
