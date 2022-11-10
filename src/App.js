import "./App.css";
import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import CardDetail from "./components/CardDetail";

function App() {
  return (
    <>
      {/* this imports the default css for bootstrap 
      it is required for things like striped bordered hover variant="dark" */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
        crossOrigin="anonymous"
      />
      <Container fluid>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/card-detail" element={<CardDetail />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
