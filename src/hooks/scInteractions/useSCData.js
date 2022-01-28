/* eslint-disable no-unused-vars */
import { useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useWeb3React } from '@web3-react/core'
import useDeepCompareEffect from '../useDeepCompareEffect'
import useActiveWeb3React from '../useActiveWeb3React'

import { scInteractionReducerSelector } from '../../store/reducers/scInteractionReducer/selectors'

const useSCData = () => {
    const reducer = useSelector(scInteractionReducerSelector)
    const { data, fetchedData, fetching, reload } = reducer

    return {
        fetching,
        fetchedData,
        data,
        reload,
    }
}

export default useSCData
