import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { mobileDrawerStateSetAction } from 'actions/header'
import { profileLoadAction, profileChangeNameAction } from 'actions/profile'

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
    bindActionCreators({ mobileDrawerStateSetAction, redirect: push, profileChangeNameAction }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Header)