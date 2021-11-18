import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Golf from "../video/GolfVideo.mp4";
import "./styles/Videos.css";

const Container = styled.div`
  height: 2000px;
  width: 100vw;
`;

const Top = styled.div`
  width: 100vw;
  background-color: pink;
  height: 666px;
`;

const Middle = styled.div`
  width: 100vw;
  background-color: green;
  height: 666px;
`;

const Bottom = styled.div`
  width: 100vw;
  background-color: greenyellow;
  height: 666px;
`;

const videos = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <div>
        <Container>
          <Top>
            <div>
              <video class="video-container-Golf" autoPlay loop muted>
                <source src={Golf} type="GolfVideo/mp4" />
              </video>
            </div>
          </Top>
          <Middle />
          <Bottom />
        </Container>
      </div>
    </>
  );
};

export default videos;
