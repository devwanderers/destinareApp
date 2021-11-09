import React, { Component } from 'react'
import { connect } from 'react-redux'

const withWalletConnect = (WrappedComponent) => {
    const HOC = class extends Component {
        render() {
            return <WrappedComponent {...this.props} />
        }
    }
    HOC.displayName = 'WithLayout'
    return connect(
        (state) => ({}),
        (dispatch) => ({})
    )(HOC)
}

export default withWalletConnect
