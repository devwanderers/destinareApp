import React from 'react'
// import { useEthers, useEtherBalance } from '@usedapp/core'
// import { formatEther } from '@ethersproject/units'
// import Web3 from 'web3'
// import useSupply from './../../hooks/useSupply'

const SupplyCard = ({ title, supply }) => {
    return (
        <div className="border bg-white dark:bg-gray-4 border-gray-11 dark:border-gray-1 py-2 flex flex-col items-end pr-3 w-250px rounded-md space-y-2">
            <div className="text-lg text-gray-10 dark:text-gray-5">{title}</div>
            <div className="text-gray-10 dark:text-white font-medium text-3xl">
                {supply}
            </div>
        </div>
    )
}

const ConnectWalletHeader = () => {
    // const { status, connect, account } = useMetaMask()
    // const value = useSupply()
    const connectWallet = async () => {
        if (typeof window.ethereum !== 'undefined') {
            const ethereum = window.ethereum

            const accounts = await ethereum.request({
                method: 'eth_requestAccounts',
            })
            console.log({ accounts })
        }
    }
    // const { activateBrowserWallet, deactivate, account, error } = useEthers()
    // const etherBalance = useEtherBalance(account)
    // // // console.log({ value })
    // console.log({ account })
    // console.log({ etherBalance })
    // console.log({ error })
    // // console.log({ value })

    return (
        <div className="w-full pt-4 dark:bg-blue-1 bg-light-2 border-b border-gray-11 dark:border-gray-1 pl-4 pr-8 select-none">
            <div className="flex justify-between pb-6">
                <div className="font-medium text-3xl">
                    <span className="text-gray-10 dark:text-white">
                        Welcome to
                    </span>
                    <span className="text-primary"> Swapp</span>
                </div>
                <div className="flex flex-row space-x-5 leading-none">
                    <SupplyCard title="Total Supply:" supply="524,875,371" />
                    <SupplyCard
                        title="Circulating Supply:"
                        supply="195,344,403"
                    />
                    {/* <div className="text-white">
                        {etherBalance &&
                            parseFloat(formatEther(etherBalance)).toFixed(
                                3
                            )}{' '}
                        ETH
                    </div> */}
                    <button
                        onClick={connectWallet}
                        className="bg-primary text-white font-semibold   border-none text-xl px-6 py-4 rounded-md hover:ring-blue-2 hover:ring-2 "
                    >
                        Connect Wallet
                    </button>
                    {/* <div>
                        {!account ? (
                            <button
                                onClick={activateBrowserWallet}
                                className="bg-primary text-white font-semibold   border-none text-xl px-6 py-4 rounded-md hover:ring-blue-2 hover:ring-2 "
                            >
                                Connect Wallet
                            </button>
                        ) : (
                            <button
                                onClick={deactivate}
                                className="bg-primary text-white font-semibold   border-none text-xl px-6 py-4 rounded-md hover:ring-blue-2 hover:ring-2 "
                            >
                                Disconnect
                            </button>
                        )}
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default ConnectWalletHeader
