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

const antIcon = (
    <LoadingOutlined className=" text-white" style={{ fontSize: 24 }} spin />
)

const minValue = validMinValue(1)
const maxValue = validMaxValue(999)

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

    return (
        <div className="bg-white dark:bg-gray-4 border border-primary dark:border-gray-4 px-4 lg:px-5 xl:px-8 pt-5 pb-4 xl:pt-8 xl:pb-6 rounded-xl relative overflow-hidden border-opacity-50">
            {loading && (
                <div className="absolute left-0 top-0 flex justify-center items-center w-full h-full bg-gray-9 bg-opacity-20 z-50">
                    <Spin size="large" />
                </div>
            )}
            <div className="flex flex-col md:flex-row divide-x-0 divide-y md:divide-x md:divide-y-0">
                <div className="flex flex-col md:pr-4 lg:pr-5 xl:pr-8 pb-4 md:pb-0">
                    <div className="text-base lg:text-lg xl:text-2xl text-center md:text-left text-gray-10 dark:text-white leading-none font-medium">
                        <span className="text-primary">
                            Day {currentDay}&nbsp;
                        </span>
                        <span>reservation</span>
                    </div>
                    <div className="text-base lg:text-lg xl:text-xl text-gray-10 dark:text-white text-center md:text-left mb-2 mt-4 xl:mt-10 leading-none font-semibold">
                        833,333
                    </div>
                    <div className="text-lg xl:text-xl text-gray-10 dark:text-white text-center md:text-left mb-2 leading-none">
                        Available DDOT
                    </div>
                    <div className="mt-auto">
                        <div className="input-amount text-center flex flex-row items-end pb-4 xl:pb-6 mt-3 xl:mt-4">
                            <Input
                                variant="secondary"
                                className="mr-2 w-full bg-light-2"
                                disabled={disabledButton}
                                {...bind}
                            />
                            <span className="text-gray-10 dark:text-white lg:text-lg xl:text-xl leading-7">
                                ETH
                            </span>
                        </div>
                        <ButtonSpinner
                            className="w-full"
                            disabled={disabledButton}
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
                        <div className="text-base lg:text-lg xl:text-2xl text-center md:text-left text-gray-14 dark:text-white leading-none font-medium">
                            Day Overview
                        </div>
                        <div className="flex-1 flex flex-col justify-between mt-4 xl:mt-10">
                            <div className="flex flex-wrap md:flex-nowrap lg:flex-row justify-center md:justify-between">
                                <div className="text-center">
                                    <div className="md:text-xs lg:text-sm xl:text-md text-gray-5 dark:text-gray-7  px-5 md:p-0">
                                        Total contributions
                                    </div>
                                    <div className="md:text-sm lg:text-base xl:text-lg text-gray-10 dark:text-white ">
                                        {useCurrency(totalUser, 0)}
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="md:text-xs lg:text-sm xl:text-md text-gray-5 dark:text-gray-7  px-5 md:p-0">
                                        Your contribution
                                    </div>
                                    <div className="md:text-sm lg:text-base xl:text-lg text-gray-10 dark:text-white">
                                        {useCurrency(totalEther, 2)} ETH
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="md:text-xs lg:text-sm xl:text-md text-gray-5 dark:text-gray-7 px-5 md:p-0">
                                        Your Tokens
                                    </div>
                                    <div className="md:text-sm lg:text-base xl:text-lg text-gray-10 dark:text-white">
                                        {useCurrency(currentUser, 2)} ETH
                                    </div>
                                </div>
                            </div>
                            <div className="pt-0 md:pt-5">
                                <div className="flex flex-col xs:flex-row justify-between">
                                    <div className="">
                                        <div className="text-sm xl:text-md text-gray-5 dark:text-gray-7">
                                            Your share
                                        </div>
                                        <div className="text-base xl:text-lg text-gray-10 dark:text-white font-bold">
                                            {percentage.toFixed(2)} % ETH
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm xl:text-md text-gray-5 dark:text-gray-7">
                                            Total Ether
                                        </div>
                                        <div className="text-base xl:text-lg text-gray-10 dark:text-white font-bold">
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
        </div>
    )
}

export default CardDailyReserve
