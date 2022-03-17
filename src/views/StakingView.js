import React from 'react'
// import { Row, Col } from 'antd'
import CollapseStaking from '../components/Collapse/CollapseStaking'
import ReloadDataButton from '../components/ReloadButton/ReloadDataButton'

const StakingView = (props) => {
    return (
        <div className="mx-5 " style={{ height: '100%' }}>
            <div className="max-w-1650px mx-auto h-full flex flex-col pb-8">
                <div className="mb-6 mt-4 flex justify-end">
                    <ReloadDataButton />
                </div>
                <CollapseStaking />
            </div>
        </div>
    )
}

export default StakingView
