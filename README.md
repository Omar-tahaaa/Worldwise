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

### 1. Open Visual Studio Code in Your Desired Folder

- Open Visual Studio Code.
- Click **File > Open Folder** and choose the folder where you want to save the project (e.g., Desktop or Documents).

### 2. Clone the Repository Using VS Code Terminal

- In VS Code, open the integrated terminal (**Terminal > New Terminal**).
- Run the following commands in the terminal:

  ```sh
  git clone https://github.com/Omar-tahaaa/Worldwise.git
  cd Worldwise
  ```

### 2. Install dependencies

```sh
npm install
```

### 3. Run JSON Server (Mock Backend)

```sh
json-server --watch data/cities.json --port 8000
```

**Clarification:**  
- You need to have `json-server` installed globally for this step to work.  
- If you don't have it, install it using:

```sh
npm install -g json-server
```

- This command starts a local REST API server at `http://localhost:8000` using the data in `data/cities.json`.

### 4. Start the development server

- You should open a **new terminal window/tab** to run this command, so that JSON Server and the development server run simultaneously.
- When you open a **new terminal window/tab**, you need to navigate to your project folder again:
  ```sh
  cd Worldwise
  ```
- Then run the development server:
  ```sh
  npm run dev
  ```

**Clarification:**  
- This will start the Vite development server.  
- Open your browser and go to the URL shown in the terminal (usually `http://localhost:5173`).

---

## 📝 Notes

- Make sure both the Vite dev server and JSON Server are running at the same time for the app to work correctly.
- If you encounter any issues, check that your Node.js version is compatible and that all dependencies are installed.
