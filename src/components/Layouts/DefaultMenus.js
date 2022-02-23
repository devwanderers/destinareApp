import React from 'react'
import { Menu } from 'antd'
import { useHistory } from 'react-router'

const { SubMenu } = Menu

const DefaultMenus = ({ menus, menuKey, isDarkMode }) => {
    const history = useHistory()

    return (
        <Menu
            theme={isDarkMode ? 'dark' : 'light'}
            defaultSelectedKeys={[menuKey]}
            selectedKeys={[menuKey]}
            mode="inline"
            className="border-r-0"
        >
            {menus.map((menu) => {
                return menu.group ? (
                    <SubMenu
                        key={`menu-item-${menu.key}`}
                        className="font-medium"
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
                                    onClick={() => history.push(menu.onClick)}
                                >
                                    <div className="flex flex-row items-center font-medium">
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
                        <div className="flex flex-row items-center font-medium">
                            {menu.name}
                        </div>
                    </Menu.Item>
                )
            })}
        </Menu>
    )
}

export default DefaultMenus
