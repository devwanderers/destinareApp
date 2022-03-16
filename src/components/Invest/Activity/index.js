import React from 'react'
import ActivityHeader from './ActivityHeader'
import CardContainer from './../../Cards/CardContainer'
import ActivityElement from './ActivityElement'

const Activity = (props) => {
    return (
        <CardContainer className="pt-3 mx-auto ">
            <div className="overflow-x-auto scrollbar-g">
                <div className="" style={{ minWidth: '680px' }}>
                    <ActivityHeader />
                    <div className="px-2 mb-4">
                        <hr className="border-light-4 dark:border-gray-16" />
                    </div>
                    <div className="max-h-96 overflow-y-auto overflow-x-hidden scrollbar-g pb-3">
                        <ActivityElement />
                        <ActivityElement />
                        <ActivityElement />
                    </div>
                </div>
            </div>
        </CardContainer>
    )
}

export default Activity
