import React, { Component } from "react";
import styled from 'styled-components';
import CharacterVs from './CharacterVs';
import HealthBar from './HealthBar';

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
    };


    render() {

        if(this.props.user){
            return (

                <div className="col">
                    <div className="row">
                        <div className="col-5">
                            <div className="row justify-content-end">
                                <Title>{this.props.user.name}</Title>
                            </div>
                        </div>
                        <div className="col-5 offset-2">
                            <div className="row justify-content-start">
                                {this.props.npc &&
                                    <Title>{this.props.npc.name}</Title>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-5">
                            <div className="row justify-content-end">
                                <CharacterVs img={this.props.user.images} />
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="row justify-content-center">
                                {this.props.npc &&
                                    <h1>Vs</h1>
                                }
                            </div>
                        </div>
                        <div className="col-5">
                            {!this.props.npc &&
                                <div className="row justify-content-start">
                                    <SmallText><span className="muted">Strength:</span> {this.props.user.powerstats.strength}</SmallText>
                                    <SmallText><span className="muted">Durability:</span> {this.props.user.powerstats.durability}</SmallText>
                                    <SmallText><span className="muted">intell:</span> {this.props.user.powerstats.intelligence}</SmallText>
                                    <SmallText><span className="muted">Speed:</span> {this.props.user.powerstats.speed}</SmallText>
                                    <SmallText><span className="muted">Power:</span> {this.props.user.powerstats.power}</SmallText>
                                </div>
                            }
                            {this.props.npc &&
                                <div className="row justify-content-start">
                                    <CharacterVs img={this.props.npc.images}/>
                                </div>
                            }
                        </div>
                    </div>
                    {this.props.npc &&
                    <div className="row">
                        <div className="col-5">
                            <HealthBar user={this.props.user.powerstats.strength}/>
                        </div>
                        <div className="col-5 offset-2">
                            <HealthBar user={this.props.npc.powerstats.strength} />
                        </div>
                    </div>
                    }
                </div>
            );
        }else{
            return null;
        }

        
    }
}

export default MediaCharacter;
