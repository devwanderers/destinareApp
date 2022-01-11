import React, { useRef, useState } from 'react'
import { Progress } from 'antd'
import { AiOutlineCheckCircle, AiOutlineUser } from 'react-icons/ai'
import { FaEthereum, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { RiLock2Line } from 'react-icons/ri'
import useListenCookie from '../../hooks/useListenCookie'
import useClickOutside from './../../hooks/useClickOutside'
import useCurrency from '../../hooks/useCurrency'

const CardReserve = ({ date, day, totalUser, totalEther, currentUser }) => {
    const percentage = currentUser === 0 ? 0 : (currentUser / totalEther) * 100
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
            className="bg-gray dark:bg-gray-4 border border-gray-11 dark:border-gray-4 py-5 px-4 rounded-xl relative overflow-hidden dark:overflow-visible"
        >
            <div className="absolute top-0 right-0 pt-5 pr-4">
                <span className="text-green-1 text-3xl">
                    <AiOutlineCheckCircle />
                </span>
            </div>
            <div className="border-b border-gray-7 text-gray-10 dark:text-white flex flex-col pb-3 mt-10 xs:mt-0">
                <div className="text-3xl leading-none">
                    <div></div>
                    <span>
                        <strong>833,333</strong>
                    </span>
                    <span className="text-primary">&nbsp;DDOT</span>
                </div>

                <div className="flex flex-row my-2">
                    <p className="text-gray-10 dark:text-white text-lg">
                        Day {day} (UTC)
                        <span className="text-gray-5 pl-3">
                            (date coming soon)
                            {/* {date} */}
                        </span>
                    </p>
                </div>
            </div>
            <div className="border-b border-gray-7 flex flex-row justify-between py-3 text-lg text-gray-5">
                <div className="flex flex-row">
                    <div className="relative pl-2 pr-4" style={{ top: '2px' }}>
                        <AiOutlineUser />
                    </div>
                    Contributions
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
                    {useCurrency(totalEther, 2)} ETH
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
                    className="cursor-pointer flex flex-row text-primary text-lg"
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
                            percent={percentage}
                            showInfo={false}
                            trailColor={isDarkMode ? '#fff' : '#c9c9c9'}
                        />
                    </div>
                    <div className="flex flex-row justify-between leading-none">
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
                </div>
            )}
        </div>
    )
}

export default CardReserve
