import React from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

import useSCInteractions from '../../hooks/scInteractions/useSCInteractions'
import useSCData from './../../hooks/scInteractions/useSCData'

const antIcon = (
    <LoadingOutlined className=" text-white" style={{ fontSize: 24 }} spin />
)

const ReloadDataButton = () => {
    const { reloadData } = useSCInteractions()
    const { fetching: fetchingData } = useSCData()
    return (
        <button
            className=" bg-primary text-lg px-12 py-2 rounded-md text-white disabled:opacity-50"
            onClick={() => {
                console.log('Entro')
                reloadData(true)
            }}
            disabled={fetchingData}
        >
            {fetchingData ? (
                <span>
                    <span className="pr-2">
                        <Spin indicator={antIcon} />
                    </span>
                    Refreshing
                </span>
            ) : (
                'Refresh'
            )}
        </button>
    )
}

export default ReloadDataButton
