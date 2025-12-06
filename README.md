# 🌍 WorldWise

A modern travel tracking application that helps you keep track of all the cities you've visited around the world. Mark your adventures on an interactive map and create a personal travel diary!

![WorldWise](https://via.placeholder.com/800x400/4A90E2/FFFFFF?text=WorldWise+Travel+Tracker)

## 🚀 Live Demo

**[View Live Application](https://worldwise-a95e8.web.app)**

## ✨ Features

- 🗺️ **Interactive Map** - Click on any city to add it to your travel list using Leaflet maps
- 📍 **Geolocation** - Automatically detect city names and countries from coordinates
- 📅 **Date Tracking** - Record when you visited each city with an intuitive date picker
- 📝 **Personal Notes** - Add notes and memories for each destination
- 🔥 **Real-time Sync** - All data is stored in Firebase Firestore for instant synchronization
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Modern UI** - Clean and intuitive user interface built with React
- ⚡ **Performance Optimized** - Uses `useMemo` and `useCallback` for optimal performance
- 🧭 **Client-side Routing** - Smooth navigation with React Router

## 🛠️ Technologies Used

- **Frontend Framework:** React 19 (RC)
- **Build Tool:** Vite
- **Routing:** React Router DOM v6
- **Database:** Firebase Firestore
- **Maps:** Leaflet & React Leaflet
- **Date Picker:** React DatePicker
- **Styling:** CSS Modules
- **State Management:** Context API + useReducer
- **Deployment:** Firebase Hosting
- **Version Control:** Git & GitHub

## 📁 Project Structure

```
worldwise/
├── src/
│   ├── Components/        # Reusable UI components
│   ├── Context/          # React Context providers
│   ├── Pages/            # Page components
│   ├── hooks/            # Custom React hooks
│   ├── assets/           # Images and static files
│   ├── App.jsx           # Main App component
│   └── main.jsx          # Application entry point
├── firebase.js           # Firebase configuration
├── firebase.json         # Firebase hosting config
├── .firebaserc          # Firebase project settings
├── vite.config.js       # Vite configuration
└── package.json         # Project dependencies
```

## 🎯 Usage

1. **Start Tracking** - Click on the "Start Tracking Now" button on the homepage
2. **Select a City** - Click anywhere on the map to select a city
3. **Add Details** - Fill in the city name, date of visit, and personal notes
4. **Save** - Click "Add" to save the city to your travel list
5. **View Cities** - Browse your visited cities in the sidebar
6. **Delete Cities** - Click the × button to remove a city from your list

## 👤 Author

**Omar Taha**

- Email: omartaha11201@gmail.com
