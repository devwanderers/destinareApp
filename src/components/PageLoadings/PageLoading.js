import React from 'react'
import { Spin } from 'antd'

const PageLoading = (props) => {
    return (
        <div className="flex-1 flex justify-center items-center h-full w-full">
            <Spin />
        </div>
    )
}

export default PageLoading
