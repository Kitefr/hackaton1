import React, { Component } from "react";
import styled from 'styled-components';
import pictures from './assets/pictures.json';
import Baston from './baston';


const Container = styled.div`
   height: 100%;
   width: 100%;
`
const HalfContainer = styled.div`
   height: 50%;
   text-align:center;

`
const Img = styled.img`
   width:100px;
   height: 100px;
   margin-left: auto;
   margin-right: auto;

`

const Text = styled.p`
   font-size: 25px;
   font-family:Roboto;
   color: grey;
   text-align: center;   
   margin-left: 15%;
   margin-right:15%;
   

`

class FightContenair extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pictures: pictures[0]
        }
    }
    
    render() {
        if (this.props.data ){
            const arrBaston = [
                { "nunchacku": Baston.attackNunchaku },
                { "poison": Baston.attackPoison },
                { "baguetteMagique": Baston.attackBaguette },
                { "batteBaseball": Baston.attackBaseball },
                { "bombe": Baston.attackBombe },
                { "soucoupe": Baston.attackSoucoupe },
                { "morsure": Baston.attackMorsure },
                { "bombeCrymo": Baston.attackBombeCrymo },
                { "bootstrap": Baston.attackBootstrap },
                { "cafe": Baston.attackCafeSamir },
                { "pharmacie": Baston.soignerPharamacie }
            ];
            const arr = arrBaston.map(el => Object.keys(el).includes(this.props.data.key) ?Object.values(el):null).filter(el => el !== null);
            
            const x = arr[0][0](this.props.user, this.props.npc, 0);
  
            
            

            return (
                <Container>
                        <div className="row justify-content-center">
                            <HalfContainer className="row justify-content-center">
                             <Img src={this.props.data.path}></Img>
                                
                            </HalfContainer>
                            <HalfContainer>
                                <Text>{x.sentence}</Text>
                            </HalfContainer>
                        </div>


                </Container>

            );

        }else{
            return (
                <Container>

                    <h1>Select an attack !!! </h1>

                </Container>
            );
        }
        


    }
}


export default FightContenair;
