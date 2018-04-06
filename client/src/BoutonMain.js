import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.button`
  color: black;
  width: 10%;
  height : 10%;
`;

class BoutonMain extends Component {
  render() {
    return (
      <div>
        <Button>Valider</Button>
      </div>
    );
  }
}

export default BoutonMain;
