import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import PropTypes from 'prop-types'
import App from 'components/App/App'
import {
    alertLoadAction,
    alertCloseInformAction,
    alertSendInformAction,
} from 'actions/alerts'
import {
    profileLoadAction,
    profileChangeNameAction,
    registrationAction,
    logoutAction,
    loginAction,
} from 'actions/profile'
import {
    lessonsLoadAction,
    selectLessonAction,
    createLessonAction,
    deleteLesonAction,
} from 'actions/lessons'
import {
    mobileDrawerStateLoadAction,
    mobileDrawerStateSetAction,
} from 'actions/header'
import {
    cartLoadAction,
    cartAddAction,
    cartDeleteAction,
    cartRemoveAction,
} from 'actions/cart'
import { initAction } from 'actions/init'

// handleShowAlert = (value, type = 'inform', isSelect = false, messageId) => {
//     this.props.alertSendInformAction(value, type, isSelect, messageId)
// }

// handleCloseAlert = (value) => {
//     this.props.alertCloseInformAction(value)
// }

const mapStateToProps = (state) => {
    const { popup } = state.alert
    const { mobileDrawer } = state.header
    const { profile, token } = state.profile
    const { lessonsList, lessonId } = state.lessons
    const { cart } = state.cart

    return {
        popup,
        mobileDrawer,
        profile,
        lessonsList,
        lessonId,
        cart,
        token,
    }
}

const mapDispatchToProps = {
    profileLoadAction,
    profileChangeNameAction,
    registrationAction,
    alertLoadAction,
    alertCloseInformAction,
    alertSendInformAction,
    lessonsLoadAction,
    selectLessonAction,
    createLessonAction,
    deleteLesonAction,
    logoutAction,
    loginAction,
    redirect: push,
    mobileDrawerStateLoadAction,
    mobileDrawerStateSetAction,
    cartLoadAction,
    cartDeleteAction,
    cartAddAction,
    cartRemoveAction,
    initAction,
}

connect.PropTypes = {
    initAction: PropTypes.func.isRequired,
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const { profile } = stateProps

    const handleCreateLesson = (data) => {
        dispatchProps.createLessonAction({ author: profile, data: data })
    }

    return {
        ...stateProps,
        ...dispatchProps,
        handleCreateLesson,
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(App)
