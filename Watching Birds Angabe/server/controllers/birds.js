const model = require('../model/birds');

const getBirds = async (req, res) => res.status(200).json(await model.getBirds());

const Observed = (req, res) => {
  res.status(200).json(model.Observed(req.params.id, req.body));
};

module.exports = { getBirds, Observed };
