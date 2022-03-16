import React from 'react'
import { IoCopyOutline } from 'react-icons/io5'
import { formatAddress } from './../../../services/address-services'

const ActivityElement = (props) => {
    return (
        <div className="flex flex-row w-full  px-4 lg:px-12 pt-3 pb-2 text-black-2 font-medium text-xs">
            <div className="flex-1">14 March</div>
            <div className="flex-1">14 March</div>
            <div className="flex-1 flex">
                <p className="flex items-center">
                    {formatAddress(
                        '0x26688661ca5cFE7F1aCA6b4a379CFD2327811807'
                    )}
                    <button className="text-xl text-primary ml-3">
                        <IoCopyOutline />
                    </button>
                </p>
            </div>
            <div className="flex-1 flex">
                <p className="flex items-center">
                    {formatAddress(
                        '0x26688661ca5cFE7F1aCA6b4a379CFD2327811807'
                    )}
                    <button className="text-xl text-primary ml-3">
                        <IoCopyOutline />
                    </button>
                </p>
            </div>
            <div className="flex-1 flex">
                <p className="flex items-center">
                    {formatAddress(
                        '0x26688661ca5cFE7F1aCA6b4a379CFD2327811807'
                    )}
                    <button className="text-xl text-primary ml-3">
                        <IoCopyOutline />
                    </button>
                </p>
            </div>
            <div className="flex-1">$500</div>
        </div>
    )
}

export default ActivityElement
