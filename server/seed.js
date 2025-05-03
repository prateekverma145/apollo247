const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Doctor = require('./models/Doctor');

// Connect to DB
connectDB();

// Sample data
const doctors = [
  {
    name: 'Suraja Nutulapati',
    image: 'https://via.placeholder.com/80',
    specialization: 'General Physician/ Internal Medicine Specialist',
    experience: 10,
    qualification: 'MBBS, MD (INTERNAL MEDICINE)',
    clinic: 'Apollo 24/7 Virtual Clinic',
    location: 'Telangana Hyderabad',
    fees: 499,
    isHour: true,
    languages: ['english', 'hindi', 'telugu'],
    consultMode: ['online-consult']
  },
  {
    name: 'Jawwad Mohammed Kaleem',
    image: 'https://via.placeholder.com/80',
    specialization: 'General Practitioner',
    experience: 4,
    qualification: 'MBBS',
    clinic: 'Apollo 24/7 Virtual Clinic',
    location: 'Telangana, Hyderabad',
    fees: 379,
    availability: 6,
    cashback: 57,
    languages: ['english', 'hindi'],
    consultMode: ['online-consult']
  },
  {
    name: 'Kanika Bansal',
    image: 'https://via.placeholder.com/80',
    specialization: 'General Physician/ Internal Medicine Specialist',
    experience: 6,
    qualification: 'MBBS, DNB (GENERAL MEDICINE)',
    clinic: 'Apollo 24/7 Virtual Clinic',
    location: 'Delhi, New Delhi',
    fees: 489,
    rating: 82,
    availability: 1,
    cashback: 73,
    languages: ['english', 'hindi'],
    consultMode: ['online-consult', 'hospital-visit']
  },
  {
    name: 'Rahul Sharma',
    image: 'https://via.placeholder.com/80',
    specialization: 'General Physician',
    experience: 15,
    qualification: 'MBBS, MD',
    clinic: 'Health First Clinic',
    location: 'Mumbai, Maharashtra',
    fees: 799,
    rating: 90,
    languages: ['english', 'hindi', 'marathi'],
    consultMode: ['hospital-visit']
  },
  {
    name: 'Priya Patel',
    image: 'https://via.placeholder.com/80',
    specialization: 'Internal Medicine Specialist',
    experience: 8,
    qualification: 'MBBS, MD (INTERNAL MEDICINE)',
    clinic: 'Apollo 24/7 Virtual Clinic',
    location: 'Bengaluru, Karnataka',
    fees: 550,
    availability: 30,
    cashback: 50,
    languages: ['english', 'kannada', 'hindi'],
    consultMode: ['online-consult']
  },
  {
    name: 'Sanjay Gupta',
    image: 'https://via.placeholder.com/80',
    specialization: 'General Physician',
    experience: 12,
    qualification: 'MBBS, DNB',
    clinic: 'City Care Hospital',
    location: 'Chennai, Tamil Nadu',
    fees: 650,
    rating: 85,
    languages: ['english', 'tamil'],
    consultMode: ['hospital-visit', 'online-consult']
  }
];

// Import data to DB
const importData = async () => {
  try {
    await Doctor.deleteMany();
    await Doctor.insertMany(doctors);
    console.log('Data imported successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error importing data: ${error}`);
    process.exit(1);
  }
};

// Execute the function
importData();
