# Arc Flight Vision

A modern flight search and visualization application built with React, TypeScript, and Vite. This application provides an interactive interface for searching flights, visualizing flight paths, and managing bookings with a sleek, modern UI powered by Shadcn UI components.

## Features

- Interactive flight search interface
- Flight path visualization
- Booking management system
- Destination information display
- Responsive design for mobile and desktop
- Real-time flight results
- Interactive 3D globe visualization
- FAQ section
- Special offers page

## Technology Stack

- **Frontend Framework**: React with TypeScript
- **Build Tool**: Vite
- **Package Manager**: Bun/npm
- **UI Components**: Shadcn UI (based on Radix UI)
- **State Management**: React Query
- **Routing**: React Router
- **Styling**: Tailwind CSS
- **Toast Notifications**: Sonner

## Prerequisites

Before running this project, make sure you have one of the following installed:

- **Bun** (Recommended)
  ```bash
  curl -fsSL https://bun.sh/install | bash
  ```
  
  OR

- **Node.js** (v16.0.0 or higher)
  Download from [nodejs.org](https://nodejs.org/)

## Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd arc-flight-vision
   ```

2. Install dependencies:

   With Bun (recommended):
   ```bash
   bun install
   ```

   OR with npm:
   ```bash
   npm install
   ```

## Running the Application

1. Start the development server:

   With Bun:
   ```bash
   bun run dev
   ```

   OR with npm:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Available Scripts

- `dev`: Start the development server
- `build`: Build for production
- `build:dev`: Build for development environment
- `preview`: Preview the production build
- `lint`: Run ESLint for code quality

## Project Structure

- `/src`: Source code
  - `/components`: Reusable UI components
  - `/pages`: Application pages/routes
  - `/assets`: Static assets
  - `/hooks`: Custom React hooks
  - `/lib`: Utility functions
  - `/data`: Static data files

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request

## Building for Production

To build the application for production:

```bash
# With Bun
bun run build

# With npm
npm run build
```

The built files will be in the `dist` directory.
