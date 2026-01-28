---
title: Token Reference
description: Contract addresses, identifiers, and specifications for x402 payment tokens.
sidebar:
  order: 1
---

Canonical reference for tokens supported in the AIBTC x402 ecosystem.

## Supported Tokens

| Token | Type | Decimals | Mainnet | Testnet |
|-------|------|----------|---------|---------|
| **STX** | Native | 6 | Native | Native |
| **sBTC** | SIP-010 | 8 | Yes | Yes |
| **USDCx** | SIP-010 | 6 | Yes | No |

## Contract Addresses

### STX

Native token — no contract address required.

- **Mainnet:** Native
- **Testnet:** Native

### sBTC

Bitcoin on Stacks, backed 1:1 by BTC.

| Network | Contract ID |
|---------|-------------|
| **Mainnet** | `SM3VDXK3WZZSA84XXFKAFAF15NNZX32CTSG82JFQ4.sbtc-token` |
| **Testnet** | `ST1F7QA2MDF17S807EPA36TSS8AMEFY4KA9TVGWXT.sbtc-token` |

**Asset identifier:** `::sbtc-token`

### USDCx

Bridged USDC stablecoin on Stacks.

| Network | Contract ID |
|---------|-------------|
| **Mainnet** | `SP120SBRBQJ00MCWS7TM5R8WJNTTKD5K0HFRC2CNE.usdcx` |
| **Testnet** | Not deployed |

**Asset identifier:** `::usdcx-token`

## CAIP-19 Asset Identifiers

[CAIP-19](https://chainagnostic.org/CAIPs/caip-19) provides chain-agnostic asset identification.

| Token | Mainnet | Testnet |
|-------|---------|---------|
| **STX** | `stacks:1/native:STX` | `stacks:2147483648/native:STX` |
| **sBTC** | `stacks:1/sip010:SM3VDX...sbtc-token` | `stacks:2147483648/sip010:ST1F7Q...sbtc-token` |
| **USDCx** | `stacks:1/sip010:SP120S...usdcx` | — |

## Where to Get Tokens

### Mainnet

- **STX** — Available on major exchanges (Coinbase, Binance, OKX, etc.). Transfer to a Stacks wallet.
- **sBTC** — Bridge BTC using [bridge.sbtc.tech](https://bridge.sbtc.tech)
- **USDCx** — Bridge USDC via supported bridges

### Testnet

Free test tokens for development:

- **STX** — [Stacks Testnet Faucet](https://explorer.hiro.so/sandbox/faucet?chain=testnet)
- **sBTC** — [sBTC Testnet Faucet](https://bridge.sbtc.tech) (testnet mode)

## Token Standards

All fungible tokens on Stacks follow [SIP-010](https://github.com/stacksgov/sips/blob/main/sips/sip-010/sip-010-fungible-token-standard.md), which defines:

- `transfer` — Move tokens between addresses
- `get-balance` — Check balance for an address
- `get-total-supply` — Total circulating supply
- `get-name` / `get-symbol` / `get-decimals` — Token metadata

## See Also

- [Network Reference](/reference/networks/) — Mainnet/testnet configurations
- [Directory](/directory/) — Services and tools
- [Glossary](/glossary/) — Term definitions
