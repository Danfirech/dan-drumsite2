import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  width: 100vw;
`;

const Left = styled.div`
  height: 90px;
  width: 50%;
  background-color: red;
  display: flex;
  padding-left: 20px;
`;

const Right = styled.div`
  height: 90px;
  width: 50%;
  background-color: pink;
  display: flex;
`;

export const Navbar = () => {
  return (
    <div>
      <Container>
        <Left>
          <Link to="/">Dan Possehl</Link>
        </Left>
        <Right>
          <ul>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/Videos">Videos</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
          </ul>
        </Right>
      </Container>
    </div>
  );
};
