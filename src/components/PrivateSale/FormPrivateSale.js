/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Input from '../Inputs/Input'
import ButtonSpinner from './../Buttons/ButtonSpinner'
import { validations } from '../../services/yupValidations'
import { useRequestWhitelist } from '../../store/reducers/whitelist/hooks'

const FormPrivateSale = ({ account }) => {
    const [error, setError] = useState(null)
    const requestWhitelist = useRequestWhitelist()

    const formik = useFormik({
        validateOnMount: true,
        initialValues: {
            email: '',
            userName: '',
        },
        validationSchema: Yup.object({
            email: validations.mail,
            userName: validations.userName,
        }),
        onSubmit: async (values, { setSubmitting }) => {
            setSubmitting(true)
            const res = await requestWhitelist({
                ...values,
                walletAddresses: [account],
            })

            if (res?.error) {
                setError(res.payload.message)
            }
            setSubmitting(false)
        },
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="space-y-4 mt-4">
                <div className="w-full">
                    <div className="text-black-2 dark:text-gray-3">
                        <span className=" text-red-0">*</span> Address to
                        whitelist
                    </div>
                    <Input
                        variant="secondary"
                        size="normal"
                        className="w-full dark:text-white"
                        value={account}
                        disabled
                    />
                </div>
                <div className="w-full">
                    <div className="text-black-2 dark:text-gray-3">
                        <span className=" text-red-0">*</span> Email
                    </div>
                    <Input
                        variant="secondary"
                        size="normal"
                        className="w-full"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        disabled={formik.isSubmitting}
                    />
                </div>
                <div className="w-full">
                    <div className="text-black-2 dark:text-gray-3">
                        <span className=" text-red-0">*</span> Username
                    </div>
                    <Input
                        variant="secondary"
                        size="normal"
                        className="w-full"
                        name="userName"
                        value={formik.values.userName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        disabled={formik.isSubmitting}
                    />
                </div>
            </div>
            {error && <div className="text-red-0 mt-3">* {error}</div>}
            <div className="w-full flex justify-center mt-8 mb-2">
                <ButtonSpinner
                    type="submit"
                    size="normal"
                    className="mt-4 w-6/12"
                    disabled={!formik.isValid}
                    loading={formik.isSubmitting}
                >
                    Apply
                </ButtonSpinner>
            </div>
        </form>
    )
}

FormPrivateSale.propTypes = {}

export default FormPrivateSale
