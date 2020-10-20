import React, { Component, Fragment } from 'react'
import Header from 'components/Header/Header'
import { connect } from 'react-redux'
import { mobileDrawerStateSetAction } from 'actions/header'


class HeaderContainerClass extends Component {
    
    handleMobileDrawerOpen = () => {
        const { mobileDrawer, mobileDrawerStateSetAction } = this.props
        mobileDrawerStateSetAction(!mobileDrawer)
    }

    render() {
        return(
            <Header { ...this.props } handleMobileDrawerOpen={ this.handleMobileDrawerOpen }/>
        )
    }
}

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

const mapDispatchToProps = (dispatch) => {
    return {
        mobileDrawerStateSetAction: (status) => dispatch(mobileDrawerStateSetAction(status))
    }
}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderContainerClass)