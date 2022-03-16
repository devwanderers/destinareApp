// import { Space } from 'antd'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { validations } from './../../services/yupValidations'
import { AntInput } from './../CreateAntField/index'

const schema = Yup.object({
    stakingAmount: validations.number,
})

const initialValues = {
    stakingAmount: '',
}

const InputStaking = ({ tokens, amount, setAmount, onSubmit, info }) => {
    return (
        <Formik
            validationSchema={schema}
            initialValues={initialValues}
            onSubmit={onSubmit}
        >
            {({ isSubmitting, values, setFieldValue }) => (
                <Form>
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
                            className="disabled:opacity-50 bg-primary rounded-md py-1 px-3 text-white text-base font-bold"
                            onClick={() => {
                                console.log(tokens)
                                setFieldValue('stakingAmount', tokens)
                                // setAmount(tokens)
                            }}
                        >
                            MAX
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default InputStaking
