import React from "react";
import Navbar from "./Navbar";
import "./styles/ComponentNavBar.css";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: green;
  position: absolute;
`;

const about = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <div>
        <Container />
      </div>
    </>
  );
};

export default about;
