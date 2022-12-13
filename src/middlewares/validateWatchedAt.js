function validateWatchedAt(req, res, next) {
  const { watchedAt } = req.body.talk;
  const regexDate = /^([1-9]|0[1-9]|[12][0-9]|3[0-1])\/([1-9]|0[1-9]|1[0-2])\/\d{4}$/;

  if (!watchedAt) {
    return res
      .status(400)
      .json({ message: 'O campo "watchedAt" é obrigatório' });
  }
  const dateFormat = watchedAt.match(regexDate);
  if (!dateFormat) {
    return res.status(400).json({
      message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
    });
  }
  next();
}

module.exports = validateWatchedAt;
