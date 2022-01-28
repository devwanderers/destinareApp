const returnPromise = (callback) => {
    return new Promise((resolve, reject) => callback(resolve, reject))
}

const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const sleep = async (fn, delay = 300) => {
    await timeout(delay)
    return fn()
}

const abortablePromise = ({ signal }, callback) => {
    if (signal?.aborted) {
        return Promise.reject(new DOMException('Aborted', 'AbortError'))
    }

    return new Promise((resolve, reject) => {
        callback(resolve, reject)
        signal.addEventListener('abort', () => {
            reject(new DOMException('Aborted', 'AbortError'))
        })
    })
}

export { returnPromise, timeout, sleep, abortablePromise }
