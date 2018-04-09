import React, { Component } from "react";
import styled from 'styled-components';

const CharacterBox = styled.div`
  width: 100%;
  height: 110px;
`;

const CharacterImg = styled.img`
  width: 100%;
  max-height: 100%;
`;

class CharacterVs extends Component {


  render() {


    return (
      <div>
        <CharacterBox>
          <CharacterImg src={this.props.img.sm} />
        </CharacterBox>
      </div>
    );
  }
}

export default CharacterVs;
