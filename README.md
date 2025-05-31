## 🔧 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/worldwise.git
cd worldwise


### 2. Install dependencies

npm install

### 3. Run JSON Server (for backend)

npx json-server --watch data/db.json --port 8000

Make sure data/db.json exists and contains:
{
  "cities": []
}
### 4. Start the frontend

npm run dev

# 🌍 WorldWise

**WorldWise** is a React-based travel tracker app that allows users to log cities they’ve visited by interacting with a world map. Built with performance, scalability, and modern frontend techniques in mind.

---

## 🚀 Features

- ⚛️ Built with **React + Vite** for blazing-fast development and build times.
- 🧠 **Context API + useReducer** for robust and scalable state management.
- 🗺️ **Leaflet** for interactive maps and seamless zoom/pan experience.
- 📍 Uses **Geolocation API** to detect and set the user’s current position.
- ➕ Add new cities by clicking on the map to open a form and submit data.
- 🔄 Full **CRUD operations** using **JSON Server** as a fake REST API.
- 🔐 Simulated user authentication.
- ♻️ Built with **custom React hooks** for clean code and reusability.
- ⚡ Optimized with `useMemo` and `useCallback` for better performance.
- ✂️ **Code splitting** to reduce initial bundle size and improve load speed.
- 🌐 **React Router** for dynamic and client-side routing.
- 🎨 Styled with **CSS Modules** for component-scoped CSS.

---

## 📦 Tech Stack

- React + Vite
- Context API & useReducer
- React Router
- Leaflet.js
- CSS Modules
- Geolocation API
- JSON Server
- Custom Hooks
- useMemo / useCallback
- Code Splitting (lazy + Suspense)

---



