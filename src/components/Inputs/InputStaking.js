import { InputNumber, Space } from 'antd'

const InputStaking = ({ tokens, amount, setAmount }) => {
    return (
        <Space>
            <InputNumber
                min={0}
                max={tokens}
                size={'small'}
                value={amount}
                onChange={(val) => setAmount(val)}
            />
            <button
                className="disabled:opacity-50 bg-primary rounded-md py-1 px-3 text-white text-base font-bold"
                onClick={() => setAmount(tokens)}
            >
                MAX
            </button>
        </Space>
    )
}

export default InputStaking
