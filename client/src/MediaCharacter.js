import React, { Component } from "react";
import styled from 'styled-components';
import characters from './characters.json';


const SmallText = styled.p`
    font-size: 12px;
    margin:0;
`

const Title = styled.h5`
    font-size: 16px;
`

class MediaCharacter extends Component {

    state= {
        character: characters[0]
    };


    render() {

        return (
            <div>
                <Title>{this.state.character.name}</Title>
                <SmallText>Strength: {this.state.character.powerstats.strength}</SmallText>
                <SmallText>Durability: {this.state.character.powerstats.durability}</SmallText>
                <SmallText>Intell: {this.state.character.powerstats.intelligence}</SmallText>
                <SmallText>Speed: {this.state.character.powerstats.speed}</SmallText>
                <SmallText>Power: {this.state.character.powerstats.power}</SmallText>
            </div>
        );
    }
}

export default MediaCharacter;
