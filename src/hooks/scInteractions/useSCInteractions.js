import { useCallback } from 'react'
import DestinareContract from '../../abi/DestinareContract.json'
import useActiveWeb3React from '../useActiveWeb3React'
import { useDispatch } from 'react-redux'
import * as scActions from '../../store/reducers/scInteractionReducer/actions'

const useSCInteractions = () => {
    const { library, account } = useActiveWeb3React()
    const dispatch = useDispatch()
    const setReload = (reload) => dispatch(scActions.setReload(reload))

    const reserveToken = useCallback(
        async (amount, callback) => {
            try {
                const contract = new library.eth.Contract(
                    DestinareContract,
                    process.env.REACT_APP_DESTINARE_CONTRACT_ADDRESS
                )
                console.log({ account })
                const tx = await contract.methods
                    .reserveTokens()
                    .send({ from: account, value: amount * 1e18 })
                    .then((res) => res)
                console.log('reserveToken', tx)
                if (tx.status) reloadData(true)
                if (typeof callback === 'function') {
                    const message = 'Se reservaron tokens con exito'
                    callback(message)
                }
            } catch (err) {
                console.log({ err })
                if (typeof callback === 'function') {
                    const _err = { err }
                    callback(_err)
                }
            }
        },
        [library, account]
    )

    const claimToken = useCallback(
        async (callback) => {
            try {
                const contract = new library.eth.Contract(
                    DestinareContract,
                    process.env.REACT_APP_DESTINARE_CONTRACT_ADDRESS
                )
                const tokens = await contract.methods
                    .claimPresaleTokens()
                    .send({ from: account })
                console.log('claimToken', tokens)
                if (tokens.status) reloadData(true)
                if (typeof callback === 'function') {
                    const message = 'Se reservaron tokens con exito'
                    callback(message)
                }
            } catch (err) {
                console.log({ err })
                if (typeof callback === 'function') {
                    const _err = { err }
                    callback(_err)
                }
            }
        },
        [library, account]
    )

    const createStake = useCallback(
        async (stake, type, callback) => {
            try {
                const contract = new library.eth.Contract(
                    DestinareContract,
                    process.env.REACT_APP_DESTINARE_CONTRACT_ADDRESS
                )
                const created = await contract.methods
                    .createStake(stake, type)
                    .send({ from: account })
                console.log('createStake', created)
                if (created.status) reloadData(true)
                if (typeof callback === 'function') callback()
            } catch (err) {
                const res = { err }
                if (typeof callback === 'function') callback(res)
                console.log({ err })
            }
        },
        [library, account]
    )

    const getReward = useCallback(
        async (stake, callback) => {
            try {
                const contract = new library.eth.Contract(
                    DestinareContract,
                    process.env.REACT_APP_DESTINARE_CONTRACT_ADDRESS
                )
                console.log(stake)
                const withdrawal = await contract.methods
                    .withdrawReward(stake)
                    .send({ from: account })
                console.log('getReward', withdrawal)
                if (withdrawal.status) reloadData(true)
                if (typeof callback === 'function') callback()
            } catch (err) {
                const res = { err }
                if (typeof callback === 'function') callback(res)
                console.log({ err })
            }
        },
        [library, account]
    )

    const reloadData = useCallback((data) => {
        setReload(data)
    }, [])

    return {
        reserveToken,
        claimToken,
        createStake,
        getReward,
        reloadData,
    }
}

export default useSCInteractions
