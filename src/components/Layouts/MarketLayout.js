import React, { useState } from 'react'
import { PropTypes } from 'prop-types'
import { Layout, Drawer } from 'antd'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import MenuNavbarDashboard from '../Navbar/MenuNavbarDashboard'
import SiderMarket from './Siders/SiderMarket'
import ConnectWalletHeader from './../Headers/ConnectWalletHeader'
import useWindowSize from '../../hooks/useWindowSize'
import useListenCookie from '../../hooks/useListenCookie'

const { Content } = Layout
const MarketLayout = ({ children, ...rest }) => {
    const year = new Date().getFullYear()
    const [collapsed, setCollapsed] = useState(false)
    const [showDrawer, setShowDrawer] = useState(false)
    const handleOnCollapse = () => setCollapsed(!collapsed)
    const handleShowDrawer = () => setShowDrawer(!showDrawer)
    const { width } = useWindowSize()
    const [theme] = useListenCookie('theme')
    const isDarkMode = theme === 'dark'
    const drawerStyle = isDarkMode
        ? {
              backgroundColor: '#2A2C34',
          }
        : {
              backgroundColor: '#fff',
          }

    return (
        <Layout className="overflow-x-hidden relative flex flex-row md:flex-col min-h-screen dark:bg-blue-1 bg-light-2">
            {width > 768 ? (
                <SiderMarket
                    collapsed={collapsed}
                    onCollapse={handleOnCollapse}
                />
            ) : (
                <Drawer
                    placement="left"
                    closable={true}
                    onClose={handleShowDrawer}
                    visible={showDrawer}
                    bodyStyle={drawerStyle}
                    closeIcon={
                        <IoMdClose className="dark:text-white text-3xl" />
                    }
                    maskClosable
                >
                    <React.Fragment>
                        <MenuNavbarDashboard />
                    </React.Fragment>
                </Drawer>
            )}
            {width <= 768 && (
                <div
                    onClick={handleShowDrawer}
                    className="flex absolute text-gray-13 dark:text-white left-5 top-5 text-3xl h-full px-4 cursor-pointer transform active:scale-125"
                >
                    <GiHamburgerMenu height="100%" />
                </div>
            )}
            <Layout className="h-screen overflow-y-auto dark:bg-blue-1 bg-light-2">
                <Content className="flex flex-col flex-1 flex-shrink flex-grow">
                    <ConnectWalletHeader />
                    {children}
                    <div className="text-right text-gray-13 dark:text-white py-2 px-4">
                        <span>© Copyright 2017 - {year}. Destinare.io</span>
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

MarketLayout.propTypes = {
    children: PropTypes.element,
}

export default MarketLayout
