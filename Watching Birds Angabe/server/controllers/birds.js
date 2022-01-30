const model = require('../model/birds');

const getBirds = async (req, res) => res.status(200).json(await model.getBirds());

module.exports = { getBirds };
