import React from 'react'
import { Row, Col, Collapse, Table } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import { ImagotipoSVG } from '../assets/svg/home'
const { Panel } = Collapse

const HeaderPanel = ({ info }) => {
    return (
        <div className="flex justify-between flex-wrap content-center items-center mr-10">
            <div className="grid grid-cols-2 gap-1 text-gray-13 dark:text-white">
                <ImagotipoSVG className="w-9" />
                <span className="font-bold text-lg">DDOT</span>
            </div>
            <div className="text-gray-13 dark:text-white">
                <p className="font-light text-lg">APR</p>
                <p className="font-bold text-base">{info}</p>
            </div>
            <div className="text-gray-13 dark:text-white">
                <p className="font-light text-lg">Total deposit</p>
                <p className="font-bold text-base">{info}</p>
            </div>
            <div className="text-gray-13 dark:text-white">
                <p className="font-light text-lg">Max cap</p>
                <p className="font-bold text-base">{info}</p>
            </div>
            <div className="text-gray-13 dark:text-white">
                <p className="font-light text-lg">Duration</p>
                <p className="font-bold text-base">{info}</p>
            </div>
            <div className="text-gray-13 dark:text-white">
                <p className="font-light text-lg">Contract end time</p>
                <p className="font-bold text-base">{info}</p>
            </div>
        </div>
    )
}

const RenderStaking = () => {
    const dataSource = [
        {
            key: '1',
            deposit_date: 'data',
            deposit_amount: 'data',
            reward: 'data',
            lock_duration: 'data',
        },
    ]

    const columns = [
        {
            title: 'Deposit date',
            dataIndex: 'deposit_date',
            key: 'deposit_date',
        },
        {
            title: 'Deposit amount',
            dataIndex: 'deposit_amount',
            key: 'deposit_amount',
        },
        {
            title: 'Reward',
            dataIndex: 'reward',
            key: 'reward',
        },
        {
            title: 'Lock duration',
            dataIndex: 'lock_duration',
            key: 'lock_duration',
        },
    ]
    const items = [1, 2, 3, 4, 5]
    const listItems = items.map((item, index) => {
        return (
            <Collapse
                bordered={false}
                collapsible="header"
                expandIcon={({ isActive }) => (
                    <RightOutlined
                        className="text-gray-13 dark:text-white"
                        rotate={isActive ? 90 : 0}
                    />
                )}
                expandIconPosition="right"
                key={index}
                className="mb-10 rounded-xl dark:bg-gray-4"
            >
                <Panel
                    header={
                        <React.Fragment>
                            <HeaderPanel info="0000" />
                        </React.Fragment>
                    }
                    key={index}
                >
                    <div className="text-gray-13 dark:text-white border-t dark:border-gray-1 pt-4">
                        <div className="button-section text-right mb-5">
                            <button className="bg-primary text-white font-semibold border-none text-base px-6 py-1 rounded-md hover:ring-blue-2 hover:ring-2">
                                Action button
                            </button>
                        </div>
                        <Table
                            rowClassName="dark:bg-gray-4 dark:text-white"
                            pagination={false}
                            dataSource={dataSource}
                            columns={columns}
                        />
                    </div>
                </Panel>
            </Collapse>
        )
    })
    return listItems
}

const StakingView = (props) => {
    return (
        <div className="mx-5">
            <div className="pb-8">
                <Row className="mt-10">
                    <Col md={24}>
                        <RenderStaking />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default StakingView
