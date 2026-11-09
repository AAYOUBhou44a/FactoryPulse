
# FactoryPulse

Industrial Machine Management Dashboard built with React.js and Vite.

## Features

- Dashboard displaying machine statistics.
- View all machines.
- Add new machines.
- Update machine status.
- Delete machines with confirmation.
- Search machines by name.
- Filter machines by status.
- Track daily production.
- Responsive user interface.

## Technologies

- React.js
- Vite
- JavaScript
- React Router DOM
- HTML5
- CSS3
- JSON

## Design Colors

- Navy Blue: `#16264A`
- White: `#FFFFFF`
- Gold: `#E3A33A`

## Application Routes

| Route | Description |
|---|---|
| `/` | Dashboard |
| `/machines` | Machine management |
| `/machines/new` | Add a new machine |

## Data Management

Machine data is initially loaded from a local JSON file (`public/machines.json`) using `fetch()` and `useEffect()`.

The application uses React `useState` to manage machine data and user interactions.

All changes are stored in memory and are lost after a full page reload. The original JSON file remains unchanged.

## Installation

Clone the repository:

```bash
git clone https://github.com/AAYOUBhou44a/FactoryPulse.git
```

Navigate to the project directory:

```bash
cd FactoryPulse
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

