import React, { Component } from "react";
import styled from "styled-components";



const SmallText = styled.p`
  font-size: 16px;
`;

const Title = styled.h1`
  font-size: 25px;
  color: blue;
  
`;

class Welcome extends Component {
  render() {
    return (
      <div className="col">
        <div className="row justify-content-center">
          <Title>Hello Wilder !</Title>
        </div>
        <div className="row justify-content-center">
          <SmallText>Choisi ton personnage !</SmallText>
        </div>
      </div>

    );
  }
}

export default Welcome;
