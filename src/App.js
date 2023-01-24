import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login/Login";
import Register from "./Pages/SignUp/Register";
import Home from "./Pages/Home/Home";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
{
  /* <form>
  <input type="text" placeholder="name" required minLength={5}></input>
  <input type="number" placeholder="number" required ></input>
  <button>sign in</button>
</form> */
}
