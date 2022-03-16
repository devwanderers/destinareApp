/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Modal } from 'antd'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Input from '../Inputs/Input'
import ButtonSpinner from './../Buttons/ButtonSpinner'
import useDarkMode from './../../hooks/DarkMode/useDarkMode'
import { validations } from '../../services/yupValidations'
import { cls } from './../../services/helpers'

const ModalPresaleReserve = ({ title, visible, onCancel, loading }) => {
    const [themeMode] = useDarkMode()

    const formik = useFormik({
        validateOnMount: true,
        initialValues: {
            wAddress: '',
            email: '',
            userName: '',
        },
        validationSchema: Yup.object({
            wAddress: validations.walletAddress,
            email: validations.mail,
            userName: validations.userName,
        }),
        onSubmit: (values, { setSubmitting }) => {
            console.log({ values })
            setSubmitting(true)
        },
    })

    return (
        <Modal
            className={cls(`${themeMode === 'dark' && ''}`)}
            title={
                <div className="mt-2">
                    <div className="text-black-2 text-xl">Reservation Info</div>
                    <div className="text-primary font-medium text-base mt-2">
                        {title}
                    </div>
                </div>
            }
            visible={visible}
            onCancel={onCancel}
            maskClosable={!loading}
            footer={null}
            centered
        >
            <div className="space-y-4 mt-4">
                <div className="w-full">
                    <div>
                        <span className=" text-red-0">*</span> Address to
                        whitelist
                    </div>
                    <Input
                        variant="secondary"
                        size="normal"
                        className="w-full"
                        value={formik.values.wAddress}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="wAddress"
                    />
                </div>
                <div className="w-full">
                    <div>
                        <span className=" text-red-0">*</span> Email
                    </div>
                    <Input
                        variant="secondary"
                        size="normal"
                        className="w-full"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="email"
                    />
                </div>
                <div className="w-full">
                    <div>
                        <span className=" text-red-0">*</span> Username
                    </div>
                    <Input
                        variant="secondary"
                        size="normal"
                        className="w-full"
                        value={formik.values.userName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="userName"
                    />
                </div>
            </div>
            <div className="w-full flex justify-center mt-10 mb-2">
                <ButtonSpinner
                    type="submit"
                    size="normal"
                    className="mt-4 w-6/12"
                    disabled={!formik.isValid}
                    loading={formik.isSubmitting}
                >
                    Compromise
                </ButtonSpinner>
            </div>
        </Modal>
    )
}

export default ModalPresaleReserve
