---
title: Supported Tokens
description: The tokens you can use to pay for x402 API requests on Stacks.
sidebar:
  order: 3
---

import { Aside } from '@astrojs/starlight/components';

x402 on Stacks accepts three tokens for payment. Each has different strengths depending on your use case.

## STX

The native token of the [Stacks](https://www.stacks.co/) blockchain. Every Stacks transaction uses STX for network fees, and it's the most widely available token in the ecosystem. Available on both mainnet and testnet.

## sBTC

Bitcoin on Stacks, backed 1:1 by real BTC. If you want to pay with Bitcoin value without leaving the Stacks network, sBTC is the way to do it. Available on both mainnet and testnet.

## USDCx

A bridged US dollar stablecoin on Stacks. Because its value is pegged to USD, your API costs stay predictable regardless of crypto market movement. Currently available on mainnet only.

## Where to get tokens

- **STX** — Available on major exchanges. Transfer to a Stacks-compatible wallet.
- **sBTC** — Bridge BTC to Stacks using the [sBTC bridge](https://bridge.sbtc.tech/).
- **USDCx** — Bridge USDC to Stacks from supported networks.
- **Testnet tokens** — Get free test STX and sBTC from the [Stacks testnet faucet](https://explorer.hiro.so/sandbox/faucet?chain=testnet).

## Which token should I use?

| Token | Best for | Networks |
|-------|----------|----------|
| **STX** | General use, lowest friction | Mainnet, Testnet |
| **sBTC** | Paying with Bitcoin value | Mainnet, Testnet |
| **USDCx** | Predictable dollar-denominated costs | Mainnet only |

<Aside>
On testnet, you can experiment for free using faucet tokens. No real value is needed.
</Aside>
