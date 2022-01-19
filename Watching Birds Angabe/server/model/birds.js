const birds = require('../birds.json');

async function getBirds() {
  return birds;
}

module.exports = {
  getBirds,
};
