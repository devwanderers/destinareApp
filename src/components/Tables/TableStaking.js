import { ConfigProvider, Table } from 'antd'
import { InboxOutlined } from '@ant-design/icons'
import useListenCookie from '../../hooks/useListenCookie'
import useCurrency from '../../hooks/useCurrency'
import StakingCountDown from '../CountDowns/StakingCountDown'

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

const UnStake = ({ item, getReward, disabled }) => {
    return (
        <button
            className="disabled:opacity-50 bg-primary border-solid border border-primary rounded-md py-1 px-10 text-white text-lg font-bold"
            onClick={() => getReward(item)}
            disabled={disabled}
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
    const today = new Date().toLocaleString('en-GB')
    const data = userStakes.reduce((acc, item, i) => {
        if (Number(item.type) === stake && item.reward != null) {
            const date = new Date(item.stakeTime * 1000).toLocaleString('en-GB')
            const depositAmount = item.tokensLocked / 1e18
            const reward = (item.reward - item.tokensLocked) / 1e18
            let lockDuration = Number(item.stakeTime) + Number(lokedTime)
            lockDuration = lockDuration * 1000
            const ends = new Date(lockDuration).toLocaleString('en-GB')
            const finish = today > ends
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
                            disabled={!finish}
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
