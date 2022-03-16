export const formatAddress = (address = '', size = 4) => {
    return `${address.substring(0, size)}......${address.substring(
        address.length - size,
        address.length
    )}`
}
