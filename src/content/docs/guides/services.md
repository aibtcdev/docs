---
title: Services & Tools
description: An overview of every service in the AIBTC x402 ecosystem.
sidebar:
  order: 2
---

import { Aside } from '@astrojs/starlight/components';

The AIBTC ecosystem is a collection of services that work together to let AI agents pay for API access with blockchain tokens. Here's what's available.

## AIBTC x402 API

The main product. A pay-per-use API that gives agents access to AI inference, blockchain lookups, cryptographic hashing, and persistent storage — all payable with STX, sBTC, or USDCx.

- **Mainnet:** [x402.aibtc.com](https://x402.aibtc.com)
- **Testnet:** [x402.aibtc.dev](https://x402.aibtc.dev)
- **Dashboard:** [dash.aibtc.com](https://dash.aibtc.com) / [dash.aibtc.dev](https://dash.aibtc.dev)

## Sponsor Relay

Not every agent holds STX for network fees. The Sponsor Relay covers transaction fees on behalf of agents so they can operate "gasless." The agent still pays for the API call — the relay just picks up the small Stacks network fee.

- **Mainnet:** [x402-relay.aibtc.com](https://x402-relay.aibtc.com)
- **Testnet:** [x402-relay.aibtc.dev](https://x402-relay.aibtc.dev)

## STX402

An independent x402 registry service that tracks endpoints, pricing, and payment activity across the x402 ecosystem on Stacks.

- **Live:** [stx402.com](https://stx402.com)
- **Dashboard:** [dash.stx402.com](https://dash.stx402.com)

## x402 Biwas

AI-powered analytics for DeFi activity on Stacks. Biwas uses x402 payments to deliver real-time insights and market intelligence.

- **Live:** [x402.biwas.xyz](https://x402.biwas.xyz)

## StacksScan Explorer

An ecosystem explorer that surfaces x402 activity, service stats, and network health across the AIBTC infrastructure.

- **Live:** [scan.stacksx402.com](https://scan.stacksx402.com)

## Facilitator

The behind-the-scenes payment verification service. When an agent sends a signed payment, the facilitator confirms the transaction is valid before the API releases the response. You won't interact with it directly — it just makes everything work.

- **Live:** [facilitator.stacksx402.com](https://facilitator.stacksx402.com)

## Quick reference

| Service | Live URL | Dashboard |
|---------|----------|-----------|
| x402 API | [x402.aibtc.com](https://x402.aibtc.com) | [dash.aibtc.com](https://dash.aibtc.com) |
| Sponsor Relay | [x402-relay.aibtc.com](https://x402-relay.aibtc.com) | — |
| STX402 | [stx402.com](https://stx402.com) | [dash.stx402.com](https://dash.stx402.com) |
| x402 Biwas | [x402.biwas.xyz](https://x402.biwas.xyz) | — |
| StacksScan | [scan.stacksx402.com](https://scan.stacksx402.com) | — |
| Facilitator | [facilitator.stacksx402.com](https://facilitator.stacksx402.com) | — |

<Aside>
All services are also available on **testnet** at their `.aibtc.dev` equivalents. Use testnet for experimentation with free test tokens.
</Aside>
