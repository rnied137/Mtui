import React, { Component } from 'react'


import {
    InputAdornment,
    TextField,
    Grid,
    Button,

} from '@material-ui/core';
import { Person, Lock, ExitToApp } from '@material-ui/icons';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: ''
        }

    }

    handleSubmit(event) {
        event.prevendDefault();
        console.log("User: ", this.state.user,
            "Passowrd: ", this.state.password);
    }
    render() {
        return (
            <div style={{ border: '5px solid black' }} >
                <Grid container
                    alignContent="center"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: "100vh" }}
                    spacing={3}
                >


                    <Grid item xs={12}>
                        <TextField
                            id="input-with-user-icon"
                            label="User"
                            style={{minWidth: "300px"}}
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
                            label="Repeat Password"
                            style={{minWidth: "300px"}}
                            type="password"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Lock />
                                    </InputAdornment>
                                )
                            }} />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="repeatPassword"
                            label="Password"
                            type="password"
                            style={{minWidth: "300px"}}
                            
                             />
                    </Grid>

                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            sizeLarge
                            variant="contained"
                            startIcon={<ExitToApp />}
                            style={{ minWidth: "350px" }}>Login</Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
