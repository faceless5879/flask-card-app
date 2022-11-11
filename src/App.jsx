import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import CardDetail from "./pages/CardDetail";
import { loadCard } from "./actions/card";

function App() {
  return <Index />;
}

const Index = () => {
  const [cardArr, setCardArr] = useState([]);
  useEffect(() => {
    loadCard(setCardArr);
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
        crossOrigin="anonymous"
      />
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Home cardArr={cardArr} setCardArr={setCardArr} />}
        />
        <Route
          path="/card-detail"
          element={<CardDetail cardArr={cardArr} setCardArr={setCardArr} />}
        />
      </Routes>
    </>
  );
};

export default App;
