import React from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

const antIcon = (
    <LoadingOutlined className=" text-white" style={{ fontSize: 24 }} spin />
)

const ButtonSpin = ({
    loading,
    disabled,
    textLoading,
    children,
    ...restProps
}) => {
    return (
        <button
            className=" bg-primary text-lg px-12 py-2 rounded-md text-white disabled:opacity-50"
            disabled={disabled}
            {...restProps}
        >
            {loading ? (
                <span>
                    <span className="pr-2">
                        <Spin indicator={antIcon} />
                    </span>
                    {textLoading}
                </span>
            ) : (
                <React.Fragment> {children}</React.Fragment>
            )}
        </button>
    )
}

export default ButtonSpin
