import React, { Component } from "react";
import sample from "lodash/sample";



class BoutonMain extends Component {
  constructor(props) {
    super(props);
    
    this.selectVS = this.selectVS.bind(this);
  }
  

  selectVS(users) {
    this.props.setCharacter({npc:sample(users)},{connect:true});
  }

  render() {
    return (
      <div className="col">
        <div className="row justify-content-center">
        {this.props.currentUser &&
            <button className="btn btn-outline-dark" onClick={() => this.selectVS(this.props.users)}>Valider</button>
        }
        {!this.props.currentUser &&
            <button className="btn btn-outline-dark disabled">Choose your Character !</button>
        }
        </div>
        
      </div>
    );
  }
}

export default BoutonMain;
