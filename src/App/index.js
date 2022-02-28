import React from 'react'
import useSCGetData from '../hooks/scInteractions/useSCGetData'
import useConnect from '../hooks/useConnect'
import Router from '../Router'

import '../styles/App.less'
import useDarkModeInit from './../hooks/DarkMode/useDarkModeInit'

const App = () => {
    useConnect()
    useSCGetData()
    const [darkModeInit] = useDarkModeInit()

    return <div className="h-screen">{darkModeInit && <Router />}</div>
}

export default App
