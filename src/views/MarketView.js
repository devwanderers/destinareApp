import React from 'react'
import { Row, Col } from 'antd'
// import TabsButton, { TabPane } from '../components/Tabs/TabsButton'
import CardReserve from '../components/Cards/CardReserve'
import CardDailyReserve from '../components/Cards/CardDailyReserve'
// import { IoIosArrowForward } from 'react-icons/io'
import CardClaimingDay from './../components/Cards/CardClaimingDay'
import CardYourContribution from './../components/Cards/CardYourContribution'
import useSCInteractions from './../hooks/useSCInteractions'

const RenderCards = ({ initDate }) => {
    const { data } = useSCInteractions()
    const cards = []
    for (let index = 0; index < 30; index++) {
        const date = new Date(initDate)
        date.setDate(date.getDate() + index)
        const currentDay = new Date()

        if (currentDay.getDate() === date.getDate()) {
            continue
        }
        const component = (
            <Col key={`cardPresale${index}`} sm={12} className="mb-4">
                <CardReserve
                    day={index + 1}
                    date={`${date.getUTCDate()}/${date.getUTCMonth()}/${date.getUTCFullYear()}`}
                    totalUser={
                        data.getPresaleInfo[0].length > 0
                            ? data.getPresaleInfo[0][index]
                            : 0
                    }
                    totalEther={
                        data.getPresaleInfo[1].length > 0
                            ? data.getPresaleInfo[1][index]
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
    // connect()
    // const initDate = new Date()
    // console.log({ active })
    const initDate = new Date()
    // const
    return (
        <div className="">
            <div className="border-b border-gray-11 dark:border-gray-1 pb-8">
                <div className="pt-6 max-w-1650px mx-auto">
                    <div className="text-gray-5 font-semibold text-center relative dark:bg-blue-1 bg-light-2 mb-5">
                        {/* <div className="absolute right-0 bottom-0">
                        <button className="bg-transparent rounded-md ring-primary text-primary ring-1 dark:bg-blue-1 bg-white  text-lg px-4 py-1">
                            <span className="flex flex-row">
                                Quick menu{' '}
                                <IoIosArrowForward
                                    className="relative ml-2"
                                    style={{ top: '4px' }}
                                />
                            </span>
                        </button>
                    </div> */}
                        <div className="text-2xl">Reservations</div>
                        <div className="text-lg">
                            Choose reservation day by 7 of June 2021
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-6 max-w-1650px mx-auto border-b border-gray-11 dark:border-gray-1 pb-8">
                <Row gutter={20}>
                    <Col span="17">
                        <CardDailyReserve initDate={initDate} />
                    </Col>
                    <Col span="7" className="flex">
                        <CardClaimingDay initDate={initDate} />
                    </Col>
                </Row>
                <Row gutter={20} className="mt-5">
                    <Col span="17">
                        <Row gutter={16}>
                            <Col sm={24} className="mb-4">
                                <div className="text-2xl text-gray-10 dark:text-white font-semibold">
                                    Reservation Days
                                </div>
                            </Col>
                            <RenderCards initDate={initDate} />
                            {/* {data.getPresaleInfo?['0'] &&
                                data.getPresaleInfo['0'].map((info, key) => {
                                    let date = initDate
                                    if (key > 0) {
                                        date = initDate * (24 * 60 * 60)
                                    }
                                    console.log(date.toUTCString())
                                    return (
                                        <Col
                                            key={`cardPresale${info}`}
                                            sm={12}
                                            className="mb-4"
                                        >
                                            <CardReserve />
                                        </Col>
                                    )
                                })} */}
                        </Row>
                    </Col>
                    <Col span="7">
                        <CardYourContribution />
                    </Col>
                </Row>
            </div>

            {/* <TabsButton
                    className="tabs-without-border"
                    defaultActiveKey="1"
                    onChange={handleOnChangeTab}
                    tabBarStyle={{ color: 'white', border: '0px' }}
                >
                    <TabPane tab="All" className="border-none" key="1">
                        <Row gutter={16}>
                            <Col sm={8} className="mb-4">
                                <CardReserve />
                            </Col>
                            <Col sm={8} className="mb-4">
                                <CardReserve />
                            </Col>
                            <Col sm={8} className="mb-4">
                                <CardReserve />
                            </Col>
                            <Col sm={8} className="mb-4">
                                <CardReserve />
                            </Col>
                        </Row>
                    </TabPane>
                </TabsButton> */}
        </div>
    )
}
export default MarketView
