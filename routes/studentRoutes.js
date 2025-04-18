// import express and create a router instance
const express = require('express');
const router = express.Router();
// Import the student controller
const studentController = require('../controllers/studentController');

// Base route /students
router.get('/', studentController.getAllStudents);
router.get('/:id', studentController.getStudentById);
router.post('/', studentController.createStudent);
router.put('/:id', studentController.updateStudent);
router.delete('/:id', studentController.deleteStudent);

module.exports = router;
