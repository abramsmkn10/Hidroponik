const express = require('express');
const router = express.Router();

// CONTROLLERS
const SuhuController = require('../controllers/SuhuController');

// API CRUD SUHU
router.get('/', SuhuController.index);
router.get('/:id', SuhuController.detail);
router.post('/', SuhuController.store);
router.put('/:id', SuhuController.update);
router.delete('/:id', SuhuController.destroy);

module.exports = router;