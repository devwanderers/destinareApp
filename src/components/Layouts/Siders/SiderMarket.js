import React, { useState } from 'react'
import { useHistory } from 'react-router'
// import { useSelector, useDispatch } from 'react-redux'
// import { scInteractionReducerSelector } from '../store/reducers/scInteractionReducer/selectors'
import { Layout, Menu } from 'antd'
import useDarkMode from '../../../hooks/useDarkMode'
import DarkModeSwitch from '../../DarkModeSwitch'
import { DestinareLogoColorSVG } from '../../../assets/svg/brand/index'
import { FaHome } from 'react-icons/fa'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { MdDashboard } from 'react-icons/md'
import { GiWarPick } from 'react-icons/gi'
import {
    HomePath,
    MarketPath,
    StakingView,
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

const SiderMarket = ({ collapsed, onCollapse }) => {
    const history = useHistory()
    const [theme] = useDarkMode()
    const [currentKey, setSelectedKey] = useState()
    console.log({ currentKey })
    const handleClick = (e) => {
        console.log('click ', e.key)
        setSelectedKey(e.key)
    }
    // const pathName = history.location.pathname
    // const [selectedMenu, setselectedMenu] = useState(1)
    // const handleSelectedMenu = (key) => {
    //     if (selectedMenu !== key) setselectedMenu(key)
    // }
    return (
        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={onCollapse}
            className="px-0 h-screen border-r border-gray-11 dark:border-gray-4 bg-light-1 dark:bg-gray-9 relative"
            trigger={null}
        >
            <div className="px-5 mt-4">
                <DestinareLogoColorSVG />
            </div>
            <Menu
                theme={theme}
                onClick={handleClick}
                defaultSelectedKeys={['menu-item-dashboard']}
                selectedKeys={[currentKey]}
                mode="inline"
                className="border-r-0 mt-10 text-gray-10 dark:text-white bg-light-1 dark:bg-gray-9"
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
                            // className={menu.items.map((menu) => {
                            //     return Object.values(menu).includes(pathName)
                            //         ? 'text-gray-10 hover:text-gray-10 dark:text-primary dark:hover:text-primary dark:focus:text-primary'
                            //         : 'text-gray-8 hover:text-gray-9 dark:text-gray-6 dark:hover:text-white dark:focus:text-white'
                            // })}
                        >
                            {menu.items.map((menu) => {
                                return (
                                    <Menu.Item
                                        key={`menu-item-${menu.key}`}
                                        onClick={() =>
                                            history.push(menu.onClick)
                                        }
                                        // className={`${
                                        //     pathName === menu.onClick
                                        //         ? 'text-gray-10 hover:text-gray-10 dark:text-primary dark:hover:text-primary dark:focus:text-primary'
                                        //         : 'text-gray-8 hover:text-gray-9 dark:text-gray-6 dark:hover:text-white dark:focus:text-white'
                                        // }`}
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
                            // className={`${
                            //     pathName === menu.onClick
                            //         ? 'text-gray-10 hover:text-gray-10 dark:text-primary dark:hover:text-primary'
                            //         : 'text-gray-8 hover:text-gray-9 dark:text-gray-6 dark:hover:text-white'
                            // }`}
                        >
                            <div className="flex flex-row items-center">
                                {menu.name}
                            </div>
                        </Menu.Item>
                    )
                })}
            </Menu>
            {/* <div className="flex flex-col justify-between">
                <div className="flex flex-col pl-4">
                    {menuItems.map((menuItem, key) => (
                        <div
                            key={`menu-item-${menuItem.name}`}
                            className={`flex${
                                !collapsed
                                    ? ' flex-row items-center justify-between'
                                    : ''
                            }  relative  mb-5`}
                        >
                            <a
                                href="#"
                                className={`flex flex-row items-center w-full h-12 border-none ${
                                    pathName === menuItem.onClick
                                        ? 'text-gray-10 hover:text-gray-10 dark:text-primary dark:hover:text-primary'
                                        : 'text-gray-8 hover:text-gray-9 dark:text-gray-6 dark:hover:text-white'
                                }`}
                                onClick={(e) => {
                                    e.preventDefault()
                                    handleSelectedMenu(key)
                                    // console.log(menuItem.onClick)
                                    history.push(menuItem.onClick)
                                }}
                            >
                                <span
                                    className={`text-2xl${
                                        pathName === menuItem.onClick
                                            ? ' border bg-opacity-10'
                                            : ' border-none '
                                    } border-black-1 dark:border-primary p-2 rounded-lg flex${
                                        !collapsed ? ' mr-4' : ''
                                    }`}
                                >
                                    <menuItem.icon className="" />
                                </span>
                                <span
                                    hidden={collapsed}
                                    className="text-sm font-medium hover:border-b"
                                >
                                    {menuItem.name}
                                </span>
                            </a>
                        </div>
                    ))}
                </div>
            </div> */}
            <div
                // onClick={switchDarkMode}
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
