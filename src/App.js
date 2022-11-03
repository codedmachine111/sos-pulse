import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Home } from "./sections/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { useState, createContext, useEffect } from "react";

export const AppContext = createContext();

function App() {
  const [location, setLocation] = useState({ lat: 0, lon: 0 });

  const options = {
    timeout: 60000,
  };
  const error = (err) => {
    alert(`ERROR(${err.code}): ${err.message}`);
  };

  // GET USER LOCATION
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      error,
      options
    );
  }, []);

  return (
    <AppContext.Provider value={{ location }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </AppContext.Provider>
  );
}

export default App;
