import React from 'react'
import ButtonSpinner from './../components/Buttons/ButtonSpinner'
import { IoCopyOutline } from 'react-icons/io5'

const Esqueleto = (props) => {
    return (
        <div>
            <div className=" max-w-1650px mx-auto mt-12">
                <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white dark:bg-gray-4 border border-light-4 dark:border-gray-16 pt-5 xl:pt-8  pb-5 xl:pb-8  rounded-xl relative overflow-hidden hover:border-primary px-8">
                        <div className="flex flex-col w-full">
                            <div className="md:text-base lg:text-lg xl:text-xl font-bold text-black-2 dark:text-gray-3 leading-none">
                                $500 USD
                            </div>
                            <div className="mt-4 md:text-base lg:text-lg font-medium leading-none text-primary ">
                                Staking Level 1
                            </div>

                            <div className="flex flex-row items-center gap-6 pl-8 mt-8">
                                <div className="md:text-xs lg:text-sm text-gray-5 dark:text-gray-2 leading-none font-medium">
                                    APR
                                </div>
                                <div className="lg:text-xs xl:text-base font-bold text-black-2 dark:text-gray-6 leading-none">
                                    10%
                                </div>
                            </div>
                            <div className="flex flex-row items-center gap-6 pl-8 mt-5">
                                <div className="md:text-xs lg:text-sm text-gray-5 dark:text-gray-2 leading-none font-medium">
                                    Time
                                </div>
                                <div className="lg:text-xs xl:text-base font-bold text-black-2 dark:text-gray-6 leading-none">
                                    3 Months
                                </div>
                            </div>
                        </div>
                        <ButtonSpinner size="normal" className="mt-20 w-full ">
                            Compromise
                        </ButtonSpinner>
                    </div>
                    <div className="bg-white dark:bg-gray-4 border border-light-4 dark:border-gray-16 pt-5 xl:pt-8  pb-5 xl:pb-8  rounded-xl relative overflow-hidden hover:border-primary px-8">
                        <div className="flex flex-col w-full">
                            <div className="md:text-base lg:text-lg xl:text-xl font-bold text-black-2 dark:text-gray-3 leading-none">
                                $1000 USD
                            </div>
                            <div className="mt-4 md:text-base lg:text-lg font-medium leading-none text-primary ">
                                Staking Level 2
                            </div>

                            <div className="flex flex-row items-center gap-6 pl-8 mt-8">
                                <div className="md:text-xs lg:text-sm text-gray-5 dark:text-gray-2 leading-none font-medium">
                                    APR
                                </div>
                                <div className="lg:text-xs xl:text-base font-bold text-black-2 dark:text-gray-6 leading-none">
                                    15%
                                </div>
                            </div>
                            <div className="flex flex-row items-center gap-6 pl-8 mt-5">
                                <div className="md:text-xs lg:text-sm text-gray-5 dark:text-gray-2 leading-none font-medium">
                                    Time
                                </div>
                                <div className="lg:text-xs xl:text-base font-bold text-black-2 dark:text-gray-6 leading-none">
                                    3 Months
                                </div>
                            </div>
                        </div>
                        <ButtonSpinner size="normal" className="mt-20 w-full ">
                            Compromise
                        </ButtonSpinner>
                    </div>
                    <div className="bg-white dark:bg-gray-4 border border-light-4 dark:border-gray-16 pt-5 xl:pt-8  pb-5 xl:pb-8  rounded-xl relative overflow-hidden hover:border-primary px-8">
                        <div className="flex flex-col w-full">
                            <div className="md:text-base lg:text-lg xl:text-xl font-bold text-black-2 dark:text-gray-3 leading-none">
                                $2000 USD
                            </div>
                            <div className="mt-4 md:text-base lg:text-lg font-medium leading-none text-primary ">
                                Staking Level 3
                            </div>

                            <div className="flex flex-row items-center gap-6 pl-8 mt-8">
                                <div className="md:text-xs lg:text-sm text-gray-5 dark:text-gray-2 leading-none font-medium">
                                    APR
                                </div>
                                <div className="lg:text-xs xl:text-base font-bold text-black-2 dark:text-gray-6 leading-none">
                                    10%
                                </div>
                            </div>
                            <div className="flex flex-row items-center gap-6 pl-8 mt-5">
                                <div className="md:text-xs lg:text-sm text-gray-5 dark:text-gray-2 leading-none font-medium">
                                    Time
                                </div>
                                <div className="lg:text-xs xl:text-base font-bold text-black-2 dark:text-gray-6 leading-none">
                                    3 Months
                                </div>
                            </div>
                        </div>
                        <ButtonSpinner size="normal" className="mt-20 w-full ">
                            Compromise
                        </ButtonSpinner>
                    </div>
                </div>

                <div className="mt-6 bg-white dark:bg-gray-4 border border-light-4 dark:border-gray-16 pt-5 xl:pt-8 rounded-xl relative overflow-hidden hover:border-primary w-6/12 pb-6 mx-auto">
                    <div className="flex flex-col items-center w-full px-20">
                        <div className="mb-3">Address to whitelist</div>
                        <div className="mb-2 w-full">
                            <span className="mr-2">Email</span>
                            <input className="border w-full mt-1" />
                        </div>
                        <div className="w-full">
                            <span className="mr-2">User Name</span>
                            <input className="border w-full mt-1" />
                        </div>
                        <ButtonSpinner className="mt-4 w-6/12">
                            Boton
                        </ButtonSpinner>
                    </div>
                </div>

                <div className=" text-primary text-xl font-semibold mb-4">
                    Kamelia la Texana
                </div>

                <div className=" text-black-2 text-xl font-semibold mb-4">
                    Register Wallet
                </div>
                <div className="bg-white dark:bg-gray-4 border border-light-4 dark:border-gray-16 py-3 rounded-xl relative overflow-hidden hover:border-primary mx-auto">
                    <div className="flex flex-row justify-center w-full pl-20 pr-12">
                        <div className="flex items-center">
                            <span className="text-lg">
                                0xa5f5A7Aba488d3B240b48689510d9b7c3F95fFAf
                            </span>
                        </div>
                        <div className="ml-auto flex">
                            <button className="text-3xl text-primary">
                                <IoCopyOutline />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Esqueleto.propTypes = {}

export default Esqueleto
