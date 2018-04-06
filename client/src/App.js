import React, { Component } from "react";
import styled from 'styled-components';
import CharacterVs from './CharacterVs';
import MediaCharacter from './MediaCharacter';

const MainContenair = styled.div`
  position:absolute;
  height:100%;
  width:100%;
  z-index:1;
  left:0;
` 
const FirstContenair = styled.div`
  height:40%;
  background:red;
`

const SecondContenair = styled.div`
  height:50%;
  background:grey;
`

const ThirdContenair = styled.div`
  height:10%;
  background:yellow;
`




class App extends Component {
  render() {
    return (
      <div>
        <MainContenair className="contenair">
          <FirstContenair className="row align-items-center">
            <div className="col">
              <div className="row justify-content-end">
                <CharacterVs></CharacterVs>
              </div>
            </div>
            <div className="col">
              <div className="row justify-content-center">
                <MediaCharacter/>
              </div>
            </div>
            
            
            
          </FirstContenair>
          <SecondContenair className="row">
          
          </SecondContenair>
          <ThirdContenair className="row">
          
          </ThirdContenair>
        </MainContenair>
      </div>
    );
  }
}

export default App;
