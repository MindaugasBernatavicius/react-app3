import About from "Components/About/About";
import Blogposts from "Components/Blogposts/Blogposts";
import Greeter from "Components/Greeter/Greeter";
import Header from "Components/Header/Header";
import Home from "Components/Home/Home";
import Incrementor from "Components/Incrementor/Incrementor";
import Movies from "Components/Movies/Movies";
import SequentialStateUpdates from "Components/SequentialStateUpdates/SequentialStateUpdates";
import Top10Movies from "Components/Top10Movies/Top10Movies";
import WorstMovies from "Components/WorstMovies/WorstMovies";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/greeting" element={<Greeter />} />
        <Route path="/increment" element={<Incrementor />} />
        <Route path="/movies" element={<Movies />}>
          <Route index element={<WorstMovies />} />
          <Route path="top-10-movies" element={<Top10Movies />} />
          <Route path="worst-movies" element={<WorstMovies />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/ssu" element={<SequentialStateUpdates />} />
        <Route path="/bp" element={<Blogposts />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
