import React, { Component } from 'react'

export default class Register extends Component {
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
    render() {
        return (
                            <div  style={{border: '5px solid black'}} >
 <Grid container
                alignContent="center"
                alignItems="center"
                justify="center"
                style={{ minHeight: "100vh"}}
                spacing={3}
                >
                <FormControl
                focused="true">

         
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
                    <Input 
                    type="submit"
                    sizeLarge
                    variant="contained"
                    startIcon={<ExitToApp />}
                    style={{minWidth:"350px"}}>Login</Input>
                </Grid>
                </FormControl>
            </Grid>
            </div>
        )
    }
}
