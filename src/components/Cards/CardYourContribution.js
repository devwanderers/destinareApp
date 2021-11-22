import React from 'react'

const CardYourContribution = () => {
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
                            0.00 ETH
                        </span>
                    </div>
                </div>
            </div>
            <div className="pb-10 space-y-2">
                <div className="flex flex-row py-2 justify-between text-lg text-gray-5 border-b border-gray-5">
                    <div className="">Day 1</div>
                    <div>0 ETH</div>
                </div>
                <div className="flex flex-row py-2 justify-between text-lg text-gray-5 border-b border-gray-5">
                    <div className="">Day 2</div>
                    <div>0 ETH</div>
                </div>
                <div className="flex flex-row py-2 justify-between text-lg text-gray-5 border-b border-gray-5">
                    <div className="">Day 3</div>
                    <div>0 ETH</div>
                </div>
                <div className="flex flex-row py-2 justify-between text-lg text-gray-5 border-b border-gray-5">
                    <div className="">Day 4</div>
                    <div>0 ETH</div>
                </div>
                <div className="flex flex-row py-2 justify-between text-lg text-gray-5 border-b border-gray-5">
                    <div className="">Day 5</div>
                    <div>0 ETH</div>
                </div>
                <div className="flex flex-row py-2 justify-between text-lg text-gray-5 border-b border-gray-5">
                    <div className="">Day 6</div>
                    <div>0 ETH</div>
                </div>
                <div className="flex flex-row py-2 justify-between text-lg text-gray-5 border-b border-gray-5">
                    <div className="">Day 7</div>
                    <div>0 ETH</div>
                </div>
                <div className="flex flex-row py-2 justify-between text-lg text-gray-5 border-b border-gray-5">
                    <div className="">Day 8</div>
                    <div>0 ETH</div>
                </div>
            </div>
        </div>
    )
}

export default CardYourContribution
