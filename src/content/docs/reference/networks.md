---
title: Network Reference
description: Mainnet and testnet configurations, endpoints, and identifiers.
sidebar:
  order: 2
---

Canonical reference for Stacks network configurations used in the AIBTC x402 ecosystem.

## Network Overview

| Property | Mainnet | Testnet |
|----------|---------|---------|
| **CAIP-2 ID** | `stacks:1` | `stacks:2147483648` |
| **Chain ID** | `1` | `2147483648` |
| **Address prefix** | `SP` / `SM` | `ST` / `SN` |
| **Block time** | ~5 seconds | ~5 seconds |
| **Bitcoin anchor** | Bitcoin mainnet | Bitcoin testnet |

## AIBTC Service Endpoints

### x402 API

Pay-per-use API for AI inference, blockchain data, hashing, and storage.

| Environment | Base URL | Dashboard | Docs |
|-------------|----------|-----------|------|
| **Mainnet** | `https://x402.aibtc.com` | [dash.aibtc.com](https://dash.aibtc.com) | [/docs](https://x402.aibtc.com/docs) |
| **Testnet** | `https://x402.aibtc.dev` | [dash.aibtc.dev](https://dash.aibtc.dev) | [/docs](https://x402.aibtc.dev/docs) |

### Sponsor Relay

Gasless transaction relay — sponsors cover network fees for agents.

| Environment | Base URL | Docs |
|-------------|----------|------|
| **Mainnet** | `https://x402-relay.aibtc.com` | [/docs](https://x402-relay.aibtc.com/docs) |
| **Testnet** | `https://x402-relay.aibtc.dev` | [/docs](https://x402-relay.aibtc.dev/docs) |

### Facilitator

Payment verification and settlement service.

| Environment | Base URL | Health Check |
|-------------|----------|--------------|
| **Production** | `https://facilitator.stacksx402.com` | [/health](https://facilitator.stacksx402.com/health) |

## Ecosystem Services

### STX402

Independent x402 registry and endpoint directory.

| Resource | URL |
|----------|-----|
| **Endpoints** | [stx402.com](https://stx402.com) |
| **Dashboard** | [stx402.com/dashboard](https://stx402.com/dashboard) |
| **Docs** | [stx402.com/docs](https://stx402.com/docs) |

### x402 Biwas

AI-powered DeFi analytics for Stacks.

| Resource | URL |
|----------|-----|
| **Endpoints** | [x402.biwas.xyz](https://x402.biwas.xyz) |

### StacksScan Explorer

Ecosystem explorer for x402 activity and stats.

| Resource | URL |
|----------|-----|
| **Explorer** | [scan.stacksx402.com](https://scan.stacksx402.com) |

## Blockchain APIs

### Hiro API

Official Stacks blockchain API for transaction data, address lookups, and contract interactions.

| Environment | Base URL | Docs |
|-------------|----------|------|
| **Mainnet** | `https://api.hiro.so` | [docs.hiro.so](https://docs.hiro.so) |
| **Testnet** | `https://api.testnet.hiro.so` | [docs.hiro.so](https://docs.hiro.so) |

**Key endpoints for x402:**

- `GET /extended/v1/tx/{txid}` — Fetch transaction details
- `POST /v2/transactions` — Broadcast signed transactions
- `GET /extended/v1/address/{principal}/balances` — Check token balances

Free API keys available at [platform.hiro.so](https://platform.hiro.so).

### Stacks Node RPC

Direct node access for advanced use cases.

| Environment | URL |
|-------------|-----|
| **Mainnet** | `https://stacks-node-api.mainnet.stacks.co` |
| **Testnet** | `https://stacks-node-api.testnet.stacks.co` |

## Development Resources

### Faucets

| Resource | URL |
|----------|-----|
| **STX Testnet Faucet** | [explorer.hiro.so/sandbox/faucet](https://explorer.hiro.so/sandbox/faucet?chain=testnet) |
| **sBTC Testnet** | [bridge.sbtc.tech](https://bridge.sbtc.tech) (testnet mode) |

### Block Explorers

| Explorer | Mainnet | Testnet |
|----------|---------|---------|
| **Hiro Explorer** | [explorer.hiro.so](https://explorer.hiro.so) | [explorer.hiro.so/?chain=testnet](https://explorer.hiro.so/?chain=testnet) |

## See Also

- [Token Reference](/reference/tokens/) — Contract addresses and identifiers
- [Directory](/directory/) — Services and tools
- [Glossary](/glossary/) — Term definitions
