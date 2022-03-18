/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import WhitelistedAddress from '../components/Invest/WhitelistedAddress'

import Activity from '../components/Invest/Activity'
import { useWeb3React } from '@web3-react/core'
import PageLoading from '../components/PageLoadings/PageLoading'
import useValidate from './../hooks/useValidate'
import utilitiesImages from './../assets/images/utilities/index'
import { useHistory } from 'react-router'
import {
    useAlreadyRequestWhitelist,
    useFetchWhiteList,
    useWhiteList,
} from './../store/reducers/whitelist/hooks'
import { PrivateSalePath, StakingView } from '../constants/routerConstants'
import ButtonSpinner from '../components/Buttons/ButtonSpinner'
import { useClaimPrivateSale } from './../hooks/scInteractions/privateSaleHooks'
import { stakingLvlsPrivate } from './../constants/stakingLevels'
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

    if (!account || !fetchWhiteList.alreadyRequest || !fetchedData) {
        return (
            <div className="mx-5" style={{ height: 'calc(100vh - 109.13px)' }}>
                <PageLoading />
            </div>
        )
    }

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
                            // disabled={totalTokensPrivate === '0'}
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
                            disabled={totalTokensPre === '0'}
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
