import * as React from 'react'

const IconBrand = ({ color = '#f9a24f', size, ...restProps }) => (
    <svg
        data-name="Capa 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 37.76 29.66"
        width={size}
        height={size}
        {...restProps}
    >
        <path
            d="m28.09 23.43-7.73-6a.75.75 0 0 0-.92 0l-7.63 6.1a.71.71 0 0 0 0 1.15l7.53 6a.78.78 0 0 0 .92 0l7.86-6.1a.73.73 0 0 0-.03-1.15Z"
            transform="translate(-1.12 -1.17)"
            style={{
                fill: color,
            }}
        />
        <path
            d="m19.44 1.32-18 14.4a.75.75 0 0 0 0 1.15L6 20.42a.75.75 0 0 0 .9 0l12.56-10a.74.74 0 0 1 .89 0l12.75 9.84a.71.71 0 0 0 .89 0l4.62-3.67a.75.75 0 0 0 0-1.15L20.33 1.32a.73.73 0 0 0-.89 0Z"
            transform="translate(-1.12 -1.17)"
            style={{
                fill: color,
            }}
        />
    </svg>
)

export default IconBrand
