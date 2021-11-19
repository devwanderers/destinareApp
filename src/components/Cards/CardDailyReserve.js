import React from 'react'
import { Progress } from 'antd'
// import { AiOutlineUser } from 'react-icons/ai'
// import { FaEthereum } from 'react-icons/fa'
// import { RiLock2Line } from 'react-icons/ri'

const CardDailyReserve = () => {
    return (
        <div className="bg-gray dark:bg-gray-4 border border-gray-11 dark:border-gray-4 pt-4 pb-4 px-8 rounded-xl relative">
            <div className="mb-7">
                <div className="text-gray-10 dark:text-white flex flex-row">
                    <div className="text-3xl leading-none">
                        <span className="text-primary">Daily</span>
                        <span>{' reservation'}</span>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="flex-grow border-r border-gray-7 pr-16">
                    <div className="flex flex-col">
                        <div className="flex flex-row mb-6">
                            <p className="text-white text-2xl">
                                Day 2 (UTC)
                                <span className="text-gray-5"> 05/10/2021</span>
                            </p>
                        </div>
                        <div className="text-white text-3xl mb-2 leading-none font-semibold">
                            5.000.000
                        </div>
                        <div className="text-white leading-none text-2xl mb-10">
                            Destinare token
                        </div>
                        <div>
                            <button
                                className="bg-primary rounded-md py-4px px-1 text-white text-lg w-full"
                                style={{
                                    paddingTop: '6px',
                                    paddingBottom: '6px',
                                }}
                            >
                                Reserve Destinare token
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-shrink w-4/6 pl-20 pr-10 ">
                    <div className="flex-1 flex flex-col justify-between ">
                        <div className="flex flex-row justify-between">
                            <div className="text-center">
                                <div className="text-gray-5 text-lg">
                                    Total user
                                </div>
                                <div className="text-white text-lg">28</div>
                            </div>
                            <div className="text-center">
                                <div className="text-gray-5 text-lg">
                                    Total Ether
                                </div>
                                <div className="text-white text-lg">8.22</div>
                            </div>
                            <div className="text-center">
                                <div className="text-gray-5 text-lg">
                                    Your contribution
                                </div>
                                <div className="text-white text-lg">
                                    0.005 ETH
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex flex-row justify-between">
                                <div className="text-center">
                                    <div className="text-gray-5 text-sm">
                                        Your contribution
                                    </div>
                                    <div className="text-white text-sm">
                                        0.005 ETH
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-gray-5 text-sm">
                                        Your contribution
                                    </div>
                                    <div className="text-white text-sm">
                                        0.005 ETH
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <Progress percent={50} showInfo={false} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDailyReserve
