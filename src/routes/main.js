const express = require('express');
const router = express.Router();
const controller = require('../controllers/main');

router.get('/', controller.index);

router.post('/save',controller.create);

router.post('/update/:id',controller.update);

router.delete('/delete/:id',controller.delete)

module.exports = router;