import { createReducer } from '@reduxjs/toolkit'
import * as action from './actions'

const initialState = {
    reload: false,
    fetchedData: false,
    fetching: false,
    data: {
        startDate: null,
        circulatingSupply: 0,
        totalSupply: 0,
        getPresaleInfo: { 0: [], 1: [] },
        getUserInfo: [],
        contractStakes: [],
        totalTokens: '',
        userTokens: '',
        isStakeholder: false,
        totalUserStakes: '',
        claimedTokens: false,
    },
}

const scInteractionReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(action.setData, (state, { payload }) => ({
            ...state,
            data: { ...state.data, ...payload },
            fetchedData: true,
        }))
        .addCase(action.setFetchingData, (state, { payload }) => ({
            ...state,
            fetching: payload,
        }))
        .addCase(action.setReload, (state, { payload }) => ({
            ...state,
            reload: payload,
        }))
        .addCase(action.clearData, (state) => ({
            ...state,
            data: {
                startDate: null,
                circulatingSupply: 0,
                totalSupply: 0,
                getPresaleInfo: { 0: [], 1: [] },
                getUserInfo: [],
                contractStakes: [],
                userTokens: '',
                totalTokens: '',
                isStakeholder: false,
                totalUserStakes: '',
                claimedTokens: false,
            },
            fetchedData: false,
        }))
})

export default scInteractionReducer
