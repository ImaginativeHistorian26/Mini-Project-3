const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
  id: Number,
  title: String,
  content: String
}, { _id: false });

const PhilosopherSchema = new mongoose.Schema({
  id: Number,
  title: String,
  text: String
}, { _id: false });

const AcademySchema = new mongoose.Schema({
  academyName: { type: String, required: true },
  established: Number,
  isActive: Boolean,
  news: [NewsSchema],
  philosophers: [PhilosopherSchema],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Academy', AcademySchema);