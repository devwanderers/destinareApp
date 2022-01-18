import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { FaSignOutAlt } from 'react-icons/fa'
import useSCInteractions from './../../hooks/useSCInteractions'
import useAuth from '../../hooks/useAuth'
import useCurrency from '../../hooks/useCurrency'

const SupplyCard = ({ title, supply }) => {
    return (
        <div className="border bg-white dark:bg-gray-4 border-gray-11 dark:border-gray-1 py-2 flex flex-col items-end pr-3 w-250px rounded-md space-y-2 my-2">
            <div className="text-xs text-gray-10 dark:text-gray-5">{title}</div>
            <div className="text-gray-10 dark:text-white font-medium text-2xl">
                {supply}
            </div>
        </div>
    )
}

const ConnectWalletHeader = () => {
    const { login, logout } = useAuth()
    const { account } = useWeb3React()
    const { data } = useSCInteractions()

    const decimalsTotalSupply = Number(data.totalSupply) / 1e18
    const circulatingSupply = Number(data.circulatingSupply) / 1e18

    return (
        <div className="mx-5 dark:bg-blue-1 bg-light-2 border-b border-gray-11 dark:border-gray-1 select-none">
            <div className="w-full mx-auto flex flex-wrap flex-col xl:flex-row justify-end pb-6">
                <div className="flex mt-10 lg:mt-0 flex-wrap-reverse flex-row lg:flex-wrap items-center justify-center space-x-0 sm:space-x-5 leading-none py-4">
                    <SupplyCard
                        title="Total Supply:"
                        supply={useCurrency(decimalsTotalSupply, 0)}
                    />
                    <SupplyCard
                        title="Circulating Supply:"
                        supply={useCurrency(circulatingSupply, 0)}
                    />
                    <div className="my-2">
                        {!account ? (
                            <button
                                onClick={() => login()}
                                className="bg-primary text-white font-semibold border-none text-xl px-6 py-4 rounded-md hover:ring-blue-2 hover:ring-2"
                            >
                                Connect Wallet
                            </button>
                        ) : (
                            <div className="ml-7">
                                <p className="text-base mb-3 dark:text-white">
                                    {account.substring(0, 4)}...
                                    {account.slice(-4)}
                                </p>
                                <span className="text-primary text-right">
                                    <FaSignOutAlt
                                        onClick={() => logout()}
                                        size={22}
                                        style={{
                                            marginLeft: 'auto',
                                            cursor: 'pointer',
                                        }}
                                    />
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConnectWalletHeader
