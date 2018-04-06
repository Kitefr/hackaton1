import React, { Component } from "react";
import BoutonMain from "./BoutonMain";
import CharacterList from "./CharacterList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>hello</h1>
        <div class="row col-md-4 col-sm-6">
          <CharacterList />
          <CharacterList />
          <CharacterList />
          <CharacterList />
        </div>
        <div class="row col-md-4 col-sm-6">
          <CharacterList />
          <CharacterList />
          <CharacterList />
          <CharacterList />
        </div>
        <div class="row col-md-4 col-sm-6">
          <CharacterList />
          <CharacterList />
          <CharacterList />
          <CharacterList />
        </div>
        <div class="row col-md-4 col-sm-6">
          <CharacterList />
          <CharacterList />
          <CharacterList />
          <CharacterList />
        </div>
        <BoutonMain></BoutonMain>
      </div>
    );
  }
}

export default App;
