import { useCallback } from 'react'
import useActiveWeb3React from '../useActiveWeb3React'
import DestinareContract from '../../abi/DestinareContract.json'

export const useClaimPrivateSale = () => {
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

export const useBuyPrivateSale = () => {
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
