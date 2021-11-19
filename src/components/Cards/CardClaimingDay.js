import React from 'react'
// import { AiOutlineUser } from 'react-icons/ai'
// import { FaEthereum } from 'react-icons/fa'
// import { RiLock2Line } from 'react-icons/ri'

const CardClaimingDay = () => {
    return (
        <div className="flex-1 flex flex-col justify-between bg-gray dark:bg-gray-4 border border-gray-11 dark:border-gray-4 pt-4 pb-4 px-8 rounded-xl relative">
            <div>
                <div className="mb-2 text-gray-10 dark:text-white flex flex-row justify-between">
                    <div className="text-xl leading-none">
                        <span className="text-white">Daily 31</span>
                    </div>
                    <div className="text-2xl leading-none">
                        <span className="text-gray-5">06/08/2021</span>
                    </div>
                </div>
                <div className="text-gray-10 dark:text-white flex flex-row">
                    <div className="text-3xl leading-none">
                        <span className="text-primary">Daily</span>
                        <span>{' reservation'}</span>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="flex-1 flex border-r border-gray-7">
                    <div className="mx-auto text-center">
                        <div className="text-gray-5 text-xl">Total Ether</div>
                        <div className="text-white text-3xl">121,17</div>
                    </div>
                </div>
                <div className="flex-1 flex">
                    <div className="mx-auto text-center">
                        <div className="text-gray-5 text-xl">Total user</div>
                        <div className="text-white text-3xl">150</div>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <button className="bg-primary rounded-md py-2 text-white text-lg w-9/12 ">
                    Claim your Destinare token
                </button>
            </div>
        </div>
    )
}

export default CardClaimingDay
