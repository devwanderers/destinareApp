/* eslint-disable prefer-const */
import { useState } from 'react'

const useInput = (initialValue = '', validate, format) => {
    const [value, setValue] = useState(initialValue)
    console.log(initialValue)
    return {
        value,
        setValue,
        reset: () => setValue(initialValue),
        bind: {
            value,
            onChange: (e) => {
                let value = e.target.value

                if (
                    (typeof validate === 'function' &&
                        validate(e.target.value)) ||
                    typeof validate !== 'function'
                ) {
                    if (typeof format === 'function') value = format(value)
                    setValue(value)
                }
            },
        },
    }
}

export default useInput
