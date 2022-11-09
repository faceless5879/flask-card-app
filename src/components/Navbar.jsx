import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

export default function NavigationBar() {
  const navigate = useNavigate();
  return (
    <Navbar bg="success" variant="dark" className="mb-2">
      <Container>
        <Navbar.Brand
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/");
          }}
        >
          <h4>Flask cards</h4>
        </Navbar.Brand>
        <button style={{ width: 45, height: 45, borderRadius: 30 }}>
          User
        </button>
      </Container>
    </Navbar>
  );
}
