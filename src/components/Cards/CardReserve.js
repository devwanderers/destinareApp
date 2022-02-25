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
            className="bg-white dark:bg-gray-4 border border-light-4 dark:border-gray-16 pt-5 xl:pt-8  rounded-xl relative overflow-hidden hover:border-primary"
        >
            {loading && (
                <div className="absolute left-0 top-0 flex justify-center items-center w-full h-full bg-gray-9 bg-opacity-50">
                    <Spin size="large" />
                </div>
            )}
            <div className="flex flex-row w-full px-4 lg:px-5 xl:px-8">
                <span className="mr-2 xl:mr-4">
                    <IconCheck size={iconSize} />
                </span>
                <div className="flex flex-col w-full">
                    <div className="flex flex-row justify-between items-end">
                        <span className="md:text-base lg:text-lg xl:text-xl font-medium leading-none text-primary ">
                            Day {day}{' '}
                            <span className="text-gray-14 dark:text-gray-6 md:text-sm lg:text-base xl:text-xl">
                                (UTC)
                            </span>
                        </span>

                        <div className="md:text-base lg:text-lg xl:text-xl font-bold text-black-2 dark:text-gray-3 leading-none">
                            833,333
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-end mt-1">
                        <div className="md:text-xs lg:text-sm  text-gray-5 dark:text-gray-2 leading-none font-medium">
                            {date}
                        </div>
                        <div className="lg:text-xs xl:text-sm font-medium text-black-2 dark:text-gray-6 leading-none">
                            Destinare Token
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 lg:px-5 xl:px-8">
                <div className="text-xxs md:text-xs lg:text-sm xl:text-md border-b border-t border-gray-7 flex flex-row justify-between mt-6 py-2  text-gray-5 dark:text-gray-2">
                    <div className="flex flex-row">
                        <div
                            className="relative pl-2 md:mr-2 lg:mr-3 xl:mr-4"
                            style={{ top: '2px' }}
                        >
                            <AiOutlineUser />
                        </div>
                        Total user
                    </div>
                    <div className="font-medium text-gray-10 dark:text-gray-3">
                        {totalUser}
                    </div>
                </div>
                <div className="text-xxs md:text-xs lg:text-sm xl:text-md border-b border-gray-7 flex flex-row justify-between py-2 text-gray-5 dark:text-gray-2">
                    <div className="flex flex-row">
                        <div
                            className="relative pl-2 md:mr-2 lg:mr-3 xl:mr-4"
                            style={{ top: '2px' }}
                        >
                            <FaEthereum />
                        </div>
                        Total Ether
                    </div>
                    <div className="font-medium text-gray-10 dark:text-gray-3">
                        {useCurrency(totalEther, 2)} ETH
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-end text-gray-5 dark:text-gray-2 py-3">
                <div className="relative mr-2 md:text-base lg:text-lg xl:text-xl">
                    <RiLock2Line />
                </div>
                <span className="md:text-sm lg:text-sm xl:text-base leading-5">
                    Day is closed
                </span>
            </div>
            <div className="dark:bg-gray-15 border-t dark:border-gray-16 border-gray-11 pb-3 md:pb-2  xl:pb-3">
                <div className="px-4 lg:px-5 xl:px-8">
                    <div className="flex flex-row justify-between leading-none mt-4">
                        <div className="flex flex-col">
                            <div className="text-xxs md:text-xs xl:text-md text-gray-5 dark:text-gray-2 mb-2 ">
                                Your share
                            </div>
                            <div className="text-sm md:text-sm xl:text-base text-gray-10 dark:text-gray-3 font-bold">
                                {percentage.toFixed(2)} % ETH
                            </div>
                        </div>
                        <div className="flex flex-col items-end mb-2">
                            <div className="text-xxs md:text-xs xl:text-md text-gray-5 dark:text-gray-2 text-end mb-2">
                                Your contribution
                            </div>
                            <div className="text-xs md:text-sm xl:text-base text-gray-10 dark:text-gray-3 font-bold">
                                {Number(totalEther).toFixed(2)} ETH
                            </div>
                        </div>
                    </div>
                    <div>
                        <Progress
                            className="blue-progressbar"
                            percent={percentage}
                            showInfo={false}
                            trailColor={isDarkMode ? '#fff' : '#c9c9c9'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardReserve
