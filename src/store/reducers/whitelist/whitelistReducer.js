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
    fetching: { alreadyRequest: false, whiteList: false },
}

const whiteListReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(actions.hasRequestWhitelist.pending, (state) => {
            state.fetching.alreadyRequest = true
        })
        .addCase(actions.hasRequestWhitelist.rejected, (state) => {
            state.fetching.alreadyRequest = false
        })
        .addCase(
            actions.hasRequestWhitelist.fulfilled,
            (state, { payload: { alreadyRequest } }) => ({
                ...state,
                alreadyRequest,
                fetch: { ...state.fetch, alreadyRequest: true },
                fetching: { ...state.fetching, alreadyRequest: false },
            })
        )
        .addCase(actions.createWhitelist.fulfilled, (state) => {
            state.alreadyRequest = true
        })
        .addCase(actions.fetchWhitelist.pending, (state) => {
            state.fetching.whiteList = true
        })
        .addCase(actions.fetchWhitelist.rejected, (state) => {
            state.fetching.whiteList = false
        })
        .addCase(actions.fetchWhitelist.fulfilled, (state, { payload }) => ({
            ...state,
            account: payload.whiteList,
            fetch: { ...state.fetch, whiteList: true },
            fetching: { ...state.fetch, whiteList: false },
        }))
        .addCase(actions.updateWhiteList.fulfilled, (state, { payload }) => {
            state.account = payload.whiteList
        })
})

export default whiteListReducer
