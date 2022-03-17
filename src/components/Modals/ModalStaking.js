/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { Modal } from 'antd'
// import InputStaking from '../Inputs/InputStaking'
import useResponsive from '../../hooks/useResponsive'
import useCurrency from '../../hooks/useCurrency'
import useInput from './../../hooks/useInput'
import Input from './../Inputs/Input'
import ButtonSpinner from './../Buttons/ButtonSpinner'
import {
    validMinValue,
    validMaxValue,
    validOnlyNumbers,
} from './../../services/input-services'
import formatNumber from 'format-number'

const minValue = validMinValue(0)

const formattedCurrency = (v) =>
    formatNumber({})(v, {
        // noSeparator: true,
    })

const formatDDOT = (v) => {
    if (v === '') return '0'

    let num = v.replace(/,/g, '')

    if (!num.includes('.')) return formattedCurrency(parseInt(num))
    num = num.split('.')

    return `${formattedCurrency(parseInt(num[0]))}.${num[1]}`
}

const addDecimal = (v) => {
    console.log('entro')
    if (v === '') return '0'

    let num = v.replace(/,/g, '')

    if (!num.includes('.')) return formattedCurrency(parseInt(num))
    num = num.split('.')

    return `${formattedCurrency(parseInt(num[0]))}.${
        num[1] !== '' ? num[1] : '0'
    }`
}

const ModalStaking = ({
    index,
    title,
    visibleModal,
    onCloseModal,
    deposit,
    userTokens,
    loadingStaking,
}) => {
    userTokens = userTokens / 1e18
    const tokens = Math.floor(userTokens)
    console.log({ tokens })
    const maxValue = validMaxValue(tokens)
    const {
        value: amount,
        bind,
        setValue,
        reset,
    } = useInput(
        '0',
        (v) =>
            minValue(v) && maxValue(v) && validOnlyNumbers(v.replace(/,/g, '')),
        formatDDOT
    )
    // const [amount, setAmount] = useState(0)
    const [widthModal] = useResponsive({
        base: '100%',
        md: '70%',
        lg: '50%',
        xl: '30%',
    })

    const getDdot = () => {
        console.log('get ddot')
    }

    const handleOnCloseModal = () => {
        onCloseModal()
    }

    const handleSubmit = () => {
        // console.log(Number(values.stakingAmount))
        deposit(Number(amount.replace(/,/g, '')), index)
    }

    useEffect(() => {
        if (visibleModal) reset()
    }, [visibleModal])

    return (
        <Modal
            title={title}
            visible={visibleModal}
            onCancel={onCloseModal}
            width={widthModal}
            maskClosable={false}
            footer={null}
        >
            <div>
                <div className="mb-2">
                    <div className="flex justify-between items-center">
                        <p className="font-bold text-base">Stake</p>
                        <p className="font-bold text-base">
                            Balance:{' '}
                            <span className="font-normal">
                                {formatDDOT(userTokens.toString())}
                            </span>
                        </p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="  flex flex-row items-start">
                            <div className="mr-2">
                                <Input
                                    variant="secondary"
                                    className="mr-2 w-full"
                                    onBlur={() => {
                                        setValue(addDecimal(amount))
                                    }}
                                    {...bind}
                                />
                            </div>
                            <button
                                type="button"
                                className="disabled:opacity-50 bg-primary rounded-md py-1 px-3 text-white text-base font-bold"
                                onClick={() => {
                                    setValue(formatDDOT(tokens.toString()))
                                    // setFieldValue('stakingAmount', tokens)
                                }}
                            >
                                MAX
                            </button>
                        </div>
                        <p className="text-2xl font-bold">DDOT</p>
                    </div>
                </div>
                <div className="mt-8">
                    {/* <div className="flex justify-between items-center mb-4">
                                <p className="text-base">
                                    Annual ROI at current rates:
                                </p>
                                <p className="text-base font-bold">$0,00</p>
                            </div> */}
                    <div className="flex justify-around items-center mb-5">
                        <ButtonSpinner
                            size="none"
                            variant="primaryborder"
                            className="py-1 px-10 text-lg font-bold"
                            disabled={loadingStaking}
                            onClick={handleOnCloseModal}
                            // className="disabled:opacity-50 bg-primary border-solid border border-primary rounded-md py-1 px-10 text-white text-lg font-bold"
                        >
                            Cancel
                        </ButtonSpinner>
                        <ButtonSpinner
                            size="none"
                            className="py-1 px-10 text-lg font-bold"
                            // className="disabled:opacity-50 bg-primary border-solid border border-primary rounded-md py-1 px-10 text-white text-lg font-bold"
                            disabled={loadingStaking || Number(amount) <= 0}
                            loading={loadingStaking}
                            onClick={handleSubmit}
                        >
                            Confirm
                        </ButtonSpinner>
                    </div>
                    {/* <div className="text-center">
                        <p
                            onClick={() => getDdot()}
                            className="font-bold text-xl text-primary cursor-pointer"
                        >
                            Get DDOT
                        </p>
                    </div> */}
                </div>
            </div>
        </Modal>
    )
}

export default ModalStaking
