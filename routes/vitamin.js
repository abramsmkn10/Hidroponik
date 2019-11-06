const express = require('express');
const router = express.Router();

// CONTROLLERS
const VitaminController = require('../controllers/VitaminController');

// API CRUD VITAMIN
router.get('/', VitaminController.index);
router.get('/:id', VitaminController.detail);
router.post('/', VitaminController.store);
router.put('/:id', VitaminController.update);
router.delete('/:id', VitaminController.destroy);

module.exports = router;