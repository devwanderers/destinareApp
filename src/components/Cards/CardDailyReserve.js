import React, { useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Progress, InputNumber, Space } from 'antd'
// import { AiOutlineUser } from 'react-icons/ai'
// import { FaEthereum } from 'react-icons/fa'
// import { RiLock2Line } from 'react-icons/ri'
import useListenCookie from '../../hooks/useListenCookie'
import useSCInteractions from '../../hooks/useSCInteractions'
import useCurrency from '../../hooks/useCurrency'

const CardDailyReserve = ({ initDate }) => {
    const [amount, setAmount] = useState(1)
    const { data, reserveToken } = useSCInteractions()
    const { account } = useWeb3React()
    const [theme] = useListenCookie('theme')
    const isDarkMode = theme === 'dark'

    const _initDate = new Date(initDate)
    const currentDate = new Date()
    const day = currentDate.getDate() - _initDate.getDate()

    const totalUser =
        data.getPresaleInfo[0].length > 0 ? data.getPresaleInfo[0][day] : 0
    const totalEther =
        data.getPresaleInfo[1].length > 0
            ? data.getPresaleInfo[1][day] / 1e18
            : 0
    const currentUser =
        data.getUserInfo.length > 0 ? data.getUserInfo[day] / 1e18 : 0
    const percentage =
        Number(currentUser) === 0
            ? 0
            : (Number(currentUser) / Number(totalEther)) * 100

    return (
        <div className="bg-gray dark:bg-gray-4 border border-gray-11 dark:border-gray-4 py-6 px-8 rounded-xl relative">
            <div className="mb-0 lg:mb-3">
                <div className="text-gray-10 dark:text-white flex flex-col">
                    <div className="text-3xl leading-none">
                        <span className="text-primary">Daily&nbsp;</span>
                        <span>reservation</span>
                    </div>
                    <div className="flex flex-row my-2">
                        <p className="text-gray-10 dark:text-white text-lg">
                            Day {day + 1} (UTC)
                            <span className="text-gray-5 pl-3">
                                {' '}
                                {currentDate.getUTCDate()}/
                                {currentDate.getUTCMonth() + 1}/
                                {currentDate.getUTCFullYear()}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row divide-x-0 divide-y lg:divide-x lg:divide-y-0">
                <div className="flex-grow py-5 pr-0 lg:py-0 lg:pr-8 xl:pr-16">
                    <div className="flex flex-col">
                        <div className="text-gray-10 dark:text-white text-3xl mb-2 leading-none font-semibold text-center lg:text-left">
                            833,333
                        </div>
                        <div className="text-gray-10 dark:text-white leading-none text-2xl mb-2 text-center lg:text-left">
                            Destinare token
                        </div>
                        <div className="input-amount text-center">
                            <Space>
                                <InputNumber
                                    min={1}
                                    max={999}
                                    defaultValue={1}
                                    onChange={(val) => setAmount(val)}
                                />
                                <span className="text-gray-10 dark:text-white text-2xl">
                                    ETH
                                </span>
                            </Space>
                        </div>
                        <div>
                            {!account ? (
                                <button
                                    className="disabled:opacity-50 bg-primary rounded-md py-4px px-1 text-white text-lg w-full"
                                    style={{
                                        paddingTop: '6px',
                                        paddingBottom: '6px',
                                    }}
                                    disabled
                                >
                                    Reserve Destinare token
                                </button>
                            ) : (
                                <button
                                    className="bg-primary rounded-md py-4px px-1 text-white text-lg w-full"
                                    style={{
                                        paddingTop: '6px',
                                        paddingBottom: '6px',
                                    }}
                                    onClick={() => reserveToken(amount)}
                                >
                                    Reserve Destinare token
                                </button>
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex flex-shrink w-full lg:w-4/6 px-0 py-5 lg:py-0 lg:pl-5 lg:pr-5 xl:pl-10">
                    <div className="flex-1 flex flex-col justify-between ">
                        <div className="flex flex-wrap lg:flex-nowrap lg:flex-row justify-center md:justify-between">
                            <div className="text-center py-2 md:py-0">
                                <div className="text-gray-5 text-md px-5 md:p-0">
                                    Total contributions
                                </div>
                                <div className="text-gray-10 dark:text-white text-lg">
                                    {useCurrency(totalUser, 0)}
                                </div>
                            </div>
                            <div className="text-center py-2 md:py-0">
                                <div className="text-gray-5 text-md px-5 md:p-0">
                                    Total Ether
                                </div>
                                <div className="text-gray-10 dark:text-white text-lg">
                                    {useCurrency(totalEther, 2)} ETH
                                </div>
                            </div>
                            <div className="text-center py-2 md:py-0">
                                <div className="text-gray-5 text-md px-5 md:p-0">
                                    Your contribution
                                </div>
                                <div className="text-gray-10 dark:text-white text-lg">
                                    {useCurrency(currentUser, 2)} ETH
                                </div>
                            </div>
                        </div>
                        <div className="pt-5">
                            <div className="flex flex-col xs:flex-row justify-between">
                                <div className="text-center py-2 md:py-0">
                                    <div className="text-gray-5 text-md">
                                        Your share
                                    </div>
                                    <div className="text-gray-10 dark:text-white text-xl">
                                        {percentage.toFixed(2)} %
                                    </div>
                                </div>
                                <div className="text-center py-2 md:py-0">
                                    <div className="text-gray-5 text-md">
                                        Total Destinare token
                                    </div>
                                    <div className="text-gray-10 dark:text-white text-xl">
                                        {Number(totalEther).toFixed(2)} ETH
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <Progress
                                    percent={percentage}
                                    showInfo={false}
                                    trailColor={isDarkMode ? '#fff' : '#c9c9c9'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDailyReserve
