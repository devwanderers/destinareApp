import React, { useState } from 'react'
import { Row, Col, Spin } from 'antd'
import { useWeb3React } from '@web3-react/core'
import CardReserve from '../components/Cards/CardReserve'
import CardDailyReserve from '../components/Cards/CardDailyReserve'
import CardClaimingDay from './../components/Cards/CardClaimingDay'
import CardYourContribution from './../components/Cards/CardYourContribution'
import CardTokens from './../components/Cards/CardTokens'
import useSCInteractions from '../hooks/scInteractions/useSCInteractions'
import useSCData from './../hooks/scInteractions/useSCData'

import { LoadingOutlined } from '@ant-design/icons'

const antIcon = (
    <LoadingOutlined className=" text-white" style={{ fontSize: 24 }} spin />
)

const RenderCards = ({ initDate, data, loading }) => {
    const cards = []
    for (let index = 0; index < 30; index++) {
        const date = new Date(initDate)
        date.setDate(date.getDate() + index)
        const currentDay = new Date()

        if (currentDay.getDate() === date.getDate()) {
            continue
        }
        const component = (
            <Col
                key={`cardPresale${index}`}
                xs={24}
                sm={24}
                md={24}
                lg={12}
                xl={12}
                className="mb-4"
            >
                <CardReserve
                    day={index + 1}
                    date={`${date.getUTCDate()}/${
                        date.getUTCMonth() + 1
                    }/${date.getUTCFullYear()}`}
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
            </Col>
        )
        cards.push(component)
    }
    return <React.Fragment>{cards}</React.Fragment>
}

const MarketView = (props) => {
    const { fetchedData, data, fetching: fetchingData } = useSCData()
    const { reserveToken, claimToken, reloadData } = useSCInteractions()

    const [reservingToken, setReservingToken] = useState(false)
    const [claimingToken, setClaimingToken] = useState(false)
    const { account } = useWeb3React()
    const { startDate, ...restData } = data
    const initDate = startDate ? new Date(startDate * 1000) : new Date()
    console.log(initDate.getDate())
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
            <div className="border-b border-gray-11 dark:border-gray-1 pb-8">
                <div className="pt-6 max-w-1650px mx-auto">
                    <div className="text-gray-5 font-semibold text-center relative dark:bg-blue-1 bg-light-2 mb-5">
                        <div className="text-2xl">Reservations</div>
                        <div className="text-lg">
                            Choose reservation day (date coming soon)
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-6 max-w-1650px mx-auto pb-8">
                <div className="mb-4 flex justify-end">
                    <button
                        className=" bg-primary text-lg px-12 py-2 rounded-md text-white disabled:opacity-50"
                        onClick={() => {
                            console.log('Entro')
                            reloadData(true)
                        }}
                        disabled={fetchingData}
                    >
                        {fetchingData ? (
                            <span>
                                <span className="pr-2">
                                    <Spin indicator={antIcon} />
                                </span>
                                Refreshing
                            </span>
                        ) : (
                            'Refresh'
                        )}
                    </button>
                </div>
                <Row gutter={[20, 20]} className="flex justify-center">
                    <Col xs={24} sm={24} md={24} lg={24} xl={17}>
                        <CardDailyReserve
                            initDate={initDate}
                            data={restData}
                            reserveToken={handleReserveToken}
                            reservingToken={reservingToken}
                            disabledButton={!account}
                            loading={!fetchedData}
                        />
                    </Col>
                    <Col
                        xs={24}
                        sm={24}
                        md={24}
                        lg={18}
                        xl={7}
                        className="flex"
                    >
                        <CardClaimingDay
                            initDate={initDate}
                            data={restData}
                            claimToken={handleClaimToken}
                            claimingToken={claimingToken}
                            loading={!fetchedData}
                            disabledButton={!account}
                        />
                    </Col>
                </Row>
                <Row
                    gutter={[20, 20]}
                    className="mt-5 flex justify-center flex-wrap-reverse xl:flex-nowrap"
                >
                    <Col xs={24} sm={24} md={24} lg={24} xl={17}>
                        <Row gutter={16}>
                            <Col sm={24} className="mb-4">
                                <div className="text-2xl text-gray-10 dark:text-white font-semibold">
                                    Reservation Days
                                </div>
                            </Col>
                            <RenderCards
                                initDate={initDate}
                                data={restData}
                                loading={!fetchedData}
                            />
                        </Row>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={18} xl={7}>
                        <CardTokens tokens={data.userTokens} />
                        <CardYourContribution
                            initDate={initDate}
                            data={restData}
                        />
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default MarketView
