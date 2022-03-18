import React from 'react'

const ActivityContainer = (props) => {
    return (
        <div className="flex flex-row w-full px-4 lg:px-12 pt-3 pb-2 font-medium text-black-2 dark:text-gray-6 text-xs">
            <div className="flex-1 ">Date</div>
            <div className="flex-1 ">Type</div>
            <div className="flex-1 ">From</div>
            <div className="flex-1 ">To</div>
            <div className="flex-1 ">Tx</div>
            <div className="flex-1 ">Amount</div>
            <div className="flex-1 ">Tokens</div>
        </div>
    )
}

export default ActivityContainer
