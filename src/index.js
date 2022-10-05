const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const path = require('path');
const tokenGenerator = require('./middlewares/tokenGenerator');
const validateEmail = require('./middlewares/validateEmail');
const validatePassword = require('./middlewares/validatePassword');
const validateName = require('./middlewares/validateName');
const validateAge = require('./middlewares/validateAge');
const validateTalk = require('./middlewares/validateTalk');
const validateRate = require('./middlewares/validateRate');
const validateWatchedAt = require('./middlewares/validateWatchedAt');
const validateToken = require('./middlewares/validateToken');

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

app.post('/login',
  validateEmail,
  validatePassword,
  (_req, res) => {
  const token = tokenGenerator();
  res.status(200).json({ token });
});

app.post('/talker',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateRate,
  validateWatchedAt,
  async (req, res) => {
  const talkersList = JSON.parse(await fs.readFile(pathTalker, 'utf-8'));
  const idGenerator = talkersList.length + 1;
  const body = { id: idGenerator, ...req.body };
  talkersList.push(body);
  await fs.writeFile(pathTalker, JSON.stringify(talkersList));
  res.status(201).json(body);
});
