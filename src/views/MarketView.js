import React from 'react'
import { Row, Col } from 'antd'
import TabsButton, { TabPane } from '../components/Tabs/TabsButton'
import CardReserve from '../components/Cards/CardReserve'
import { IoIosArrowForward } from 'react-icons/io'

const MarketView = (props) => {
    const handleOnChangeTab = (key) => {
        console.log(key)
    }
    return (
        <div className="pl-4 pr-8">
            <div className="pt-8">
                <div className=" text-gray-500 font-semibold text-center  relative">
                    <div className="absolute right-0 bottom-0">
                        <button className="bg-transparent rounded-md ring-primary text-primary ring-1 dark:bg-blue-1 bg-white text-lg px-4 py-1">
                            <span className="flex flex-row">
                                Quick menu{' '}
                                <IoIosArrowForward
                                    className="relative ml-2"
                                    style={{ top: '4px' }}
                                />
                            </span>
                        </button>
                    </div>
                    <div className="text-2xl">Reservations</div>
                    <div className="text-lg">
                        Choose reservation day by 7 of June 2021
                    </div>
                </div>
                <div className="text-2xl text-white font-semibold">
                    Reservation Days
                </div>
                <TabsButton
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
                </TabsButton>
            </div>
        </div>
    )
}
export default MarketView
