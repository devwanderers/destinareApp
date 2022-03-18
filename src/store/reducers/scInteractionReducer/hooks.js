import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setReload } from './actions'
import { scInteractionReducerSelector } from './selectors'

export const useReloadData = () => {
    const dispatch = useDispatch()
    return useCallback((val) => dispatch(setReload(val)), [dispatch])
}

export const useSCData = () => {
    const reducer = useSelector(scInteractionReducerSelector)
    const { data, fetchedData, fetching, reload } = reducer

    return {
        fetching,
        fetchedData,
        data,
        reload,
    }
}
