import { useState, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { contractAddress } from './../constants/contractsConstants'
import DESTINARE_CONTRACT from '../abi/DestinareContract.json'

export default function useSupply() {
    const { active, library } = useWeb3React()
    const [supply, setSupply] = useState(0)

    useEffect(async () => {
        if (active && !supply) {
            const contract = new library.eth.Contract(
                DESTINARE_CONTRACT,
                contractAddress
            )
            await contract.methods.circulatingSupply().call()
            setSupply()
        }
    }, [])

    return [supply]
}
