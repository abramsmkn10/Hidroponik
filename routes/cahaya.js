const express = require('express');
const router = express.Router();

// CONTROLLERS
const CahayaController = require('../controllers/CahayaController');

// API CRUD CAHAYA
router.get('/', CahayaController.index);
router.get('/:id', CahayaController.detail);
router.post('/', CahayaController.store);
router.put('/:id', CahayaController.update);
router.delete('/:id', CahayaController.destroy);

module.exports = router;