import React, { Component, Fragment } from 'react'
import { Typography, Container, Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    root: {
        width: '100%',
        height: '85vh',
        alignItems: 'center'
    },
    link: {
        textDecoration: 'none',
        color: '#000'
    }
})


class MainPage extends Component {
    render() {
        const { classes } = this.props
        return(
            <Grid className={ classes.root } container sx={12} justify="center" alignContent="center" direction="column">
                <Typography component="h2" variant="h5" align="center">Добро пожаловать</Typography>
            </Grid>
        )
    }
}

export default withStyles(styles)(MainPage)