import React, { Component, Fragment } from 'react'
import { Typography, Box, Grid, CircularProgress } from '@material-ui/core'
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

let timerId = null

class MainPage extends Component {

    state = {
        value: 0,
        loading: true,
    }

    handleLoading = () => {
        if(this.state.value < 100 && this.state.loading) {
            timerId = setInterval(() => {
                this.setState({ value: this.state.value + 1})
            }, 70)
        } 
    }

    componentDidMount() {
        if (this.state.loading) {
            this.handleLoading()
        }
    }

    componentDidUpdate() {
        if (this.state.value >= 100 && this.state.loading) {
            this.setState({ loading: false })
            clearInterval(timerId)
        }
    }

    render() {
        const { classes } = this.props
        const loadingCirle = this.state.loading ? 
            <Box position="relative" display="inline-flex">
                <CircularProgress size={150} variant="static" value={this.state.value} />
                <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Typography variant="h2" component="div" color="textSecondary">
                        { `${Math.round( this.state.value,)}%` }
                    </Typography>
                </Box>
            </Box> : <Typography component="h2" variant="h5" align="center">Добро пожаловать</Typography>

        return(
            <Grid className={ classes.root } container sx={12} justify="center" alignContent="center" direction="column">
                { loadingCirle }
            </Grid>
        )
    }
}

export default withStyles(styles)(MainPage)