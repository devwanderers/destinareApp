import React from 'react'
import { useHistory } from 'react-router'
import { Layout, Menu } from 'antd'
import useDarkMode from '../../../hooks/useDarkMode'
import DarkModeSwitch from '../../DarkModeSwitch'
import {
    DestinareLogoColorLightSVG,
    DestinareLogoColorDarkSVG,
    DestinareLogoIconSVG,
} from '../../../assets/svg/brand/index'
import { FaHome } from 'react-icons/fa'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { MdDashboard } from 'react-icons/md'
// import { GiWarPick } from 'react-icons/gi'
import {
    HomePath,
    MarketPath,
    // StakingView,
} from '../../../constants/routerConstants'

const { Sider } = Layout
const { SubMenu } = Menu
const menuItems = [
    {
        icon: FaHome,
        key: 'home',
        name: 'Home',
        onClick: HomePath,
        group: false,
    },
    {
        icon: MdDashboard,
        key: 'dashboard',
        name: 'Dashboard',
        onClick: MarketPath,
        group: false,
    },
    // {
    //     icon: GiWarPick,
    //     key: 'earn',
    //     name: 'Earn',
    //     group: true,
    //     items: [
    //         {
    //             onClick: StakingView,
    //             key: 'staking',
    //             name: 'Staking with lock',
    //         },
    //     ],
    // },
]

const SiderMarket = ({ collapsed, onCollapse, menuKey }) => {
    const [theme, switchDarkMode] = useDarkMode()
    const history = useHistory()
    return (
        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={onCollapse}
            className="px-0 h-screen border-r border-gray-11 dark:border-gray-4 bg-light-1 dark:bg-gray-9 relative"
            trigger={null}
        >
            {collapsed ? (
                <div className="px-5 mt-4">
                    <DestinareLogoIconSVG
                        style={{ width: '40px', margin: 'auto' }}
                    />
                </div>
            ) : (
                <div className="px-5 mt-4">
                    {theme === 'dark' ? (
                        <DestinareLogoColorLightSVG />
                    ) : (
                        <DestinareLogoColorDarkSVG />
                    )}
                </div>
            )}

            <Menu
                theme={theme}
                defaultSelectedKeys={[menuKey]}
                selectedKeys={[menuKey]}
                mode="inline"
                className="border-r-0 mt-10"
            >
                {menuItems.map((menu) => {
                    return menu.group ? (
                        <SubMenu
                            key={`menu-item-${menu.key}`}
                            icon={
                                <menu.icon
                                    size={23}
                                    style={{ marginRight: '10px' }}
                                />
                            }
                            title={menu.name}
                        >
                            {menu.items.map((menu) => {
                                return (
                                    <Menu.Item
                                        key={`menu-item-${menu.key}`}
                                        onClick={() =>
                                            history.push(menu.onClick)
                                        }
                                    >
                                        <div className="flex flex-row items-center">
                                            {menu.name}
                                        </div>
                                    </Menu.Item>
                                )
                            })}
                        </SubMenu>
                    ) : (
                        <Menu.Item
                            icon={
                                <menu.icon
                                    size={23}
                                    style={{ marginRight: '10px' }}
                                />
                            }
                            key={`menu-item-${menu.key}`}
                            onClick={() => history.push(menu.onClick)}
                        >
                            <div className="flex flex-row items-center">
                                {menu.name}
                            </div>
                        </Menu.Item>
                    )
                })}
            </Menu>
            <div
                onClick={switchDarkMode}
                className="absolute left-0 right-0 mb-4 flex justify-center"
                style={{ bottom: '48px' }}
            >
                <DarkModeSwitch />
            </div>
            <div
                onClick={onCollapse}
                className="absolute left-0 right-0 bottom-0 bg-gray-200 dark:bg-gray-2 flex justify-center items-center cursor-pointer dark:text-white"
                style={{ height: '45px' }}
            >
                {collapsed ? <IoIosArrowForward /> : <IoIosArrowBack />}
            </div>
        </Sider>
    )
}

export default SiderMarket
