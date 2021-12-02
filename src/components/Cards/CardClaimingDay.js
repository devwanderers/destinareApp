import React from 'react'
// import { AiOutlineUser } from 'react-icons/ai'
// import { FaEthereum } from 'react-icons/fa'
// import { RiLock2Line } from 'react-icons/ri'
import useSCInteractions from './../../hooks/useSCInteractions'
import useCurrency from '../../hooks/useCurrency'

const CardClaimingDay = ({ initDate }) => {
    const { data } = useSCInteractions()

    const totalUser = data.getPresaleInfo[0].reduce(
        (acc, val) => acc + parseFloat(val),
        0
    )
    const totalEther =
        data.getPresaleInfo[1].reduce((acc, val) => acc + parseInt(val), 0) /
        1e18

    const lastDate = new Date(initDate)
    lastDate.setDate(lastDate.getDate() + 29)
    return (
        <div className="bg-gray dark:bg-gray-4 border border-gray-11 dark:border-gray-4 flex-1 flex flex-col justify-between py-6 px-8 rounded-xl relative">
            <div className="mb-0">
                <div className="text-gray-10 dark:text-white flex flex-col">
                    <div className="text-3xl leading-none">
                        <span className="text-primary">Claiming&nbsp;</span>
                        <span>Day</span>
                    </div>
                </div>
                <div className="flex flex-row my-2">
                    <p className="text-gray-10 dark:text-white text-lg">
                        Day 30 (UTC)
                        <span className="text-gray-5 pl-3">
                            {`${lastDate.getUTCDate()}/${
                                lastDate.getUTCMonth() + 1
                            }/${lastDate.getUTCFullYear()}`}
                        </span>
                    </p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row py-5 xl:py-0 divide-x-0 divide-y lg:divide-x lg:divide-y-0">
                <div className="text-center py-2 lg:py-0 w-full">
                    <div className="text-gray-5 text-base xxxl:text-2xl">
                        Total Ether
                    </div>
                    <div className="text-gray-10 dark:text-white text-xl lg:text-2xl xxxl:text-3xl">
                        {useCurrency(totalEther, 2)} ETH
                    </div>
                </div>
                <div className="text-center py-2 lg:py-0 w-full">
                    <div className="text-gray-5 text-base lg:text-lg xxxl:text-2xl">
                        Contributions
                    </div>
                    <div className="text-gray-10 dark:text-white text-xl lg:text-2xl xxxl:text-3xl">
                        {totalUser}
                    </div>
                </div>
            </div>
            <div className="text-center">
                <button
                    className="disabled:opacity-50 bg-primary rounded-md py-4px px-1 text-white text-lg w-full xxxl:w-9/12"
                    disabled
                >
                    Claim your Destinare token
                </button>
            </div>
        </div>
    )
}

export default CardClaimingDay
