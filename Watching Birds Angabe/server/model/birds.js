const birds = require('../birds.json');

function getBirds() {
  return birds;
}

function Observed(id, body) {
  const bird = birds.find((el) => el.id === Number(id));
  bird.count = body.count;
  bird.observer.push(body.observer);
}

module.exports = {
  getBirds,
  Observed,
};
