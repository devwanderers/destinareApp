/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { PropTypes } from 'prop-types'
import { Layout, Drawer } from 'antd'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import SiderMarket from './Siders/SiderMarket'
import ConnectWalletHeader from './../Headers/ConnectWalletHeader'
import useWindowSize from '../../hooks/useWindowSize'
import useListenCookie from '../../hooks/useListenCookie'
import {
    HomePath,
    MarketPath,
    StakingView,
} from '../../constants/routerConstants'
import DefaultMenus from './DefaultMenus'
import GenericNavbarMobile from './../Navbar/GenericNavbarMobile'
import { DarkModeSwitch } from './../DarkModeSwitch'
import {
    IconDashboard,
    IconReservation,
    IconEarn,
} from '../../assets/svg/icons'

const menuItems = [
    {
        icon: IconDashboard,
        key: 'home',
        name: 'Home',
        onClick: HomePath,
        group: false,
    },
    {
        icon: IconReservation,
        key: 'dashboard',
        name: 'Dashboard',
        onClick: MarketPath,
        group: false,
    },
    {
        icon: IconEarn,
        key: 'earn',
        name: 'Earn',
        group: true,
        items: [
            {
                icon: IconEarn,
                onClick: StakingView,
                key: 'staking',
                name: 'Staking with lock',
            },
        ],
    },
]

const { Content } = Layout
const MarketLayout = ({ children, menuKey, ...rest }) => {
    const { width } = useWindowSize()
    const [theme] = useListenCookie('theme')
    const isDarkMode = theme === 'dark'
    const [collapsed, setCollapsed] = useState(true)
    const [showDrawer, setShowDrawer] = useState(false)

    const handleOnCollapse = () => setCollapsed(!collapsed)
    const handleShowDrawer = () => setShowDrawer(!showDrawer)

    const year = new Date().getFullYear()

    return (
        <Layout className="overflow-x-hidden relative flex flex-row md:flex-col min-h-screen dark:bg-blue-1 bg-light-2">
            {width > 768 && (
                <SiderMarket
                    menuKey={menuKey}
                    collapsed={collapsed}
                    onCollapse={handleOnCollapse}
                    menus={menuItems}
                    isDarkMode={isDarkMode}
                />
            )}
            <Layout className="h-screen overflow-y-auto dark:bg-blue-1 bg-light-2">
                {width < 769 && (
                    <GenericNavbarMobile
                        {...rest}
                        className="border-b border-light-4"
                        isDarkMode={isDarkMode}
                        showDrawer={showDrawer}
                        onClickBurguer={handleShowDrawer}
                        burgerColor={isDarkMode ? 'white' : undefined}
                        contentDrawer={
                            <React.Fragment>
                                <div className="border-b border-light-4">
                                    <DefaultMenus
                                        menuKey={menuKey}
                                        menus={menuItems}
                                        isDarkMode={isDarkMode}
                                    />
                                </div>
                                <ConnectWalletHeader className="px-6 mt-5" />
                                <div className="mt-auto py-4 w-full flex justify-center">
                                    <DarkModeSwitch />
                                </div>
                            </React.Fragment>
                        }
                        enableWallet
                        // hideLogo={true}
                    />
                )}
                <Content className="flex flex-col flex-1 flex-shrink flex-grow">
                    {width > 768 && (
                        <div className="mx-5">
                            <div className="max-w-1650px mx-auto flex flex-col-reverse md:flex-row dark:bg-blue-1 bg-light-2 border-b border-gray-11 dark:border-gray-1 select-none mt-6 pb-6">
                                <div className="flex items-end justify-center text-2xl lg:text-3xl mt-5 lg:mt-0 md:justify-start  text-black-2 dark:text-white font-medium leading-none">
                                    Welcome to Destinare
                                </div>
                                <ConnectWalletHeader
                                    className="ml-auto"
                                    // containerClassName=""
                                />
                            </div>
                        </div>
                    )}
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
