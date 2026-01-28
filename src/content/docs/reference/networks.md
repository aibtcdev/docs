---
title: Networks
description: Mainnet and testnet configurations, endpoints, and identifiers.
---

## Network Overview

| Property | Mainnet | Testnet |
|----------|---------|---------|
| **CAIP-2 ID** | `stacks:1` | `stacks:2147483648` |
| **Chain ID** | `1` | `2147483648` |
| **Address prefix** | `SP` / `SM` | `ST` / `SN` |
| **Block time** | ~5 seconds | ~5 seconds |
| **Bitcoin anchor** | Bitcoin mainnet | Bitcoin testnet |

## AIBTC Endpoints

All AIBTC services: **mainnet** on `aibtc.com`, **testnet** on `aibtc.dev`.

### x402 API

| Endpoint | Mainnet | Testnet |
|----------|---------|---------|
| **Base** | `https://x402.aibtc.com` | `https://x402.aibtc.dev` |
| **Docs** | [/docs](https://x402.aibtc.com/docs) | [/docs](https://x402.aibtc.dev/docs) |
| **Dashboard** | [/dashboard](https://x402.aibtc.com/dashboard) | [/dashboard](https://x402.aibtc.dev/dashboard) |

### Sponsor Relay

| Endpoint | Mainnet | Testnet |
|----------|---------|---------|
| **Base** | `https://x402-relay.aibtc.com` | `https://x402-relay.aibtc.dev` |
| **Docs** | [/docs](https://x402-relay.aibtc.com/docs) | [/docs](https://x402-relay.aibtc.dev/docs) |

### Facilitator

| Endpoint | URL |
|----------|-----|
| **Health** | [facilitator.stacksx402.com/health](https://facilitator.stacksx402.com/health) |

## Ecosystem Endpoints

| Service | Base URL | Additional |
|---------|----------|------------|
| **STX402** | [stx402.com](https://stx402.com) | [/docs](https://stx402.com/docs), [/dashboard](https://stx402.com/dashboard) |
| **x402 Biwas** | [x402.biwas.xyz](https://x402.biwas.xyz) | [/analytics](https://x402.biwas.xyz/analytics) |
| **StacksScan** | [scan.stacksx402.com](https://scan.stacksx402.com) | — |

## Blockchain APIs

### Hiro API

| Environment | Base URL |
|-------------|----------|
| **Mainnet** | `https://api.hiro.so` |
| **Testnet** | `https://api.testnet.hiro.so` |

**Key endpoints:**
- `GET /extended/v1/tx/{txid}` — Transaction details
- `POST /v2/transactions` — Broadcast transactions
- `GET /extended/v1/address/{principal}/balances` — Token balances

Free API keys at [platform.hiro.so](https://platform.hiro.so). Full docs at [docs.hiro.so](https://docs.hiro.so).

### Block Explorers

| Explorer | Mainnet | Testnet |
|----------|---------|---------|
| **Hiro** | [explorer.hiro.so](https://explorer.hiro.so) | [explorer.hiro.so/?chain=testnet](https://explorer.hiro.so/?chain=testnet) |

## Faucets (Testnet)

- **STX** — [explorer.hiro.so/sandbox/faucet](https://explorer.hiro.so/sandbox/faucet?chain=testnet)
- **sBTC** — [bridge.sbtc.tech](https://bridge.sbtc.tech) (testnet mode)
