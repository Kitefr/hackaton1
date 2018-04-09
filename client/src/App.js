import React, { Component } from "react";

import styled from 'styled-components';
import MediaCharacter from './MediaCharacter';
import CharacterFilters from './charactersFilters';
import CharacterList from './CharacterList';
import BoutonMain from './BoutonMain';
import PowerButton from './PowerButton';
import FightContenair from './FightContenair';
import Welcome from './Welcome';

const MainContenair = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;
  left: 0;
  padding:0;
`;

const FirstContenair = styled.div`
  height:40%;
`

const SecondContenair = styled.div`
  height: 50%;
  overflow-y:scroll;
`;

const ThirdContenair = styled.div`
  height: 10%;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connect:false
    }

    this.setCharacter = this.setCharacter.bind(this);
    this.setData = this.setData.bind(this);
  }

  setCharacter(user,log={connect:false}){
    this.setState(user);
    this.setState({...log});
  }

  setData(data) {
    this.setState(data);
  }


  componentWillMount(){
    const arr = new CharacterFilters();
    const users = arr.getCharactersFrom();
    this.setState({users});
  }
  
  render() {
    const chars = this.state.users;
    const char = chars.map((element,index) => <CharacterList key={index} user={element} setCharacter={this.setCharacter}/>);

    
    return (

        <MainContenair>
          <FirstContenair className="row align-items-center">
            {!this.state.currentUser &&
              <Welcome />
            }
            {this.state.currentUser &&
              <MediaCharacter user={this.state.currentUser} npc={this.state.npc} />
            }   
          </FirstContenair>
          <SecondContenair className="row">
          {!this.state.connect &&
            char
          }
          {this.state.connect &&
              <FightContenair data={this.state.data} user={this.state.currentUser} npc={this.state.npc}/>
          }
          </SecondContenair>
          <ThirdContenair className="row align-items-center">
          {!this.state.connect &&
            <BoutonMain users={this.state.users} setCharacter={this.setCharacter} currentUser={this.state.currentUser}/>
          }
          {this.state.connect &&
            <PowerButton race={this.state.currentUser.appearance.race} setData={this.setData}/>
          }
          </ThirdContenair>
        </MainContenair>

    );
  }
}

export default App;
