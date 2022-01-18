import { ethers } from 'ethers'

export const genericProvider = new ethers.providers.WebSocketProvider(
    'wss://speedy-nodes-nyc.moralis.io/1a2b3c4d5e6f1a2b3c4d5e6f/polygon/mainnet/ws'
)
