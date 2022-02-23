/* eslint-disable no-unused-vars */
import React from 'react'
import useCurrency from '../../hooks/useCurrency'
import { Spin } from 'antd'
import ButtonSpinner from '../Buttons/ButtonSpinner'
import { cls } from './../../services/helpers'

const CardClaimingDay = ({
    initDate,
    data,
    claimToken,
    claimingToken,
    loading,
    disabledButton,
}) => {
    // const { getPresaleInfo } = data
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

    return (
        <div
            className={cls(
                `bg-gray-0 dark:bg-gray-4 border border-light-4 dark:border-gray-4 flex-1 flex flex-col justify-between py-5 px-8 rounded-xl relative overflow-hidden
                ${disabledButton && 'opacity-50'}`
            )}
        >
            {loading && (
                <div className="absolute left-0 top-0 flex justify-center items-center w-full h-full bg-gray-9 bg-opacity-20 z-50">
                    <Spin size="large" />
                </div>
            )}
            <div className="flex flex-row justify-between mb-4">
                <div className="mb-0 lg:mb-3">
                    <div className="font-medium text-2xl leading-9 text-primary dark:text-white">
                        Day 31
                    </div>
                    <div className="text-gray-14 dark:text-white text-lg font-medium">
                        Claiming Day
                    </div>
                </div>
                <div className="text-gray-5 dark:text-white text-lg leading-none font-medium">
                    {date}
                </div>
            </div>
            <div>
                <div className="text-gray-5 text-md font-medium">
                    Your total tokens
                </div>
                <div className="font-bold text-black-2 text-lg">
                    5.000.000 DDOT
                </div>
            </div>
            <ButtonSpinner
                className="mt-auto"
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
    )
}

export default CardClaimingDay
