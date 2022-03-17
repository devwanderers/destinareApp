import { useState } from 'react'
import copy from 'copy-to-clipboard'
import useInterval from './useInterval'

export default function useCopyToClipboard() {
    const [value, setValue] = useState()
    const [success, setSuccess] = useState()

    useInterval(
        () => {
            setSuccess(false)
        },
        success ? 500 : null
    )

    const copyToClipboard = (text, options) => {
        const result = copy(text, options)
        if (result) setValue(text)
        setSuccess(result)
    }

    return [copyToClipboard, { value, success }]
}
