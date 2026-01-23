# AIBTC Docs

Documentation site for the AIBTC ecosystem, built with Astro Starlight and deployed to Cloudflare Workers.

## Environments

| Environment | Domain | Zone |
|-------------|--------|------|
| Staging | docs.aibtc.dev | aibtc.dev |
| Production | docs.aibtc.com | aibtc.com |

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview build locally
npm run preview
```

## Deployment

**Do NOT run deploy directly in development.** Use dry-run to verify, then commit and push for CI/CD.

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

## Configuration

- **Site title**: AIBTC Docs (in astro.config.mjs)
- **Base path**: /docs (all pages served under this path)
- **Social links**: GitHub, X (@aibtcdev)
