const Doctor = require('../models/Doctor');

// @desc    Add a new doctor
// @route   POST /api/add-doctor
// @access  Public
exports.addDoctor = async (req, res) => {
  try {
    const doctorData = req.body;
    
    // Create new doctor
    const doctor = await Doctor.create(doctorData);
    
    res.status(201).json({
      success: true,
      data: doctor
    });
  } catch (error) {
    console.error('Error adding doctor:', error);
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// @desc    Get filtered doctors with pagination
// @route   GET /api/list-doctor-with-filter
// @access  Public
exports.listDoctorsWithFilter = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      name,
      location,
      sortBy = 'relevance',
      consultMode,
      experience,
      fees,
      language,
      facility
    } = req.query;
    console.log("req.query",req.query)
    // Build filter object
    const filter = {};
    
    // Search by name (case insensitive)
    if (name) {
      filter.name = { $regex: name, $options: 'i' };
    }
    
    // Search by location (case insensitive)
    if (location) {
      filter.location = { $regex: location, $options: 'i' };
    }
    
    // Filter by consult mode
    if (consultMode) {
      filter.consultMode = { $in: consultMode.split(',') };
    }
    
    // Filter by language
    if (language) {
      filter.languages = { $in: language.split(',') };
    }
    
    // Filter by experience range
    if (experience) {
      const experienceRanges = experience.split(',');
      const expConditions = [];
      
      experienceRanges.forEach(range => {
        const [min, max] = range.split('-').map(Number);
        if (max) {
          // Range like 0-5
          expConditions.push({
            experience: {
              $gte: min,
              $lte: max
            }
          });
        } else {
          // Range like 11+
          expConditions.push({
            experience: { $gte: min }
          });
        }
      });
      
      if (expConditions.length > 0) {
        filter.$or = expConditions;
      }
    }
    
    // Filter by fees range
    if (fees) {
      const feeRanges = fees.split(',');
      const feeConditions = [];
      
      feeRanges.forEach(range => {
        if (range === '1000+') {
          feeConditions.push({ fees: { $gte: 1000 } });
        } else {
          const [min, max] = range.split('-').map(Number);
          feeConditions.push({
            fees: { $gte: min, $lte: max }
          });
        }
      });
      
      if (feeConditions.length > 0) {
        filter.$or = filter.$or ? [...filter.$or, ...feeConditions] : feeConditions;
      }
    }
    
    // Handle facility filter (Apollo Hospital or other clinics)
    if (facility) {
      const facilityList = facility.split(',');
      
      if (facilityList.includes('apollo-hospital')) {
        filter.clinic = { $regex: 'Apollo', $options: 'i' };
      } else if (facilityList.includes('other-clinics')) {
        filter.clinic = { $not: { $regex: 'Apollo', $options: 'i' } };
      }
    }
    
    // Build sort object
    let sortOptions = {};
    switch (sortBy) {
      case 'experience_high':
        sortOptions = { experience: -1 };
        break;
      case 'experience_low':
        sortOptions = { experience: 1 };
        break;
      case 'fees_high':
        sortOptions = { fees: -1 };
        break;
      case 'fees_low':
        sortOptions = { fees: 1 };
        break;
      default:
        sortOptions = { createdAt: -1 }; // Default sort by newest
    }
    
    // Calculate pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    // Execute query with pagination
    const doctors = await Doctor.find(filter)
      .sort(sortOptions)
      .skip(skip)
      .limit(parseInt(limit));
    
    // Get total count for pagination
    const total = await Doctor.countDocuments(filter);
    
    res.status(200).json({
      success: true,
      count: doctors.length,
      total,
      totalPages: Math.ceil(total / parseInt(limit)),
      currentPage: parseInt(page),
      data: doctors
    });
  } catch (error) {
    console.error('Error fetching doctors:', error);
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
}; 