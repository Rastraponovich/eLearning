import React, { Component, Fragment } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Breadcrumbs, Typography, Hidden } from '@material-ui/core'
import LessonList from 'components/LessonList/LessonList'
import MainPage from 'components/MainPage/MainPage'
import CreateLesson from 'components/CreateLesson/CreateLesson'
import Aside from 'components/Aside/Aside'
import Cart from 'components/Cart/Cart'
import Cabinet from 'components/Cabinet/Cabinet'
import LessonContainer from 'containers/LessonContainer'
import HeaderContainer from 'containers/HeaderContainer'
import AlertShow from 'components/AlertShow/AlertShow'
import LoginPage from 'components/LoginPage/LoginPage'

const drawerWidth =  150
const useStyles = makeStyles((theme) =>({
    main: {
        marginTop: 40,
        padding: '1rem',
        position: 'relative',
        width: '100%',
        boxSizing: 'border-box',
        [theme.breakpoints.up('sm')]: {
            marginTop: 64,
        }
    },
    container: {
        display: 'flex',
        height: '100%',
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

}))

export default function App(props) {
    const classes = useStyles()
    const [title, setTitle] = React.useState('eLearning')
    const [error, setError] = React.useState(null)

    React.useEffect( () => {
        if (props.token === null) {
            props.initAction()
        } 
    })
    
    //Refactor
    // handleAlert = (value, type = 'inform', isSelect = false, messageId) => {
    //     this.props.handleShowAlert({ value, type, isSelect, messageId })
    // }
    
    return(
        <Fragment>     
            <HeaderContainer title={ title } />
            <div className={ classes.container }>
                { props.mobileDrawer ? 
                <Aside 
                    redirect={ props.redirect }
                    handleMobileDrawerOpen={ props.mobileDrawerStateSetAction } 
                    mobileDrawer={ props.mobileDrawer } /> : null
                }
                <main className={ classes.main }>
                    
                    {/* <Breadcrumbs aria-label="breadcrumb">
                        <Link to="/" replace>
                            <Typography color="textPrimary"> Главная </Typography>
                        </Link>
                        <Typography color="textPrimary">Breadcrumb</Typography>
                    </Breadcrumbs> */}
                    <Container maxWidth="xl">
                        <Switch>
                            <Route path='/' exact >
                                <MainPage />
                            </Route>
                            <Route path='/lessons' exact >
                                <LessonList 
                                    handleCartAdd = { props.cartAddAction }
                                    lessonsList={ props.lessonsList } 
                                    handleDeleteItem={ props.deleteLesonAction }
                                    handleSelectLesson={ props.selectLessonAction } />
                            </Route>
                            <Route path='/login' exact >
                                <LoginPage 
                                    handleRegistration={ props.registrationAction }
                                    redirect={ props.redirect } 
                                    token={ props.token } 
                                    handleLogin={ props.loginAction }
                                />
                            </Route>
                            <Route path='/lesson/:id' exact>
                                <LessonContainer />
                            </Route>
                            <Route path='/createLesson' exact>
                                <CreateLesson 
                                    handleCreateLesson={ props.handleCreateLesson } 
                                    redirect={ props.redirect } />
                            </Route>
                            <Route path='/cabinet' exact>
                                <Cabinet profile={ props.profile }/>
                            </Route>
                            <Route path='/cart' exact>
                                <Cart 
                                    cart={ props.cart } 
                                    handleCartPlusItem={ props.cartPlusItemAction }
                                    handleCartMinusItem={ props.cartMinusItemAction }
                                    handleCartRemoveItem={ props.cartRemoveAction }
                                    hanldeCartDelete={ props.cartDeleteAction }/>
                            </Route>
                            <Route path='*'>
                                <h2>Error</h2>
                            </Route>
                        </Switch>
                        <AlertShow 
                            popup={ props.popup } 
                            hanldeCloseAlert={ props.alertCloseInformAction } />
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