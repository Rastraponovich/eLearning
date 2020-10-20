import React, { Component, Fragment } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import '../../layout/css/style.css'
import { Container, Breadcrumbs, Typography, Hidden } from '@material-ui/core'
import LessonList from 'components/LessonList/LessonList'
import MainPage from 'components/MainPage/MainPage'
import CreateLesson from 'components/CreateLesson/CreateLesson'
import Aside from 'components/Aside/Aside'
import Cart from 'components/Cart/Cart'
import Cabinet from 'components/Cabinet/Cabinet'
import { LessonContainer } from 'containers/LessonContainer'
import { HeaderContainer } from 'containers/HeaderContainer'
import AlertShow from 'components/AlertShow/AlertShow'
import LoginPage from 'components/LoginPage/LoginPage'
import { withStyles } from '@material-ui/core/styles'

const drawerWidth = 150

const styles = theme => ({
    main: {
        marginTop: 40,
        padding: '1rem',
        position: 'relative',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginTop: 64,
        }
    },
    container: {
        display: 'flex',
        width: '100%',
    },

    footer: {
        position: 'relative',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        zIndex: 1500,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            '& p':{
                marginLeft: drawerWidth,
            }
        },
        backgroundColor: '#f5f5f5',
    },

    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
           display: 'flex',
        },
    },
    helper: {},

})

class App extends Component {

    state = {
        title: 'eLearning',
        error: null,
    }

    hanldeCloseAlert = (value) => {
        this.props.handleCloseAlert(value)
    }
  
    handleSelectLesson = (id) => {
        this.props.handleSelectLesson(id)
    }

    handleAlert = (value, type = 'inform', isSelect = false, messageId) => {
        this.props.handleShowAlert({ value, type, isSelect, messageId })
    }

    render() {
        const { classes } = this.props
        return(
            <Fragment>     
                <HeaderContainer title={ this.state.title } />
                <div className={ classes.container }>
                    <Aside handleMobileDrawerOpen={ this.props.handleMobileDrawerOpen } mobileDrawer={ this.props.mobileDrawer } />
                    <main className={ classes.main }>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link to="/" replace>
                                <Typography color="textPrimary"> Главная </Typography>
                            </Link>
                            <Typography color="textPrimary">Breadcrumb</Typography>
                        </Breadcrumbs>
                        <Container maxWidth="xl">
                            <Switch>
                                <Route path='/' exact >
                                    <MainPage />
                                </Route>
                                <Route path='/lessons' exact >
                                    <LessonList 
                                        handleCartAdd = { this.props.handleCartAdd }
                                        lessons={ this.props.lessons } 
                                        handleDeleteItem={ this.props.handleDeleteItem }
                                        handleSelectLesson={ this.handleSelectLesson }/>
                                </Route>
                                <Route path='/login' exact >
                                    <LoginPage />
                                </Route>
                                <Route path='/lesson/:id' exact>
                                    <LessonContainer />
                                </Route>
                                <Route path='/createLesson' exact>
                                    <CreateLesson 
                                        handleCreateLesson={this.props.handleCreateLesson} 
                                        handleRedirect={ this.props.handleRedirect } />
                                </Route>
                                <Route path='/cabinet' exact>
                                    <Cabinet profile={ this.props.profile }/>
                                </Route>
                                <Route path='/cart' exact>
                                    <Cart cart={ this.props.cart } hanldeCartDelete={ this.props.cartDeleteAction }/>
                                </Route>
                                <Route path='*'>
                                    <h2>Error</h2>
                                </Route>
                            </Switch>
                            <AlertShow  popup={ this.props.popup }  hanldeCloseAlert={ this.hanldeCloseAlert } />
                        </Container>
                    </main>
                </div>
                {/* <Hidden xsDown>
                    <footer className={ classes.footer }>
                        <Container fullWidth>
                            <Typography  variant="body1" align="center">Йа надпись в футаре</Typography>
                        </Container>
                    </footer>
                </Hidden> */}
            </Fragment>
        )
    }
}
export default withStyles(styles)(App)