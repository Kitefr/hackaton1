import React, { Component } from "react";
import styled from 'styled-components';


const Contenair = styled.div`
    height: 50%;
`
const HalfContenair = styled.div`
    height: 50%;

`
const Img = styled.img`
`

const  Text = styled.p`

`

class FightContenair extends Component {

    

    render() {
        return (
            <Contenair>
                <HalfContenair>
                    <Img>{this.state.pictures.baguetteMagique}</Img>
                </HalfContenair>            
                <HalfContenair>
                    <Text> Machin attaque 
                    </Text>    
                </HalfContenair>
            </Contenair>
            
        );
    }
}


export default FightContenair