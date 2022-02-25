import React from 'react'
// import { Spin } from 'antd'
// import { LoadingOutlined } from '@ant-design/icons'

import useSCInteractions from '../../hooks/scInteractions/useSCInteractions'
import useSCData from './../../hooks/scInteractions/useSCData'
// import ButtonSpinner from '../Buttons/ButtonSpinner'
import IconRefresh from './../../assets/svg/icons/IconRefresh'
import { cls } from './../../services/helpers'

// const antIcon = (
//     <LoadingOutlined className=" text-white" style={{ fontSize: 24 }} spin />
// )

const ReloadDataButton = () => {
    const { reloadData } = useSCInteractions()
    const { fetching: fetchingData } = useSCData()
    return (
        <button
            disabled={fetchingData}
            className="flex items-start justify-center"
            onClick={() => {
                reloadData(true)
            }}
        >
            <div className="h-8 w-8 lg:h-9 lg:w-9">
                <IconRefresh
                    className={cls(`${fetchingData && 'animate-spin'}`)}
                    size={'100%'}
                />
            </div>
        </button>
    )
}

export default ReloadDataButton
