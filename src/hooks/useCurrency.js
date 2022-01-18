export default function useCurrency(num, decimals) {
    const n = typeof num === 'string' ? Number(num) : num
    return n.toFixed(decimals).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
