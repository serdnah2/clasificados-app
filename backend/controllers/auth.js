const { login } = require('../services/userService');

function auth(req, res, next) {
    login(req.body.email, req.body.passwd).then(function(results) {
        if (results.length === 0) {
            res.status(401).send({ error: "Usuario o contraseña equivocados" });
        } else {
            res.status(200).send(results[0]);
        }
    }).catch(function(error) {
        res.status(500).send({ error: "Ha ocurrido un error inesperado" });
    })
}

exports.auth = auth;
