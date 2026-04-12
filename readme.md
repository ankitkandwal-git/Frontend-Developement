# Job Application Portal Frontend

This is a React-based frontend project for a Job Application Portal. The application allows users to browse job listings, view detailed job descriptions, apply for jobs, and manage their profiles. It features authentication, protected routes, and a modern, responsive UI.

## Features
- **User Authentication:** Secure login and logout using JWT tokens.
- **Job Listings:** Browse and search for jobs with filters for employment type and salary range.
- **Job Details:** View comprehensive details for each job, including company info, skills required, and similar jobs.
- **Job Application:** Fill out and submit job application forms with resume upload.
- **Profile Management:** View and manage user profile information.
- **Protected Routes:** Only authenticated users can access job listings and details.
- **Responsive Design:** Works well on both desktop and mobile devices.

## Project Structure
- `src/Components/` — Contains all React components, organized by feature (e.g., Home, Login, JobCard, FullJobDetails, ProfileSection, etc.)
- `public/` — Static assets and the main HTML template.
- `App.js` — Main application routes and layout.

## Getting Started

### Prerequisites
- Node.js (v14 or above recommended)
- npm (v6 or above)

### Installation
1. Navigate to the `jobapplication` directory:
   ```bash
   cd jobapplication
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App
Start the development server:
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### Running Tests
To run tests:
```bash
npm test
```

### Building for Production
To build the app for production:
```bash
npm run build
```
The build output will be in the `build/` folder.

## Scripts
- `npm start` — Start the development server
- `npm test` — Run tests
- `npm run build` — Build for production
- `npm run eject` — Eject configuration (not reversible)

## Dependencies
- React
- React Router DOM
- js-cookie
- react-icons
- react-loader-spinner
- @testing-library/react & related testing libraries

## Folder Overview
- `src/Components/` — Main UI components
- `public/` — Static files and HTML template
- `src/App.js` — Routing and main app logic

## License
This project is for educational/demo purposes. Please customize as needed for production use.

---

*This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).*