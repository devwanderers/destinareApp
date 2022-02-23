import { useEffect } from 'react'
import useListenCookie from '../useListenCookie'

const useDarkModeInit = () => {
    const [themeMode] = useListenCookie('theme')

    useEffect(() => {
        if (themeMode === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [])

    useEffect(() => {
        if (themeMode === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [themeMode])
}

export default useDarkModeInit
