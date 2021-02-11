const { db } = require("../../BD/bd");

/**
 * @description Get all data from persona table
 * @param {*} req
 * @param {*} res
 */
async function getAll(req, res) {
  var sql = "SELECT * FROM persona";
  db.all(sql, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.status(200).json(rows);
  });
}

/**
 * @description Get one data from persona table
 * @param {*} req
 * @param {*} res
 */
async function getOne(req, res) {
  const { id } = req.params;
  db.get(
    "SELECT * FROM persona WHERE id = ?",
    [id],
    function (err, row) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(200).json(row);
    }
  );
}

/**
 * @description Inserta un elemento en la BD
 * @param {*} req 
 * @param {*} res 
 * @body Ejemplo del body que recibe la peticion en postman
 * {
    "nombre": "Insert",
    "apellidos" : "InsertApellido",
    "direccion" : "InsertDireccion",
    "telefono" : "InsertTelefono"
    }
 */
async function savePerson(req, res) {
  const { nombre, apellidos, direccion, telefono } = req.body;
  const SQL =
    "INSERT INTO persona (nombre, apellidos, direccion, telefono) VALUES (?,?,?,?)";
  const params = [nombre, apellidos, direccion, telefono];
  db.run(SQL, params, function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    req.body.id = this.lastID;
    res.status(200).json("Registro Agregado");
  });
}

/**
 * @description Actualiza un registro
 * @param {*} req 
 * @param {*} res 
 * @body Ejemplo del body que manda el postman
 * {
    "nombre": "InsertUpdate",
    "apellidos" : "InsertApellidoUpdate",
    "direccion" : "InsertDireccionUpdate",
    "telefono" : "InsertTelefonoUpdate"
  }
 */
async function updatePerson(req, res) {
  const { id } = req.params;
  const { nombre, apellidos, direccion, telefono } = req.body;
  db.run(
    "UPDATE persona set nombre = ?, apellidos = ?, direccion= ?, telefono=? WHERE id = ?",
    [nombre, apellidos, direccion, telefono, id],
    function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(200).json("Registro Actualizado");
    }
  );
}

/**
 * @description Elimina un registro
 * @param {*} req 
 * @param {*} res 
 */
async function deletePerson(req, res) {
  const { id } = req.params;
  db.run(
    "DELETE FROM persona WHERE id = ?",
    [id],
    function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(200).json("Registro Eliminado");
    }
  );
}

module.exports = {
  getAll,
  getOne,
  savePerson,
  updatePerson,
  deletePerson
};
