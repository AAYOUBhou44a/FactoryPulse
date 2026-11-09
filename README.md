
# FactoryPulse

**Industrial Machine Management Dashboard**

FactoryPulse is a web application designed to help production managers monitor and manage industrial machines across different production areas.

The application provides a centralized dashboard to track machine statuses, monitor daily production, and manage equipment efficiently.

## Features

- **Dashboard:** View the total number of machines, operational machines, and machines out of order.
- **Machine Management:** Display and manage all registered machines.
- **Search:** Find machines by name.
- **Filtering:** Filter machines by their current status.
- **Add Machines:** Register new machines with form validation.
- **Update Status:** Change the status of existing machines.
- **Delete Machines:** Remove machines with confirmation.
- **Responsive Design:** Adapted to desktop and mobile devices.

## Technologies

- React.js
- Vite
- JavaScript (ES6+)
- React Router DOM
- HTML5 / CSS3
- JSON (Local data source)

## Machine Statuses

Each machine can have one of three statuses:

- 🟢 Operational (En fonctionnement)
- 🟠 Stopped (À l'arrêt)
- 🔴 Out of order (En panne)

## Project Structure

```text
factory-pulse/
├── public/
│   └── machines.json
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layout/
│   │   ├── dashboard/
│   │   └── machines/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── README.md
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/AAYOUBhou44a/FactoryPulse.git
```

2. Navigate to the project directory:

```bash
cd FactoryPulse
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the local URL provided by Vite in your browser.

## Data Management

FactoryPulse uses a local JSON file (`public/machines.json`) as its initial data source.

- Machine data is loaded using `fetch()` and `useEffect()`.
- React `useState` manages machine data and user interactions.
- All operations update the interface immediately without page reloads.
- No backend API or database is required.

**Note:** Changes are stored in React state only. They are not saved permanently and will be lost after a full page reload.

## Application Routes

| Route | Description |
|---|---|
| `/` | Dashboard |
| `/machines` | Machine management |
| `/machines/new` | Add a new machine |

## Design

FactoryPulse uses a modern industrial-inspired visual identity.

| Color | Hex Code | Usage |
|---|---|---|
| Navy Blue | `#16264A` | Primary color |
| White | `#FFFFFF` | Background and cards |
| Gold | `#E3A33A` | Accents and actions |

## Project Information

- **Project:** FactoryPulse
- **Type:** Individual Frontend Project
- **Duration:** One week
- **Assignment Date:** November 9, 2026
- **Deadline:** November 13, 2026
- **Location:** Safi, Morocco

## Future Improvements

- Kanban board for machine status tracking.
- Drag and drop functionality.
- Persistent data storage using a backend API.
- Production statistics and analytics.

---

**FactoryPulse** – Simplifying industrial machine monitoring and management.
