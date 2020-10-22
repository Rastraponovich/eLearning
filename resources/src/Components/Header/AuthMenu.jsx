import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { IconButton, Avatar, Badge, MenuItem, Menu } from '@material-ui/core'
import Profile from 'components/Profile/Profile'
import MenuIcon from '@material-ui/icons/Menu'
import MailIcon from '@material-ui/icons/Mail'
import NotificationsIcon from '@material-ui/icons/Notifications'
import MoreIcon from '@material-ui/icons/MoreVert'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

const useStyles = makeStyles((theme) => ({
    link: {
        alignSelf: 'center',
        color: 'inherit'
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
}))

export default function AuthMenu(props) {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null)
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)
    const isMenuOpen = Boolean(anchorEl)
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null)
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
        handleMobileMenuClose()
    }

    const handleCartOpen = () => {
        setAnchorEl(null)
        handleMobileMenuClose()
        props.redirect('cart')
    }

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget)
    }

    const handleLogout = () => {
        setAnchorEl(null)
        props.logoutAction()
    }

    const renderMenu = (
        <Menu 
            anchorEl={ anchorEl }
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted
            id = { props.propsmenuId }
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={ isMenuOpen }
            onClose={ handleMenuClose }
        >
            <MenuItem onClick={ handleMenuClose }>
                <Profile profile={ props.profile } handleNameChange={ props.profileChangeNameAction }/>
            </MenuItem>
            <MenuItem onClick={ handleLogout }>
                <p>Выход</p>
            </MenuItem>
        </Menu>
    )
    
    const renderMobileMenu = (
        <Menu
            anchorEl={ mobileMoreAnchorEl }
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={ props.mobileMenuId }
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={ isMobileMenuOpen }
            onClose={ handleMobileMenuClose }
        >
            <MenuItem onClick={ handleMobileMenuClose }>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Сообщения</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Уведомления</p>
            </MenuItem>
            <MenuItem onClick={ handleCartOpen }>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={ Object.keys(props.cart).length } color="secondary">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
                <p>Корзина</p>
            </MenuItem>
            <Link to="/cabinet" replace>
                <MenuItem onClick={ handleMenuClose }>
                    <p>Профиль</p>
                </MenuItem>
            </Link>
            <MenuItem onClick={ handleLogout }>
                <p>Выход</p>
            </MenuItem>
        </Menu>
    )

    return(
        <>
            <div className={ classes.sectionDesktop }>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                    <MailIcon />
                    </Badge>
                </IconButton>
                <IconButton aria-label="show 17 new notifications" color="inherit">
                    <Badge badgeContent={17} color="secondary">
                    <NotificationsIcon />
                    </Badge>
                </IconButton>
                <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={ props.menuId }
                    aria-haspopup="true"
                    onClick={ handleMenuOpen }
                    color="inherit"
                >
                    <Avatar src={ props.profile.avatar } />
                </IconButton>
                <Link to='/cart' replace className={ classes.link }>

                <IconButton aria-label="show 1 goods in cart" color="inherit">
                    <Badge badgeContent= { Object.keys(props.cart).length } color="secondary">
                    <ShoppingCartIcon />
                    </Badge>
                </IconButton>
                </Link>
            </div>
            <div className={ classes.sectionMobile }>
                <IconButton
                    aria-label="show more"
                    aria-controls={ props.mobileMenuId }
                    aria-haspopup="true"
                    onClick={ handleMobileMenuOpen }
                    color="inherit"
                >
                    <MoreIcon />
                </IconButton>
            </div>
            { renderMenu }
            { renderMobileMenu }
        </>
   )
}