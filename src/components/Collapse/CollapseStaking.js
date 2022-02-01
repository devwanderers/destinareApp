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
const { Panel } = Collapse

const HeaderPanel = ({ info: { APR, lockedTime, totalDeposit, active } }) => {
    totalDeposit = totalDeposit / 1e18
    const duration = lockedTime * (1 / 86400)
    const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30
    return (
        <div className="w-full flex justify-between flex-wrap content-center contractStakes-center mr-10">
            <div className="grid grid-cols-2 gap-1 text-gray-13 dark:text-white">
                <ImagotipoSVG className="w-9" />
                <span className="font-bold text-lg">DDOT</span>
            </div>
            <div className="text-gray-13 dark:text-white">
                <p className="font-light text-lg">APR</p>
                <p className="font-bold text-base">{APR}%</p>
            </div>
            <div className="text-gray-13 dark:text-white">
                <p className="font-light text-lg">Total deposit</p>
                <p className="font-bold text-base">
                    {useCurrency(totalDeposit, 0)}
                </p>
            </div>
            {/* <div className="text-gray-13 dark:text-white">
                <p className="font-light text-lg">Max cap</p>
                <p className="font-bold text-base">{}</p>
            </div> */}
            <div className="text-gray-13 dark:text-white">
                <p className="font-light text-lg">Duration</p>
                <p className="font-bold text-base">{duration} days</p>
            </div>
            <div className="">
                <p className="font-light text-lg text-gray-13 dark:text-white">
                    Contract end time
                </p>
                <div className="font-bold text-base">
                    {active ? (
                        <StakingCountDown
                            value={deadline}
                            valueStyle={{ fontSize: '1.1rem', color: 'white' }}
                        />
                    ) : (
                        <div className="bg-red-700 text-white text-center border rounded-xl">
                            Inactive
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

const CollapseStaking = () => {
    const [loadingStaking, setLoading] = useState(false)
    const [visibleModal, setVisibleModal] = useState(false)
    const [indexModal, setIndexModal] = useState(0)
    const { data } = useSCData()
    const { createStake } = useSCInteractions()

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

    if (!contractStakes) return null
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
                        className="mb-10 rounded-xl dark:bg-gray-4"
                    >
                        <Panel header={<HeaderPanel info={item} />} key={index}>
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
