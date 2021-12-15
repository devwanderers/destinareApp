import React, { useState } from 'react'
import { Modal } from 'antd'
import InputStaking from '../Inputs/InputStaking'
import useResponsive from './../../hooks/useResponsive'

const ModalStaking = ({
    title,
    visibleModal,
    onCloseModal,
    deposit,
    totalTokens,
}) => {
    const [amount, setAmount] = useState(0)
    const [widthModal] = useResponsive({
        base: '100%',
        md: '70%',
        lg: '50%',
        xl: '30%',
    })

    const getDdot = () => {
        console.log('get ddot')
    }

    return (
        <Modal
            title={title}
            visible={visibleModal}
            onCancel={onCloseModal}
            width={widthModal}
            deposit={deposit}
            maskClosable={false}
            footer={null}
            centered
        >
            <div className="mb-5">
                <div className="flex justify-between items-center">
                    <p className="font-bold text-base">Stake</p>
                    <p className="font-bold text-base">
                        Balance:{' '}
                        <span className="font-normal">{totalTokens}</span>
                    </p>
                </div>
                <div className="flex justify-between items-center">
                    <InputStaking
                        userBalance={totalTokens}
                        amount={amount}
                        setAmount={setAmount}
                    />
                    <p className="text-2xl font-bold">DDOT</p>
                </div>
            </div>
            <div className="">
                <div className="flex justify-between items-center mb-4">
                    <p className="text-base">Annual ROI at current rates:</p>
                    <p className="text-base font-bold">$0,00</p>
                </div>
                <div className="flex justify-around items-center mb-5">
                    <button
                        className="bg-transparent border-solid border border-primary rounded-md py-1 px-10 text-primary text-lg font-bold"
                        onClick={() => onCloseModal()}
                    >
                        Cancel
                    </button>
                    <button
                        className="disabled:opacity-50 bg-primary border-solid border border-primary rounded-md py-1 px-10 text-white text-lg font-bold"
                        onClick={() => deposit(amount)}
                    >
                        Confirm
                    </button>
                </div>
                <div className="text-center">
                    <p
                        onClick={() => getDdot()}
                        className="font-bold text-xl text-primary cursor-pointer"
                    >
                        Get DDOT
                    </p>
                </div>
            </div>
        </Modal>
    )
}

export default ModalStaking
