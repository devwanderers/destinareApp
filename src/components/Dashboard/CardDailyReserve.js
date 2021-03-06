/* eslint-disable no-unused-vars */
import React from 'react'
import { Progress, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import useListenCookie from '../../hooks/useListenCookie'
import useCurrency from '../../hooks/useCurrency'
import useInput from './../../hooks/useInput'
import {
    validOnlyNumbers,
    validMinValue,
    validMaxValue,
} from '../../services/input-services'
import Input from '../Inputs/Input'
import ButtonSpinner from '../Buttons/ButtonSpinner'
import CardContainer from '../Cards/CardContainer'

const antIcon = (
    <LoadingOutlined className=" text-white" style={{ fontSize: 24 }} spin />
)

const minValue = validMinValue(0)
const maxValue = validMaxValue(1500)

const CardDailyReserve = ({
    currentDay,
    data,
    reserveToken,
    reservingToken,
    account,
    loading,
    disabledButton,
}) => {
    // const [amount, setAmount] = useState(1)
    const { value: amount, bind } = useInput(
        1,
        (v) => minValue(v) && maxValue(v) && validOnlyNumbers(v)
    )

    const [theme] = useListenCookie('theme')
    const isDarkMode = theme === 'dark'

    const { getPresaleInfo, getUserInfo } = data

    // const _initDate = new Date(initDate)
    // const currentDate = new Date()
    // const day = currentDate.getDate() - _initDate.getDate()
    // day += 1
    const indexDay = currentDay - 1
    const totalUser =
        getPresaleInfo[0].length > 0 ? getPresaleInfo[0][indexDay] : 0

    const totalEther =
        getPresaleInfo[1].length > 0 ? getPresaleInfo[1][indexDay] / 1e18 : 0

    const currentUser =
        getUserInfo.length > 0 ? getUserInfo[indexDay] / 1e18 : 0

    const percentage =
        Number(currentUser) === 0
            ? 0
            : (Number(currentUser) / Number(totalEther)) * 100

    const totalDDOT = 8333333 * (percentage / 100)
    return (
        <CardContainer
            loading={loading}
            className="bg-white dark:bg-gray-4 border border-primary px-4 lg:px-5 xl:px-8 pt-5 pb-3 md:pb-4 xl:pt-8 xl:pb-6  border-opacity-50"
            variant="none"
        >
            <div className="flex flex-col md:flex-row divide-x-0 divide-y md:divide-x md:divide-y-0">
                <div className="flex flex-col md:pr-4 lg:pr-5 xl:pr-8 pb-4 md:pb-0">
                    <div className=" flex flex-row justify-between md:justify-start md:flex-col">
                        <div className="text-lg md:text-base lg:text-lg xl:text-xl md:text-center leading-none font-medium flex flex-col md:flex-row">
                            <span className="text-primary">
                                Day {currentDay}&nbsp;
                            </span>
                            <span className="text-gray-10 dark:text-gray-3">
                                Reservation
                            </span>
                        </div>
                        <div className="md:mt-4 xl:mt-8 mb-2">
                            <div className="text-lg md:text-sm lg:text-lg xl:text-xl text-gray-10 dark:text-gray-3 text-right md:text-left leading-none font-semibold">
                                8,333,333
                            </div>
                            <div className=" text-xxs md:text-base text-gray-10 dark:text-gray-2 text-right md:text-left mb-2 leading-none mt-1 md:mt-0">
                                Available DDOT
                            </div>
                        </div>
                    </div>
                    <div className="mt-auto flex flex-col">
                        <div className="input-amount text-center flex flex-row items-end pb-4 xl:pb-6 mt-3 xl:mt-4 w-10/12 md:w-full mx-auto">
                            <Input
                                variant="secondary"
                                className="mr-2 w-full bg-light-2 dark:bg-gray-3"
                                disabled={disabledButton}
                                {...bind}
                            />
                            <span className="text-gray-10 dark:text-white lg:text-lg xl:text-xl leading-7">
                                ETH
                            </span>
                        </div>
                        <ButtonSpinner
                            className="w-8/12 md:w-full mx-auto"
                            disabled={disabledButton || Number(amount) <= 0}
                            size="normal"
                            onClick={() => {
                                if (!reservingToken) reserveToken(amount)
                            }}
                        >
                            {reservingToken
                                ? ' Reserving Destinare token'
                                : 'Reserve Destinare token'}
                        </ButtonSpinner>
                    </div>
                </div>
                <div className="flex flex-shrink w-full md:w-4/6 md:pl-4 lg:pl-5 xl:pl-8 pt-4 md:pt-0">
                    <div className="flex flex-col w-full">
                        <div className="text-lg md:text-base lg:text-lg xl:text-xl text-left text-gray-14 dark:text-gray-3 leading-none font-medium">
                            Day Overview
                        </div>
                        <div className="flex-1 flex flex-col justify-between mt-4 xl:mt-8">
                            <div className="flex flex-row md:flex-nowrap lg:flex-row justify-between mb-1 md:mb-0">
                                <div className="md:text-center">
                                    <div className="text-xxs md:text-xs lg:text-sm xl:text-md text-gray-5 dark:text-gray-2 md:p-0">
                                        Total contributors
                                    </div>
                                    <div className="text-xs md:text-sm lg:text-base xl:text-lg text-gray-10 dark:text-gray-3 ">
                                        {useCurrency(totalUser, 0)}
                                    </div>
                                </div>
                                <div className="md:text-center">
                                    <div className="text-xxs md:text-xs lg:text-sm xl:text-md text-gray-5 dark:text-gray-2 md:p-0">
                                        Your contribution
                                    </div>
                                    <div className="text-xs md:text-sm lg:text-base xl:text-lg text-gray-10 dark:text-gray-3">
                                        {useCurrency(totalEther, 2)} ETH
                                    </div>
                                </div>
                                <div className="text-left md:text-center">
                                    <div className="text-xxs md:text-sm lg:text-sm xl:text-md text-gray-5 dark:text-gray-2 md:p-0">
                                        Your Tokens
                                    </div>
                                    <div className="text-xs md:text-sm lg:text-base xl:text-lg text-gray-10 dark:text-gray-3">
                                        {useCurrency(totalDDOT, 2)} DDOT
                                    </div>
                                </div>
                            </div>
                            <div className="pt-0 md:pt-5">
                                <div className="flex flex-col xs:flex-row justify-between">
                                    <div className="">
                                        <div className="text-xxs md:text-xs lg:text-sm xl:text-md text-gray-5 dark:text-gray-2">
                                            Your share
                                        </div>
                                        <div className="text-xs md:text-sm lg:text-base xl:text-lg text-gray-10 dark:text-gray-3 font-bold">
                                            {percentage.toFixed(2)} % ETH
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-xxs md:text-xs lg:text-sm xl:text-md text-gray-5 dark:text-gray-2">
                                            Total Ether
                                        </div>
                                        <div className="text-xs md:text-sm lg:text-base xl:text-lg text-gray-10 dark:text-gray-3  font-bold">
                                            {Number(totalEther).toFixed(2)} ETH
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <Progress
                                        percent={percentage}
                                        showInfo={false}
                                        trailColor={
                                            isDarkMode ? '#fff' : '#c9c9c9'
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CardContainer>
    )
}

export default CardDailyReserve
