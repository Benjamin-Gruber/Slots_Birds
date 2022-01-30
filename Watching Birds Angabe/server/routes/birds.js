const express = require('express');
const { getBirds, Observed } = require('../controllers/birds');

const router = express.Router();

router.get('/birds', getBirds);
router.patch('/birds/:id', Observed);

module.exports = router;
