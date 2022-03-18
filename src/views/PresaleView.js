/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import CardContainer from '../components/Cards/CardContainer'
import FormPrivateSale from '../components/PrivateSale/FormPrivateSale'
import { useSCData } from '../store/reducers/scInteractionReducer/hooks'
import { useWeb3React } from '@web3-react/core'
import useTimeout from './../hooks/useTimeout'
import {
    useAlreadyRequestWhitelist,
    useWhiteList,
    useFetchWhiteList,
    useFetchingWhiteList,
    useUpdateWhitelist,
} from './../store/reducers/whitelist/hooks'
import useDebounce from './../hooks/useDebounce'
import ModalCompromisePackage from '../components/PrivateSale/ModalCompromisePackage'
import CardCompromisePlan from '../components/PrivateSale/CardCompromisePlan'
import CardReservePlan from './../components/PrivateSale/CardReservePlan'
import useDeepCompareEffect from './../hooks/useDeepCompareEffect'
import PageLoading from '../components/PageLoadings/PageLoading'
import { useBuyPrivateSale } from '../hooks/scInteractions/privateSaleHooks'
import useValidate from './../hooks/useValidate'
import { useHistory } from 'react-router'
import { InvestPath } from './../constants/routerConstants'
import { useBuyPreSale } from '../hooks/scInteractions/preSaleHook'
import { stakingLvlsPre } from '../constants/stakingLevels'

const PrivateSaleView = () => {
    const history = useHistory()
    const { account } = useWeb3React()
    const { fetchedData, data } = useSCData()
    const [verified, setVerified] = useState(false)
    const [visible, setVisible] = useState(false)
    const [selectedPlan, setPlan] = useState(null)
    const [paying, setPaying] = useState(false)
    const [planCompromised, setPlanCompromised] = useState(null)

    const alreadyRequest = useAlreadyRequestWhitelist()
    const whitelist = useWhiteList()
    const fetchWhiteList = useFetchWhiteList()

    const {
        whiteList: fetchingWhiteList,
        alreadyRequest: fetchingAlreadyRequest,
    } = useFetchingWhiteList()

    const buyPreSale = useBuyPreSale()
    const updateWhitelist = useUpdateWhitelist()

    useDeepCompareEffect(() => {
        if (whitelist.package !== 0) {
            const _selectedPackage = stakingLvlsPre.find(
                (s) => s.packageId === whitelist.packagePreSale
            )
            if (_selectedPackage) setPlanCompromised(_selectedPackage)
        }
    }, [whitelist])

    const handleSelectPackage = (data) => {
        setVisible(true)
        setPlan(data)
    }

    const handleOnCloseModal = (reset = true) => {
        setVisible(false)
        if (reset) setPlan(null)
    }

    const handlePayPlan = () => {
        if (whitelist.privateSale.length > 0) {
            history.push(InvestPath)
        } else {
            setPaying(true)
            buyPreSale(planCompromised, async (err, message, data) => {
                if (err) {
                    setPaying(false)
                    console.log({ err })
                } else {
                    const { from, to, transactionHash } = data

                    await updateWhitelist({
                        preSale: [
                            new Date().getTime(),
                            from,
                            to,
                            transactionHash,
                            planCompromised.amount,
                        ],
                    })

                    history.push(InvestPath)
                }
            })
        }
    }

    const loadingPage = useValidate([
        !account,
        !fetchWhiteList.alreadyRequest,
        fetchWhiteList.alreadyRequest &&
            alreadyRequest &&
            !fetchWhiteList.whiteList,
    ])

    if (loadingPage) {
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
                saleType="presale"
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
                                {stakingLvlsPre.map((s) => {
                                    const {
                                        title,
                                        subtitle,
                                        properties,
                                        packageId,
                                    } = s
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
                                    paid={whitelist.preSale.length > 0}
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
