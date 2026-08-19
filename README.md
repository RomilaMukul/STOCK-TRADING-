# Stock Trading Platform

A React-based stock trading platform interface for exploring products, pricing, education, support, and account signup flows.

## Project Status

The frontend is under active development. The `backend` directory is reserved for the API and server-side services and is currently empty.

## Features

- Landing page with awards, statistics, pricing, education, and account-opening sections
- Client-side navigation with React Router
- Product, pricing, support, about, and signup pages
- Responsive styling and reusable landing-page components
- Production build configuration through Create React App

## Tech Stack

- React 19
- React Router
- Create React App and `react-scripts`
- Bootstrap 5
- Font Awesome

## Project Structure

```text
.
├── backend/                 # Reserved for backend services
├── frontend/
│   ├── public/               # Static files and application HTML
│   ├── src/
│   │   ├── landing_page/     # Page and section components
│   │   ├── index.css         # Global styles
│   │   └── index.js          # Application entry point and routes
│   ├── package.json
│   └── build/                # Generated production output
├── package.json             # Root-level dependencies
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm 9 or later

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/RomilaMukul/STOCK-TRADING-.git
cd STOCK-TRADING-
npm install
cd frontend
npm install
```

### Start the development server

From the `frontend` directory:

```bash
npm start
```

The application opens at [http://localhost:3000](http://localhost:3000).

## Available Routes

| Route | Page |
| --- | --- |
| `/` | Home |
| `/signup` | Signup |
| `/about` | About |
| `/product` | Products |
| `/pricing` | Pricing |
| `/support` | Support |

## Available Scripts

Run these commands from `frontend`:

```bash
npm start       # Start the development server
npm test        # Run the test watcher
npm run build   # Create a production build
npm run eject   # Copy CRA configuration into the project
```

## Production Build

Create an optimized build with:

```bash
cd frontend
npm run build
```

The generated files are placed in `frontend/build` and can be served by a static web server.

## Contributing

1. Create a feature branch.
2. Make and test your changes from the `frontend` directory.
3. Run `npm run build` before opening a pull request.
4. Open a pull request with a clear description of the changes.

## License

No license has been selected for this project yet.
