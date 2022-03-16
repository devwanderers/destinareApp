import React from 'react'
import WhitelistedAddress from '../components/Invest/WhitelistedAddress'

import Activity from '../components/Invest/Activity'

const InvestView = (props) => {
    return (
        <div className="mx-5" style={{ height: 'calc(100vh - 109.13px)' }}>
            <div className=" max-w-1650px mx-auto mt-12">
                <div className=" text-primary text-xl font-semibold mb-4">
                    Kamelia la Texana
                </div>

                <div className=" text-black-2 text-xl font-semibold mb-2">
                    Register Wallet
                </div>
                <WhitelistedAddress />
                <div className=" text-black-2 text-xl font-semibold mb-2 mt-8">
                    Activity
                </div>
                <Activity />
            </div>
        </div>
    )
}

export default InvestView
