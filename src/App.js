import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/login";
import SignUp from "./pages/signUp";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route element={<Login/>} path="/login" />
              <Route element={<SignUp/>} path="/signUp" />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
