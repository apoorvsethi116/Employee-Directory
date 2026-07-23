# Employee Directory Self

This is a small employee directory app with a React frontend and a Node.js + Express backend. It lets you view employees, search them, add new entries, and edit existing ones.

## What the app does

- Shows employees in a clean card layout
- Lets you search by name or department
- Opens a form to add a new employee
- Opens the same form to edit an existing employee
- Saves data in MongoDB through a simple REST API

## Project structure

```text
Employee Directory Self/
├── backend/
│   └── src/
│       ├── server.js
│       ├── config/db.js
│       ├── controllers/employeeController.js
│       ├── routes/employeeRoutes.js
│       └── Models/Employee.js
├── frontend/
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── App.css
│       ├── index.css
│       ├── pages/EmployeeDirectoryPage.jsx
│       ├── components/
│       │   ├── Header.jsx
│       │   ├── SearchBar.jsx
│       │   ├── EmployeeCard.jsx
│       │   └── EmployeeFormModal.jsx
│       └── services/employeeService.js
```

## Backend files

- `backend/src/server.js` starts the Express server, connects the middleware, and mounts the employee routes.
- `backend/src/config/db.js` handles the MongoDB connection.
- `backend/src/controllers/employeeController.js` contains the logic for getting, creating, and updating employees.
- `backend/src/routes/employeeRoutes.js` defines the API routes for `/api/employees`.
- `backend/src/Models/Employee.js` defines the Mongoose schema and model for employee records.

## Frontend files

- `frontend/src/main.jsx` boots the React app into the page.
- `frontend/src/App.jsx` is the top-level wrapper for the app.
- `frontend/src/pages/EmployeeDirectoryPage.jsx` is the main screen. It loads employees, filters them, and connects the header, cards, and modal.
- `frontend/src/components/Header.jsx` shows the title, employee count, search box, and add button.
- `frontend/src/components/SearchBar.jsx` is the search input used to filter employees.
- `frontend/src/components/EmployeeCard.jsx` displays one employee in a card with basic details and an edit button.
- `frontend/src/components/EmployeeFormModal.jsx` is the add/edit form shown in a modal.
- `frontend/src/services/employeeService.js` handles the API calls to the backend.
- `frontend/src/index.css` and `frontend/src/App.css` hold the app styling.

## Other important files

- `frontend/package.json` lists the React frontend scripts and dependencies.
- `backend/package.json` lists the backend scripts and dependencies.
- `frontend/vite.config.js` configures Vite for the React app.
- `frontend/tailwind.config.js` and `frontend/postcss.config.js` support Tailwind styling.
- `frontend/eslint.config.js` sets up linting rules.
- `frontend/index.html` is the Vite entry HTML file.
- `backend/.env.example` shows the environment values needed for the server.

## Stack and tools

- React 19 for the UI
- Vite for frontend development and builds
- Express for the backend API
- MongoDB with Mongoose for data storage and schema handling
- Axios for frontend API requests
- Material UI for the modal, inputs, and search field
- Tailwind CSS for utility-based styling
- ESLint for code linting
- CORS and dotenv for backend setup

## Local setup

1. Install dependencies in both folders.
2. Create a backend `.env` file and add your MongoDB connection string as `MONGO_URI`.
3. Start the backend server.
4. Start the frontend dev server.

Typical commands:

```bash
cd backend
npm install
npm run dev
```

```bash
cd frontend
npm install
npm run dev
```

The frontend talks to the backend at `http://localhost:5000/api/employees`.

## Notes

- The project keeps the UI simple and easy to scan.
- The main logic is split into small files so each part has one clear job.
- Employee data is validated by the backend model before being saved.