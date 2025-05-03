const express = require('express');
const router = express.Router();
const { addDoctor, listDoctorsWithFilter } = require('../controllers/doctorController');

// Doctor routes
router.post('/add-doctor', addDoctor);
router.get('/list-doctor-with-filter', listDoctorsWithFilter);

module.exports = router; 