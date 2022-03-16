import React, { forwardRef } from 'react'
import { Spin } from 'antd'
import { cls } from './../../services/helpers'

const classes = {
    base: ' border rounded-xl relative overflow-hidden',
    variant: {
        none: '',
        primary:
            'bg-white dark:bg-gray-4 border-light-4 dark:border-gray-16 hover:border-primary',
        secondary:
            'bg-gray-0 dark:bg-blue-5 border-light-4 dark:border-black-0',
    },
    borderOpacity: {},
}

const CardContainer = forwardRef(
    (
        { className, variant = 'primary', loading, children, ...restProps },
        ref
    ) => {
        return (
            <div
                className={cls(`
                ${classes.base}
                ${classes.variant[variant]}
                ${className}
            `)}
                {...restProps}
            >
                {' '}
                {loading && (
                    <div className="absolute left-0 top-0 flex justify-center items-center w-full h-full bg-gray-9 bg-opacity-50">
                        <Spin size="large" />
                    </div>
                )}
                {children}
            </div>
        )
    }
)

CardContainer.displayName = 'CardContainer'

export default CardContainer
