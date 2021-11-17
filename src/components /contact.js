import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Girl from "../Image/Girl.png";
import "./styles/Contact.css";

const Container = styled.div`
  width: 100vw;
  display: flex;
  background-color: #d3d3d3;
`;

const Left = styled.div`
  height: 100vh;
  width: 50%;
  background-color: #d3d3d3;
  /* position: absolute; */
`;

const Right = styled.div`
  height: 100%;
  width: 50%;
  /* position: absolute; */
`;

const Image = styled.img`
  position: absolute;
  height: 80%;
  padding-top: 120px;
  padding-left: 80px;
`;

const contact = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <div>
        <Container>
          <Left>
            <div>
              <h1 class="ContactText">
                Daniel Possehl <br /> DanielPossehl@hotmail.com <br />
                616-821-0139
              </h1>
            </div>
          </Left>
          <Right>
            <Image src={Girl} />
          </Right>
        </Container>
      </div>
    </>
  );
};

export default contact;
