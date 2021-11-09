import React from 'react'
import withWalletConnect from './../../HOCS/withWalletConnect'

const ConnectWalletHeader = (props) => {
    return (
        <div className="w-full pt-4 dark:bg-blue-1 bg-white border-b border-gray-1 pl-4 pr-8 select-none">
            <div className="flex justify-between pb-6">
                <div className="font-medium text-3xl">
                    <span className="dark:text-white">Welcome to</span>
                    <span className="text-primary"> Swapp</span>
                </div>
                <div className="flex flex-row space-x-5 leading-none">
                    <div className="border bg-gray-4 border-gray-1 py-2 flex flex-col items-end pr-3 w-250px rounded-md space-y-2">
                        <div className="text-lg text-gray-5">Total Supply:</div>
                        <div className="text-white font-medium text-3xl">
                            524,875,371
                        </div>
                    </div>
                    <div className="border bg-gray-4 border-gray-1 py-2 flex flex-col items-end pr-3 w-250px rounded-md space-y-2">
                        <div className="text-lg text-gray-5">
                            Circulating Supply:
                        </div>
                        <div className="text-white font-medium text-3xl">
                            195,344,403
                        </div>
                    </div>
                    <div>
                        <button className="bg-primary text-white font-semibold   border-none text-xl px-6 py-4 rounded-md hover:ring-blue-2 hover:ring-2 ">
                            Connect Wallet
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withWalletConnect(ConnectWalletHeader)
