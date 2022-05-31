import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Forms } from "./Comjponents/Form";
import { Navbar } from "./Comjponents/Navbar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/form" element={<Forms />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
