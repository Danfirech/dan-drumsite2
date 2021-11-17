import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: blue;
  position: absolute;
`;

const videos = () => {
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

export default videos;
