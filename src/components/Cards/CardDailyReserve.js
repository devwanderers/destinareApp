import React from 'react'
// import { Progress } from 'antd'
// import { AiOutlineUser } from 'react-icons/ai'
// import { FaEthereum } from 'react-icons/fa'
// import { RiLock2Line } from 'react-icons/ri'

const CardDailyReserve = () => {
    return (
        <div className="bg-gray dark:bg-gray-4 border border-gray-11 dark:border-gray-4 pt-4 pb-4 px-4 rounded-xl relative">
            <div className="mb-5">
                <div className="text-gray-10 dark:text-white flex flex-row">
                    <div className="text-3xl leading-none">
                        <span className="text-primary">Daily</span>
                        <span>{' reservation'}</span>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="flex-grow border-r border-gray-7 "> </div>
                <div className="flex-shrink w-8/12 ">ss</div>
            </div>
        </div>
    )
}

export default CardDailyReserve
