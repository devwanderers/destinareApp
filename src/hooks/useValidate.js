/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'

const useValidate = (params = []) => {
    const [valid, setValid] = useState(false)

    useEffect(() => {
        if (params.length > 0) {
            const _valid = params.reduce((acc, p) => {
                if (acc) return acc
                return p
            }, false)
            setValid(_valid)
        }
    }, [params])

    return valid
}

export default useValidate
