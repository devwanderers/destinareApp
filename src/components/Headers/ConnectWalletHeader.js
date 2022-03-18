import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { FaSignOutAlt } from 'react-icons/fa'
import useAuth from '../../hooks/useAuth'
import useCurrency from '../../hooks/useCurrency'
import { useSCData } from '../../store/reducers/scInteractionReducer/hooks'

const SupplyCard = ({ title, supply }) => {
    return (
        <div className="flex flex-row text-base justify-end">
            <div className="text-gray-10 dark:text-gray-5 mr-2">{title}</div>
            <div className="text-black-2 dark:text-white font-medium">
                {supply}
            </div>
        </div>
    )
}

const ConnectWalletHeader = ({
    className,
    containerClassName = 'flex flex-col-reverse lg:flex-col justify-end items-end',
}) => {
    const { login, logout } = useAuth()
    const { account } = useWeb3React()
    const { data } = useSCData()

    const decimalsTotalSupply = Number(data.totalSupply) / 1e18 + 250000000
    const circulatingSupply = Number(data.circulatingSupply) / 1e18

    return (
        <div className={className}>
            <div className={containerClassName}>
                <SupplyCard
                    title="Total Supply:"
                    supply={useCurrency(decimalsTotalSupply, 2)}
                />
                <SupplyCard
                    title="Circulating Supply:"
                    supply={useCurrency(circulatingSupply, 2)}
                />
                {!account ? (
                    <button
                        onClick={() => login()}
                        className="bg-primary text-white font-semibold border-none text-base w-32 py-1 rounded-md hover:ring-blue-2 hover:ring-2 mb-4 lg:mb-0 mt-0 lg:mt-2"
                    >
                        Connect Wallet
                    </button>
                ) : (
                    <div className="flex flex-row justify-end gap-2">
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
    )
}

export default ConnectWalletHeader
