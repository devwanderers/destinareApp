import React from 'react'
import useConnect from '../hooks/useConnect'
import Router from '../Router'

import '../styles/App.less'

const App = () => {
    useConnect()
    return (
        <React.Fragment>
            <Router />
        </React.Fragment>
    )
}

export default App
