import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import ChatBot from "./pages/ChatBot";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/chatbot" element={<ChatBot />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
