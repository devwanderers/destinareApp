/* eslint-disable no-unused-vars */
import { useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useWeb3React } from '@web3-react/core'
import DestinareContract from '../abi/DestinareContract.json'
import useDeepCompareEffect from './useDeepCompareEffect'
import useActiveWeb3React from './useActiveWeb3React'
import * as scActions from '../store/reducers/scInteractionReducer/actions'
import { scInteractionReducerSelector } from '../store/reducers/scInteractionReducer/selectors'
import useInterval from './useInterval'

const useSCInteractions = () => {
    const { library, account } = useActiveWeb3React()
    const [initData, setinitData] = useState(false)
    // Estado traido del reducer
    const scInteractions = useSelector(scInteractionReducerSelector)
    const dispatch = useDispatch()

    // Acciones conectadas con dispatch
    const setData = (data) => dispatch(scActions.setData(data))

    // const { library, account } = useWeb3React()

    const reserveToken = useCallback(
        async (amount) => {
            try {
                const contract = new library.eth.Contract(
                    DestinareContract,
                    process.env.REACT_APP_DESTINARE_CONTRACT_ADDRESS
                )
                const tx = await contract.methods
                    .reserveTokens()
                    .send({ from: account, value: amount * 1e18 })
                    .then((res) => res)
                console.log({ tx })
                if (tx.status) setinitData(false)
            } catch (err) {
                console.log({ err })
            }
        },
        [library]
    )

    const claimToken = useCallback(async () => {
        try {
            const contract = new library.eth.Contract(
                DestinareContract,
                process.env.REACT_APP_DESTINARE_CONTRACT_ADDRESS
            )
            const tokens = await contract.methods
                .claimPresaleTokens()
                .send({ from: account })
            console.log('claimToken', tokens)
        } catch (err) {
            console.log({ err })
        }
    }, [library])

    const getData = async () => {
        if (!initData && library?.eth) {
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
            const userTokens = await contract.methods
                .totalTokens(account)
                .call()
            console.log({ userTokens })
            setData({
                circulatingSupply,
                totalSupply,
                getPresaleInfo,
                getUserInfo,
                contractStakes,
                userTokens,
            })
            setinitData(true)
        }
    }

    const getStakes = async (contract) => {
        const stakes = []
        for (let i = 0; i < 4; i++) {
            const stake = await contract.methods.stakeTypes(i).call()
            stakes.push({ ...stake })
        }
        return stakes
    }

    useDeepCompareEffect(() => {
        getData()
    }, [library])

    useInterval(
        () => {
            getData()
        },
        !initData ? 500 : null
    )

    return {
        data: scInteractions.data,
        reserveToken,
        claimToken,
    }
}

export default useSCInteractions
