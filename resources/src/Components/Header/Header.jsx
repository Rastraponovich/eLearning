import React from 'react'
import { fade, makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, IconButton, Typography, Avatar,
  InputBase, Badge, MenuItem, Menu, } from '@material-ui/core'
import Profile from 'components/Profile/Profile'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import MailIcon from '@material-ui/icons/Mail'
import NotificationsIcon from '@material-ui/icons/Notifications'
import MoreIcon from '@material-ui/icons/MoreVert'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const drawerWidth = 150
const mobileDrawerWidth = 275

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },

  link: {
    alignSelf: 'center',
    color: 'inherit'
  },

  menuButton: {
    marginRight: theme.spacing(2),
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  }, 

  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    }
  },

  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },

  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputRoot: {
    color: 'inherit',
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
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

export default function Header(props) {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)
  const [drawerAnchorEl, setDrawerAnchorEl] = React.useState(null)
  const isMenuOpen = Boolean(anchorEl)
  const [mobileDrawer, setMobileDrawer] = React.useState(false)
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

  const menuId = 'primary-search-account-menu'

  const renderMenu = (
    <Menu 
      anchorEl={ anchorEl }
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      id = { menuId }
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

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorEl={ mobileMoreAnchorEl }
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={ mobileMenuId }
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={ isMobileMenuOpen }
      onClose={ handleMobileMenuClose }
    >
      <MenuItem>
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

  return (
    <div className={ classes.grow1 }>
      <AppBar position="fixed" className={ classes.appBar } >
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={ classes.menuButton }
            color="inherit"
            aria-label="open drawer"
            aria-controls={ mobileMenuId }
            aria-haspopup="true"
            onClick={ props.mobileDrawerStateSetAction }
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap component="h2"> {props.title} </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
        <div className={ classes.grow } />
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
            aria-controls={ menuId }
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
            aria-controls={ mobileMenuId }
            aria-haspopup="true"
            onClick={ handleMobileMenuOpen }
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </div>
        </Toolbar>
      </AppBar>
      { renderMobileMenu }
      { renderMenu }
   </div>
  )
}