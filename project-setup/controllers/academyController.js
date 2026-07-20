const Academy = require('../models/Academy');

const getAcademies = (req, res) => {
  Academy.find({})
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({ error: err.message }));
};

const getAcademyById = (req, res) => {
  Academy.findById(req.params.id)
    .then(data => {
      if (!data) return res.status(404).json({ error: 'Not found' });
      res.status(200).json(data);
    })
    .catch(err => res.status(500).json({ error: err.message }));
};

const createAcademy = (req, res) => {
  new Academy(req.body).save()
    .then(data => res.status(201).json(data))
    .catch(err => res.status(400).json({ error: err.message }));
};

const updateAcademy = (req, res) => {
  Academy.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).json({ error: err.message }));
};

const deleteAcademy = (req, res) => {
  Academy.findByIdAndDelete(req.params.id)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({ error: err.message }));
};

module.exports = {
  getAcademies,
  getAcademyById,
  createAcademy,
  updateAcademy,
  deleteAcademy
};