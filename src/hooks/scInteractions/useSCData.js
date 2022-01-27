/* eslint-disable no-unused-vars */
import { useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useWeb3React } from '@web3-react/core'
import useDeepCompareEffect from '../useDeepCompareEffect'
import useActiveWeb3React from '../useActiveWeb3React'

import {
    dataSCSelector,
    fetchedDataSCSelector,
    fetchingDataSCSelector,
} from '../../store/reducers/scInteractionReducer/selectors'

const useSCData = () => {
    const data = useSelector(dataSCSelector)
    const fetchingData = useSelector(fetchingDataSCSelector)
    const fetchedData = useSelector(fetchedDataSCSelector)

    return {
        fetchingData,
        fetchedData,
        data,
    }
}

export default useSCData
