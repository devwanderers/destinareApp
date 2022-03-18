/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { Modal } from 'antd'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Input from '../Inputs/Input'
import ButtonSpinner from '../Buttons/ButtonSpinner'
import useDarkMode from '../../hooks/DarkMode/useDarkMode'
import { validations } from '../../services/yupValidations'
import { cls } from '../../services/helpers'
import { useUpdateWhitelist } from '../../store/reducers/whitelist/hooks'

const SALE_TYPES = {
    PRIVATE: 'private',
    PRESALE: 'presale',
}

const SALE_PROPERIE = {
    [SALE_TYPES.PRIVATE]: 'packagePrivateSale',
    [SALE_TYPES.PRESALE]: 'packagePreSale',
}

const ModalCompromisePackage = ({
    title,
    packageId,
    visible,
    onClose,
    saleType = SALE_TYPES.PRIVATE,
}) => {
    const [loading, setLoading] = useState(false)

    const updateWhitelist = useUpdateWhitelist()

    const handleCompromise = async () => {
        if (loading) return
        setLoading(true)
        const res = await updateWhitelist({
            [SALE_PROPERIE[saleType]]: packageId,
        })

        setTimeout(() => {
            onClose(!!res?.error)
        }, 450)
    }

    useEffect(() => {
        if (visible && loading) setLoading(false)
    }, [visible])

    return (
        <Modal
            title={
                <div className="mt-2">
                    <div className="text-black-2 text-xl">Selected Plan</div>
                    <div className="text-primary font-medium text-base mt-2">
                        {title}
                    </div>
                </div>
            }
            visible={visible}
            maskClosable={!loading}
            footer={null}
            centered
            onCancel={() => onClose()}
        >
            <div className="text-center">
                <p className=" text-center">
                    You are about to select this plan, once selected it could
                    not be changed. All plans have been designed with proof of
                    use, it means that you should stake it in order to receive
                    rewards.
                </p>
                <div className="text-lg mt-2 font-medium">
                    Do you want to compromise?
                </div>
            </div>
            <div className="flex gap-2 mt-6 px-8">
                <ButtonSpinner
                    onClick={() => onClose()}
                    className="w-full"
                    variant="secondary"
                    disabled={loading}
                >
                    Cancel
                </ButtonSpinner>
                <ButtonSpinner
                    loading={loading}
                    onClick={handleCompromise}
                    className="w-full"
                >
                    {!loading && 'Yes'}
                </ButtonSpinner>
            </div>
        </Modal>
    )
}

export default ModalCompromisePackage
