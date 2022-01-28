import { createAction } from '@reduxjs/toolkit'

export const setData = createAction('data/set')
export const clearData = createAction('data/clear')
export const setFetchingData = createAction('data/setFetching')
export const setReload = createAction('data/reload')
