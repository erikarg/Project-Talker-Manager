const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const path = require('path');
const tokenGenerator = require('./utils/tokenGenerator');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

const pathTalker = path.resolve(
  __dirname,
  './talker.json',
);

app.get('/talker', async (req, res) => {
  const talker = JSON.parse(await fs.readFile(pathTalker, 'utf8'));
  return res.status(200).json(talker);
});

app.get('/talker/:id', async (req, res) => {
  const talkers = JSON.parse(await fs.readFile(pathTalker, 'utf8'));
  const index = talkers.find(({ id }) => id === Number(req.params.id));
  if (!index) {
    return res.status(404).send({ message: 'Pessoa palestrante não encontrada' });
  }
  return res.status(200).json(index);
});

app.post('/login', (req, res) => {
  const token = tokenGenerator();
  res.status(200).json({ token });
});
