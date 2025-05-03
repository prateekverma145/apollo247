const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    default: 'https://via.placeholder.com/80'
  },
  specialization: {
    type: String,
    required: true,
    trim: true
  },
  experience: {
    type: Number,
    required: true
  },
  qualification: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  clinic: {
    type: String,
    required: true,
    trim: true
  },
  fees: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    min: 0,
    max: 100
  },
  isHour: {
    type: Boolean,
    default: false
  },
  availability: {
    type: Number
  },
  cashback: {
    type: Number
  },
  languages: {
    type: [String],
    default: ['english']
  },
  consultMode: {
    type: [String],
    default: ['online-consult']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Doctor', DoctorSchema); 