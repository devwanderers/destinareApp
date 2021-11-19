import React, { useState } from 'react'
import { useWeb3React } from '@web3-react/core'
// import { useEthers, useEtherBalance } from '@usedapp/core'
// import { formatEther } from '@ethersproject/units'
// import useSupply from './../../hooks/useSupply'
import { injected } from './../../wallet/connectors'
// import DestinareContract from '../../abi/DestinareContract.json'
import { useLocalStorage } from '@usedapp/core'
import useEffectOnce from './../../hooks/useEffectOnce'

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
    const [initiated, setInitiated] = useState(false)
    const [walletActive, setValue] = useLocalStorage('wallet', false)
    const { active, account, library, activate, connector, deactivate, error } =
        useWeb3React()

    async function connect() {
        try {
            await activate(injected)
            if (!walletActive) setValue(true)
        } catch (ex) {
            console.log({ ex })
        }
    }

    async function disconnect() {
        try {
            deactivate()
        } catch (ex) {
            console.log(ex)
        }
    }

    // async function circulatingSupply() {
    //     try {
    //         console.log(process.env.REACT_APP_DESTINARE_CONTRACT_ADDRESS)
    //         const contract = new library.eth.Contract(
    //             DestinareContract,
    //             process.env.REACT_APP_DESTINARE_CONTRACT_ADDRESS
    //         )
    //         const _circulatingSupply = await contract.methods
    //             .circulatingSupply()
    //             .call()
    //         const getPresaleInfo = await contract.methods
    //             .getPresaleInfo()
    //             .call()
    //         const getUserInfo = await contract.methods.getUserInfo().call()
    //         console.log({ _circulatingSupply })
    //         console.log({ getPresaleInfo })
    //         console.log({ getUserInfo })
    //     } catch (ex) {
    //         console.log(ex)
    //     }
    // }

    useEffectOnce(async () => {
        if (walletActive) await connect()
        setInitiated(true)
    })

    console.log({ active })
    console.log({ connector })
    console.log({ error })
    console.log({ library })

    if (!initiated) return null

    return (
        <div className="w-full pt-4 dark:bg-blue-1 bg-light-2 border-b border-gray-11 dark:border-gray-1 px-12 select-none">
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
                    {/* <button
                        onClick={connectWallet}
                        className="bg-primary text-white font-semibold   border-none text-xl px-6 py-4 rounded-md hover:ring-blue-2 hover:ring-2 "
                    >
                        Connect Wallet
                    </button> */}
                    <div>
                        {!account ? (
                            <button
                                onClick={connect}
                                className="bg-primary text-white font-semibold   border-none text-xl px-6 py-4 rounded-md hover:ring-blue-2 hover:ring-2 "
                            >
                                Connect Wallet
                            </button>
                        ) : (
                            <button
                                onClick={disconnect}
                                className="bg-primary text-white font-semibold   border-none text-xl px-6 py-4 rounded-md hover:ring-blue-2 hover:ring-2 "
                            >
                                Disconnect
                            </button>
                        )}
                    </div>
                    {/* {account && (
                        <button
                            onClick={circulatingSupply}
                            className="bg-primary text-white font-semibold   border-none text-xl px-6 py-4 rounded-md hover:ring-blue-2 hover:ring-2 "
                        >
                            Supply
                        </button>
                    )} */}
                </div>
            </div>
        </div>
    )
}

export default ConnectWalletHeader
