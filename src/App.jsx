import { BrowserRouter, Routes, Route } from "react-router-dom";
import QRScanner from "./QRScanner";
import Menu from "./Menu";
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/barcode" element={<QRScanner></QRScanner>} />
      </Routes>
    </BrowserRouter>
  );
}
