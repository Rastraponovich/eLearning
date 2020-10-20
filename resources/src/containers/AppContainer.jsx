import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { ConnectedRouter, push } from 'connected-react-router'
import { history } from '../store'

import App from 'components/App/App'
import { alertLoadAction, alertCloseInformAction, alertSendInformAction } from 'actions/alerts'
import { profileLoadAction, profileChangeNameAction } from 'actions/profile'
import { lessonsLoadAction, selectLessonAction, createLessonAction, deleteLesonAction } from 'actions/lessons'
import { mobileDrawerStateLoadAction, mobileDrawerStateSetAction } from 'actions/header'
import { cartLoadAction, cartAddAction, cartDeleteAction, cartRemoveAction, cartMinusItemAction, cartPlusItemAction } from 'actions/cart'

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

    handleSelectLesson = (id) => {
        this.props.selectLessonAction(id)
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

    handleDeleteItem = (data) => {
        this.props.deleteLesonAction(data)
    }
    // handleNameChange = (value) => {
    //     this.props.profileChangeNameAction(value)
    // }
    
    handleRedirect = (path) => {
        this.props.redirect('lessons')
    }

    handleMobileDrawerOpen = () => {
        const { mobileDrawer, mobileDrawerStateSetAction } = this.props
        mobileDrawerStateSetAction(!mobileDrawer)
    }

    handleCartAdd = (data) => {
        const { cart } = this.props
        let quantity
        if (cart[data.id]) {
            quantity = cart[data.id].quantity+1
        } else {
            quantity = 1
        }
        
        data.quantity = quantity
        this.props.cartAddAction(data)
    }

    render() {
        return (
            <ConnectedRouter history={ history }>     
                <App
                    { ...this.props } 
                    handleCartAdd={ this.handleCartAdd }
                    handleMobileDrawerOpen={ this.handleMobileDrawerOpen }
                    handleRedirect={ this.handleRedirect }
                    handleDeleteItem={ this.handleDeleteItem }
                    handleSelectLesson={ this.props.selectLessonAction } 
                    handleCreateLesson={ this.handleCreateLesson } />
            </ConnectedRouter>
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
        mobileDrawerStateSetAction: (status) => dispatch(mobileDrawerStateSetAction(status)),
        cartLoadAction: () => dispatch(cartLoadAction()),
        cartDeleteAction: () => dispatch(cartDeleteAction()),
        cartAddAction: (data) => dispatch(cartAddAction(data)),
        cartRemoveAction: (itemId) => dispatch(cartRemoveAction(itemId)),
        cartPlusItemAction: (itemId) => dispatch(cartPlusItemAction(itemId)),
        cartMinusItemAction: (itemId) => dispatch(cartMinusItemAction(itemId)),

    }
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppContainerClass)