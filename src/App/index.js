import React from 'react'
import useSCGetData from '../hooks/scInteractions/useSCGetData'
import useConnect from '../hooks/useConnect'
import Router from '../Router'

import '../styles/App.less'

const App = () => {
    useConnect()
    useSCGetData()

    return (
        <React.Fragment>
            <Router />
        </React.Fragment>
    )
}

export default App
