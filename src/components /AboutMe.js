import React from "react";
import Navbar from "./Navbar";
import "./styles/ComponentNavBar.css";
import styled from "styled-components";
import Video from "../video/video.mp4";
import "./styles/AboutMe.css";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const Left = styled.div`
  height: 100vh;
  width: 50%;
  background-color: #d3d3d3;
  display: flex;
  padding-top: 300px;
`;
const Right = styled.div`
  width: 50%;
  background-color: #d3d3d3;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const about = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <Container>
        <Left>
          <video class="video-container-about" autoPlay loop muted>
            <source src={Video} type="video/mp4" />
          </video>
        </Left>
        <Right>
          <h1>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </h1>
        </Right>
      </Container>
    </>
  );
};

export default about;
