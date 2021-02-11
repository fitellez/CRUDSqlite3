const sqlite3 = require('sqlite3');

let db = new sqlite3.Database('./persona.db', (err) => {
  if(err) {
      console.log(err.message)
      throw err
  } else {
      console.log('Connected to SQLite')
      db.run(`CREATE TABLE persona (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nombre text, 
          apellidos text, 
          direccion text,
          telefono text
          )`,
      (err) => {
          if (err) {
              // Table already created
              console.log(err);
          }else{
              // Table just created, creating some rows
              var insert = 'INSERT INTO persona (nombre, apellidos, direccion, telefono) VALUES (?,?,?,?)'
              db.run(insert, ["Fidel","Tellez Saucedo","Direccion 1","123456789"])
              db.run(insert, ["Prueba1","Apellido1","Direccion1","123456789"])
          }
      });
  }
})

module.exports = {
  db
};