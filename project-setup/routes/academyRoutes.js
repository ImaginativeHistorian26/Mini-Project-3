const express = require('express');
const router = express.Router();
const {
  getAcademies,
  getAcademyById,
  createAcademy,
  updateAcademy,
  deleteAcademy
} = require('../controllers/academyController');

router.get('/', getAcademies);
router.get('/:id', getAcademyById);
router.post('/create', createAcademy);
router.put('/:id', updateAcademy);
router.delete('/:id', deleteAcademy);

module.exports = router;