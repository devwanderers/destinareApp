import { useState } from 'react'
import { useWeb3React } from '@web3-react/core'
// import { useDispatch } from 'react-redux'
import { injected } from './../wallet/connectors'
import { useLocalStorage } from './useStorage'
import DestinareContract from '../abi/DestinareContract.json'
import useEffectOnce from './useEffectOnce'

const useSCInteractions = () => {
    const [data, setData] = useState({
        circulatingSupply: 0,
        totalSupply: 0,
        getPresaleInfo: { 0: [], 1: [] },
    })

    const { active, library, activate, deactivate, error } = useWeb3React()
    const [walletActive, setValue] = useLocalStorage('wallet', false)

    async function connect() {
        try {
            await activate(injected)

            if (!walletActive) setValue(true)
        } catch (ex) {
            console.log({ ex })
        }
    }

    async function disconnect() {
        try {
            deactivate()
        } catch (ex) {
            console.log(ex)
        }
    }

    useEffectOnce(async () => {
        if (walletActive) await connect()
        if (library?.eth) {
            const contract = new library.eth.Contract(
                DestinareContract,
                process.env.REACT_APP_DESTINARE_CONTRACT_ADDRESS
            )

            const circulatingSupply = await contract.methods
                .circulatingSupply()
                .call()
            const totalSupply = await contract.methods.totalSupply().call()
            const getPresaleInfo = await contract.methods
                .getPresaleInfo()
                .call()
            const getUserInfo = await contract.methods.getUserInfo().call()
            // console.log({ getPresaleInfo })
            console.log({ getUserInfo })
            setData((state) => ({
                ...state,
                circulatingSupply,
                totalSupply,
                getPresaleInfo: { ...getPresaleInfo },
            }))
        }
    })

    return { connect, disconnect, active, error, data }
}

export default useSCInteractions
