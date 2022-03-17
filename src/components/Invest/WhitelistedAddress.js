import React from 'react'
import CardContainer from './../Cards/CardContainer'
import { IoCopyOutline } from 'react-icons/io5'
import { useWeb3React } from '@web3-react/core'
import useCopyToClipboard from './../../hooks/useCopyToClipboard'
import { Tooltip } from 'antd'

const WhitelistedAddress = (props) => {
    const { account } = useWeb3React()
    const [copyToClipboard, { success }] = useCopyToClipboard()

    return (
        <CardContainer
            onClick={() => copyToClipboard(account)}
            className="py-3 mx-auto cursor-pointer"
        >
            <div className="flex flex-row justify-center w-full px-4 lg:px-12">
                <div className="flex items-center text-black-2 dark:text-gray-6">
                    <span className="text-xs lg:text-sm">{account}</span>
                </div>
                <div className="ml-auto flex">
                    <Tooltip className="" title={success ? 'copied' : 'copy'}>
                        <button
                            onClick={() => copyToClipboard(account)}
                            className="text-sm lg:text-base text-primary"
                        >
                            <IoCopyOutline />
                        </button>
                    </Tooltip>
                </div>
            </div>
        </CardContainer>
    )
}

export default WhitelistedAddress
