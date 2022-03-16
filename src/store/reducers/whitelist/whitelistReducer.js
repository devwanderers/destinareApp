import { createReducer } from '@reduxjs/toolkit'
import * as actions from './actions'

const initialState = {
    alreadyRequest: false,
    account: {
        walletAddresses: [],
        email: '',
        userName: '',
        verified: false,
        package: 0,
        stake: 0,
    },
    fetch: {
        alreadyRequest: false,
        whiteList: false,
    },
}

const whiteListReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(
            actions.hasRequestWhitelist.fulfilled,
            (state, { payload: { alreadyRequest } }) => {
                state.alreadyRequest = alreadyRequest
                state.fetch.alreadyRequest = true
            }
        )
        .addCase(actions.createWhitelist.fulfilled, (state) => {
            state.alreadyRequest = true
        })
        .addCase(actions.fetchWhitelist.fulfilled, (state, { payload }) => {
            state.account = payload.whitelist
            state.fetch.whiteList = true
        })
        .addCase(actions.updateWhiteList.fulfilled, (state, { payload }) => {
            state.account = payload.whitelist
        })
})

export default whiteListReducer
