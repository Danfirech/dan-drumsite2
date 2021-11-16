import React from "react";
import styled from "styled-components";
import Video from "../video/video.mp4";

const Container = styled.div`
  padding-top: 0;
`;

const styles = {
  video: {
    height: "100vh",
    width: "100vw",
    padding: "0",
  },
};

const home = () => {
  return (
    <div>
      <Container>
        <video style={styles.video} autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
      </Container>
    </div>
  );
};

export default home;
