import { useState, useEffect } from 'react'
import useListenCookie from '../useListenCookie'

const useDarkModeInit = () => {
    const [init, setInit] = useState(false)
    const [themeMode] = useListenCookie('theme')

    useEffect(() => {
        if (themeMode === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        if (!init) setInit(true)
    }, [themeMode])
    return [init]
}

export default useDarkModeInit
