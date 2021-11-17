import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Girl from "../Image/Girl.png";

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: red;
  position: absolute;
`;

const Left = styled.div`
  height: 100%;
  width: 50%;
  background-color: blue;
`;

const Right = styled.div`
  height: 100%;
  width: 50%;
  background-color: Purple;
  position: absolute;
`;

const Image = styled.img`
  position: absolute;
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
            <Image src={Girl} />
          </Left>
          <Right></Right>
        </Container>
      </div>
    </>
  );
};

export default contact;
