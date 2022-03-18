import { createAsyncThunk, createAction } from '@reduxjs/toolkit'
import * as types from './types'
import axiosInstance from './../../services/axiosConfig'
import { accountWhitelistSelector } from './selectors'

export const clearWhitelistReducer = createAction(types.CLEAR_WHITELIST)

export const hasRequestWhitelist = createAsyncThunk(
    types.HAS_REQUEST_WHITELIST,
    async (walletAddress, { rejectWithValue }) => {
        try {
            const res = await axiosInstance.post('whitelist/hasrequest', {
                walletAddress,
            })
            return res?.data
        } catch (error) {
            if (!error.response) {
                throw error
            }
            return rejectWithValue(error.response.data)
        }
    }
)

export const createWhitelist = createAsyncThunk(
    types.REQUEST_WHITELIST,
    async ({ userName, email, walletAddresses }, { rejectWithValue }) => {
        try {
            const res = await axiosInstance.post('whitelist/create', {
                userName,
                email,
                walletAddresses,
            })
            return res?.data
        } catch (error) {
            if (!error.response) {
                throw error
            }
            console.log({ error })
            return rejectWithValue(error.response.data)
        }
    }
)

export const updateWhiteList = createAsyncThunk(
    types.UPDATE_WHITELIST,
    async (payload, { rejectWithValue, getState }) => {
        try {
            const state = getState()
            const currentWhiteList = accountWhitelistSelector(state)
            console.log({ currentWhiteList })
            const res = await axiosInstance.put(
                `whitelist/update/${currentWhiteList._id}`,
                payload
            )
            return res?.data
        } catch (error) {
            if (!error.response) {
                throw error
            }
            console.log({ error })
            return rejectWithValue(error.response.data)
        }
    }
)

export const fetchWhitelist = createAsyncThunk(
    types.FETCH_WHITELIST,
    async (walletAddress, { rejectWithValue }) => {
        try {
            const res = await axiosInstance.post('whitelist/getbyaddress', {
                walletAddress,
            })
            return res?.data
        } catch (error) {
            if (!error.response) {
                throw error
            }
            console.log({ error })
            return rejectWithValue(error.response.data)
        }
    }
)
