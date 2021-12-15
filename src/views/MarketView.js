import React from 'react'
import { Row, Col } from 'antd'
import CardReserve from '../components/Cards/CardReserve'
import CardDailyReserve from '../components/Cards/CardDailyReserve'
import CardClaimingDay from './../components/Cards/CardClaimingDay'
import CardYourContribution from './../components/Cards/CardYourContribution'
import CardTokens from './../components/Cards/CardTokens'
import useSCInteractions from './../hooks/useSCInteractions'

const RenderCards = ({ initDate, data }) => {
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
                />
            </Col>
        )
        cards.push(component)
    }
    return <React.Fragment>{cards}</React.Fragment>
}

const MarketView = (props) => {
    const { data } = useSCInteractions()
    const initDate = new Date()

    return (
        <div className="mx-5">
            <div className="border-b border-gray-11 dark:border-gray-1 pb-8">
                <div className="pt-6 max-w-1650px mx-auto">
                    <div className="text-gray-5 font-semibold text-center relative dark:bg-blue-1 bg-light-2 mb-5">
                        <div className="text-2xl">Reservations</div>
                        <div className="text-lg">
                            Choose reservation day by 7 of June 2021
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-6 max-w-1650px mx-auto pb-8">
                <Row gutter={[20, 20]} className="flex justify-center">
                    <Col xs={24} sm={24} md={24} lg={24} xl={17}>
                        <CardDailyReserve initDate={initDate} />
                    </Col>
                    <Col
                        xs={24}
                        sm={24}
                        md={24}
                        lg={18}
                        xl={7}
                        className="flex"
                    >
                        <CardClaimingDay initDate={initDate} />
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
                            <RenderCards initDate={initDate} data={data} />
                        </Row>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={18} xl={7}>
                        <CardTokens tokens={data.userTokens} />
                        <CardYourContribution initDate={initDate} />
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default MarketView
