import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

const useListenCookie = (cookieName, delay = 250) => {
    const [initialized, setInitialized] = useState(false)
    const [currentValue, setCurrentValue] = useState(null)

    useEffect(() => {
        let id
        if (!initialized) {
            setInitialized(true)
            id = setInterval(() => {
                const cookieValue = Cookies.get(cookieName)
                if (cookieValue && cookieValue !== currentValue) {
                    setCurrentValue(cookieValue)
                }
            }, delay)
        }

        return () => {
            if (id) clearInterval(id)
        }
    }, [])
    return [currentValue]
}

export default useListenCookie
