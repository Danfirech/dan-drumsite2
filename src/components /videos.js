import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Golf from "../video/Danvid.mp4";
import "./styles/Videos.css";

const Container = styled.div`
  height: 2700px;
  width: 100vw;
`;

const Top = styled.div`
  width: 100vw;
  background-color: pink;
  height: 900px;
  background-color: #d3d3d3;
`;

const Middle = styled.div`
  width: 100vw;
  background-color: green;
  height: 900px;
  background-color: #d3d3d3;
`;

const Bottom = styled.div`
  width: 100vw;
  background-color: greenyellow;
  height: 900px;
  background-color: #d3d3d3;
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
            <video class="video-container-Golf" controls>
              <source src={Golf} type="Video/mp4" />
            </video>
          </Top>
          <Middle>
            <video class="video-container-Golf" controls>
              <source src={Golf} type="Video/mp4" />
            </video>
          </Middle>
          <Bottom>
            <video class="video-container-Golf" controls>
              <source src={Golf} type="Video/mp4" />
            </video>
          </Bottom>
        </Container>
      </div>
    </>
  );
};

export default videos;
