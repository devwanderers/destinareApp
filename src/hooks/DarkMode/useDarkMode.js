import { useCallback } from 'react'
import useCookie from '../useCookie'

const useDarkMode = () => {
    const [themeMode, updateCookie] = useCookie('theme', 'light', {
        expires: 365 * 1000,
    })

    const switchDarkMode = useCallback(() => {
        updateCookie(themeMode === 'light' ? 'dark' : 'light')
    })

    return [themeMode, switchDarkMode]
}

export default useDarkMode
