import * as React from 'react'

const IconMenu = ({ size = '1em', color = '#c9c9c9', ...props }) => (
    <svg
        data-name="Capa 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 17.1 16.72"
        width={size}
        height={size}
        {...props}
    >
        <rect
            width={17.1}
            height={3.8}
            rx={1.9}
            style={{
                fill: color,
            }}
        />
        <rect
            y={6.46}
            width={17.1}
            height={3.8}
            rx={1.9}
            style={{
                fill: color,
            }}
        />
        <rect
            y={12.92}
            width={17.1}
            height={3.8}
            rx={1.9}
            style={{
                fill: color,
            }}
        />
    </svg>
)

export default IconMenu
