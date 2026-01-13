# Currency Exchange Rates App

A modern, fully Redux-based React application for viewing and comparing currency exchange rates over the last 7 days. Built with **TypeScript**, **Redux Toolkit**, **Material-UI (MUI)**, and **Dayjs** for date handling.  

---

## Features

- View exchange rates for a **base currency** against **multiple selected currencies**.  
- Default setup: GBP compared against USD, EUR, JPY, CHF, CAD, AUD, ZAR.  
- Select any date in the **past 90 days**.  
- Add or remove currencies (minimum 3, maximum 7).  
- Fully **Redux-centric**: state management, fetching, and updates handled with Redux Toolkit and Thunks.  
- Clean, responsive, and modern **UI/UX** with Material-UI.  
- Fully **TypeScript-safe** and serializable state.  

---

## Screenshots

*(Optional: Add screenshots of your app here to showcase the UI.)*

---

## Tech Stack

- **Frontend:** React, TypeScript  
- **State Management:** Redux Toolkit + Redux Thunk  
- **UI Components:** Material-UI (MUI)  
- **Date Handling:** Dayjs  
- **Data Source:** [Fawaz Ahmed Currency API](https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api/)  
- **Linting & Formatting:** ESLint + Prettier  

---

## Getting Started

### Prerequisites

- Node.js >= 18  
- npm or yarn  

---

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/currency-exchange-app.git
cd currency-exchange-app
```

2. **Install dependencies:**

```bash
npm install
# or
yarn install
```

3. **Run the development server:**

```bash
npm start
# or
yarn start
```

The app should open automatically at http://localhost:3000.

Build for Production

```bash
npm run build
# or
yarn build
```

The optimized production build will be in the build folder.

Redux State Overview

```javascript
interface CurrencyState {
  baseCurrency: string;        // Selected base currency (e.g., "gbp")
  selectedCurrencies: string[]; // Array of selected currencies (3-7)
  selectedDate: string;        // ISO string for selected date
  allCurrencies: string[];     // All available currencies from API
}
```
API

All currencies list:
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json

Rates by date:
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{yyyy-MM-dd}/v1/currencies/{currency-code}.json


Contributing

- Fork the repository.

- Create your feature branch: ``git checkout -b feature/my-feature``

- Commit your changes: ``git commit -m "Add my feature"``

- Push to branch: ``git push origin feature/my-feature``

- Open a pull request.


Code Quality

- ESLint + Prettier configured for clean, consistent formatting.

- Redux Toolkit used for structured and maintainable state management.

- TypeScript ensures type safety across components and state.


License
- This project is MIT licensed.
---
