import React, { useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import CardReserve from '../components/Cards/CardReserve'
import CardDailyReserve from '../components/Cards/CardDailyReserve'
import CardClaimingDay from './../components/Cards/CardClaimingDay'
// import CardYourContribution from './../components/Cards/CardYourContribution'
// import CardTokens from './../components/Cards/CardTokens'
import useSCInteractions from '../hooks/scInteractions/useSCInteractions'
import useSCData from './../hooks/scInteractions/useSCData'

import ReloadDataButton from '../components/ReloadButton/ReloadDataButton'
import { getDifferenceInDays } from './../services/dateServices'

const RenderCards = ({ currentDay, data, loading, initDate }) => {
    const cards = []
    for (let index = 0; index < 30; index++) {
        // const date = new Date(initDate)
        // date.setDate(date.getDate() + index)
        // const day = getDifferenceInDays(date)

        // if (day === 0) {
        //     continue
        // }
        if (currentDay === index + 1) continue

        let date = new Date(initDate)
        date.setDate(date.getDate() + index)

        date = date.toLocaleString('en-GB', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
        })

        const component = (
            <div key={`cardPresale${index}`} className="mb-4">
                <CardReserve
                    day={index + 1}
                    date={date}
                    totalUser={
                        data.getPresaleInfo[0].length > 0
                            ? data.getPresaleInfo[0][index]
                            : 0
                    }
                    totalEther={
                        data.getPresaleInfo[1].length > 0
                            ? data.getPresaleInfo[1][index] / 1e18
                            : 0
                    }
                    currentUser={
                        data.getUserInfo.length > 0
                            ? data.getUserInfo[index] / 1e18
                            : 0
                    }
                    loading={loading}
                />
            </div>
        )
        cards.push(component)
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cards}
        </div>
    )
}

const MarketView = () => {
    const { fetchedData, data } = useSCData()
    const { reserveToken, claimToken } = useSCInteractions()

    const [reservingToken, setReservingToken] = useState(false)
    const [claimingToken, setClaimingToken] = useState(false)
    const { account } = useWeb3React()
    const { startDate, claimedTokens, ...restData } = data
    const initDate = startDate ? new Date(startDate * 1000) : new Date()

    const differenceInDays = getDifferenceInDays(initDate)
    const currentDay = differenceInDays < 30 ? differenceInDays + 1 : 30
    const isGreaterThanLimitDay = differenceInDays > 29
    // getDifferenceInDays(initDate) < 31 ? getDifferenceInDays(initDate) : 30

    const handleReserveToken = (amount) => {
        setReservingToken(true)
        reserveToken(amount, (res) => {
            console.log({ res })
            if (res?.message) {
                console.log(res.message)
            }
            setReservingToken(false)
        })
    }

    const handleClaimToken = () => {
        setClaimingToken(true)
        claimToken((res) => {
            console.log({ res })
            if (res?.message) {
                console.log(res.message)
            }
            setClaimingToken(false)
        })
    }

    return (
        <div className="mx-5">
            {/* <div className="border-b border-gray-11 dark:border-gray-1 pb-8">
                <div className="pt-6 max-w-1650px mx-auto">
                    <div className="text-gray-5 font-semibold text-center relative dark:bg-blue-1 bg-light-2 mb-5">
                        <div className="text-2xl">Reservations</div>
                        <div className="text-lg">
                            Choose reservation day (date coming soon)
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="pt-6 max-w-1650px mx-auto pb-8">
                <div className="mb-4 flex justify-end"></div>
                <div className="grid grid-cols-1 lg:grid-cols-10 gap-4">
                    <div className="lg:col-span-7">
                        <CardDailyReserve
                            currentDay={currentDay}
                            data={restData}
                            reserveToken={handleReserveToken}
                            reservingToken={reservingToken}
                            disabledButton={
                                !account ||
                                isGreaterThanLimitDay ||
                                claimedTokens
                            }
                            loading={!fetchedData}
                        />
                    </div>
                    <div className="lg:col-span-3 flex">
                        <CardClaimingDay
                            initDate={initDate}
                            data={restData}
                            claimToken={handleClaimToken}
                            claimingToken={claimingToken}
                            loading={!fetchedData}
                            disabledButton={
                                !account ||
                                claimedTokens ||
                                !isGreaterThanLimitDay
                            }
                        />
                    </div>
                </div>
                <div className="mt-5">
                    <div className="flex flex-row justify-between mb-4">
                        <div className="text-2xl text-gray-10 dark:text-white font-semibold ">
                            Reservation Days
                        </div>
                        <ReloadDataButton />
                    </div>
                    <RenderCards
                        currentDay={currentDay}
                        data={restData}
                        loading={!fetchedData}
                        initDate={initDate}
                    />
                </div>
            </div>
        </div>
    )
}
export default MarketView
