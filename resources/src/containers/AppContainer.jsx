import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { ConnectedRouter, push } from 'connected-react-router'
import { history } from '../store'

import App from 'components/App/App'
import { alertLoadAction, alertCloseInformAction, alertSendInformAction } from 'actions/alerts'
import { profileLoadAction, profileChangeNameAction } from 'actions/profile'
import { lessonsLoadAction, selectLessonAction } from 'actions/lessons'


class AppContainerClass extends Component {

    componentDidMount() {
        const { 
            profile, 
            popup, 
            alertLoadAction, 
            profileLoadAction,
            lessonsLoadAction, 
        } = this.props
        
        if (!profile.length || !popup.length || !lessons.length ) {
            lessonsLoadAction()
            profileLoadAction()
            alertLoadAction()
        }
    }
    handleSelectLesson = (id) => {
        this.props.selectLessonAction(id)
    }

    // handleDelete = (data) => {
    //     this.props.chatsMessageDeleteInformAction(data)
    // }

    // handleNewChat = (data) => {
    //     const { chatsAddInformAction } = this.props
    //     chatsAddInformAction(data)
    //     this.handleChatRedirect(data.id)
    // }

    // handleChatRedirect = (newChatId) => {
    //     const { redirect } = this.props
    //     redirect(newChatId)
    // }

    handleShowAlert = (value, type = 'inform', isSelect = false, messageId) => {
        this.props.alertSendInformAction(value, type, isSelect, messageId)
    }

    handleCloseAlert = (value) => {
        this.props.alertCloseInformAction(value)
    }

    // handleNameChange = (value) => {
    //     this.props.profileChangeNameAction(value)
    // }

    render() {
        return (
            <ConnectedRouter history={ history }>     
                <App { ...this.props } handleSelectLesson={this.props.selectLessonAction}/>
            </ConnectedRouter>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state)
    const { popup } = state.alert
    const { profile } = state.profile
    const { lessons, lessonId } = state.lessons
    const { match } = ownProps

    return {
        popup,
        profile,
        lessons,
        lessonId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        profileLoadAction: () => dispatch(profileLoadAction()),
        profileChangeNameAction: (name) => dispatch(profileChangeNameAction(name)),
        alertLoadAction: () => dispatch(alertLoadAction()),
        alertCloseInformAction: (value) => dispatch(alertCloseInformAction(value)),
        alertSendInformAction: (data) => dispatch(alertSendInformAction(data)),
        lessonsLoadAction: () => dispatch(lessonsLoadAction()),
        selectLessonAction: (id) => dispatch(selectLessonAction(id))
        // redirect: (value) => dispatch(push(`/${value}`)),
    }
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppContainerClass)