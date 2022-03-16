import { useState } from 'react'
import Cookies from 'js-cookie'
import useInterval from './useInterval'

const useListenCookie = (cookieName, delay = 250) => {
    // const [initialized, setInitialized] = useState(false)
    const [currentValue, setCurrentValue] = useState(() => {
        const cookie = Cookies.get(cookieName)
        if (cookie) return cookie
        return null
    })

    useInterval(() => {
        const cookieValue = Cookies.get(cookieName)
        if (cookieValue && cookieValue !== currentValue) {
            setCurrentValue(cookieValue)
        }
    }, delay)

    return [currentValue]
}

export default useListenCookie
