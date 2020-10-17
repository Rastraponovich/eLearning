import React, { Component, Fragment } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import '../../layout/css/style.css'
import { Container, Breadcrumbs, Typography } from '@material-ui/core'
import LessonList from 'components/LessonList/LessonList'
import MainPage from 'components/MainPage/MainPage'
import CreateLesson from 'components/CreateLesson/CreateLesson'
import { LessonContainer } from 'containers/LessonContainer'
import Header from 'components/Header/Header'
import AlertShow from 'components/AlertShow/AlertShow'
import LoginPage from 'components/LoginPage/LoginPage'
import { withStyles } from '@material-ui/core/styles'

const drawerWidth = 150

const styles = theme => ({
    main: {
        marginTop: 40,
        overflowY: 'scroll',
        height: `calc(100% - 20%)`,
        [theme.breakpoints.up('sm')]: {
            marginTop: 60,
            marginLeft: drawerWidth,
        }
    },

    footer: {
        position: 'relative',
        zIndex: 1500,
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
                <Header title={ this.state.title } profile={ this.props.profile }/>
                <main className={ classes.main }>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link to="/" replace>
                            <Typography color="textPrimary"> Главная </Typography>
                        </Link>
                        <Typography color="textPrimary">Breadcrumb</Typography>
                    </Breadcrumbs>
                    <Container fullWidth>
                        <Switch>
                            <Route path='/' exact >
                                <MainPage />
                            </Route>
                            <Route path='/lessons' exact >
                                <LessonList 
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
                            <Route path='*'>
                                <h2>Error</h2>
                            </Route>
                        </Switch>
                        <AlertShow  popup={ this.props.popup }  hanldeCloseAlert={ this.hanldeCloseAlert } />
                    </Container>
                </main>
                <footer className={ classes.footer }>
                    <Container fullWidth>
                        <Typography variant="body1" align="center">Йа надпись в футаре</Typography>
                    </Container>
                </footer>
            </Fragment>
        )
    }
}
export default withStyles(styles)(App)