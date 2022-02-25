import { Statistic } from 'antd'
import { FaRegClock } from 'react-icons/fa'
const { Countdown } = Statistic

function onFinish() {
    console.log('finished!')
}

const StakingCountDown = ({ value, size = '1.1rem', color = '#fff' }) => {
    return (
        <div className="flex flex-row justify-center items-center bg-benefits-blue-1 text-white px-3 border rounded-xl font-bold text-sm py-1">
            <FaRegClock className="mr-1" size={size} color={color} />
            <Countdown
                className="text-xxs"
                value={value}
                format="DD:HH:mm:ss"
                valueStyle={{
                    fontSize: size,
                    color,
                    lineHeight: 0,
                }}
                onFinish={onFinish}
            />
        </div>
    )
}
export default StakingCountDown
