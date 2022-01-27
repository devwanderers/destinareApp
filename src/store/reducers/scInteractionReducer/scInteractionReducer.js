import { createReducer } from '@reduxjs/toolkit'
import * as action from './actions'

const initialState = {
    fetchedData: false,
    fetching: false,
    data: {
        circulatingSupply: 0,
        totalSupply: 0,
        getPresaleInfo: { 0: [], 1: [] },
        getUserInfo: [],
        contractStakes: [],
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
        .addCase(action.clearData, (state) => ({
            ...state,
            data: {
                circulatingSupply: 0,
                totalSupply: 0,
                getPresaleInfo: { 0: [], 1: [] },
                getUserInfo: [],
                contractStakes: [],
            },
        }))
})

export default scInteractionReducer
