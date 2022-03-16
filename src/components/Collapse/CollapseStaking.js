/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Collapse } from 'antd'
import useAmountTo1E18 from '../../hooks/useAmountTo1E18'
import StakingCountDown from '../CountDowns/StakingCountDown'
import ModalStaking from '../Modals/ModalStaking'
import TableStaking from '../Tables/TableStaking'
import useCurrency from '../../hooks/useCurrency'
import { RightOutlined } from '@ant-design/icons'
import { ImagotipoSVG } from '../../assets/svg/home'
import useSCInteractions from '../../hooks/scInteractions/useSCInteractions'
import useSCData from './../../hooks/scInteractions/useSCData'
import useWindowSize from './../../hooks/useWindowSize'
import useResponsive from './../../hooks/useResponsive'
import useListenCookie from '../../hooks/useListenCookie'
import utilitiesImages from './../../assets/images/utilities/index'
const { Panel } = Collapse

const HeaderPanel = ({ info: { APR, lockedTime, totalDeposit, active } }) => {
    totalDeposit = totalDeposit / 1e18
    const duration = lockedTime * (1 / 86400)
    const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30
    return (
        <div className="w-full flex flex-row justify-between items-center py-2">
            <div className=" flex flex-row text-gray-13 dark:text-white items-center leading-none">
                <ImagotipoSVG className="w-9 mr-2 " />
                <span className="font-bold text-sm md:text-lg ">DDOT</span>
            </div>
            <div className=" text-gray-13 dark:text-white  text-center flex flex-row items-center leading-none">
                <div className="font-light text-sm md:text-sm mr-1">APR:</div>
                <div className="font-bold text-xxs md:text-base">{APR}%</div>
            </div>
            <div className=" text-gray-13 dark:text-white text-center flex flex-row items-center leading-none">
                <div className="font-light text-xs md:text-sm mr-1">
                    Total deposit:
                </div>
                <div className="font-bold text-xxs md:text-base">
                    {useCurrency(totalDeposit, 0)}
                </div>
            </div>
            {/* <div className="text-gray-13 dark:text-white">
                <p className="font-light text-lg">Max cap</p>
                <p className="font-bold text-base">{}</p>
            </div> */}
            <div className=" text-gray-13 dark:text-white text-center flex flex-row items-center leading-none">
                <div className="font-light text-xs md:text-sm mr-1 ">
                    Duration:
                </div>
                <div className="font-bold text-xxs md:text-base ">
                    {Math.ceil(duration)} days
                </div>
            </div>
            <div className=" flex flex-row justify-center items-center leading-none">
                <div className="font-light text-sm md:text-sm text-gray-13 dark:text-white text-center mr-1">
                    Contract end time:
                </div>
                {active ? (
                    <StakingCountDown value={deadline} size={'0.875rem'} />
                ) : (
                    <div className="bg-red-300 text-red-0 text-center rounded-md px-3 py-1  mx-auto font-medium text-xs md:text-sm ">
                        Inactive
                    </div>
                )}
            </div>
        </div>
    )
}

