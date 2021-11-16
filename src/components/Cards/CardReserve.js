import React from 'react'
import { Progress } from 'antd'
import { AiOutlineCheckCircle, AiOutlineUser } from 'react-icons/ai'
import { FaEthereum } from 'react-icons/fa'
import { RiLock2Line } from 'react-icons/ri'

const CardReserve = () => {
    return (
        <div className="bg-gray dark:bg-gray-4 border border-gray-11 dark:border-gray-4 pt-4 pb-4 px-4 rounded-xl relative">
            <div className="absolute top-0 right-0 pt-4 pr-4">
                <span className="text-green-1 text-3xl">
                    <AiOutlineCheckCircle />
                </span>
            </div>
            <div className="border-b border-gray-7 pb-2">
                <div className="text-gray-10 dark:text-white flex flex-row">
                    <div className="text-3xl leading-none">
                        <span>
                            <strong>5.000.00</strong> SWAPP
                        </span>
                    </div>
                </div>
                <div className="text-xl text-gray-5">
                    <span>05/10/2021 - Day 2 (UTC)</span>
                </div>
            </div>
            <div className="border-b border-gray-7 flex flex-row justify-between py-3 text-lg text-gray-5">
                <div className="flex flex-row">
                    <div className="relative pl-2 pr-4" style={{ top: '2px' }}>
                        <AiOutlineUser />
                    </div>
                    Total user
                </div>
                <div className="font-medium text-gray-10 dark:text-white">
                    28
                </div>
            </div>
            <div className="border-b border-gray-7 flex flex-row justify-between py-3 text-lg text-gray-5">
                <div className="flex flex-row">
                    <div className="relative pl-2 pr-4" style={{ top: '2px' }}>
                        <FaEthereum />
                    </div>
                    Total Ether
                </div>
                <div className="font-medium text-gray-10 dark:text-white">
                    8.22
                </div>
            </div>
            <div className="my-9 flex justify-center">
                <button
                    className="bg-primary rounded-md text-white text-lg  px-4"
                    style={{
                        paddingTop: '6px',
                        paddingBottom: '6px',
                    }}
                >
                    Reserve Swapp
                </button>
            </div>
            <div className="flex justify-center text-gray-5 text-lg mb-10">
                <div className="relative mr-2" style={{ top: '2px' }}>
                    <RiLock2Line />
                </div>
                <span className="">Day is close</span>
            </div>
            <div className="mb-5">
                <Progress percent={50} showInfo={false} />
            </div>
            <div className="flex flex-row justify-between leading-none">
                <div>
                    <div className="text-gray-5">Your share</div>
                    <div className="text-gray-10 dark:text-white text-xl">
                        0.00% SWAPP
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <div className="text-gray-5 text-end">
                        Your contribution
                    </div>
                    <div className="text-gray-10 dark:text-white text-xl">
                        0.00 ETH
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardReserve
