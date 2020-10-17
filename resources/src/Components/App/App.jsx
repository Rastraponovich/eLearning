import React, { Component, Fragment } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import '../../layout/css/style.css'
import { Container, Grid } from '@material-ui/core'
import LessonList from 'components/LessonList/LessonList'
import Navigation from 'components/Navigation/Navigation'
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
        height: '88vh',
        [theme.breakpoints.up('sm')]: {
            marginTop: 70,
            marginLeft: drawerWidth,
        }
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
            </Fragment>
        )
    }
}
export default withStyles(styles)(App)