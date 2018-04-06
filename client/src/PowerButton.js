import React, { Component } from "react";
import pictures from "./assets/pictures.json";
import styled from 'styled-components';


const MyButton = styled.img`
  width:50px;
  height:50px;
  border: 1px solid black;
  
`

class PowerButton extends Component {

    state = {
        pictures:pictures[0]
    }

    render() {
        return (
            <div>
                <MyButton src={this.state.pictures.baguetteMagique}></MyButton>
            </div>
        );
    }
}

export default PowerButton;