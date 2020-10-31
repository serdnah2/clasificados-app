const { connection } = require('../db/dbconnector');

function searchLatestPublications(items) {
    const query = `SELECT ID, NOMBRE, DESCRIPCION, FOTO, FACEBOOK, INSTAGRAM, TWITTER, DIRECCION, CELULAR, CATEGORIA, TIPO_CLASIFICADO, MUNICIPIO, USUARIO, FECHA_CREACION FROM clasificados ORDER BY FECHA_CREACION DESC LIMIT ?`;

    return new Promise(function(resolve, reject) {
        connection.query(query, items, function(err, resultado, campos) {
          if (err) {
              reject(err);
          } else {
            resolve(resultado);
          }
        });
    });
}

function searchByCityAndCategory(cityId, categoryId) {
  const query = `SELECT ID, NOMBRE, DESCRIPCION, FOTO, FACEBOOK, INSTAGRAM, TWITTER, DIRECCION, CELULAR, CATEGORIA, TIPO_CLASIFICADO, MUNICIPIO, USUARIO, FECHA_CREACION FROM clasificados WHERE MUNICIPIO = ? AND CATEGORIA = ? ORDER BY FECHA_CREACION DESC`;
  const params = [cityId, categoryId];

  return new Promise(function(resolve, reject) {
      connection.query(query, params, function(err, resultado, campos) {
        if (err) {
          reject(err);
        } else {
          resolve(resultado);
        }
      });
  });
}

function searchMyPublications(userId) {
  const query = `SELECT ID, NOMBRE, DESCRIPCION, FOTO, FACEBOOK, INSTAGRAM, TWITTER, DIRECCION, CELULAR, CATEGORIA, TIPO_CLASIFICADO, MUNICIPIO, USUARIO, FECHA_CREACION FROM clasificados WHERE USUARIO = ? ORDER BY FECHA_CREACION DESC`;

  return new Promise(function(resolve, reject) {
      connection.query(query, userId, function(err, resultado, campos) {
        if (err) {
          reject(err);
        } else {
          resolve(resultado);
        }
      });
  });
}

function searchById(publicationId) {
  const consulta = `SELECT ID, NOMBRE, DESCRIPCION, FOTO, FACEBOOK, INSTAGRAM, TWITTER, DIRECCION, CELULAR, CATEGORIA, TIPO_CLASIFICADO, MUNICIPIO, USUARIO, FECHA_CREACION FROM clasificados WHERE ID = ?`;

  return new Promise(function(resolve, reject) {
      connection.query(consulta, publicationId, function(err, resultado, campos) {
        if (err) reject(err);
        resolve(resultado);
      });
  });
}

exports.searchLatestPublications = searchLatestPublications;
exports.searchByCityAndCategory = searchByCityAndCategory;
exports.searchMyPublications = searchMyPublications;
exports.searchById = searchById;
