import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login/Login";
import Register from "./Pages/SignUp/Register";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
