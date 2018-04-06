import React, { Component } from "react";
import styled from "styled-components";

const Img = styled.img`
  width : 120px;
  height : 120px;
  margin-right : 8px;
  margin-top : 8px;
  
`;

class CharacterList extends Component {
  render() {
    return (
      <div>
        <Img src="http://www.leblogdukitsch.com/wp-content/uploads/2011/01/angela_lizon_1.jpg" alt="" class="img-responsive" />
      </div>
    );
  }
}

export default CharacterList;
