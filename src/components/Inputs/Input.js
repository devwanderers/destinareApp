import React, { forwardRef } from 'react'
import { cls } from './../../services/helpers'

const classes = {
    base: 'focus:outline-none transition ease-in-out duration-300 px-1',
    disabled: 'opacity-50 cursor-not-allowed',
    size: {
        small: 'px-3 py-1 text-sm',
        normal: 'px-3 py-2',
        large: 'px-3 py-3 text-lg',
    },
    variant: {
        primary:
            'border border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50',
        secondary:
            'border border-light-4 focus:ring-2 focus:ring-light-4 focus:ring-opacity-50',
        danger: 'border border-red-500 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50',
    },
    rounded: {
        none: 'rounded-none',
        small: 'rounded-sm',
        medium: 'rounded-md',
        large: 'rounded-lg',
        xl: 'rounded-xl',
    },
}

const Input = forwardRef(
    (
        {
            className,
            disabled,
            type = 'text',
            size = 'small',
            variant = 'primary',
            rounded = 'none',
            ...restProps
        },
        ref
    ) => {
        return (
            <input
                ref={ref}
                disabled={disabled}
                type={type}
                className={cls(`
                ${classes.base}
                ${classes.size[size]}
                ${classes.variant[variant]}
                ${classes.rounded[rounded]}
                ${disabled && classes.disabled}
                ${className}
            `)}
                {...restProps}
            />
        )
    }
)

Input.displayName = 'Input'

export default Input
