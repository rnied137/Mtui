import React, { Component } from 'react'


import {
    InputAdornment,
    TextField,
    Grid,
    Button,
    Modal

} from '@material-ui/core';
import { Person, Lock, ExitToApp } from '@material-ui/icons';


export default class AccountModal extends Component {


render() {
    return (
        <div style={{ border: '5px solid black' }} >
            <Grid container
                alignContent="center"
                alignItems="center"
                justify="center"
                spacing={4}
            >


                <Grid item xs={12}>
                    <TextField
                        id="user"
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
                        id="password"
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
                        style={{ minWidth: "350px", minHeight: "50px" }}>Login</Button>
                </Grid>

            </Grid>
        </div>





    )
}
}
