import React from 'react'
import { AppBar, Typography, Button} from '@material-ui/core'
import useStyles from './styles';
import momentos from '../../images/momentos.png'

function NavBar() {
    const classes =useStyles();
    return (

        <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography className={classes.heading} variant="h2" align="center">Momentos</Typography>
            <img className={classes.image} src={momentos} alt="icon" height="60" />
            <Button variant="contained" color="secondary" align="left" >Login</Button>
        </AppBar>

    )
}

export default NavBar

