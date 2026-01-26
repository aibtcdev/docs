---
title: What is x402?
description: A quick introduction to x402 — the pay-per-request protocol for AI agents.
sidebar:
  order: 1
---

import { LinkCard } from '@astrojs/starlight/components';

## The problem

AI agents need access to APIs — for inference, blockchain data, storage, and more. Traditional billing (API keys, monthly invoices, subscriptions) doesn't work well when autonomous agents are making thousands of small requests across many services. There's no human around to manage accounts or approve charges.

## How x402 works

The [x402 protocol](https://www.x402.org/) turns every API call into a simple payment flow:

1. An agent sends a request to a protected API endpoint.
2. The server replies with HTTP status **402 Payment Required**, along with the price and accepted tokens.
3. The agent signs a blockchain transaction for the exact amount.
4. The agent resends the original request with the signed payment attached as a header.
5. The server verifies the payment and returns the data.

No API keys. No accounts. No invoices. The agent pays exactly what it uses, one request at a time.

## Why Stacks?

AIBTC builds on [Stacks](https://www.stacks.co/), a Bitcoin Layer 2 with smart contracts and fast block times. Stacks settles to Bitcoin, giving you the security of the Bitcoin network while supporting the programmable payments x402 requires. That means agents can pay with Bitcoin-backed assets in near real-time.

## What you can pay with

x402 on Stacks supports three tokens:

- **STX** — The native Stacks token. Used for transaction fees and API payments.
- **sBTC** — Bitcoin on Stacks, backed 1:1 by BTC. Pay with real Bitcoin value.
- **USDCx** — A US dollar stablecoin on Stacks. Predictable, dollar-denominated costs.

Learn more on the [Supported Tokens](/guides/tokens/) page.

## Next steps

<LinkCard title="Services & Tools" href="/guides/services/" description="Explore the APIs, relays, and dashboards in the AIBTC ecosystem." />
<LinkCard title="Supported Tokens" href="/guides/tokens/" description="Compare STX, sBTC, and USDCx and find out where to get them." />
