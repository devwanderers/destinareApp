import React, { useState } from 'react'
import { Collapse, Table } from 'antd'
import ModalStaking from '../Modals/ModalStaking'
import { RightOutlined } from '@ant-design/icons'
import { ImagotipoSVG } from '../../assets/svg/home'
const { Panel } = Collapse

const HeaderPanel = ({ info: { APR, lockedTime, active } }) => {
    return (
        <div className="flex justify-between flex-wrap content-center items-center mr-10">
            <div className="grid grid-cols-2 gap-1 text-gray-13 dark:text-white">
                <ImagotipoSVG className="w-9" />
                <span className="font-bold text-lg">DDOT</span>
            </div>
            <div className="text-gray-13 dark:text-white">
                <p className="font-light text-lg">APR</p>
                <p className="font-bold text-base">{APR}</p>
            </div>
            <div className="text-gray-13 dark:text-white">
                <p className="font-light text-lg">Total deposit</p>
                <p className="font-bold text-base">{}</p>
            </div>
            <div className="text-gray-13 dark:text-white">
                <p className="font-light text-lg">Max cap</p>
                <p className="font-bold text-base">{}</p>
            </div>
            <div className="text-gray-13 dark:text-white">
                <p className="font-light text-lg">Duration</p>
                <p className="font-bold text-base">{lockedTime}</p>
            </div>
            <div className="text-gray-13 dark:text-white">
                <p className="font-light text-lg">Contract end time</p>
                <p className="font-bold text-base">{}</p>
            </div>
        </div>
    )
}

const CollapseStaking = ({ dataSource, columns, items, totalTokens }) => {
    const [visibleModal, setVisibleModal] = useState(false)
    const handleShowModal = () => {
        setVisibleModal(!visibleModal)
    }
    const deposit = (amount) => {
        console.log('depositar', amount)
    }
    if (!items) return null
    return (
        <React.Fragment>
            <ModalStaking
                title={'Stake tokens'}
                visibleModal={visibleModal}
                onCloseModal={handleShowModal}
                deposit={deposit}
                totalTokens={totalTokens}
            />
            {items.map((item, index) => {
                return (
                    <Collapse
                        bordered={false}
                        collapsible="header"
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
                        <Panel
                            header={
                                <React.Fragment>
                                    <HeaderPanel info={item} />
                                </React.Fragment>
                            }
                            key={index}
                        >
                            <div className="text-gray-13 dark:text-white border-t dark:border-gray-1 pt-4">
                                <div className="button-section text-right mb-4">
                                    {/* <button className="bg-primary text-white font-semibold border-none text-base px-6 py-2 rounded-md hover:ring-blue-2 hover:ring-2">
                                        Connect wallet
                                    </button>
                                    <button className="bg-primary text-white font-semibold border-none text-base px-6 py-2 rounded-md hover:ring-blue-2 hover:ring-2">
                                        Approve Contract
                                    </button> */}
                                    <button
                                        onClick={() => handleShowModal()}
                                        className="bg-primary text-white font-semibold border-none text-base px-6 py-2 rounded-md hover:ring-blue-2 hover:ring-2"
                                    >
                                        Deposit
                                    </button>
                                </div>
                                <Table
                                    rowClassName="dark:bg-gray-4 dark:text-white"
                                    pagination={false}
                                    dataSource={dataSource}
                                    columns={columns}
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
