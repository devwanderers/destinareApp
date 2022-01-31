import React from 'react'
import { Row, Col } from 'antd'
import CollapseStaking from '../components/Collapse/CollapseStaking'
import useSCInteractions from '../hooks/scInteractions/useSCInteractions'
import useSCData from './../hooks/scInteractions/useSCData'
import ReloadDataButton from '../components/ReloadButton/ReloadDataButton'

const StakingView = (props) => {
    const { data } = useSCData()
    const { createStake, getReward } = useSCInteractions()
    return (
        <div className="mx-5">
            <div className="pb-8">
                <div className="mb-6 mt-4 flex justify-end">
                    <ReloadDataButton />
                </div>
                <Row>
                    <Col md={24}>
                        <CollapseStaking
                            items={data.contractStakes}
                            userStakes={data.userStakes}
                            totalTokens={data.userTokens}
                            isStakeholder={data.isStakeholder}
                            totalUserStakes={data.totalUserStakes}
                            createStake={createStake}
                            getReward={getReward}
                        />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default StakingView
