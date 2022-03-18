import React from 'react'
import { IoCopyOutline } from 'react-icons/io5'
import { FaEthereum } from 'react-icons/fa'
import { formatAddress } from './../../../services/address-services'
import useCopyToClipboard from './../../../hooks/useCopyToClipboard'
import { Tooltip } from 'antd'

const ActivityElement = ({ data }) => {
    const [timeStamp, from, to, tx, amount, tokens] = data
    const [copyToClipboard, { success }] = useCopyToClipboard()

    let formatDate = new Date(parseInt(timeStamp))
    formatDate = formatDate.toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
    console.log({ tokens })
    const formattedToken = parseInt(tokens).toLocaleString('en-US')
    console.log({ formattedToken })
    return (
        <div className="flex flex-row w-full  px-4 lg:px-12 pt-3 pb-2 text-black-2 dark:text-gray-6 font-medium text-xs">
            <div className="flex-1">{formatDate}</div>
            <div className="flex-1">ETH Mainet</div>
            <div className="flex-1 flex">
                <p className="flex items-center">
                    {formatAddress(from)}
                    <Tooltip className="" title={success ? 'copied' : 'copy'}>
                        <button
                            onClick={() => copyToClipboard(from)}
                            className="text-xl text-primary ml-3"
                        >
                            <IoCopyOutline />
                        </button>
                    </Tooltip>
                </p>
            </div>
            <div className="flex-1 flex">
                <p className="flex items-center">
                    {formatAddress(to)}
                    <Tooltip className="" title={success ? 'copied' : 'copy'}>
                        <button
                            onClick={() => copyToClipboard(to)}
                            className="text-xl text-primary ml-3"
                        >
                            <IoCopyOutline />
                        </button>
                    </Tooltip>
                </p>
            </div>
            <div className="flex-1 flex">
                <p className="flex items-center">
                    {formatAddress(tx)}
                    <Tooltip className="" title={success ? 'copied' : 'copy'}>
                        <button
                            onClick={() => copyToClipboard(tx)}
                            className="text-xl text-primary ml-3"
                        >
                            <IoCopyOutline />
                        </button>
                    </Tooltip>
                </p>
            </div>
            <div className="flex-1 flex items-center">
                <FaEthereum className="relative" style={{ top: '-2px' }} />
                {amount} ETH
            </div>
            <div className="flex-1 flex items-center">
                {formattedToken} DDOT
            </div>
        </div>
    )
}

export default ActivityElement
