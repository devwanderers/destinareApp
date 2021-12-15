import { InputNumber, Space } from 'antd'

const InputStaking = ({ userBalance, amount, setAmount }) => {
    return (
        <Space>
            <InputNumber
                min={0}
                max={userBalance}
                size={'small'}
                value={amount}
                onChange={(val) => setAmount(val)}
            />
            <button
                className="disabled:opacity-50 bg-primary rounded-md py-1 px-3 text-white text-base font-bold"
                onClick={() => setAmount(userBalance)}
            >
                MAX
            </button>
        </Space>
    )
}

export default InputStaking
