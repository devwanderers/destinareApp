/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import WhitelistedAddress from '../components/Invest/WhitelistedAddress'
import { useHistory } from 'react-router'
import { notification } from 'antd'
import { SmileOutlined } from '@ant-design/icons'
import { useWeb3React } from '@web3-react/core'

import Activity from '../components/Invest/Activity'
import PageLoading from '../components/PageLoadings/PageLoading'
import useValidate from './../hooks/useValidate'
import utilitiesImages from './../assets/images/utilities/index'
import {
    useAlreadyRequestWhitelist,
    useFetchWhiteList,
    useWhiteList,
} from './../store/reducers/whitelist/hooks'
import { PrivateSalePath, StakingView } from '../constants/routerConstants'
import ButtonSpinner from '../components/Buttons/ButtonSpinner'
import { useClaimPrivateSale } from './../hooks/scInteractions/privateSaleHooks'
import { stakingLvlsPrivate } from './../constants/stakingLevels'

import useDeepCompareEffect from './../hooks/useDeepCompareEffect'
import {
    useTotalTokensPrivate,
    useTotalTokensPre,
    useSCData,
} from './../store/reducers/scInteractionReducer/hooks'

const InvestView = (props) => {
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const { account } = useWeb3React()

    const alreadyRequest = useAlreadyRequestWhitelist()
    const whitelist = useWhiteList()
    const fetchWhiteList = useFetchWhiteList()
    const { fetchedData, data } = useSCData()
    const { totalTokensPrivate, totalTokensPre } = data
    const claimPrivateTokens = useClaimPrivateSale()

    const alreadyClaimedPrivateTokens =
        whitelist.privateSale.length > 0 && totalTokensPrivate === '0'
    const alreadyClaimedPreTokens =
        whitelist.preSale.length > 0 && totalTokensPre === '0'

    useEffect(() => {
        notification.destroy()
    }, [account])

    useDeepCompareEffect(() => {
        if (fetchWhiteList.whiteList) {
            if (whitelist.verified) {
                notification.success({
                    key: 'verification',
                    message: 'Verification process status',
                    description: (
                        <div>
                            The verification proccess has ended. Now you are a
                            verified member.{' '}
                            <strong
                                onClick={() => history.push(PrivateSalePath)}
                                className="underline cursor-pointer text-orange-2"
                            >
                                Go to sale
                            </strong>
                        </div>
                    ),
                    duration: 60,
                })
            } else {
                notification.info({
                    key: 'verification',
                    message: 'Verification process status',
                    description:
                        'Thanks for joining us, stay tuned in our discord for future announcements.',
                    duration: 60,
                })
            }
        }
        return () => notification.close('verification')
    }, [whitelist, fetchWhiteList.whiteList])

    const handleClaimTokensPrivate = () => {
        if (alreadyClaimedPrivateTokens) {
            history.push(StakingView)
            return
        }

        setLoading(true)
        const stakeLevel = stakingLvlsPrivate.find(
            (s) => s.packageId === whitelist.packagePrivateSale
        )
        claimPrivateTokens(stakeLevel.stakeId, (err, message, res) => {
            if (err) {
                console.log(err)
            }
            setLoading(false)
        })
    }

    if (!account || !fetchWhiteList.alreadyRequest || !fetchedData) {
        return (
            <div
                className="flex flex-col justify-center items-center flex-grow opacity-75"
                style={{ height: 'calc(100vh - 109.13px)' }}
            >
                <img
                    className=" w-80 h-auto"
                    src={utilitiesImages.wallet}
                    alt={utilitiesImages.wallet}
                />
                <p className="text-xl mt-8 font-medium">
                    In order to stake your wallet should
                </p>
                <p className="text-xl font-medium">
                    be connected to{' '}
                    <span className="text-orange-2">Destinare</span>
                </p>
            </div>
        )
    }

    return alreadyRequest ? (
        <div className="mx-5" style={{ height: 'calc(100vh - 109.13px)' }}>
            <div className=" max-w-1650px mx-auto mt-12">
                <div className=" text-primary text-xl font-semibold mb-4">
                    {whitelist.userName}
                </div>

                <div className=" text-black-2 dark:text-white text-xl font-semibold mb-2">
                    Register Wallet
                </div>
                <WhitelistedAddress />
                <div className="flex items-end mb-2 mt-12">
                    <div className=" text-black-2 dark:text-white text-xl font-semibold">
                        Private Sale
                    </div>
                    <div className="ml-auto">
                        <ButtonSpinner
                            size="normal"
                            className="px-8"
                            onClick={handleClaimTokensPrivate}
                            loading={loading}
                            disabled={whitelist.privateSale.length === 0}
                        >
                            {!loading
                                ? !alreadyClaimedPrivateTokens
                                    ? 'Stake'
                                    : 'Go to Staking'
                                : ''}
                        </ButtonSpinner>
                    </div>
                </div>
                <Activity data={whitelist.privateSale} />
                <div className="flex items-end mb-2 mt-8">
                    <div className=" text-black-2 dark:text-white text-xl font-semibold ">
                        Pre Sale
                    </div>
                    <div className="ml-auto">
                        <ButtonSpinner
                            size="normal"
                            className="px-8"
                            disabled={true}
                            loading={loading}
                        >
                            {!loading
                                ? !alreadyClaimedPreTokens
                                    ? 'Stake'
                                    : 'Go to Staking'
                                : ''}
                        </ButtonSpinner>
                    </div>
                </div>
                <Activity data={whitelist.preSale} />
            </div>
        </div>
    ) : (
        <div
            className="flex flex-col justify-center items-center flex-grow opacity-75"
            style={{ height: 'calc(100vh - 109.13px)' }}
        >
            <img
                className=" w-80 h-auto"
                src={utilitiesImages.wallet}
                alt={utilitiesImages.wallet}
            />
            <p className="text-xl mt-8 font-medium">
                Apply for whitelist in order to gain access.{' '}
            </p>
            <p className="text-xl font-medium">
                <span
                    onClick={() => history.push(PrivateSalePath)}
                    className="text-orange-2 cursor-pointer underline"
                >
                    {' '}
                    Click here to apply
                </span>
            </p>
        </div>
    )
}

export default InvestView
