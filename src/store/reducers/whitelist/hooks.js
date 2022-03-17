import { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    accountWhitelistSelector,
    alreadyRequestSelector,
    whiteListFetchingSelector,
    whiteListFetchSelector,
} from './selectors'
import { useWeb3React } from '@web3-react/core'
import {
    hasRequestWhitelist,
    createWhitelist,
    fetchWhitelist,
    updateWhiteList,
} from './actions'

export const useAlreadyRequestWhitelist = () => {
    const { account } = useWeb3React()
    const alreadyRequest = useSelector(alreadyRequestSelector)
    const dispatch = useDispatch()

    useEffect(async () => {
        if (account) dispatch(hasRequestWhitelist(account))
    }, [account, dispatch])

    return alreadyRequest
}

export const useWhiteList = () => {
    const { account } = useWeb3React()

    const whitelist = useSelector(accountWhitelistSelector)
    const dispatch = useDispatch()

    useEffect(async () => {
        if (account) dispatch(fetchWhitelist(account))
    }, [account, dispatch])

    return whitelist
}

export const useRequestWhitelist = () => {
    const dispatch = useDispatch()
    return useCallback((data) => dispatch(createWhitelist(data)), [dispatch])
}

export const useUpdateWhitelist = () => {
    const dispatch = useDispatch()
    return useCallback((data) => dispatch(updateWhiteList(data)), [dispatch])
}

export const useFetchWhiteList = () => {
    return useSelector(whiteListFetchSelector)
}

export const useFetchingWhiteList = () => {
    return useSelector(whiteListFetchingSelector)
}
