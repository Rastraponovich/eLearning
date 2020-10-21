import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Drawer, Divider, SwipeableDrawer, CardMedia, Hidden } from '@material-ui/core'
import Navigation from 'components/Navigation/Navigation'

const drawerWidth = 150
const mobileDrawerWidth = 275
const image = 'https://i.ibb.co/TtFYWTL/logo.png'

const useStyles = makeStyles((theme) => ({
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
}))

export default function Aside(props) {
    const classes = useStyles()
    return (
        <aside>
            {/* desktop drawer */}
            <Hidden xsDown implementation="css">
                <Drawer
                    className={ classes.drawer }
                    variant="permanent"
                    classes={{ paper: classes.drawerPaper }}
                    anchor="left"
                    >
                        <div className={ classes.toolbar } />
                        <CardMedia image={ image } className={ classes.media }/>
                        <Divider />
                        <Navigation redirect={ props.redirect }/>
                </Drawer>
            </Hidden> 
            {/* мобильный drawer */}
            <Hidden smUp implementation="css">
                <SwipeableDrawer
                    onClose={ props.handleMobileDrawerOpen }
                    onOpen={ props.handleMobileDrawerOpen }
                    onClick={ props.handleMobileDrawerOpen }
                    className={ classes.drawer }
                    classes={{ paper: classes.drawerPaper }}
                    anchor="left"
                    open={ props.mobileDrawer }
                >
                    <div className={ classes.toolbar } />
                    <CardMedia image={ image } className={ classes.media }/>
                    <Divider />
                    <Navigation />
                </SwipeableDrawer>
            </Hidden>
        </aside>
    )
}

