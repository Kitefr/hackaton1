import React, { Component } from "react";
import styled from 'styled-components';
import characters from './assets/characters.json';
import CharacterVs from './CharacterVs';

const SmallText = styled.p`
    font-size: 14px;
    width:100%;
    margin:0;
    font-family: 'Roboto', sans-serif;
`

const Title = styled.h5`
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    font-weight:bold;
`

class MediaCharacter extends Component {

    state= {
        connect: false,
        character: characters[0]
    };


    render() {

        return (
            <div className="col">
                <div className="row">
                    <div className="col-5">
                        <div className="row justify-content-end">
                            <Title>{this.state.character.name}</Title>
                        </div>
                    </div>
                    <div className="col-5 offset-2">
                        <div className="row justify-content-start">
                           {this.state.connect &&
                              <Title>{this.state.character.name}</Title>
                           }
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-5">
                        <div className="row justify-content-end">
                            <CharacterVs />
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="row justify-content-center">
                           {this.state.connect &&
                            <h1>Vs</h1>
                           } 
                        </div>
                    </div>
                    <div className="col-5">
                        {!this.state.connect &&
                            <div className="row justify-content-start">
                                <SmallText><span className="muted">Strength:</span> {this.state.character.powerstats.strength}</SmallText>
                                <SmallText><span className="muted">Durability:</span> {this.state.character.powerstats.durability}</SmallText>
                                <SmallText><span className="muted">intell:</span> {this.state.character.powerstats.intelligence}</SmallText>
                                <SmallText><span className="muted">Speed:</span> {this.state.character.powerstats.speed}</SmallText>
                                <SmallText><span className="muted">Power:</span> {this.state.character.powerstats.power}</SmallText>
                            </div>
                        }
                        {this.state.connect &&
                            <div className="row justify-content-start">
                                <CharacterVs />
                            </div>
                        }   
                    </div>
                </div>
                
            </div>
        );
    }
}

export default MediaCharacter;