const HeaderPanelMobile = ({
    info: { APR, lockedTime, totalDeposit, active },
}) => {
    totalDeposit = totalDeposit / 1e18
    const duration = lockedTime * (1 / 86400)
    const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30
    return (
        <div className="w-full py-2">
            <div className="flex flex-row justify-between">
                <div className=" flex flex-row text-gray-13 dark:text-white items-center leading-none">
                    <ImagotipoSVG className="w-9 mr-2 " />
                    <span className="font-bold text-sm ">DDOT</span>
                </div>{' '}
                <div className=" flex flex-row justify-center items-center leading-none">
                    <div className="font-light text-xs text-gray-13 dark:text-white text-center mr-1">
                        Contract end time:
                    </div>
                    <div className="font-medium text-xs flex">
                        {active ? (
                            <StakingCountDown
                                value={deadline}
                                size="1rem"
                                color="white"
                            />
                        ) : (
                            <div className="bg-red-1 text-red-0 text-center font-medium rounded-md px-3 py-2  mx-auto">
                                Inactive
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className=" flex flex-row justify-between mt-4">
                <div className=" text-gray-13 dark:text-white  text-center flex flex-row items-center leading-none">
                    <div className="font-light text-xs  mr-1">APR:</div>
                    <div className="font-bold text-sm ">{APR}%</div>
                </div>
                <div className=" text-gray-13 dark:text-white text-center flex flex-row items-center leading-none">
                    <div className="font-light text-xs  mr-1">
                        Total deposit:
                    </div>
                    <div className="font-bold text-sm">
                        {useCurrency(totalDeposit, 0)}
                    </div>
                </div>
                <div className=" text-gray-13 dark:text-white text-center flex flex-row items-center leading-none">
                    <div className="font-light text-xs mr-1">Duration:</div>
                    <div className="font-bold text-sm">{duration} days</div>
                </div>
            </div>
        </div>
    )
}

const CollapseStaking = () => {
    const [loadingStaking, setLoading] = useState(false)
    const [visibleModal, setVisibleModal] = useState(false)
    const [indexModal, setIndexModal] = useState(0)
    const { width } = useWindowSize()
    const { data } = useSCData()
    const { createStake } = useSCInteractions()
    const [theme] = useListenCookie('theme')
    const isDarkMode = theme === 'dark'

    const {
        contractStakes,
        userStakes,
        userTokens,
        isStakeholder,
        totalUserStakes,
    } = data
    const handleShowModal = (index) => {
        setVisibleModal(!visibleModal)
        setIndexModal(index)
    }
    const deposit = (amount, stake) => {
        setLoading(true)
        const amountToStake = useAmountTo1E18(amount)
        createStake(amountToStake, stake, (res) => {
            if (res?.err) {
                console.log(res)
            }
            setLoading(false)
            setVisibleModal(!visibleModal)
        })
    }
    if (!contractStakes || (contractStakes && contractStakes.length === 0))
        return (
            <div className="flex flex-col justify-center items-center flex-grow opacity-75">
                <img
                    className=" w-80 h-auto"
                    src={utilitiesImages.wallet}
                    alt={utilitiesImages.wallet}
                />
                <p className="text-xl mt-8 font-medium">
                    In order to stake your wallet should
                </p>
                <p className="text-xl font-medium">
                    be connected to{' '}
                    <span className="text-orange-2">Destinare</span>
                </p>
            </div>
        )
    return (
        <React.Fragment>
            <ModalStaking
                loadingStaking={loadingStaking}
                index={indexModal}
                title={'Stake tokens'}
                visibleModal={visibleModal}
                onCloseModal={handleShowModal}
                deposit={deposit}
                userTokens={userTokens}
            />
            {contractStakes.map((item, index) => {
                return (
                    <Collapse
                        bordered={false}
                        // collapsible="header"
                        expandIcon={({ isActive }) => (
                            <RightOutlined
                                className="text-gray-13 dark:text-white"
                                rotate={isActive ? 90 : 0}
                            />
                        )}
                        expandIconPosition="right"
                        key={index}
                        className="mb-3 rounded-xl dark:bg-gray-4"
                    >
                        <Panel
                            header={
                                width > 425 ? (
                                    <HeaderPanel info={item} />
                                ) : (
                                    <HeaderPanelMobile info={item} />
                                )
                            }
                            key={index}
                        >
                            <div className="text-gray-13 dark:text-white border-t dark:border-gray-1 pt-4">
                                <div className="button-section text-right mb-4">
                                    {totalUserStakes >= 5 ? (
                                        <div
                                            className="alert alert-info"
                                            role="alert"
                                        >
                                            You only can have 5 stakes
                                        </div>
                                    ) : (
                                        <>
                                            {userTokens > 0 ? (
                                                <button
                                                    onClick={() =>
                                                        handleShowModal(index)
                                                    }
                                                    className="disabled:opacity-50 bg-primary text-white font-semibold border-none text-base px-6 py-2 rounded-md"
                                                    disabled={!item.active}
                                                >
                                                    Deposit
                                                </button>
                                            ) : (
                                                <p>
                                                    You need tokens to continue
                                                </p>
                                            )}
                                        </>
                                    )}
                                </div>
                                <TableStaking
                                    stake={index}
                                    lokedTime={item.lockedTime}
                                    isStakeholder={isStakeholder}
                                    userStakes={userStakes}
                                    isDarkMode={isDarkMode}
                                />
                            </div>
                        </Panel>
                    </Collapse>
                )
            })}
        </React.Fragment>
    )
}

export default CollapseStaking
