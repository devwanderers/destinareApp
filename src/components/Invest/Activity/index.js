import React from 'react'
import ActivityHeader from './ActivityHeader'
import CardContainer from './../../Cards/CardContainer'
import ActivityElement from './ActivityElement'
import utilitiesImages from './../../../assets/images/utilities/index'

const Activity = ({ data }) => {
    return (
        <CardContainer className="pt-3 mx-auto ">
            <div className="overflow-x-auto scrollbar-g">
                <div className="" style={{ minWidth: '680px' }}>
                    <ActivityHeader />
                    <div className="px-2 mb-4">
                        <hr className="border-light-4 dark:border-gray-16" />
                    </div>
                    <div className="max-h-96 overflow-y-auto overflow-x-hidden scrollbar-g pb-3">
                        {data?.length > 0 ? (
                            <ActivityElement data={data} />
                        ) : (
                            <div className="w-full flex justify-center gap-2 items-end opacity-40 text-black-2 dark:text-white">
                                <img
                                    className=" w-12 h-auto"
                                    src={utilitiesImages.wallet}
                                    alt={utilitiesImages.wallet}
                                />
                                {"You haven't made an investment"}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </CardContainer>
    )
}

export default Activity
