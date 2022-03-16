import { useCallback } from 'react'
import useActiveWeb3React from '../useActiveWeb3React'

export const useClaimPrivateSale = () => {
    const { library, account } = useActiveWeb3React()

    return useCallback(async (callback) => {
        try {
            const contract = new library.eth.Contract(
                DestinareContract,
                process.env.REACT_APP_DESTINARE_CONTRACT_ADDRESS
            )
        } catch (err) {
            console.log({ err })
            if (typeof callback === 'function') {
                const _err = { err }
                callback(_err)
            }
        }
    })
}

export const useBuyPrivateSale = () => {
    return useCallback(async () => {})
}
