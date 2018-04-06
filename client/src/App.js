import React, { Component } from "react";

import styled from 'styled-components';
import characters from './assets/characters.json';
import MediaCharacter from './MediaCharacter';

const MainContenair = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;
  left: 0;
`;

const FirstContenair = styled.div`
  height:40%;
`

const SecondContenair = styled.div`
  height: 50%;
  background: grey;
`;

const ThirdContenair = styled.div`
  height: 10%;
  background: yellow;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters
    }
  }
  
  render() {
    return (
      <div>
        <MainContenair className="contenair">
          <FirstContenair className="row align-items-center">
            <MediaCharacter />
          </FirstContenair>
          <SecondContenair className="row" />
          <ThirdContenair className="row" />
        </MainContenair>
      </div>
    );
  }
}

export default App;
