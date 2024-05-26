import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUp from "./pages/signUp";
import PageTemplateTwoOrLogin from "./components/pageTemplateTwoOrLogin";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route element={<PageTemplateTwoOrLogin/>} path="/loginNow" />
              <Route element={<SignUp/>} path="/signUp" />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
