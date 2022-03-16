/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'

const useValidate = (params) => {
    const [valid, setValid] = useState(false)
    useEffect(() => {}, [params])
    return valid
}

export default useValidate
