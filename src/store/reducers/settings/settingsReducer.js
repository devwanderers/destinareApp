import { createReducer } from '@reduxjs/toolkit'
import { setThemeMode } from './actions'

const initialState = {
    themeMode: 'light',
}

const settingsReducer = createReducer(initialState, (builder) => {
    builder.addCase(setThemeMode, (state, { payload }) => ({
        ...state,
        themeMode: payload,
    }))
})

export default settingsReducer
