import React from 'react'
import { Row, Col } from 'antd'
// import TabsButton, { TabPane } from '../components/Tabs/TabsButton'
import CardReserve from '../components/Cards/CardReserve'
import CardDailyReserve from '../components/Cards/CardDailyReserve'
// import { IoIosArrowForward } from 'react-icons/io'

const MarketView = (props) => {
    // const handleOnChangeTab = (key) => {
    //     console.log(key)
    // }
    return (
        <div className="px-12">
            <div className="pt-6">
                <div className="text-gray-5 font-semibold text-center relative dark:bg-blue-1 bg-light-2 border-b border-gray-11 dark:border-gray-1 pb-8 -ml-12 -mr-10 mb-5">
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
                <Row gutter={20}>
                    <Col span="17">
                        <CardDailyReserve />
                    </Col>
                    <Col span="7">
                        <CardReserve />
                    </Col>
                </Row>
                <Row gutter={20} className="mt-5">
                    <Col span="17">
                        <Row gutter={16}>
                            <Col sm={24} className="mb-4">
                                <div className="text-2xl text-gray-10 dark:text-white font-semibold mb-5">
                                    Reservation Days
                                </div>
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
                            <Col sm={8} className="mb-4">
                                <CardReserve />
                            </Col>
                        </Row>
                    </Col>
                    <Col span="7">
                        <CardReserve />
                    </Col>
                </Row>

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
        </div>
    )
}
export default MarketView
