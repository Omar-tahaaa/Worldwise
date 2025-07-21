# 🌍 WorldWise

**WorldWise** is a React-based travel tracker app that allows users to log cities they’ve visited by interacting with a world map. Built with performance, scalability, and modern frontend techniques in mind.

---

## 🚀 Features

- ⚛️ Built with **React + Vite** for fast development and builds
- 🧠 **Context API + useReducer** for global state management
- 🗺️ **Leaflet** for interactive map visualization
- 📍 **Geolocation API** to detect and center on user's current location
- 📝 Click on map to open a form and **add visited cities**
- 🔄 **CRUD operations** using **JSON Server** as a mock backend
- 🔐 Simulated fake authentication
- ♻️ **Custom hooks** for clean and reusable logic
- ⚡ **Performance optimization** with `useMemo` and `useCallback`
- ✂️ **Code splitting** to optimize bundle size
- 🧭 **React Router** for client-side routing
- 🎨 Styled with **CSS Modules**

---

## 📦 Tech Stack

- React + Vite
- Context API & useReducer
- React Router
- Leaflet.js
- Geolocation API
- JSON Server
- CSS Modules
- useMemo / useCallback
- Code Splitting
- Custom Hooks

---

## 🔧 Getting Started

```bash
1. Clone the repository

git clone https://github.com/Omar-tahaaa/Worldwise.git
cd worldwise

2. Install dependencies
npm install

3. Run JSON Server (Mock Backend)
npx json-server --watch data/db.json --port 8000

Ensure you have data/db.json with the following structure:
{
  "cities": []
}

4. Start the development server
npm run dev
