const express = require('express');
const app = express();
var server = require('http').Server(app);
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT;

const corsOptions = {
  origin: '*'
}
app.use(cors(corsOptions));

app.use(express.json());
// ***************** C O N T R O L L E R S ***************** //
const crudController = require('./controllers/crud/index')


// ********************* R O U T I N G ********************* //
app.get('/', (req, res) => res.status(200).send({ text: 'API is alive!' }));

app.get('/api/person', (req, res) => crudController.getAll(req, res));
app.get('/api/person/:id', (req, res) => crudController.getOne(req, res));
app.post('/api/person', (req, res) => crudController.savePerson(req, res));
app.put('/api/person/:id', (req, res) => crudController.updatePerson(req, res));
app.delete('/api/person/:id', (req, res) => crudController.deletePerson(req, res));

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});