import { createSelector } from 'reselect'

export const scInteractionReducerSelector = createSelector(
    (state) => state.scInteraction,
    (scInteraction) => scInteraction
)

export const dataSCSelector = createSelector(
    scInteractionReducerSelector,
    (scInteraction) => scInteraction.data
)

export const fetchingDataSCSelector = createSelector(
    scInteractionReducerSelector,
    (scInteraction) => scInteraction.fetching
)

export const fetchedDataSCSelector = createSelector(
    scInteractionReducerSelector,
    (scInteraction) => scInteraction.fetchedData
)

export const totalTokensPrivateSelector = createSelector(
    dataSCSelector,
    (data) => data.totalTokensPrivate
)

export const totalTokensPreSelector = createSelector(
    dataSCSelector,
    (data) => data.totalTokensPre
)
