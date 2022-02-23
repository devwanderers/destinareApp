import React, { useRef } from 'react'
import { Progress, Spin } from 'antd'

import { AiOutlineUser } from 'react-icons/ai'
import { FaEthereum } from 'react-icons/fa'
import { RiLock2Line } from 'react-icons/ri'
import useListenCookie from '../../hooks/useListenCookie'
import useCurrency from '../../hooks/useCurrency'
import IconCheck from './../../assets/svg/icons/IconCheck'

const CardReserve = ({
    date,
    day,
    totalUser,
    totalEther,
    currentUser,
    loading,
}) => {
    const percentage = currentUser === 0 ? 0 : (currentUser / totalEther) * 100
    const [theme] = useListenCookie('theme')
    const isDarkMode = theme === 'dark'
    const cardRef = useRef(null)

    return (
        <div
            ref={cardRef}
            className="bg-white dark:bg-gray-4 border border-light-4 dark:border-gray-4 py-5 px-4 rounded-xl relative overflow-hidden dark:overflow-visible"
        >
            {loading && (
                <div className="absolute left-0 top-0 flex justify-center items-center w-full h-full bg-gray-9 bg-opacity-20">
                    <Spin size="large" />
                </div>
            )}
            <div className="flex flex-row justify-between">
                <div className="flex flex-row">
                    <span className="mr-4">
                        <IconCheck size={30} />
                    </span>
                    <div>
                        <span className="font-medium text-2xl leading-none text-primary dark:text-white">
                            Day {day}{' '}
                            <span className="text-gray-14 text-xl">(UTC)</span>
                        </span>

                        <div className="text-gray-5 mt-1 dark:text-white text-lg leading-none font-medium">
                            {date}
                        </div>
                    </div>
                </div>
                <div className="text-right">
                    <div className="font-bold text-black-2 text-lg leading-5">
                        833,333
                    </div>
                    <div className="text-base font-normal text-black-2">
                        Destinare Token
                    </div>
                </div>
            </div>
            <div className="border-b border-t border-gray-7 flex flex-row justify-between mt-6 py-2 text-lg text-gray-5">
                <div className="flex flex-row">
                    <div className="relative pl-2 pr-4" style={{ top: '2px' }}>
                        <AiOutlineUser />
                    </div>
                    Total user
                </div>
                <div className="font-medium text-gray-10 dark:text-white">
                    {totalUser}
                </div>
            </div>
            <div className="border-b border-gray-7 flex flex-row justify-between py-2 text-lg text-gray-5">
                <div className="flex flex-row">
                    <div className="relative pl-2 pr-4" style={{ top: '2px' }}>
                        <FaEthereum />
                    </div>
                    Total Ether
                </div>
                <div className="font-medium text-gray-10 dark:text-white">
                    {useCurrency(totalEther, 2)} ETH
                </div>
            </div>
            <div className="flex justify-center items-end text-gray-5  py-3">
                <div className="relative mr-2 text-3xl">
                    <RiLock2Line />
                </div>
                <span className="text-lg leading-5">Day is close</span>
            </div>
            <div className="dark:border-t-4 border-t dark:border-blue-1 border-gray-11 -mx-18px px-4">
                <div className="flex flex-row justify-between leading-none mt-4">
                    <div className="flex flex-col">
                        <div className="text-gray-5 mb-2">Your share</div>
                        <div className="text-gray-10 dark:text-white text-xl">
                            {percentage.toFixed(2)} %
                        </div>
                    </div>
                    <div className="flex flex-col items-end">
                        <div className="text-gray-5 text-end mb-2">
                            Total Ether
                        </div>
                        <div className="text-gray-10 dark:text-white text-xl">
                            {Number(totalEther).toFixed(2)} ETH
                        </div>
                    </div>
                </div>
                <div>
                    <Progress
                        percent={percentage}
                        showInfo={false}
                        trailColor={isDarkMode ? '#fff' : '#c9c9c9'}
                    />
                </div>
            </div>
        </div>
    )
}

export default CardReserve
