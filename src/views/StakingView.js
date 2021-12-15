import React from 'react'
import { Row, Col } from 'antd'
import CollapseStaking from '../components/Collapse/CollapseStaking'
import useSCInteractions from '../hooks/useSCInteractions'

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

const StakingView = (props) => {
    const { data } = useSCInteractions()
    return (
        <div className="mx-5">
            <div className="pb-8">
                <Row className="mt-10">
                    <Col md={24}>
                        <CollapseStaking
                            dataSource={dataSource}
                            columns={columns}
                            items={data.contractStakes}
                            totalTokens={data.userTokens}
                        />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default StakingView
