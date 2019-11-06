const express = require('express');
const router = express.Router();

// CONTROLLERS
const TangkiController = require('../controllers/TangkiController');

// API CRUD TANGKI
router.get('/', TangkiController.index);
router.get('/:id', TangkiController.detail);
router.post('/', TangkiController.store);
router.put('/:id', TangkiController.update);
router.delete('/:id', TangkiController.destroy);

module.exports = router;