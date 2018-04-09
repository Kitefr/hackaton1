import React, { Component } from "react";
import styled from "styled-components";

const Img = styled.img`
  width:100%;
  height:90px;
`;

class CharacterList extends Component {
    constructor(props) {
      super(props);
      this.selectChar = this.selectChar.bind(this);
    }

    selectChar(user){
      this.props.setCharacter({currentUser:user});
    }

    

  render() {


    return (
      <div className="col-3" onClick={() => this.selectChar(this.props.user)}>
        <Img src={this.props.user.images.sm} alt="" class="img-responsive" />
      </div>
    );
  }
}

export default CharacterList;
