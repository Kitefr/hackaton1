import React, { Component } from "react";
import pictures from "./assets/pictures.json";
import styled from 'styled-components';
import Baston from './baston';

const MyButton = styled.img`
  width:50px;
  height:50px;
  border: 1px solid grey;
  border-radius: 5px;
  
`

class PowerButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pictures: pictures[0]
        }
        this.action = this.action.bind(this);
    }
    

    action(arr, key, path){
       const data = {
           list:arr,
           key:key,
           path:path
       } 
       this.props.setData({data:data});
    }

    

    render() {
        const arr = [
            {Bizarro:"nunchacku"},
            {Mutant:"poison"},
            {"New God": "baguetteMagique"},
            {Human:"batteBaseball"},
            {Cyborg:"bombe"},
            {Alien:"soucoupe"},
            {Vampire:"morsure"}
        ];
        const arrBaston = [
            {"nunchacku":Baston.attackNunchaku },
            { "poison": Baston.attackPoison },
            { "baguetteMagique":Baston.attackBaguette },
            {"batteBaseball":Baston.attackBaseball },
            { "bombe":Baston.attackBombe },
            { "soucoupe":Baston.attackSoucoupe },
            { "morsure":Baston.attackMorsure },
            {"bombeCrymo":Baston.attackBombeCrymo},
            {"bootstrap":Baston.attackBootstrap},
            {"cafe":Baston.attackCafeSamir},
            {"pharmacie":Baston.soignerPharamacie}
        ];

        const power = arr.map((element,index) =>  {
            if(Object.keys(element)[0] === this.props.race){
                
                const path = Object.values(element);
                return <MyButton src={this.state.pictures[path]} onClick={() => this.action(arrBaston, Object.values(arr[index]), this.state.pictures[path])}></MyButton>;
            }else{
                return null;
            }
        }).filter(element => element !== null);
        
        
        return (
            <div className="col">
                <div className="row justify-content-around" style={{background:"grey",padding:"5px 0"}}>
                    {power[0]}
                    <MyButton src={this.state.pictures.pharmacie} onClick={() => this.action(arrBaston, "pharmacie", this.state.pictures.pharmacie)}></MyButton>
                    <MyButton src={this.state.pictures.cafe} onClick={() => this.action(arrBaston, "cafe", this.state.pictures.cafe)}></MyButton>
                    <MyButton src={this.state.pictures.bootstrap} onClick={() => this.action(arrBaston, "bootstrap", this.state.pictures.bootstrap)}></MyButton>
                    <MyButton src={this.state.pictures.bombeCrymo} onClick={() => this.action(arrBaston, "bombeCrymo", this.state.pictures.bombeCrymo)}></MyButton>
                </div>
            </div>
        );
    }
}

export default PowerButton;