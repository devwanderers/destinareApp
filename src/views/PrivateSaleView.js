import React, { useState, useEffect } from 'react'
import CardContainer from '../components/Cards/CardContainer'
import FormPrivateSale from '../components/PrivateSale/FormPrivateSale'

import { useWeb3React } from '@web3-react/core'

import {
    useAlreadyRequestWhitelist,
    useWhiteList,
    useFetchWhiteList,
    useUpdateWhitelist,
    useClearWhiteListReducer,
} from './../store/reducers/whitelist/hooks'

import ModalCompromisePackage from '../components/PrivateSale/ModalCompromisePackage'
import CardCompromisePlan from '../components/PrivateSale/CardCompromisePlan'
import CardReservePlan from './../components/PrivateSale/CardReservePlan'
import useDeepCompareEffect from './../hooks/useDeepCompareEffect'
import PageLoading from '../components/PageLoadings/PageLoading'
import { useBuyPrivateSale } from '../hooks/scInteractions/privateSaleHooks'

import { useHistory } from 'react-router'
import { InvestPath } from './../constants/routerConstants'
import { stakingLvlsPrivate } from './../constants/stakingLevels'

const initialState = {
    verified: false,
    visible: false,
    selectedPlan: null,
    paying: false,
}

const PrivateSaleView = () => {
    const history = useHistory()
    const { account } = useWeb3React()

    const [state, setState] = useState(initialState)
    const { visible, selectedPlan, paying } = state

    // const [planCompromised, setPlanCompromised] = useState(null)

    const alreadyRequest = useAlreadyRequestWhitelist()
    const whitelist = useWhiteList()
    const fetchWhiteList = useFetchWhiteList()
    const clearWhiteListR = useClearWhiteListReducer()

    const buyPrivateSale = useBuyPrivateSale()
    const updateWhitelist = useUpdateWhitelist()

    useEffect(() => {
        setState(initialState)
        clearWhiteListR()
    }, [account])

    let planCompromised = null
    if (whitelist.package !== 0) {
        const _selectedPackage = stakingLvlsPrivate.find(
            (s) => s.packageId === whitelist.packagePrivateSale
        )
        if (_selectedPackage) planCompromised = _selectedPackage
    }

    useDeepCompareEffect(() => {}, [whitelist])

    const handleSelectPackage = (data) => {
        setState({ ...state, visible: true, selectedPlan: data })
    }

    const handleOnCloseModal = (reset = true) => {
        const newState = { ...state, visible: false }
        if (reset) newState.selectedPlan = null
        setState(newState)
    }

    const handlePayPlan = () => {
        if (whitelist.privateSale.length > 0) {
            history.push(InvestPath)
        } else {
            setState({ ...state, paying: true })
            buyPrivateSale(planCompromised, async (err, message, data) => {
                if (err) {
                    setState({ ...state, paying: false })
                    console.log({ err })
                } else {
                    const { from, to, transactionHash } = data

                    await updateWhitelist({
                        privateSale: [
                            new Date().getTime(),
                            from,
                            to,
                            transactionHash,
                            planCompromised.amount,
                            planCompromised.tokens,
                        ],
                    })

                    history.push(InvestPath)
                }
            })
        }
    }

    if (
        !account ||
        !fetchWhiteList.alreadyRequest ||
        (fetchWhiteList.alreadyRequest &&
            alreadyRequest &&
            !fetchWhiteList.whiteList)
    ) {
        return (
            <div className="mx-5" style={{ height: 'calc(100vh - 109.13px)' }}>
                <PageLoading />
            </div>
        )
    }

    return (
        <div className="mx-5" style={{ height: 'calc(100vh - 109.13px)' }}>
            <ModalCompromisePackage
                visible={visible}
                onClose={handleOnCloseModal}
                {...selectedPlan}
            />
            <div className="max-w-960px mx-auto mt-12">
                {!alreadyRequest ? (
                    <CardContainer className="px-12 pt-8 pb-6">
                        <FormPrivateSale account={account} />
                    </CardContainer>
                ) : (
                    <React.Fragment>
                        {!planCompromised ? (
                            <div className="grid grid-cols-3 gap-4">
                                {stakingLvlsPrivate.map((s) => {
                                    const { title, subtitle, properties } = s
                                    return (
                                        <CardCompromisePlan
                                            key={`package-${title}`}
                                            title={title}
                                            subtitle={subtitle}
                                            properties={properties}
                                            onClick={() =>
                                                handleSelectPackage(s)
                                            }
                                            verified={whitelist.verified}
                                        />
                                    )
                                })}
                            </div>
                        ) : (
                            <div className="w-11/12 md:w-5/12 lg:w-4/12 mx-auto">
                                <CardReservePlan
                                    title={planCompromised.title}
                                    subtitle={planCompromised.subtitle}
                                    properties={planCompromised.properties}
                                    onClick={handlePayPlan}
                                    paid={whitelist.privateSale.length > 0}
                                    loading={paying}
                                    // lock
                                />
                            </div>
                        )}
                    </React.Fragment>
                )}
            </div>
        </div>
    )
}

export default PrivateSaleView
