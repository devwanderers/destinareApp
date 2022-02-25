/* eslint-disable no-unused-vars */
import React from 'react'
import useCurrency from '../../hooks/useCurrency'
import { Spin } from 'antd'
import ButtonSpinner from '../Buttons/ButtonSpinner'
import { cls } from './../../services/helpers'
import { formatExponential } from './../../services/format'

const CardClaimingDay = ({
    initDate,
    data,
    claimToken,
    claimingToken,
    loading,
    disabledButton,
}) => {
    const { totalTokens = 0 } = data
    // const totalUser = getPresaleInfo[0].reduce(
    //     (acc, val) => acc + parseFloat(val),
    //     0
    // )
    // const totalEther =
    //     getPresaleInfo[1].reduce((acc, val) => acc + parseInt(val), 0) / 1e18

    // const lastDate = new Date(initDate)
    // lastDate.setDate(lastDate.getDate() + 29)

    let date = new Date(initDate)
    date.setDate(date.getDate() + 30)

    date = date.toLocaleString('en-GB', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    })

    console.log({ totalTokens })
    return (
        <div className="bg-gray-0 dark:bg-blue-5 border border-light-4 dark:border-black-0 flex-1 flex px-4 lg:px-5 xl:px-8 pt-5 pb-4 md:pb-4 xl:pt-8 xl:pb-6 rounded-xl relative overflow-hidden">
            {loading && (
                <div className="absolute left-0 top-0 flex justify-center items-center w-full h-full bg-gray-9 bg-opacity-50 z-50">
                    <Spin size="large" />
                </div>
            )}
            <div
                className={cls(
                    `flex-1 flex flex-col justify-between
                ${disabledButton && 'opacity-50'}`
                )}
            >
                <div className="flex flex-row justify-between">
                    <div className="md:text-base lg:text-lg xl:text-xl text-center md:text-left text-primary leading-none font-medium">
                        Day 31
                    </div>
                    <div className="md:text-sm lg:text-base xl:text-lg text-gray-5 dark:text-gray-2 leading-none font-medium">
                        {date}
                    </div>
                </div>
                <div className="md:text-sm lg:text-base xl:text-lg text-gray-14 dark:text-gray-3 font-medium ">
                    Claiming Day
                </div>
                <div className="text-gray-5 dark:text-gray-2 text-md font-medium mt-3">
                    Your total tokens
                </div>
                <div className="font-bold text-black-2 dark:text-gray-3 text-lg">
                    {useCurrency(formatExponential(totalTokens), 2)} DDOT
                </div>
                <ButtonSpinner
                    className="w-8/12 md:w-full mx-auto mt-2 md:mt-auto"
                    disabled={disabledButton}
                    size="normal"
                    loading={claimingToken}
                    onClick={() => {
                        if (!claimingToken) claimToken()
                    }}
                >
                    {claimingToken
                        ? 'Claiming Destinare token'
                        : 'Claim Destinare token'}
                </ButtonSpinner>
            </div>
        </div>
    )
}

export default CardClaimingDay
