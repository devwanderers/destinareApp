/* eslint-disable no-unused-vars */
import { useCallback } from 'react'
import useActiveWeb3React from '../useActiveWeb3React'
import DestinareContract from '../../abi/DestinareContract.json'

export const useClaimPreSale = () => {
    const { library, account } = useActiveWeb3React()

    return useCallback(
        async (callback) => {
            try {
                const contract = new library.eth.Contract(
                    DestinareContract,
                    process.env.REACT_APP_DESTINARE_CONTRACT_ADDRESS
                )
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

export const useBuyPreSale = () => {
    const { library, account } = useActiveWeb3React()
    return useCallback(
        async (plan, callback) => {
            try {
                const contract = new library.eth.Contract(
                    DestinareContract,
                    process.env.REACT_APP_DESTINARE_CONTRACT_ADDRESS
                )
                const tx = await contract.methods
                    .buyPreSaleTokens(plan.packageId)
                    .send({
                        from: account,
                        value: plan.amount * 1e18,
                    })
                    .then((res) => res)
                console.log('buy presale Tokens', tx)
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
