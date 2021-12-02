import { createReducer } from '@reduxjs/toolkit'
import * as action from './actions'

const initialState = {
    data: {
        circulatingSupply: 0,
        totalSupply: 0,
        getPresaleInfo: { 0: [], 1: [] },
        getUserInfo: [],
    },
}

const scInteractionReducer = createReducer(initialState, (builder) => {
    builder.addCase(action.setData, (state, { payload }) => ({
        ...state,
        data: { ...state.data, ...payload },
    }))
})

export default scInteractionReducer
