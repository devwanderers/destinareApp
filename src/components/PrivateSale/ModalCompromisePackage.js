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

const ModalCompromisePackage = ({ title, packageId, visible, onClose }) => {
    const [loading, setLoading] = useState(false)

    const updateWhitelist = useUpdateWhitelist()

    const handleCompromise = async () => {
        if (loading) return
        setLoading(true)
        const res = await updateWhitelist({ package: packageId })

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
            onClose={() => onClose()}
            maskClosable={!loading}
            footer={null}
            centered
        >
            <div className="text-center">
                <p className=" text-center">
                    Estas a punto de seleccionar este paquete, una vez que lo
                    selecciones no podrias cambiarlo. Todos los paquetes
                    incluyen un periodo de prueba de uso, con un porcentaje de
                    rendimiento, este periodo es forzoso.
                </p>
                <div className="text-lg mt-3">Estas de acuerdo?</div>
            </div>
            <div className="flex gap-2 mt-8 px-8">
                <ButtonSpinner
                    onClick={() => onClose()}
                    className="w-full"
                    variant="secondary"
                    disabled={loading}
                >
                    Close
                </ButtonSpinner>
                <ButtonSpinner
                    loading={loading}
                    onClick={handleCompromise}
                    className="w-full"
                >
                    {!loading && 'Compromise'}
                </ButtonSpinner>
            </div>
        </Modal>
    )
}

export default ModalCompromisePackage
