import React from 'react'
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs'
import useDarkMode from './../hooks/useDarkMode'
// import useDeepCompareEffect from './../hooks/useDeepCompareEffect'

export const DarkModeSwitch = () => {
    const [theme, switchDarkMode] = useDarkMode()

    return (
        <button
            className=" dark:text-white font-semibold text-xl py-2 px-2 rounded-md flex justify-center items-center border-none"
            onClick={switchDarkMode}
        >
            {theme === 'dark' ? <BsMoonFill /> : <BsFillSunFill />}
        </button>
    )
}

export default DarkModeSwitch
