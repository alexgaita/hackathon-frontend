import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/LoginPage";
import Homepage from "./pages/HomePage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Homepage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
