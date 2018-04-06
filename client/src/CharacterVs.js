import React, { Component } from "react";
import characters from './assets/characters.json';
import styled from 'styled-components';

const CharacterBox = styled.div`
  width: 110px;
  height: 110px;
`;

const CharacterImg = styled.img`
  width: 100%;
  max-height: 100%;
`;

class CharacterVs extends Component {
  state = {
    character: characters[0]
  };

  render() {
    console.log(characters);

    return (
      <div>
        <CharacterBox>
          <CharacterImg src={this.state.character.images.sm} />
        </CharacterBox>
      </div>
    );
  }
}

export default CharacterVs;
