const { connection } = require('../db/dbconnector');

function login(email, passwd) {
    const query = `SELECT id, nombre, apellido, email, CONCAT(NOMBRE, " ", APELLIDO) AS nombre_completo FROM USUARIOS WHERE EMAIL = ? AND PASSWD = ?`;
    const params = [email, passwd]

    return new Promise(function(resolve, reject) {
        connection.query(query, params, function(error, results, rows) {
            if (error) {
                reject(error);
            } else {
                resolve(results)
            }
        })
    });
}

exports.login = login;
