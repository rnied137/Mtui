import React, { Component } from 'react'


import {
    InputAdornment,
    TextField,
    Grid,
    Button,
    
} from '@material-ui/core';
import { Person, Lock, ExitToApp } from '@material-ui/icons';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state ={
            user: '',
            password: ''
        }
this.handleSubmit = this.handleSubmit.bind(this);
    }

     handleSubmit(event){
        event.preventDefault();
        console.log("User: " + this.state.user +
                    "Passowrd: +", this.state.password);
    }

    showReaction(event) {
        event.preventDefault();
        console.log("User:" + this.state.user + " Passowrd: " + this.state.password);
    } 

    handleChange = (event)=> {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    render() {
        return (
            <div  style={{border: '5px solid black'}} >
                 <form onSubmit={this.handleSubmit}>
 <Grid container
                alignContent="center"
                alignItems="center"
                justify="center"
                style={{ minHeight: "100vh"}}
                spacing={4}
                >


                <Grid item xs={12}>
                    <TextField
                        id="user"
                        label="User"
                        onChange={this.handleChange}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Person />
                                </InputAdornment>
                            )
                        }} />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        id="password"
                        label="Password"
                        onChange={this.handleChange}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Lock />
                                </InputAdornment>
                            )
                        }} />
                </Grid>

                <Grid item xs={12}>
                    <Button 
                    type="submit"
                    variant="contained"
                    startIcon={<ExitToApp />}
                    style={{minWidth:"350px", minHeight: "50px"}}>Login</Button>
                </Grid>
         
            </Grid>
            </form>
            </div>
           




        )
    }
}
