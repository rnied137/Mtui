import React, { Component } from 'react'

import Button from './Button';

export default class MainComponent extends Component {
    render() {
     
        return (
            <div>
                  <h1>tekst</h1>
                <Button 
                buttonStyle={"btn-secondary"}
                buttonSize={"btn-small"}
                >Start</Button>
                <Button 
                buttonStyle={"btn-primary-border"}
                buttonSize={"btn-medium"}
                >Stop</Button
                >
                <Button 
                buttonStyle={"btn-primary"}
                buttonSize={"btn-big"}
                >Reset</Button
                >
              
            </div>
        )
    }
}
