import React from 'react'
import useSCInteractions from '../../hooks/useSCInteractions'

const Contribution = ({ initDate, userInfo }) => {
    const contributions = []
    for (let index = 0; index < 30; index++) {
        const date = new Date(initDate)
        date.setDate(date.getDate() + index)
        const amount = userInfo.length > 0 ? userInfo[index] : 0
        const _amount = Number(amount) / 1e18
        const component = (
            <div
                key={`dayContribution${index}`}
                className="flex flex-row py-2 justify-between text-gray-5 border-b border-gray-5"
            >
                <div className="text-base">
                    {`${date.getUTCDate()}/${
                        date.getUTCMonth() + 1
                    }/${date.getUTCFullYear()}`}{' '}
                    - Day {index + 1} (UTC)
                </div>
                <div className="text-base">{_amount} ETH</div>
            </div>
        )
        if (_amount > 0) contributions.push(component)
    }
    return <React.Fragment>{contributions}</React.Fragment>
}

const CardYourContribution = ({ initDate }) => {
    const { data } = useSCInteractions()
    const total = data.getUserInfo.reduce(
        (accum, item) => accum + Number(item),
        0
    )
    const _total = Number(total) / 1e18
    return (
        <div className="flex-1 flex flex-col justify-between bg-gray dark:bg-gray-4 border border-gray-11 dark:border-gray-4 pt-4 pb-4 px-8 rounded-xl relative">
            <div>
                <div className="mb-2 text-gray-10 dark:text-white flex flex-row justify-between">
                    <div className="text-xl leading-none">
                        <span className="text-gray-10 dark:text-white ">
                            Your contribution
                        </span>
                    </div>
                    <div className="text-2xl leading-none">
                        <span className="text-gray-10 dark:text-white">
                            {_total} ETH
                        </span>
                    </div>
                </div>
            </div>
            <div className="pb-5 space-y-2">
                <Contribution
                    initDate={initDate}
                    userInfo={data.getUserInfo}
                ></Contribution>
            </div>
        </div>
    )
}

export default CardYourContribution
