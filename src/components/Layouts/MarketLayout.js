import React, { useState } from 'react'
import { PropTypes } from 'prop-types'
import { Layout } from 'antd'
// import DefaultFooter from '../Footers/DefaultFooter'
import SiderMarket from './Siders/SiderMarket'
import ConnectWalletHeader from './../Headers/ConnectWalletHeader'

const { Content } = Layout
const MarketLayout = ({ children, ...rest }) => {
    const [collapsed, setCollapsed] = useState(false)
    const handleOnCollapse = () => setCollapsed(!collapsed)

    return (
        <Layout className="overflow-x-hidden flex flex-col min-h-screen dark:bg-blue-1 bg-light-2">
            <SiderMarket collapsed={collapsed} onCollapse={handleOnCollapse} />
            <Layout className="h-screen overflow-y-auto dark:bg-blue-1 bg-light-2">
                <Content className="flex flex-col flex-1 flex-shrink flex-grow">
                    <ConnectWalletHeader />
                    {children}
                </Content>
                {/* <DefaultFooter className="bg-white flex-1 flex-shrink flex-grow" /> */}
            </Layout>
        </Layout>
    )
}

MarketLayout.propTypes = {
    children: PropTypes.element,
}

export default MarketLayout
