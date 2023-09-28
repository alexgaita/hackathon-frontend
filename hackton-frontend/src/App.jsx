import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/LoginPage";
import Homepage from "./pages/HomePage";
import { useEffect } from "react";


function App() {

  useEffect(() => {

  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        {localStorage.getItem('token') && <Route path="/home" element={<Homepage />}></Route>}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
