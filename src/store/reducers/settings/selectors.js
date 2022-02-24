import { createSelector } from 'reselect'

export const settingsReducerSelector = createSelector(
    (state) => state.settings,
    (settingsReducer) => settingsReducer
)

export const themeModeSelector = createSelector(
    settingsReducerSelector,
    ({ themeMode }) => themeMode
)
