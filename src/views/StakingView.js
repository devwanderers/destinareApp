import React from 'react'
// import { Row, Col } from 'antd'
import CollapseStaking from '../components/Collapse/CollapseStaking'
import ReloadDataButton from '../components/ReloadButton/ReloadDataButton'

const StakingView = (props) => {
    return (
        <div className="mx-5">
            <div className="max-w-1650px mx-auto">
                <div className="pb-8">
                    <div className="mb-6 mt-4 flex justify-end">
                        <ReloadDataButton />
                    </div>

                    <CollapseStaking />
                </div>
            </div>
        </div>
    )
}

export default StakingView
