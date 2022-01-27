import { useCallback } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { useWeb3React } from '@web3-react/core'
import DestinareContract from '../../abi/DestinareContract.json'
// import useDeepCompareEffect from '../useDeepCompareEffect'
import useActiveWeb3React from '../useActiveWeb3React'
// import * as scActions from '../../store/reducers/scInteractionReducer/actions'
// import {
//     dataSCSelector,
//     fetchedDataSCSelector,
//     fetchingDataSCSelector,
// } from '../../store/reducers/scInteractionReducer/selectors'
// import useInterval from '../useInterval'
// import useEffectOnce from '../useEffectOnce'

const useSCInteractions = () => {
    const { library, account } = useActiveWeb3React()
    // const [initData, setinitData] = useState(false)
    // const [fetchingData, setFetchingData] = useState(false)
    // Estado traido del reducer
    // const data = useSelector(dataSCSelector)
    // const fetchingData = useSelector(fetchingDataSCSelector)
    // const fetchedData = useSelector(fetchedDataSCSelector)
    // const dispatch = useDispatch()

    // Acciones conectadas con dispatch
    // const setData = (data) => dispatch(scActions.setData(data))
    // const setFetchingData = (data) => dispatch(scActions.setFetchingData(data))
    // const { library, account } = useWeb3React()

    const reserveToken = useCallback(
        async (amount, callback) => {
            try {
                const contract = new library.eth.Contract(
                    DestinareContract,
                    process.env.REACT_APP_DESTINARE_CONTRACT_ADDRESS
                )
                console.log({ account })
                const tx = await contract.methods
                    .reserveTokens()
                    .send({ from: account, value: amount * 1e18 })
                    .then((res) => res)
                console.log('reserveToken', tx)
                // if (tx.status) getData()
                if (typeof callback === 'function') {
                    const message = 'Se reservaron tokens con exito'
                    callback(message)
                }
            } catch (err) {
                console.log({ err })
                if (typeof callback === 'function') {
                    const _err = { err }
                    callback(_err)
                }
            }
        },
        [library, account]
    )

    const claimToken = useCallback(
        async (callback) => {
            try {
                const contract = new library.eth.Contract(
                    DestinareContract,
                    process.env.REACT_APP_DESTINARE_CONTRACT_ADDRESS
                )
                const tokens = await contract.methods
                    .claimPresaleTokens()
                    .send({ from: account })
                console.log('claimToken', tokens)
                // if (tokens.status) getData()
                if (typeof callback === 'function') {
                    const message = 'Se reservaron tokens con exito'
                    callback(message)
                }
            } catch (err) {
                console.log({ err })
                if (typeof callback === 'function') {
                    const _err = { err }
                    callback(_err)
                }
            }
        },
        [library, account]
    )

    const createStake = useCallback(
        async (stake, type) => {
            try {
                const contract = new library.eth.Contract(
                    DestinareContract,
                    process.env.REACT_APP_DESTINARE_CONTRACT_ADDRESS
                )
                const created = await contract.methods
                    .createStake(stake, type)
                    .send({ from: account })
                console.log('createStake', created)
                // if (created.status) getData()
            } catch (err) {
                console.log({ err })
            }
        },
        [library, account]
    )

    const getReward = useCallback(
        async (stake) => {
            try {
                const contract = new library.eth.Contract(
                    DestinareContract,
                    process.env.REACT_APP_DESTINARE_CONTRACT_ADDRESS
                )

                const withdrawal = await contract.methods
                    .withdrawReward(stake)
                    .send({ from: account })
                console.log('getReward', withdrawal)
                // if (withdrawal.status) getData()
            } catch (err) {
                console.log({ err })
            }
        },
        [library, account]
    )

    // const getStakes = async (contract) => {
    //     const stakes = []
    //     for (let i = 0; i < 4; i++) {
    //         const stake = await contract.methods.stakeTypes(i).call()
    //         stakes.push({ ...stake })
    //     }
    //     return stakes
    // }

    // const getStakesReward = async (contract, stakes) => {
    //     for (let i = 0; i < stakes.length; i++) {
    //         const element = stakes[i]
    //         if (Number(element.tokensLocked) > 0) {
    //             element.reward = await contract.methods
    //                 .calculateReward(account, i.toString())
    //                 .call({ from: account })
    //         }
    //     }
    //     return stakes
    // }

    // const getData = useCallback(async () => {
    //     if (!fetchingData && library?.eth) {
    //         setFetchingData(true)
    //         try {
    //             const contract = new library.eth.Contract(
    //                 DestinareContract,
    //                 process.env.REACT_APP_DESTINARE_CONTRACT_ADDRESS
    //             )

    //             const circulatingSupply = await contract.methods
    //                 .circulatingSupply()
    //                 .call()

    //             const totalSupply = await contract.methods.totalSupply().call()

    //             const getPresaleInfo = await contract.methods
    //                 .getPresaleInfo()
    //                 .call()

    //             const getUserInfo = await contract.methods
    //                 .getUserInfo()
    //                 .call({ from: account })

    //             const contractStakes = await getStakes(contract)

    //             const _userStakes = await contract.methods
    //                 .stakeOf(account)
    //                 .call({ from: account })
    //                 .then((res) => {
    //                     const object = { ...res }
    //                     const array = Object.keys(object).reduce(
    //                         (acc, o, index) => {
    //                             if (index > 2) {
    //                                 return { ...acc, [o]: object[o] }
    //                             }
    //                             return acc
    //                         },
    //                         {}
    //                     )
    //                     const arrayObjects = array._stakeTime.reduce(
    //                         (acc, item, index) => {
    //                             return [
    //                                 ...acc,
    //                                 {
    //                                     stakeTime: array._stakeTime[index],
    //                                     tokensLocked:
    //                                         array._tokensLocked[index],
    //                                     type: array._type[index],
    //                                 },
    //                             ]
    //                         },
    //                         []
    //                     )
    //                     return arrayObjects
    //                 })

    //             const userStakes = await getStakesReward(contract, _userStakes)

    //             const userTokens = await contract.methods
    //                 .balanceOf(account)
    //                 .call({ from: account })
    //             console.log({ userTokens })
    //             const isStakeholder = await contract.methods
    //                 .isStakeholder(account)
    //                 .call()

    //             const totalUserStakes = await contract.methods
    //                 .totalUserStakes(account)
    //                 .call()
    //             console.log('totalUserStakes', totalUserStakes)

    //             setData({
    //                 circulatingSupply,
    //                 totalSupply,
    //                 getPresaleInfo,
    //                 getUserInfo,
    //                 contractStakes,
    //                 userStakes,
    //                 userTokens,
    //                 isStakeholder,
    //                 totalUserStakes,
    //             })
    //         } catch (err) {
    //             setFetchingData(false)
    //             console.log({ err })
    //         }
    //     }
    // }, [library, account])

    // useEffectOnce(() => {
    //     getData()
    // })

    // useDeepCompareEffect(() => {
    //     getData()
    // }, [library, account])

    return {
        reserveToken,
        claimToken,
        createStake,
        getReward,
    }
}

export default useSCInteractions
