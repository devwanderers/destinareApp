import React, { useRef, useState } from 'react'
import { Progress } from 'antd'
import { AiOutlineCheckCircle, AiOutlineUser } from 'react-icons/ai'
import { FaEthereum, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { RiLock2Line } from 'react-icons/ri'
// import useDarkMode from './../../hooks/useDarkMode'
import useListenCookie from '../../hooks/useListenCookie'
import useClickOutside from './../../hooks/useClickOutside'

const CardReserve = ({ date, day, totalUser, totalEther }) => {
    const [theme] = useListenCookie('theme')
    const isDarkMode = theme === 'dark'
    const cardRef = useRef(null)
    const [showMore, setShowMore] = useState(false)

    useClickOutside(cardRef, () => {
        setShowMore(false)
    })

    const handleShowMore = () => {
        setShowMore(!showMore)
    }
    return (
        <div
            ref={cardRef}
            className="bg-gray dark:bg-gray-4 border border-gray-11 dark:border-gray-4 pt-4 pb-3 px-4 rounded-xl relative overflow-hidden dark:overflow-visible"
        >
            <div className="absolute top-0 right-0 pt-4 pr-4">
                <span className="text-green-1 text-3xl">
                    <AiOutlineCheckCircle />
                </span>
            </div>
            <div className="border-b border-gray-7 pb-2">
                <div className="text-gray-10 dark:text-white flex flex-row">
                    <div className="text-3xl leading-none">
                        <span>
                            <strong>833,333</strong> Destinare
                        </span>
                    </div>
                </div>
                <div className="text-xl text-gray-5">
                    <span>
                        {date} - Day {day} (UTC)
                    </span>
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
                    {totalUser}
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
                    {totalEther}
                </div>
            </div>
            <div className="flex justify-center text-gray-5 text-lg mb-10 pt-8">
                <div className="relative mr-2" style={{ top: '2px' }}>
                    <RiLock2Line />
                </div>
                <span className="">Day is close</span>
            </div>
            <div className="flex-grow flex justify-end">
                <div
                    className="cursor-pointer flex flex-row text-blue-600 text-lg"
                    onClick={handleShowMore}
                >
                    Show details
                    <div className="relative ml-2 mt-1">
                        {!showMore ? <FaChevronDown /> : <FaChevronUp />}
                    </div>
                </div>
            </div>
            {showMore && (
                <div className="dark:border-t-4 border-t dark:border-blue-1 border-gray-11 -mx-18px px-4 mt-3 pt-3">
                    <div className="mb-5 ">
                        <Progress
                            percent={50}
                            showInfo={false}
                            trailColor={isDarkMode ? '#fff' : '#c9c9c9'}
                        />
                    </div>
                    <div className="flex flex-row justify-between leading-none">
                        <div>
                            <div className="text-gray-5">Your share</div>
                            <div className="text-gray-10 dark:text-white text-xl">
                                0.00% Destinare
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
            )}
        </div>
    )
}

export default CardReserve
