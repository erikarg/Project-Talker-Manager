/* eslint-disable no-useless-escape */
function validateEmail(req, res, next) {
  const { email } = req.body;
  const regex = /^[a-zA-Z0-9_.+]+(?<!^[0-9]*)@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  
  if (!email) {
    return res.status(400).json({ message: 'O campo \"email\" é obrigatório' });
  }
  
  const emailFormat = email.match(regex);
  if (!emailFormat) {
    return res.status(400).json({
      message: 'O \"email\" deve ter o formato \"email@email.com\"' });
  }
  next();
}

module.exports = validateEmail;