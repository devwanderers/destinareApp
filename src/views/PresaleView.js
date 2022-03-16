import React, { useState } from 'react'
// import CardPresalePackage from '../components/Presale/CardPresalePackage'
import ModalPresaleReserve from '../components/Presale/ModalPresaleReserve'

// const stakingLvls = {
//     staking1: {
//         title: 'Staking Level 1',
//         subtitle: '$500 USD',
//         properties: [
//             ['APR', '10%'],
//             ['Time', '3 Months'],
//         ],
//     },
//     staking2: {
//         title: 'Staking Level 2',
//         subtitle: '$1000 USD',
//         properties: [
//             ['APR', '15%'],
//             ['Time', '6 Months'],
//         ],
//     },
//     staking3: {
//         title: 'Staking Level 3',
//         subtitle: '$2000 USD',
//         properties: [
//             ['APR', '25%'],
//             ['Time', '6 Months'],
//         ],
//     },
// }

const PresaleView = (props) => {
    const [visible, setVisible] = useState(false)
    const [title, setTitle] = useState('')

    // const handleSelect = (title) => {
    //     setVisible(true)
    //     setTitle(title)
    // }

    const handleClose = () => {
        setVisible(false)
        setTitle('')
    }

    return (
        <div className="mx-5" style={{ height: 'calc(100vh - 109.13px)' }}>
            <ModalPresaleReserve
                visible={visible}
                loading={false}
                title={title}
                onCancel={() => handleClose()}
            />
            <div className=" max-w-1650px mx-auto mt-12">
                <div className="grid grid-cols-3 gap-4">
                    {/* <CardPresalePackage
                        title={stakingLvls.staking1.title}
                        subtitle={stakingLvls.staking1.subtitle}
                        properties={stakingLvls.staking1.properties}
                        onClick={() => handleSelect(stakingLvls.staking1.title)}
                    />
                    <CardPresalePackage
                        title={stakingLvls.staking2.title}
                        subtitle={stakingLvls.staking2.subtitle}
                        properties={stakingLvls.staking2.properties}
                        onClick={() => handleSelect(stakingLvls.staking2.title)}
                    />
                    <CardPresalePackage
                        title={stakingLvls.staking3.title}
                        subtitle={stakingLvls.staking3.subtitle}
                        properties={stakingLvls.staking3.properties}
                        onClick={() => handleSelect(stakingLvls.staking3.title)}
                    /> */}
                </div>
            </div>
        </div>
    )
}

export default PresaleView
