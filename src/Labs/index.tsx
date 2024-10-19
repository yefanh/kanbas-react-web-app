// src/Labs/index.tsx
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import TOC from "./TOC";
import { Route, Routes, Navigate } from "react-router";

export default function Labs() {
  return (
    <div className="p-3">
      <h1>Labs</h1>
      <p>Yefan He</p> 
      <p>CS 5610, 03</p>
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3/*" element={<Lab3 />} />
      </Routes>
    </div>
  );
}
