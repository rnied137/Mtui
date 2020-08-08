import React, { Component } from 'react'

import Button from './Button';

export default class MainComponent extends Component {
    render() {
     
        return (
            <div>
                  <h1>tekst</h1>
                <Button buttonStyle={"btn-secondary"}>Start</Button>
                <Button buttonStyle={"btn-primary-border"}>Stop</Button>
                <Button>Reset</Button>
              
            </div>
        )
    }
}
