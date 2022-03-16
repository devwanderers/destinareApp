import { createSelector } from 'reselect'

export const whitelistSelector = createSelector(
    (state) => state.whitelist,
    (whitelist) => whitelist
)

export const alreadyRequestSelector = createSelector(
    whitelistSelector,
    (whitelist) => whitelist.alreadyRequest
)

export const accountWhitelistSelector = createSelector(
    whitelistSelector,
    (whitelist) => whitelist.account
)

export const whiteListFetchSelector = createSelector(
    whitelistSelector,
    (whitelist) => whitelist.fetch
)
