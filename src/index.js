import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Navbar from "./component/Navbar/NavBar";
import AboutPage from "./Pages/About/AboutPage";
import GalleryPage from "./Pages/Gallery/GalleryPage";
import Blog from './Pages/Blog/Blog'
import Penquine from './Pages/penquine/penquine'
import Footer from "./component/Footer/Footer";
import SubFooter from "./component/Footer/SubFooter";
import LadyBug from "./Pages/LadyBug/LadyBug";
import Dinosaur from "./Pages/Dinosaur/Dinosaur";
import Contact from "./Pages/Contact/Contact";
import Calendar from "./calendar/Calendar";
import LevelPage from './Pages/LevelPage/index'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <BrowserRouter>
    <Navbar sticky="top" />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="gallery" element={<GalleryPage />} />
      <Route path="blog" element={<Blog />} />
      <Route path="penquine" element={<Penquine />} />
      <Route path='ladybug' element={<LadyBug />} />
      <Route path='dinosaur' element={<Dinosaur />} />
      <Route path = "contact" element={<Contact />} />
      <Route path = "calendar" element={<Calendar />} />
      <Route path = "level" element={<LevelPage />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here</p>
          </main>
        }
      />
    </Routes>
    <Footer />
    <SubFooter />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
