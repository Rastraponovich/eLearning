import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import '../../layout/css/style.css'
import { nanoid } from 'nanoid'
import LessonList from 'components/LessonList/LessonList'
import { LessonContainer } from 'containers/LessonContainer'
import Header from 'components/Header/Header'
import AlertShow from 'components/AlertShow/AlertShow'
import Registration from 'components/Registration/Registration'
import LoginPage from 'components/LoginPage/LoginPage'

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

    render(){
        return(
            <Fragment>     
                <Header 
                    title={ this.state.title } 
                    profile={ this.props.profile }/>
                <main>
                    <Switch>
                        <Route path='/' exact >
                            <LessonList lessons={ this.props.lessons } handleSelectLesson={ this.handleSelectLesson }/>
                            
                        </Route>
                        <Route path='/:id' exact>
                            <LessonContainer />
                        </Route>
                        <Route path='/registration' exact >
                            <Registration />
                        </Route>
                    </Switch>
                    <AlertShow 
                        popup={ this.props.popup } 
                        hanldeCloseAlert={ this.hanldeCloseAlert } />
                </main>
            </Fragment>
        )
    }
}
export default App 