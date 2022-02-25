import { useState } from 'react'
import { ConfigProvider, Table } from 'antd'
import { InboxOutlined } from '@ant-design/icons'
import useListenCookie from '../../hooks/useListenCookie'
import useCurrency from '../../hooks/useCurrency'
import StakingCountDown from '../CountDowns/StakingCountDown'
import useInterval from './../../hooks/useInterval'
import useEffectOnce from './../../hooks/useEffectOnce'
import useSCInteractions from '../../hooks/scInteractions/useSCInteractions'
import ButtonSpin from '../Buttons/ButtonSpin'
import useResponsive from './../../hooks/useResponsive'

const columns = [
    {
        title: 'Deposit date',
        dataIndex: 'deposit_date',
        key: 'deposit_date',
        ellipsis: true,
    },
    {
        title: 'Deposit amount',
        dataIndex: 'deposit_amount',
        key: 'deposit_amount',
        ellipsis: true,
    },
    {
        title: 'Reward',
        dataIndex: 'reward',
        key: 'reward',
        ellipsis: true,
    },
    {
        title: 'Lock duration',
        dataIndex: 'lock_duration',
        key: 'lock_duration',
        ellipsis: true,
    },
    {
        title: '',
        dataIndex: 'unStake',
        key: 'unStake',
        ellipsis: true,
    },
]

const customizeRenderEmpty = () => (
    <div className="text-center">
        <InboxOutlined style={{ fontSize: 40 }} />
        <p>No Data</p>
    </div>
)

const UnStake = ({ item, lockDuration }) => {
    const { getReward } = useSCInteractions()
    const [loading, setLoading] = useState(false)
    const [enableUnstake, setEnableUnstake] = useState(false)

    const lockDurationEnd = () => {
        const today = new Date()
        const ends = new Date(lockDuration)
        setEnableUnstake(today.getTime() > ends.getTime())
    }

    useEffectOnce(() => {
        lockDurationEnd()
    })

    useInterval(
        () => {
            lockDurationEnd()
        },
        !enableUnstake ? 500 : null
    )

    const handleUnstake = () => {
        setLoading(true)
        getReward(item, (res) => {
            if (res?.err) {
                console.log(res)
            }
            setLoading(false)
        })
    }

    return (
        <div className="flex w-full">
            <ButtonSpin
                onClick={handleUnstake}
                className="disabled:opacity-50 bg-primary border-solid border border-primary rounded-md py-1 w-full md:w-8/12 text-white text-lg font-bold mx-auto"
                disabled={!enableUnstake || loading}
                loading={loading}
            >
                Unstake
            </ButtonSpin>
        </div>
    )
}

const TableStaking = ({
    stake,
    lokedTime,
    isStakeholder,
    userStakes,
    getReward,
}) => {
    const [theme] = useListenCookie('theme')
    const [widthCell] = useResponsive({ base: 150, md: '100%' })

    const data = userStakes.reduce((acc, item, i) => {
        if (Number(item.type) === stake && item.reward != null) {
            const date = new Date(item.stakeTime * 1000).toLocaleString('en-GB')
            console.log({ date })
            const depositAmount = item.tokensLocked / 1e18
            const reward = (item.reward - item.tokensLocked) / 1e18
            let lockDuration = Number(item.stakeTime) + Number(lokedTime)
            lockDuration = lockDuration * 1000

            return [
                ...acc,
                {
                    key: i,
                    deposit_date: date,
                    deposit_amount: useCurrency(depositAmount, 0),
                    reward: useCurrency(reward, 2),
                    lock_duration: (
                        <StakingCountDown
                            value={lockDuration}
                            size="1rem"
                            color="white"
                        />
                    ),
                    width: 100,
                    unStake: (
                        <UnStake
                            item={i}
                            getReward={getReward}
                            lockDuration={lockDuration}
                        />
                    ),
                },
            ]
        }
        return acc
    }, [])
    const isDarkMode = theme === 'dark'
    const tableStyle = isDarkMode
        ? {
              backgroundColor: '#24262d',
              padding: '0px',
          }
        : {
              backgroundColor: '#fafafa',
              padding: '0px',
          }

    return (
        <div className="table-info overflow-y-auto ">
            {isStakeholder && (
                <ConfigProvider renderEmpty={customizeRenderEmpty}>
                    <Table
                        style={tableStyle}
                        pagination={false}
                        columns={columns.reduce(
                            (acc, v) => [...acc, { ...v, width: widthCell }],
                            []
                        )}
                        dataSource={data}
                        className={theme}
                        bordered
                        scroll={{ x: '100%' }}
                    />
                </ConfigProvider>
            )}
        </div>
    )
}
export default TableStaking
