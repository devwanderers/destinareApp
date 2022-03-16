import React from 'react'
import CardContainer from './../Cards/CardContainer'
import { IoCopyOutline } from 'react-icons/io5'

const WhitelistedAddress = (props) => {
    return (
        <CardContainer className="py-3 mx-auto">
            <div className="flex flex-row justify-center w-full pl-4 lg:pl-20 pr-4 lg:pr-12">
                <div className="flex items-center">
                    <span className="text-xs lg:text-sm">
                        0xa5f5A7Aba488d3B240b48689510d9b7c3F95fFAf
                    </span>
                </div>
                <div className="ml-auto flex">
                    <button className="text-sm lg:text-base text-primary">
                        <IoCopyOutline />
                    </button>
                </div>
            </div>
        </CardContainer>
    )
}

export default WhitelistedAddress
