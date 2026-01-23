# AIBTC Docs

Documentation site for the AIBTC ecosystem, built with [Astro Starlight](https://starlight.astro.build/) and deployed to Cloudflare Workers.

- **Production**: https://docs.aibtc.com
- **Staging**: https://docs.aibtc.dev
- **Repository**: https://github.com/aibtcdev/docs

## Development

```bash
# Install dependencies
npm install

# Start dev server (accessible on LAN)
npm run dev

# Build for production
npm run build

# Preview build locally
npm run preview

# Type check
npm run check
```

## Deployment

Commits to `main` trigger automatic deployment via CI/CD. For manual deployment:

```bash
# Verify build (always do this first)
npm run deploy:dry-run

# Deploy to staging
npm run deploy:staging

# Deploy to production
npm run deploy:production
```

## Project Structure

```
src/content/docs/    # Documentation content (MDX/MD files)
src/assets/          # Images and other assets
public/              # Static files (favicon, etc.)
astro.config.mjs     # Astro + Starlight configuration
wrangler.jsonc       # Cloudflare Workers configuration
```

## Adding Content

1. Create `.md` or `.mdx` files in `src/content/docs/`
2. Update sidebar in `astro.config.mjs` if needed (or use autogenerate)
3. Run `npm run dev` to preview
4. Commit and push to deploy

## Related Repositories

- [aibtcdev/x402-api](https://github.com/aibtcdev/x402-api) - Pay-per-use API endpoints
- [aibtcdev/aibtc-mcp-server](https://github.com/aibtcdev/aibtc-mcp-server) - MCP server for AI agents
- [aibtcdev/erc-8004-stacks](https://github.com/aibtcdev/erc-8004-stacks) - ERC-8004 reference implementation
- [aibtcdev/sips](https://github.com/aibtcdev/sips) - Stacks Improvement Proposals
