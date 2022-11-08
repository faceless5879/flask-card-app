import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { firebasedb, storage } from "./base";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import CardDetail from "./components/CardDetail";

function App() {
  const [fileUrl, setFileUrl] = useState(null);
  const onFileChange = async (e) => {
    const file = e.target.files[0];
    console.log(storage);
    const storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
    console.log(fileUrl);
  };
  const onSubmit = (e) => {
    e.prevenDefault();
  };

  return (
    <>
      {/* this imports the default css for bootstrap 
      it is required for things like striped bordered hover variant="dark" */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
        crossorigin="anonymous"
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
