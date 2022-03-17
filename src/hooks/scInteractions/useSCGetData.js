/* eslint-disable no-unused-vars */
import { useState, useCallback, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useWeb3React } from '@web3-react/core'
import DestinareContract from '../../abi/DestinareContract.json'
import * as scActions from '../../store/reducers/scInteractionReducer/actions'
import useDeepCompareEffect from '../useDeepCompareEffect'
import useActiveWeb3React from '../useActiveWeb3React'
import useInterval from '../useInterval'
import useSCData from './useSCData'
import { abortablePromise } from '../../services/promises'
import useSCInteractions from './useSCInteractions'

const useSCGetData = () => {
    const { library, account } = useActiveWeb3React()
    const { reloadData } = useSCInteractions()
    const { fetching: fetchingData, reload, fetchedData } = useSCData()
    const [currentAccount, setCurrentAccount] = useState(null)
    // const [aborting, setAbort] = useState(false)
    const [error, setError] = useState(false)
    const dispatch = useDispatch()

    const refController = useRef(new AbortController())

    // Acciones conectadas con dispatch
    const setData = (data) => dispatch(scActions.setData(data))
    const setFetchingData = (data) => dispatch(scActions.setFetchingData(data))
    const clearData = () => dispatch(scActions.clearData())
    // const { library, account } = useWeb3React()

    const abortCalls = useCallback(() => {
        const controller = refController.current
        controller.abort()
        refController.current = new AbortController()
    }, [])

    const getStakes = async (contract) => {
        const stakes = []
        for (let i = 0; i < 5; i++) {
            const stake = await contract.methods.stakeTypes(i).call()
            stakes.push({ ...stake })
        }
        return stakes
    }

    const getStakesReward = async (contract, stakes) => {
        for (let i = 0; i < stakes.length; i++) {
            const element = stakes[i]

            if (Number(element.tokensLocked) > 0) {
                element.reward = await contract.methods
                    .calculateReward(account, i.toString())
                    .call({ from: account })
            }
        }
        return stakes
    }

    // console.log(fetchingData)

    const getContractData = useCallback(
        ({ signal }) => {
            return abortablePromise({ signal }, async (resolve, reject) => {
                try {
                    const contract = new library.eth.Contract(
                        DestinareContract,
                        process.env.REACT_APP_DESTINARE_CONTRACT_ADDRESS
                    )

                    const startDate = await contract.methods
                        .startPrivateSaleDate()
                        .call()

                    // const claimedTokens = await contract.methods
                    //     .claimTokens(account)
                    //     .call()

                    const circulatingSupply = await contract.methods
                        .circulatingSupply()
                        .call()

                    const totalSupply = await contract.methods
                        .totalSupply()
                        .call()

                    // const getPresaleInfo = await contract.methods
                    //     .getPresaleInfo()
                    //     .call()

                    // const getUserInfo = await contract.methods
                    //     .getUserInfo()
                    //     .call({ from: account })

                    const contractStakes = await getStakes(contract)

                    const _userStakes = await contract.methods
                        .stakeOf(account)
                        .call({ from: account })
                        .then((res) => {
                            const object = { ...res }
                            const array = Object.keys(object).reduce(
                                (acc, o, index) => {
                                    if (index > 2) {
                                        return { ...acc, [o]: object[o] }
                                    }
                                    return acc
                                },
                                {}
                            )
                            const arrayObjects = array._stakeTime.reduce(
                                (acc, item, index) => {
                                    return [
                                        ...acc,
                                        {
                                            stakeTime: array._stakeTime[index],
                                            tokensLocked:
                                                array._tokensLocked[index],
                                            type: array._type[index],
                                        },
                                    ]
                                },
                                []
                            )
                            return arrayObjects
                        })

                    const userStakes = await getStakesReward(
                        contract,
                        _userStakes
                    )

                    // Balance of user
                    const userTokens = await contract.methods
                        .balanceOf(account)
                        .call({ from: account })
                    // Unclaimed balance of user
                    const totalTokensPrivate = await contract.methods
                        .totalTokensPrivate(account)
                        .call({ from: account })
                    const totalTokensPre = await contract.methods
                        .totalTokensPre(account)
                        .call({ from: account })

                    const isStakeholder = await contract.methods
                        .isStakeholder(account)
                        .call()

                    const totalUserStakes = await contract.methods
                        .totalUserStakes(account)
                        .call()

                    resolve({
                        startDate,
                        circulatingSupply,
                        totalSupply,
                        // getPresaleInfo,
                        // getUserInfo,
                        contractStakes,
                        userStakes,
                        userTokens,
                        totalTokensPrivate,
                        totalTokensPre,
                        isStakeholder,
                        totalUserStakes,
                        // claimedTokens,
                    })
                } catch (err) {
                    console.log({ err })
                    reject(err)
                }
            })
        },
        [library, account]
    )

    const getData = useCallback(async () => {
        if (!fetchingData && library?.eth && account) {
            setFetchingData(true)
            const controller = refController.current
            try {
                const signal = controller.signal
                const data = await getContractData({
                    signal,
                })
                setData({
                    ...data,
                })
                setFetchingData(false)
            } catch (err) {
                setFetchingData(false)
                if (err?.name === 'AbortError') {
                    // setAbort(true)
                    console.log('Promise Aborted')
                } else {
                    setError(true)
                    console.log(err)
                }
            }
        }
    }, [library, account, fetchingData])

    const resetData = useCallback(() => {
        clearData()
    }, [library, account])

    useEffect(() => {
        if (reload) {
            setError(false)
            reloadData(false)
            if (fetchingData) {
                abortCalls()
            } else {
                // resetData()
                getData()
            }
        }
    }, [reload])

    useDeepCompareEffect(() => {
        if (!account && fetchingData) {
            reloadData(true)
            abortCalls()
        } else if (!fetchedData && !fetchingData && !error) {
            getData()
        } else if (currentAccount !== account) {
            setCurrentAccount(account)
            if (currentAccount) {
                if (fetchingData) abortCalls()
                resetData()
            }
        }
    }, [library, account, fetchedData, fetchingData])
}

export default useSCGetData
