import React from 'react'
import { Menu } from 'antd'
import { useHistory } from 'react-router'
import useDarkMode from '../../hooks/useDarkMode'
import {
    HomePath,
    MarketPath,
    StakingView,
} from '../../constants/routerConstants'
import { FaHome } from 'react-icons/fa'
import { MdDashboard } from 'react-icons/md'
import { GiWarPick } from 'react-icons/gi'

const { SubMenu } = Menu
const destinareMenu = [
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
    {
        icon: GiWarPick,
        key: 'earn',
        name: 'Earn',
        group: true,
        items: [
            {
                onClick: StakingView,
                key: 'staking',
                name: 'Staking with lock',
            },
        ],
    },
]

const MenuNavbarDashboard = ({ menuKey }) => {
    console.log('menuKey', menuKey)
    const [theme] = useDarkMode()
    const history = useHistory()

    return (
        <Menu
            theme={theme}
            defaultSelectedKeys={[menuKey]}
            selectedKeys={[menuKey]}
            mode="inline"
            className="border-r-0 mt-10"
        >
            {destinareMenu.map((menu) => {
                return menu.group ? (
                    <SubMenu
                        key={`menu-item-${menu.key}`}
                        icon={<menu.icon />}
                        title={menu.name}
                    >
                        {menu.items.map((menu) => {
                            return (
                                <Menu.Item key={`menu-item-${menu.key}`}>
                                    <div
                                        className="flex flex-row items-center"
                                        onClick={() =>
                                            history.push(menu.onClick)
                                        }
                                    >
                                        {menu.name}
                                    </div>
                                </Menu.Item>
                            )
                        })}
                    </SubMenu>
                ) : (
                    <Menu.Item
                        icon={<menu.icon />}
                        key={`menu-item-${menu.key}`}
                    >
                        <div
                            className="flex flex-row items-center"
                            onClick={() => history.push(menu.onClick)}
                        >
                            {menu.name}
                        </div>
                    </Menu.Item>
                )
            })}
        </Menu>
    )
}

export default MenuNavbarDashboard
