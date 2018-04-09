import React, { Component } from "react";
import styled from "styled-components";



const Counter = styled.p`
  width: 100px;
  text-align: center;
`;

class HealthBar extends Component {
  constructor(props) {
    super(props);
    this.state={
      props
    }
    
  }
  
  render() {
    console.log(this.props.user);
    
    return (
      <div>
        <div className="progress">
          <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{width:`100%`}} ></div>
        </div>
        <Counter>100</Counter>
      </div>
    );
  }
}

export default HealthBar;
