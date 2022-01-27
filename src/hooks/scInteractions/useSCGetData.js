/* eslint-disable no-unused-vars */
import { useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useWeb3React } from '@web3-react/core'
import DestinareContract from '../../abi/DestinareContract.json'
import * as scActions from '../../store/reducers/scInteractionReducer/actions'
import useDeepCompareEffect from '../useDeepCompareEffect'
import useActiveWeb3React from '../useActiveWeb3React'
import useInterval from '../useInterval'
import useEffectOnce from '../useEffectOnce'
import useSCData from './useSCData'

const useSCGetData = () => {
    const { library, account } = useActiveWeb3React()
    const { fetchingData } = useSCData()
    const dispatch = useDispatch()

    // Acciones conectadas con dispatch
    const setData = (data) => dispatch(scActions.setData(data))
    const setFetchingData = (data) => dispatch(scActions.setFetchingData(data))
    // const { library, account } = useWeb3React()

    const getStakes = async (contract) => {
        const stakes = []
        for (let i = 0; i < 4; i++) {
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

    const getData = useCallback(async () => {
        if (!fetchingData && library?.eth) {
            setFetchingData(true)
            try {
                const contract = new library.eth.Contract(
                    DestinareContract,
                    process.env.REACT_APP_DESTINARE_CONTRACT_ADDRESS
                )

                const circulatingSupply = await contract.methods
                    .circulatingSupply()
                    .call()

                const totalSupply = await contract.methods.totalSupply().call()

                const getPresaleInfo = await contract.methods
                    .getPresaleInfo()
                    .call()

                const getUserInfo = await contract.methods
                    .getUserInfo()
                    .call({ from: account })

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

                const userStakes = await getStakesReward(contract, _userStakes)

                const userTokens = await contract.methods
                    .balanceOf(account)
                    .call({ from: account })
                console.log({ userTokens })
                const isStakeholder = await contract.methods
                    .isStakeholder(account)
                    .call()

                const totalUserStakes = await contract.methods
                    .totalUserStakes(account)
                    .call()
                console.log('totalUserStakes', totalUserStakes)

                setData({
                    circulatingSupply,
                    totalSupply,
                    getPresaleInfo,
                    getUserInfo,
                    contractStakes,
                    userStakes,
                    userTokens,
                    isStakeholder,
                    totalUserStakes,
                })
            } catch (err) {
                setFetchingData(false)
                console.log({ err })
            }
        }
    }, [library, account])

    useEffectOnce(() => {
        getData()
    })

    useDeepCompareEffect(() => {
        getData()
    }, [library, account])
}

export default useSCGetData
