import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { ConnectedRouter, push } from 'connected-react-router'
import App from 'components/App/App'
import { alertLoadAction, alertCloseInformAction, alertSendInformAction } from 'actions/alerts'
import { profileLoadAction, profileChangeNameAction } from 'actions/profile'
import { lessonsLoadAction, selectLessonAction, createLessonAction, deleteLesonAction } from 'actions/lessons'
import { mobileDrawerStateLoadAction, mobileDrawerStateSetAction } from 'actions/header'
import { cartLoadAction, cartAddAction, cartDeleteAction, cartRemoveAction } from 'actions/cart'

class AppContainerClass extends Component {

    componentDidMount() {
        const { 
            profile, 
            popup, 
            lessons,
            header,
            cart,
            alertLoadAction, 
            profileLoadAction,
            lessonsLoadAction, 
        } = this.props
        
        if (!Object.keys(lessons).length || !Object.keys(cart).length) {
            lessonsLoadAction()
            mobileDrawerStateLoadAction()
            cartLoadAction()

        }

        if (!profile.length || !popup.length ) {
            profileLoadAction()
            alertLoadAction()
        }
    }

    
    handleCreateLesson = (data) => {
        this.props.createLessonAction({ author: this.props.profile, data: data })
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
    
    handleRedirect = (path) => {
        this.props.redirect( path ? path : 'lessons')
    }
    
    render() {
        return (
                <App
                    { ...this.props } 
                    handleRedirect={ this.handleRedirect }
                    handleCreateLesson={ this.handleCreateLesson } />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { popup } = state.alert
    const { mobileDrawer } = state.header
    const { profile } = state.profile
    const { lessons, lessonId } = state.lessons
    const { cart } = state.cart
    const { match } = ownProps

    return {
        popup,
        mobileDrawer,
        profile,
        lessons,
        lessonId,
        cart
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log(dispatch)
    return {
        profileLoadAction: () => dispatch(profileLoadAction()),
        profileChangeNameAction: (name) => dispatch(profileChangeNameAction(name)),
        alertLoadAction: () => dispatch(alertLoadAction()),
        alertCloseInformAction: (value) => dispatch(alertCloseInformAction(value)),
        alertSendInformAction: (data) => dispatch(alertSendInformAction(data)),
        lessonsLoadAction: () => dispatch(lessonsLoadAction()),
        selectLessonAction: (id) => dispatch(selectLessonAction(id)),
        createLessonAction: (data) => dispatch(createLessonAction(data)),
        deleteLesonAction: (data) => dispatch(deleteLesonAction(data)),
        redirect: (value) => dispatch(push(`/${value}`)),
        mobileDrawerStateLoadAction: () => dispatch(mobileDrawerStateLoadAction()),
        mobileDrawerStateSetAction: () => dispatch(mobileDrawerStateSetAction()),
        cartLoadAction: () => dispatch(cartLoadAction()),
        cartDeleteAction: () => dispatch(cartDeleteAction()),
        cartAddAction: (data) => dispatch(cartAddAction(data)),
        cartRemoveAction: (itemId) => dispatch(cartRemoveAction(itemId)),
    }
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppContainerClass)