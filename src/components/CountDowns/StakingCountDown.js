import { Statistic } from 'antd'
import { FaRegClock } from 'react-icons/fa'
const { Countdown } = Statistic

const StakingCountDown = ({ value, valueStyle }) => {
    return (
        <div className="flex">
            <div className="flex flex-wrap justify-center items-center bg-benefits-blue-1 text-white px-3 border rounded-xl font-bold">
                <FaRegClock
                    size={17}
                    style={{ marginRight: '10px', color: 'white' }}
                />
                <Countdown
                    value={value}
                    format="DD:HH:mm:ss"
                    valueStyle={valueStyle}
                />
            </div>
        </div>
    )
}
export default StakingCountDown
