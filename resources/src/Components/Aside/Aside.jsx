import React, { Fragment, Component } from 'react'
import { withStyles  } from '@material-ui/core/styles'
import { Drawer, Divider, SwipeableDrawer, CardMedia, Hidden } from '@material-ui/core'
import Navigation from 'components/Navigation/Navigation'
import { green } from '@material-ui/core/colors'

const drawerWidth = 150
const mobileDrawerWidth = 275
const image = 'https://i.ibb.co/TtFYWTL/logo.png'

const styles = theme => ({

    drawer: {
        flexShrink: 0,
        width: mobileDrawerWidth,
    
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
        }
    },

    drawerPaper: {
        width: mobileDrawerWidth,
        backgroundColor: '#f5f5f5',

        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
        }
    },

    media: {
        height: 100,
    },
})

class Aside extends Component {

    render() {
        const { classes } = this.props
        return (
            <aside>
                <Hidden xsDown implementation="css">
                    <Drawer
                        className={ classes.drawer }
                        variant="permanent"
                        classes={{ paper: classes.drawerPaper }}
                        anchor="left"
                        >
                            <div className={ classes.toolbar } />
                            <CardMedia image={image} className={ classes.media }/>
                            <Divider />
                            <Navigation />
                    </Drawer>
                </Hidden> 
                <Hidden smUp implementation="css">
                    <SwipeableDrawer
                        onClose={ this.props.handleMobileDrawerOpen }
                        onOpen={ this.props.handleMobileDrawerOpen }
                        onClick={ this.props.handleMobileDrawerOpen }
                        className={ classes.drawer }
                        classes={{ paper: classes.drawerPaper }}
                        anchor="left"
                        open={ this.props.mobileDrawer }
                    >
                        <div className={ classes.toolbar } />
                        <CardMedia image={image} className={ classes.media }/>
                        <Divider />
                        <Navigation />
                    </SwipeableDrawer>
                </Hidden>
            </aside>
        )
    }
}

export default withStyles(styles)(Aside)