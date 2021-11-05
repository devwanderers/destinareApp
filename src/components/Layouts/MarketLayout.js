import React, { useState } from 'react'
import { PropTypes } from 'prop-types'
import { Layout } from 'antd'
import DefaultFooter from '../Footers/DefaultFooter'
import SiderMarket from './Siders/SiderMarket'

const { Content } = Layout
const MarketLayout = ({ children, ...rest }) => {
    const [collapsed, setCollapsed] = useState(false)
    const handleOnCollapse = () => setCollapsed(!collapsed)

    return (
        <Layout className="overflow-x-hidden flex flex-col min-h-screen">
            <SiderMarket collapsed={collapsed} onCollapse={handleOnCollapse} />
            <Layout className="h-full">
                <Content className="bg-white flex flex-1 flex-shrink flex-grow">
                    {children}
                </Content>
                <DefaultFooter className="bg-white flex-1 flex-shrink flex-grow" />
            </Layout>
        </Layout>
    )
}

MarketLayout.propTypes = {
    children: PropTypes.element,
}

export default MarketLayout
