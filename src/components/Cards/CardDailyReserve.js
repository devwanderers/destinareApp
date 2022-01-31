import React, { useState } from 'react'
import { Progress, InputNumber, Space, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import useListenCookie from '../../hooks/useListenCookie'
import useCurrency from '../../hooks/useCurrency'

const antIcon = (
    <LoadingOutlined className=" text-white" style={{ fontSize: 24 }} spin />
)

const CardDailyReserve = ({
    currentDay,
    data,
    reserveToken,
    reservingToken,
    account,
    loading,
    disabledButton,
}) => {
    const [amount, setAmount] = useState(1)
    const [theme] = useListenCookie('theme')
    const isDarkMode = theme === 'dark'

    // const _initDate = new Date(initDate)
    // const currentDate = new Date()
    // const day = currentDate.getDate() - _initDate.getDate()
    // day += 1
    const indexDay = currentDay - 1
    const totalUser =
        data.getPresaleInfo[0].length > 0 ? data.getPresaleInfo[0][indexDay] : 0
    const totalEther =
        data.getPresaleInfo[1].length > 0
            ? data.getPresaleInfo[1][indexDay] / 1e18
            : 0

    const currentUser =
        data.getUserInfo.length > 0 ? data.getUserInfo[indexDay] / 1e18 : 0
    const percentage =
        Number(currentUser) === 0
            ? 0
            : (Number(currentUser) / Number(totalEther)) * 100

    return (
        <div className="bg-gray dark:bg-gray-4 border border-gray-11 dark:border-gray-4 py-6 px-8 rounded-xl relative overflow-hidden">
            {loading && (
                <div className="absolute left-0 top-0 flex justify-center items-center w-full h-full bg-gray-9 bg-opacity-20 z-50">
                    <Spin size="large" />
                </div>
            )}
            <div className="mb-0 lg:mb-3">
                <div className="text-gray-10 dark:text-white flex flex-col">
                    <div className="text-3xl leading-none">
                        <span className="text-primary">Daily&nbsp;</span>
                        <span>reservation</span>
                    </div>
                    <div className="flex flex-row my-2">
                        <p className="text-gray-10 dark:text-white text-lg">
                            Day {currentDay} (UTC)
                            <span className="text-gray-5 pl-3">
                                {' '}
                                (date coming soon)
                                {/* {currentDate.getUTCDate()}/
                                {currentDate.getUTCMonth() + 1}/
                                {currentDate.getUTCFullYear()} */}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row divide-x-0 divide-y lg:divide-x lg:divide-y-0">
                <div className="flex-grow py-5 pr-0 lg:py-0 lg:pr-8 xl:pr-16">
                    <div className="flex flex-col">
                        <div className="text-gray-10 dark:text-white text-3xl mb-2 leading-none font-semibold text-center lg:text-left">
                            833,333
                        </div>
                        <div className="text-gray-10 dark:text-white leading-none text-2xl mb-2 text-center lg:text-left">
                            DDOT token
                        </div>
                        <div className="input-amount text-center">
                            <Space>
                                <InputNumber
                                    min={0}
                                    max={999}
                                    defaultValue={1}
                                    onChange={(val) => setAmount(val)}
                                />
                                <span className="text-gray-10 dark:text-white text-2xl">
                                    ETH
                                </span>
                            </Space>
                        </div>
                        <div>
                            {disabledButton ? (
                                <button
                                    className="disabled:opacity-50 bg-primary rounded-md py-4px px-1 text-white text-lg w-full"
                                    style={{
                                        paddingTop: '6px',
                                        paddingBottom: '6px',
                                    }}
                                    disabled
                                >
                                    Reserve DDOT token
                                </button>
                            ) : (
                                <button
                                    className="bg-primary rounded-md py-4px px-1 text-white text-lg w-full"
                                    style={{
                                        paddingTop: '6px',
                                        paddingBottom: '6px',
                                    }}
                                    onClick={() => {
                                        if (!reservingToken)
                                            reserveToken(amount)
                                    }}
                                >
                                    {reservingToken ? (
                                        <span>
                                            <span className="pr-2">
                                                <Spin indicator={antIcon} />
                                            </span>
                                            Reserving DDOT token
                                        </span>
                                    ) : (
                                        'Reserve DDOT token'
                                    )}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex flex-shrink w-full lg:w-4/6 px-0 py-5 lg:py-0 lg:pl-5 lg:pr-5 xl:pl-10">
                    <div className="flex-1 flex flex-col justify-between ">
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
                                    Total Ether
                                </div>
                                <div className="text-gray-10 dark:text-white text-lg">
                                    {useCurrency(totalEther, 2)} ETH
                                </div>
                            </div>
                            <div className="text-center py-2 md:py-0">
                                <div className="text-gray-5 text-md px-5 md:p-0">
                                    Your contribution
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
                                        Total Destinare token
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
                                    trailColor={isDarkMode ? '#fff' : '#c9c9c9'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDailyReserve
