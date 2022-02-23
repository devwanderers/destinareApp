import React from 'react'
// import { Spin } from 'antd'
// import { LoadingOutlined } from '@ant-design/icons'

import useSCInteractions from '../../hooks/scInteractions/useSCInteractions'
import useSCData from './../../hooks/scInteractions/useSCData'
import ButtonSpinner from '../Buttons/ButtonSpinner'

// const antIcon = (
//     <LoadingOutlined className=" text-white" style={{ fontSize: 24 }} spin />
// )

const ReloadDataButton = () => {
    const { reloadData } = useSCInteractions()
    const { fetching: fetchingData } = useSCData()
    return (
        <ButtonSpinner
            disabled={fetchingData}
            loading={fetchingData}
            className=" py-2 text-white w-44"
            onClick={() => {
                reloadData(true)
            }}
        >
            {fetchingData ? 'Refreshing' : 'Refresh'}
        </ButtonSpinner>
    )
}

export default ReloadDataButton
