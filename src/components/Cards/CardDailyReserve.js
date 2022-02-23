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
        <div className="bg-white dark:bg-gray-4 border border-primary dark:border-gray-4 py-5 xl:py-8 px-8 rounded-xl relative overflow-hidden border-opacity-50">
            {loading && (
                <div className="absolute left-0 top-0 flex justify-center items-center w-full h-full bg-gray-9 bg-opacity-20 z-50">
                    <Spin size="large" />
                </div>
            )}
            <div className="flex flex-col lg:flex-row divide-x-0 divide-y lg:divide-x lg:divide-y-0">
                <div className="flex-grow xl:py-5 pr-0 lg:py-0 lg:pr-8 xl:pr-8">
                    {' '}
                    <div className="text-gray-10 dark:text-white text-lg xl:text-2xl text-center xl:text-left leading-none font-medium">
                        <span className="text-primary">
                            Day {currentDay}&nbsp;
                        </span>
                        <span>reservation</span>
                    </div>
                    <div className="flex flex-col mt-4 xl:mt-10">
                        <div className="text-gray-10 dark:text-white text-lg xl:text-2xl mb-2 leading-none font-semibold text-center lg:text-left">
                            833,333
                        </div>
                        <div className="text-gray-10 dark:text-white leading-none text-lg xl:text-2xl mb-2 text-center lg:text-left">
                            Available DDOT
                        </div>
                        <div className="input-amount text-center flex flex-row items-end pb-4 xl:pb-6 mt-3 xl:mt-5">
                            <Input
                                variant="secondary"
                                className="mr-2 w-full bg-light-2"
                                disabled={disabledButton}
                                {...bind}
                            />
                            <span className="text-gray-10 dark:text-white text-2xl leading-7">
                                ETH
                            </span>
                        </div>
                        <ButtonSpinner
                            className="w-full mb-3 xl:mb-6"
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
                <div className="flex flex-shrink w-full lg:w-4/6 px-0 lg:py-0 lg:pl-5 lg:pr-5 xl:pl-10 pt-4 xl:pt-0">
                    <div className="flex flex-col w-full">
                        <div className="text-gray-14 dark:text-white  text-2xl leading-none font-medium">
                            Day Overview
                        </div>
                        <div className="flex-1 flex flex-col justify-between mt-10">
                            <div className="flex flex-wrap lg:flex-nowrap lg:flex-row justify-center md:justify-between">
                                <div className="text-center py-2 md:py-0">
                                    <div className="text-gray-5 text-md px-5 md:p-0">
                                        Total contributions
                                    </div>
                                    <div className="text-gray-10 dark:text-white text-lg">
                                        {useCurrency(totalUser, 0)}
                                    </div>
                                </div>
                                <div className="text-center py-2 md:py-0">
                                    <div className="text-gray-5 text-md px-5 md:p-0">
                                        Your contribution
                                    </div>
                                    <div className="text-gray-10 dark:text-white text-lg">
                                        {useCurrency(totalEther, 2)} ETH
                                    </div>
                                </div>
                                <div className="text-center py-2 md:py-0">
                                    <div className="text-gray-5 text-md px-5 md:p-0">
                                        Your Tokens
                                    </div>
                                    <div className="text-gray-10 dark:text-white text-lg">
                                        {useCurrency(currentUser, 2)} ETH
                                    </div>
                                </div>
                            </div>
                            <div className="pt-5">
                                <div className="flex flex-col xs:flex-row justify-between">
                                    <div className="text-center py-2 md:py-0">
                                        <div className="text-gray-5 text-md">
                                            Your share
                                        </div>
                                        <div className="text-gray-10 dark:text-white text-xl">
                                            {percentage.toFixed(2)} %
                                        </div>
                                    </div>
                                    <div className="text-center py-2 md:py-0">
                                        <div className="text-gray-5 text-md">
                                            Total Ether
                                        </div>
                                        <div className="text-gray-10 dark:text-white text-xl">
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
