/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import CardContainer from '../components/Cards/CardContainer'
import FormPrivateSale from '../components/PrivateSale/FormPrivateSale'
import useSCData from './../hooks/scInteractions/useSCData'
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

const stakingLvls = [
    {
        title: 'Basic Plan',
        subtitle: '0.2 ETH',
        properties: [
            ['DDOT', '12, 500'],
            ['APR', '10%'],
            ['Time', '6 Months'],
        ],
        packageId: 1,
        amount: 0.2,
    },
    {
        title: 'Trader Plan',
        subtitle: '0.4 ETH',
        properties: [
            ['DDOT', '33, 333'],
            ['APR', '15%'],
            ['Time', '5 Months'],
        ],
        packageId: 2,
        amount: 0.4,
    },
    {
        title: 'Investor Plan',
        subtitle: '0.75 ETH',
        properties: [
            ['DDOT', '100, 000'],
            ['APR', '20%'],
            ['Time', '4 Months'],
        ],
        packageId: 3,
        amount: 0.75,
    },
]

const PrivateSaleView = () => {
    const { account } = useWeb3React()
    const { fetchedData, data } = useSCData()
    const [verified, setVerified] = useState(false)
    const [visible, setVisible] = useState(false)
    const [selectedPlan, setPlan] = useState(null)
    const [planCompromised, setPlanCompromised] = useState(null)

    const alreadyRequest = useAlreadyRequestWhitelist()
    const whitelist = useWhiteList()
    const fetchWhiteList = useFetchWhiteList()
    const { whiteList: fetchingWhiteList } = useFetchingWhiteList()

    const buyPrivateSale = useBuyPrivateSale()
    const updateWhitelist = useUpdateWhitelist()

    useDeepCompareEffect(() => {
        if (whitelist.package !== 0) {
            const _selectedPackage = stakingLvls.find(
                (s) => s.packageId === whitelist.package
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
        buyPrivateSale(planCompromised, (err, message, data) => {
            console.log(err, message, data)
            if (err) {
                console.log({ err })
            } else {
                const { events, transactionHash } = data
                updateWhitelist(data)
            }
        })
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
                    <CardContainer
                        loading={fetchingWhiteList}
                        className="px-12 pt-8 pb-6"
                    >
                        <FormPrivateSale account={account} />
                    </CardContainer>
                ) : (
                    <React.Fragment>
                        {!planCompromised ? (
                            <div className="grid grid-cols-3 gap-4">
                                {stakingLvls.map((s) => {
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
                            <div className="w-4/12 mx-auto">
                                <CardReservePlan
                                    title={planCompromised.title}
                                    subtitle={planCompromised.subtitle}
                                    properties={planCompromised.properties}
                                    onClick={handlePayPlan}
                                    verified={whitelist.verified}
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
