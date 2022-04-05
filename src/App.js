// import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import AuthProvider from "./contexts/Authprovider/AuthProvider";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import About from "./Pages/More/About/About";
import Contact from "./Pages/More/Contact/Contact";
import More from "./Pages/More/More/More";
import Take from "./Pages/More/Take/Take";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />

            <Route path="/more" element={<More />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book/:bookId" element={<PrivateRoute><Take></Take></PrivateRoute>} />
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/login" element={<Login />} />

          </Routes>
        </BrowserRouter>
      </AuthProvider>


    </div>
  );
}

export default App;
