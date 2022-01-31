import { useState } from 'react'
import { ConfigProvider, Table } from 'antd'
import { InboxOutlined } from '@ant-design/icons'
import useListenCookie from '../../hooks/useListenCookie'
import useCurrency from '../../hooks/useCurrency'
import StakingCountDown from '../CountDowns/StakingCountDown'
import useInterval from './../../hooks/useInterval'
import useEffectOnce from './../../hooks/useEffectOnce'

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

const UnStake = ({ item, getReward, lockDuration }) => {
    const [enableUnstake, setEnableUnstake] = useState(false)

    const lockDurationEnd = () => {
        const today = new Date().toLocaleString('en-GB')
        const ends = new Date(lockDuration).toLocaleString('en-GB')
        setEnableUnstake(today > ends)
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
    return (
        <button
            className="disabled:opacity-50 bg-primary border-solid border border-primary rounded-md py-1 px-10 text-white text-lg font-bold"
            onClick={() => getReward(item)}
            disabled={!enableUnstake}
        >
            Unstake
        </button>
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
    const data = userStakes.reduce((acc, item, i) => {
        if (Number(item.type) === stake && item.reward != null) {
            const date = new Date(item.stakeTime * 1000).toLocaleString('en-GB')
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
                            valueStyle={{ fontSize: '1.1rem', color: 'white' }}
                        />
                    ),
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
        <div className="table-info">
            {isStakeholder && (
                <ConfigProvider renderEmpty={customizeRenderEmpty}>
                    <Table
                        style={tableStyle}
                        pagination={false}
                        columns={columns}
                        dataSource={data}
                        className={theme}
                        bordered
                    />
                </ConfigProvider>
            )}
        </div>
    )
}
export default TableStaking
