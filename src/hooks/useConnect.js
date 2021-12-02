import { useEffect } from 'react'
import { useLocalStorage } from './useStorage'
import useAuth from './useAuth'
import { useWeb3React } from '@web3-react/core'

const useConnect = () => {
    const { login } = useAuth()
    const { active, connector, account, error } = useWeb3React()
    const [walletAuth, setWalletAuth] = useLocalStorage('walletAuth', false)

    useEffect(() => {
        if (!active && !account && typeof error === 'undefined' && walletAuth) {
            login()
        }
        // if (!account && !active && !walletAuth) {
        //     setWalletAuth(true)
        // }
    }, [login, active, error])

    useEffect(() => {
        if (account && connector) {
            const handleDeactivate = () => {
                setWalletAuth(false)
            }

            connector.on('Web3ReactDeactivate', handleDeactivate)
            return () => {
                connector.removeListener(
                    'Web3ReactDeactivate',
                    handleDeactivate
                )
            }
        }
        return undefined
    }, [connector])
}

export default useConnect
