export default function useAmountTo1E18(x) {
    let amount = 0
    if (x < 1000) {
        amount = x * 1e18
    } else {
        x = x * 1e18
        let e = parseInt(x.toString().split('+')[1])
        e -= 20
        x /= Math.pow(10, e)
        x += new Array(e + 1).join('0')
        amount = x
    }
    return amount.toString()
}
