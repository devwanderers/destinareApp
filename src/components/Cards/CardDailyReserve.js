import React from 'react'
import { Progress } from 'antd'
// import { AiOutlineUser } from 'react-icons/ai'
// import { FaEthereum } from 'react-icons/fa'
// import { RiLock2Line } from 'react-icons/ri'
import useListenCookie from '../../hooks/useListenCookie'
import useSCInteractions from '../../hooks/useSCInteractions'

const CardDailyReserve = ({ initDate }) => {
    const { data } = useSCInteractions()
    const [theme] = useListenCookie('theme')
    const isDarkMode = theme === 'dark'

    const _initDate = new Date(initDate)
    const currentDate = new Date()
    const day = currentDate.getDate() - _initDate.getDate()

    const totalUser =
        data.getPresaleInfo[0].length > 0 ? data.getPresaleInfo[0][day] : 0
    const totalEther =
        data.getPresaleInfo[1].length > 0 ? data.getPresaleInfo[1][day] : 0

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
                            <p className="text-gray-10 dark:text-white text-2xl">
                                Day {day + 1} (UTC)
                                <span className="text-gray-5">
                                    {' '}
                                    {currentDate.getUTCDate()}/
                                    {currentDate.getUTCMonth()}/
                                    {currentDate.getUTCFullYear()}
                                </span>
                            </p>
                        </div>
                        <div className="text-gray-10 dark:text-white text-3xl mb-2 leading-none font-semibold">
                            833,333
                        </div>
                        <div className="text-gray-10 dark:text-white leading-none text-2xl mb-10">
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
                                <div className="text-gray-10 dark:text-white text-lg">
                                    {totalUser}
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-gray-5 text-lg">
                                    Total Ether
                                </div>
                                <div className="text-gray-10 dark:text-white text-lg">
                                    {totalEther}
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-gray-5 text-lg">
                                    Your contribution
                                </div>
                                <div className="text-gray-10 dark:text-white text-lg">
                                    0.005 ETH
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex flex-row justify-between">
                                <div className="text-center">
                                    <div className="text-gray-5">
                                        Your share
                                    </div>
                                    <div className="text-gray-10 dark:text-white text-xl">
                                        0.005 ETH
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-gray-5">
                                        Total Destinare token
                                    </div>
                                    <div className="text-gray-10 dark:text-white text-xl">
                                        0.005 ETH
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <Progress
                                    percent={50}
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
