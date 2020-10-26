import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { mobileDrawerStateSetAction } from 'actions/header'
import {
    profileLoadAction,
    profileChangeNameAction,
    logoutAction,
    loginAction,
} from 'actions/profile'

import Header from 'components/Header/Header'

const mapStateToProps = (state) => {
    const { profile, token } = state.profile
    const { mobileDrawer } = state.header
    const { cart } = state.cart

    return {
        profile,
        mobileDrawer,
        cart,
        token,
    }
}

const mapDispatchToProps = {
    mobileDrawerStateSetAction,
    redirect: push,
    profileChangeNameAction,
    logoutAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
