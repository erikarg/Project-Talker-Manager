const crypto = require('crypto');

function tokenGenerator() {
  return crypto.randomBytes(8).toString('hex');
}
console.log(tokenGenerator());
module.exports = tokenGenerator;