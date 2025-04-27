
# HumanChain AI Safety Incident Dashboard
https://humanchainsparklehood.netlify.app/
This project is a frontend take-home assignment for HumanChain, an AI safety startup. It's a dashboard that displays AI safety incidents, allows filtering and sorting, and provides functionality to report new incidents.

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite (for fast development and building)
- Lucide React (for icons)

## Features

- Display a list of AI safety incidents with title, severity, and reported date
- Filter incidents by severity (All, Low, Medium, High)
- Sort incidents by reported date (newest or oldest first)
- Expandable incident details with toggle functionality
- Form to report new incidents with validation
- Responsive design that works on all devices

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```
4. Build for production:
   ```
   npm run build
   ```

## Design Decisions

- **Component Structure**: The application is organized into modular components for maintainability and reusability. Each component has a single responsibility.

- **State Management**: React's built-in useState hooks are used for state management, which is sufficient for this application size without introducing additional libraries.

- **Styling**: Tailwind CSS is used for styling to ensure consistent design and rapid development.

- **Responsive Design**: The layout is responsive with appropriate breakpoints for mobile, tablet, and desktop views.

- **Animations**: Subtle animations for expanding/collapsing incident details enhance the user experience.

- **Form Validation**: Client-side validation ensures data integrity before submission.

- **Mock Data**: Realistic mock data is included to simulate the application in use.

## Future Enhancements

- Implement search functionality
- Add pagination for large lists of incidents
- Implement data persistence with a backend service
- Add user authentication
- Implement incident status tracking
=======
# HumanChain-sparklehood

