import React from 'react'
import { Drawer } from 'antd'
// import { GiHamburgerMenu } from 'react-icons/gi'
import { useHistory } from 'react-router'
import { HomePath } from '../../constants/routerConstants'
import IconBrand from './../../assets/svg/icons/IconBrand'
import IconMenu from '../../assets/svg/icons/IconMenu'
import LogoDestinare from './../../assets/svg/brand/LogoDestinare'
import useAuth from './../../hooks/useAuth'
import IconWallet from './../../assets/svg/icons/IconWallet'
import { useWeb3React } from '@web3-react/core'
import { FaSignOutAlt } from 'react-icons/fa'

const GenericNavbarMobile = ({
    isDarkMode,
    className = '',
    contentDrawer,
    showDrawer,
    onClickBurguer,
    hideLogo,
    enableWallet,
}) => {
    const history = useHistory()
    const { login, logout } = useAuth()
    const { account } = useWeb3React()

    let renderWallet = null

    if (enableWallet) {
        if (!account) {
            renderWallet = (
                <div className="cursor-pointer mr-5" onClick={() => login()}>
                    <IconWallet size="2em" />
                </div>
            )
        } else {
            renderWallet = (
                <div className="flex flex-row justify-end gap-2 mr-5">
                    <p className="text-base  dark:text-white">
                        {account.substring(0, 4)}...
                        {account.slice(-4)}
                    </p>
                    <span className="text-primary text-right">
                        <FaSignOutAlt
                            onClick={() => logout()}
                            size={22}
                            style={{
                                marginLeft: 'auto',
                                cursor: 'pointer',
                            }}
                        />
                    </span>
                </div>
            )
        }
    }

    return (
        <React.Fragment>
            <Drawer
                // className="bg-red-200"
                placement="left"
                closable={false}
                onClose={onClickBurguer}
                visible={showDrawer}
                key="left"
                width="300px"
                bodyStyle={
                    isDarkMode
                        ? {
                              backgroundColor: '#24262d',
                              padding: '0px',
                          }
                        : {
                              backgroundColor: '#fafafa',
                              padding: '0px',
                          }
                }
            >
                <div className="h-full flex flex-col">
                    <div className="px-6 py-3 border-b border-light-4">
                        <button
                            className="px-0"
                            onClick={() => history.push(HomePath)}
                        >
                            <LogoDestinare
                                height="3em"
                                iconColor={isDarkMode ? 'white' : undefined}
                                textColor={isDarkMode ? 'white' : undefined}
                            />
                        </button>
                    </div>
                    <div className="mt-4 flex-1 flex flex-col">
                        {contentDrawer}
                    </div>
                </div>
            </Drawer>
            <header
                className={`h-16 z-10 px-2 lg:px-0 py-2 m-0 w-full ${className} `}
            >
                <div className="section relative flex justify-between px-2 h-full items-center">
                    {!hideLogo && (
                        <a
                            className="w-12 h-12  flex justify-center cursor-pointer"
                            onClick={() => history.push(HomePath)}
                        >
                            <IconBrand
                                size={'100%'}
                                color={isDarkMode ? '#fff' : undefined}
                            />
                        </a>
                    )}
                    <div className="flex flex-row items-center">
                        {renderWallet}
                        <div
                            onClick={onClickBurguer}
                            className="cursor-pointer transform active:scale-125 mr-2"
                        >
                            <IconMenu
                                size="2em"
                                color={isDarkMode ? '#fff' : undefined}
                            />
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

export default GenericNavbarMobile
