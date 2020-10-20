import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { mobileDrawerStateSetAction } from 'actions/header'
import Header from 'components/Header/Header'

const mapStateToProps = (state, ownProps) => {
    const { profile } = state.profile
    const { mobileDrawer } = state.header
    const { cart } = state.cart

    return {
        profile,
        mobileDrawer,
        cart
    }
}

const mapDispatchToProps = (dispatch) => 
    bindActionCreators({ mobileDrawerStateSetAction }, dispatch)
    
const mergeProps = (stateProps, dispatchProps, ownProps) => {

    return {
        ...stateProps,
        ...dispatchProps,
    }
}    

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Header)