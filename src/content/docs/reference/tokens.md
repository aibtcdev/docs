---
title: Tokens
description: Contract addresses and identifiers for x402 payment tokens.
---

## Supported Tokens

| Token | Type | Decimals | Mainnet | Testnet |
|-------|------|----------|---------|---------|
| **STX** | Native | 6 | Yes | Yes |
| **sBTC** | SIP-010 | 8 | Yes | Yes |
| **USDCx** | SIP-010 | 6 | Yes | No |

## Contract Addresses

### STX

Native token — no contract address.

### sBTC

Bitcoin on Stacks, backed 1:1 by BTC.

| Network | Contract ID |
|---------|-------------|
| **Mainnet** | `SM3VDXK3WZZSA84XXFKAFAF15NNZX32CTSG82JFQ4.sbtc-token` |
| **Testnet** | `ST1F7QA2MDF17S807EPA36TSS8AMEFY4KA9TVGWXT.sbtc-token` |

Asset identifier: `::sbtc-token`

### USDCx

Bridged USDC via [Circle Xreserve](https://www.circle.com/xreserve) on Stacks.

| Network | Contract ID |
|---------|-------------|
| **Mainnet** | `SP120SBRBQJ00MCWS7TM5R8WJNTTKD5K0HFRC2CNE.usdcx` |
| **Testnet** | Not deployed |

Asset identifier: `::usdcx-token`

**Bridging:** See [Stacks bridging documentation](https://docs.stacks.co/guides/bridge-assets-to-stacks) for how to bridge USDC to Stacks.

## CAIP-19 Asset Identifiers

[CAIP-19](https://chainagnostic.org/CAIPs/caip-19) provides chain-agnostic asset identification. See [our CAIP-19 PR for Stacks](https://github.com/ChainAgnostic/namespaces/pull/167) for the full specification.

| Token | Mainnet | Testnet |
|-------|---------|---------|
| **STX** | `stacks:1/slip44:5757` | `stacks:2147483648/slip44:5757` |
| **sBTC** | `stacks:1/sip010:SM3VDX...::sbtc-token` | `stacks:2147483648/sip010:ST1F7Q...::sbtc-token` |
| **USDCx** | `stacks:1/sip010:SP120S...::usdcx-token` | — |

## Where to Get Tokens

### Mainnet

- **STX** — Major exchanges (Coinbase, Binance, OKX). Transfer to a Stacks wallet.
- **sBTC** — Bridge BTC at [bridge.sbtc.tech](https://bridge.sbtc.tech)
- **USDCx** — Bridge USDC via [supported bridges](https://docs.stacks.co/guides/bridge-assets-to-stacks)

### Testnet

- **STX** — [Stacks Testnet Faucet](https://explorer.hiro.so/sandbox/faucet?chain=testnet)
- **sBTC** — [sBTC Testnet Faucet](https://bridge.sbtc.tech) (testnet mode)

## Token Standard

All fungible tokens follow [SIP-010](https://github.com/stacksgov/sips/blob/main/sips/sip-010/sip-010-fungible-token-standard.md):

- `transfer` — Move tokens between addresses
- `get-balance` — Check balance for an address
- `get-total-supply` — Total circulating supply
- `get-name` / `get-symbol` / `get-decimals` — Token metadata
