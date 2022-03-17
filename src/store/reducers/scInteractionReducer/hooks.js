import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setReload } from './actions'
import { totalTokensPreSelector, totalTokensPrivateSelector } from './selectors'

export const useTotalTokensPrivate = () => {
    return useSelector(totalTokensPrivateSelector)
}
export const useTotalTokensPre = () => {
    return useSelector(totalTokensPreSelector)
}

export const useReloadData = () => {
    const dispatch = useDispatch()
    return useCallback((val) => dispatch(setReload(val)), [dispatch])
}
