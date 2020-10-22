import React from 'react'
import { fade, makeStyles } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'
import { AppBar, Toolbar, IconButton, Typography, InputBase, Button, } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import AuthMenu from './AuthMenu'

const drawerWidth = 150
const mobileDrawerWidth = 275

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
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
  appBar2: {
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    }
  },

  title: {
    display: 'none',
    cursor: 'pointer',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(grey[200], 0.15),
    '&:hover': {
      backgroundColor: fade(grey[400], 0.25),
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
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
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
  const menuId = 'primary-search-account-menu'
  const mobileMenuId = 'primary-search-account-menu-mobile'

  return (
    <div className={ classes.grow }>
      <AppBar 
        position="fixed" 
        className={ props.token === null ? classes.appBar2 : classes.appBar } 
        color="primary"
        >
        <Toolbar>
          <IconButton
            edge="start"
            className={ classes.menuButton }
            color="inherit"
            aria-label="open drawer"
            aria-controls={ mobileMenuId }
            aria-haspopup="true"
            onClick={ props.mobileDrawerStateSetAction }>
            <MenuIcon />
          </IconButton>

          <Typography 
            onClick={ () => props.redirect('/') } 
            className={ classes.title } 
            variant="h6" 
            noWrap 
            component="h2"> 
              { props.title } 
          </Typography>

        <div className={ classes.search }>
          <div className={ classes.searchIcon }>
            <SearchIcon />
          </div>

          <InputBase
            placeholder="Поиск.."
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}/>
            
        </div>
        <div className={ classes.grow } />
        { props.token !== null ? 
          <AuthMenu 
            redirect={ props.redirect }
            logoutAction={ props.logoutAction }
            profile={ props.profile } 
            menuId={ menuId } 
            mobileMenuId={ mobileMenuId }
            cart={ props.cart }/> :
          <>
            <div className={ classes.sectionDesktop }>
              <Button 
                onClick={ () => props.redirect('/login') } 
                color="primary" 
                variant="contained">
                  Вход / Регистрация
                </Button>
            </div>
            <div className={ classes.sectionMobile }>
              <Button 
                onClick={ () => props.redirect('/login') } 
                color="primary" 
                variant="contained" 
                size="small">
                  Вход / Регистрация
                </Button>
            </div>
          </>
        }
        
        </Toolbar>
      </AppBar>
   </div>
  )
}