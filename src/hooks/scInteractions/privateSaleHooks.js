/* eslint-disable no-unused-vars */
import { useCallback } from 'react'
import useActiveWeb3React from '../useActiveWeb3React'
import DestinareContract from '../../abi/DestinareContract.json'
import { useReloadData } from './../../store/reducers/scInteractionReducer/hooks'

export const useClaimPrivateSale = () => {
    const { library, account } = useActiveWeb3React()
    const reloaData = useReloadData()

    return useCallback(
        async (stakeId, callback) => {
            try {
                const contract = new library.eth.Contract(
                    DestinareContract,
                    process.env.REACT_APP_DESTINARE_CONTRACT_ADDRESS
                )
                const tokens = await contract.methods
                    .claimPrivateSaleTokens(stakeId)
                    .send({ from: account })
                await reloaData(true)
                if (typeof callback === 'function') {
                    const message = 'Tokens were successfully claimed'
                    callback(undefined, message, tokens)
                }
            } catch (err) {
                if (typeof callback === 'function') {
                    const _err = { err }
                    callback(_err)
                }
            }
        },
        [library, account]
    )
}

export const useBuyPrivateSale = () => {
    const { library, account } = useActiveWeb3React()
    const reloaData = useReloadData()
    return useCallback(
        async (plan, callback) => {
            try {
                const contract = new library.eth.Contract(
                    DestinareContract,
                    process.env.REACT_APP_DESTINARE_CONTRACT_ADDRESS
                )
                const tx = await contract.methods
                    .buyPrivateSaleTokens(plan.packageId)
                    .send({
                        from: account,
                        value: plan.amount * 1e18,
                    })
                    .then((res) => res)
                await reloaData(true)
                console.log('buy private Tokens', tx)
                if (typeof callback === 'function') {
                    const message = 'Tokens were successfully purchased'
                    callback(undefined, message, tx)
                }
            } catch (err) {
                if (typeof callback === 'function') {
                    const _err = { err }
                    callback(_err)
                }
            }
        },
        [library, account]
    )
}
