import React, { useRef } from 'react'
import { Progress, Spin } from 'antd'

import { AiOutlineUser } from 'react-icons/ai'
import { FaEthereum } from 'react-icons/fa'
import { RiLock2Line } from 'react-icons/ri'
import useListenCookie from '../../hooks/useListenCookie'
import useCurrency from '../../hooks/useCurrency'
import IconCheck from './../../assets/svg/icons/IconCheck'
import useResponsive from './../../hooks/useResponsive'

const CardReserve = ({
    date,
    day,
    totalUser,
    totalEther,
    currentUser,
    loading,
}) => {
    const [iconSize] = useResponsive({ base: '20px', xl: '30px' })
    const percentage = currentUser === 0 ? 0 : (currentUser / totalEther) * 100
    const [theme] = useListenCookie('theme')
    const isDarkMode = theme === 'dark'
    const cardRef = useRef(null)

    return (
        <div
            ref={cardRef}
            className="bg-white dark:bg-gray-4 border border-light-4 dark:border-gray-4 md:px-4 lg:px-5 xl:px-8 md:pt-5 md:pb-4 xl:pt-8 xl:pb-6 rounded-xl relative overflow-hidden dark:overflow-visible"
        >
            {loading && (
                <div className="absolute left-0 top-0 flex justify-center items-center w-full h-full bg-gray-9 bg-opacity-20">
                    <Spin size="large" />
                </div>
            )}
            <div className="flex flex-row w-full">
                <span className="mr-2 xl:mr-4">
                    <IconCheck size={iconSize} />
                </span>
                <div className="flex flex-col w-full">
                    <div className="flex flex-row justify-between items-end">
                        <span className="md:text-base lg:text-lg xl:text-2xl font-medium leading-none text-primary dark:text-white">
                            Day {day}{' '}
                            <span className="text-gray-14 dark:text-gray-7 md:text-sm lg:text-base xl:text-xl">
                                (UTC)
                            </span>
                        </span>

                        <div className="md:text-base lg:text-lg xl:text-2xl font-bold text-black-2 dark:text-white leading-none">
                            833,333
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-end mt-1">
                        <div className="md:text-xs lg:text-sm  text-gray-5 dark:text-white leading-none font-medium">
                            {date}
                        </div>
                        <div className="lg:text-xs xl:text-sm font-medium text-black-2 leading-none">
                            Destinare Token
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:text-sm lg:text-base xl:text-lg border-b border-t border-gray-7 flex flex-row justify-between mt-6 py-2 text-gray-5 dark:text-gray-7">
                <div className="flex flex-row">
                    <div
                        className="relative pl-2 md:mr-2 lg:mr-3 xl:mr-4"
                        style={{ top: '2px' }}
                    >
                        <AiOutlineUser />
                    </div>
                    Total user
                </div>
                <div className="font-medium text-gray-10 dark:text-white">
                    {totalUser}
                </div>
            </div>
            <div className="md:text-sm lg:text-base xl:text-lg border-b border-gray-7 flex flex-row justify-between py-2 text-gray-5 dark:text-gray-7">
                <div className="flex flex-row">
                    <div
                        className="relative pl-2 md:mr-2 lg:mr-3 xl:mr-4"
                        style={{ top: '2px' }}
                    >
                        <FaEthereum />
                    </div>
                    Total Ether
                </div>
                <div className="font-medium text-gray-10 dark:text-white">
                    {useCurrency(totalEther, 2)} ETH
                </div>
            </div>
            <div className="flex justify-center items-end text-gray-5 dark:text-gray-7  py-3">
                <div className="relative mr-2 md:text-xl lg:text-2xl xl:text-3xl">
                    <RiLock2Line />
                </div>
                <span className="md:text-sm lg:text-base xl:text-lg leading-5">
                    Day is closed
                </span>
            </div>
            <div className="dark:border-t-2 border-t dark:border-blue-1 border-gray-11 -mx-18px px-4">
                <div className="flex flex-row justify-between leading-none mt-4">
                    <div className="flex flex-col">
                        <div className="md:text-xs lg:text-sm xl:text-lg text-gray-5 dark:text-gray-7 mb-2 ">
                            Your share
                        </div>
                        <div className="md:text-sm lg:text-base xl:text-lg text-gray-10 dark:text-white font-bold">
                            {percentage.toFixed(2)} % ETH
                        </div>
                    </div>
                    <div className="flex flex-col items-end mb-2">
                        <div className="md:text-xs lg:text-sm xl:text-lg text-gray-5 dark:text-gray-7 text-end mb-2">
                            Total Ether
                        </div>
                        <div className="md:text-sm lg:text-base xl:text-lg text-gray-10 dark:text-white text-xl font-bold">
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
