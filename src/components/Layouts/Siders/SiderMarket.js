import React from 'react'
import { Layout } from 'antd'
// import useDarkMode from '../../../hooks/useDarkMode'
import DarkModeSwitch from '../../DarkModeSwitch'
import { IconBrand } from '../../../assets/svg/icons'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import LogoDestinare from './../../../assets/svg/brand/LogoDestinare'
import DefaultMenus from '../DefaultMenus'

const { Sider } = Layout

const SiderMarket = ({ collapsed, onCollapse, menuKey, menus, isDarkMode }) => {
    // const [theme, switchDarkMode] = useDarkMode()

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
                    <IconBrand
                        size="40px"
                        color={isDarkMode ? 'white' : undefined}
                    />
                </div>
            ) : (
                <div className=" mt-4 overflow-hidden">
                    <div className="px-5" style={{ width: '200px' }}>
                        <LogoDestinare
                            width="100%"
                            iconColor={isDarkMode ? 'white' : undefined}
                            textColor={isDarkMode ? 'white' : undefined}
                        />
                    </div>
                </div>
            )}

            <div className="mt-10">
                <DefaultMenus
                    menus={menus}
                    menuKey={menuKey}
                    isDarkMode={isDarkMode}
                />
            </div>
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
