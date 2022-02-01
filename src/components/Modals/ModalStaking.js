import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Modal } from 'antd'
// import InputStaking from '../Inputs/InputStaking'
import useResponsive from '../../hooks/useResponsive'
import useCurrency from '../../hooks/useCurrency'
import { validations } from './../../services/yupValidations'
import { AntInput } from './../CreateAntField/index'
import ButtonSpin from '../Buttons/ButtonSpin'

const initialValues = {
    stakingAmount: '',
}

const ModalStaking = ({
    index,
    title,
    visibleModal,
    onCloseModal,
    deposit,
    totalTokens,
    loadingStaking,
}) => {
    // const [amount, setAmount] = useState(0)
    const [widthModal] = useResponsive({
        base: '100%',
        md: '70%',
        lg: '50%',
        xl: '30%',
    })
    totalTokens = totalTokens / 1e18
    const tokens = totalTokens.toFixed(0)

    const schema = Yup.object({
        stakingAmount: validations.staking(tokens),
    })

    const getDdot = () => {
        console.log('get ddot')
    }

    const handleOnCloseModal = (resetForm) => {
        // setAmount(0)
        resetForm()
        onCloseModal()
    }

    const handleSubmit = (values, { resetForm }) => {
        // console.log(Number(values.stakingAmount))
        deposit(Number(values.stakingAmount), index)
        // handleOnCloseModal(resetForm)
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
            <Formik
                // enableReinitialize
                // validateOnMount={true}
                validationSchema={schema}
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                {({
                    isSubmitting,
                    values,
                    setFieldValue,
                    resetForm,
                    isValid,
                    isInitialValid,
                }) => (
                    <Form>
                        <div className="mb-2">
                            <div className="flex justify-between items-center">
                                <p className="font-bold text-base">Stake</p>
                                <p className="font-bold text-base">
                                    Balance:{' '}
                                    <span className="font-normal">
                                        {useCurrency(totalTokens, 0)}
                                    </span>
                                </p>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="  flex flex-row items-start">
                                    <div className="mr-2">
                                        <Field
                                            component={AntInput}
                                            name="stakingAmount"
                                            type="string"
                                            placeholder=""
                                            // hasFeedback
                                            value={values?.stakingAmount}
                                        />
                                    </div>
                                    <button
                                        type="button"
                                        className="disabled:opacity-50 bg-primary rounded-md py-1 px-3 text-white text-base font-bold"
                                        onClick={() => {
                                            setFieldValue(
                                                'stakingAmount',
                                                tokens
                                            )
                                        }}
                                    >
                                        MAX
                                    </button>
                                </div>
                                <p className="text-2xl font-bold">DDOT</p>
                            </div>
                        </div>
                        <div className="">
                            {/* <div className="flex justify-between items-center mb-4">
                                <p className="text-base">
                                    Annual ROI at current rates:
                                </p>
                                <p className="text-base font-bold">$0,00</p>
                            </div> */}
                            <div className="flex justify-around items-center mb-5">
                                <button
                                    type="button"
                                    className="disabled:opacity-50 bg-transparent border-solid border border-primary rounded-md py-1 px-10 text-primary text-lg font-bold"
                                    disabled={loadingStaking}
                                    onClick={() =>
                                        handleOnCloseModal(resetForm)
                                    }
                                >
                                    Cancel
                                </button>
                                <ButtonSpin
                                    type="submit"
                                    className="disabled:opacity-50 bg-primary border-solid border border-primary rounded-md py-1 px-10 text-white text-lg font-bold"
                                    disabled={!isValid || loadingStaking}
                                    loading={loadingStaking}
                                >
                                    Confirm
                                </ButtonSpin>
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
                    </Form>
                )}
            </Formik>
        </Modal>
    )
}

export default ModalStaking
