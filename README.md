# Doctor Listing App

A clone of a doctor listing page using Next.js (frontend) and Express.js with MongoDB (backend). This project demonstrates a simple doctor listing UI with functional filters.

## Features

- Doctor listing UI with filter sidebar
- Functional filters (experience, fees, language, etc.)
- Sorting options for doctors
- Responsive design using Tailwind CSS
- Backend API for doctor data management
- MongoDB integration for data storage

## Project Structure

```
doctor-listing-app/
├── client/                # Next.js frontend
│   ├── app/               # Next.js app directory
│   │   ├── globals.css    # Global styles
│   │   ├── layout.jsx     # Root layout
│   │   └── page.jsx       # Main page component
│   ├── components/        # React components
│   ├── package.json       # Frontend dependencies
│   └── ...                # Other config files
│
├── server/                # Express.js backend
│   ├── config/            # Database configuration
│   ├── controllers/       # API controllers
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── server.js          # Main server file
│   ├── seed.js            # Database seeder
│   └── package.json       # Backend dependencies
│
└── README.md              # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)

### Installation

1. Clone the repository:
```
git clone https://github.com/prateekverma145/apollo247.git
cd doctor-listing-app
```

2. Install frontend dependencies:
```
cd client
npm install
```

3. Install backend dependencies:
```
cd ../server
npm install
```

4. Set up the database:
```
# Start MongoDB locally
# Then seed the database with sample data
node seed.js
```

5. Start the backend server:
```
npm run dev
```

6. Start the frontend development server:
```
cd ../client
npm run dev
```

7. Open your browser and navigate to `http://localhost:3000`

## API Endpoints

- `POST /api/add-doctor` - Add a new doctor to the database
- `GET /api/list-doctor-with-filter` - Get doctors with filters and pagination

## Technologies Used

- **Frontend**:
  - Next.js
  - React
  - Tailwind CSS
  - Axios

- **Backend**:
  - Express.js
  - MongoDB
  - Mongoose

## License

This project is for demonstration purposes only. 