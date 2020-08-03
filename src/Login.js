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

    }

     handleSubmit(event){
        event.prevendDefault();
        console.log("User: ", this.state.user,
                    "Passowrd: ", this.state.password);
    }

    showReaction(event) {
        event.prevendDefault();
        console.log("User: Passowrd: ");
    }

    render() {
        return (
            <div  style={{border: '5px solid black'}} >
                 <form onSubmit={this.showReaction}>
 <Grid container
                alignContent="center"
                alignItems="center"
                justify="center"
                style={{ minHeight: "100vh"}}
                spacing={4}
                >


                <Grid item xs={12}>
                    <TextField
                        id="input-with-user-icon"
                        label="User"
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
                        id="input-with-password-icon"
                        label="Password"
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
