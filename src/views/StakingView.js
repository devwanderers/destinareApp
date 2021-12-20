import React from 'react'
import { Row, Col } from 'antd'
import CollapseStaking from '../components/Collapse/CollapseStaking'
import useSCInteractions from '../hooks/useSCInteractions'

const StakingView = (props) => {
    const { data, createStake } = useSCInteractions()
    return (
        <div className="mx-5">
            <div className="pb-8">
                <Row className="mt-10">
                    <Col md={24}>
                        <CollapseStaking
                            items={data.contractStakes}
                            userStakes={data.userStakes}
                            totalTokens={data.userTokens}
                            isStakeholder={data.isStakeholder}
                            createStake={createStake}
                        />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default StakingView
