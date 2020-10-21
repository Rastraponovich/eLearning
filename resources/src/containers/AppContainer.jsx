import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import App from 'components/App/App'
import { alertLoadAction, alertCloseInformAction, alertSendInformAction } from 'actions/alerts'
import { profileLoadAction, profileChangeNameAction } from 'actions/profile'
import { lessonsLoadAction, selectLessonAction, createLessonAction, deleteLesonAction } from 'actions/lessons'
import { mobileDrawerStateLoadAction, mobileDrawerStateSetAction } from 'actions/header'
import { cartLoadAction, cartAddAction, cartDeleteAction, cartRemoveAction } from 'actions/cart'
import { bindActionCreators } from 'redux'

// handleShowAlert = (value, type = 'inform', isSelect = false, messageId) => {
//     this.props.alertSendInformAction(value, type, isSelect, messageId)
// }

// handleCloseAlert = (value) => {
//     this.props.alertCloseInformAction(value)
// }

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

const mapDispatchToProps = (dispatch) => 
    bindActionCreators({ 
        profileLoadAction,
        profileChangeNameAction,
        alertLoadAction,
        alertCloseInformAction,
        alertSendInformAction,
        lessonsLoadAction,
        selectLessonAction,
        createLessonAction,
        deleteLesonAction,
        deleteLesonAction,
        redirect: push,
        mobileDrawerStateLoadAction,
        mobileDrawerStateSetAction,
        cartLoadAction,
        cartDeleteAction,
        cartAddAction,
        cartRemoveAction,
     }, dispatch)

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