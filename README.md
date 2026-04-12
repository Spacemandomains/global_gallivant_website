# Global Gallivant — Official Website

**Live site:** [globalgallivant.com](https://globalgallivant.com)

The official landing page for **Intercontinental Zoe** — travel YouTuber, cultural explorer, and founder of the Global Gallivant brand. Built for a creator who has visited **50 countries**, **150 cities**, across **5 continents**, and produced over **1,800 videos**.

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — stats, featured destinations, services |
| `/about` | About Zoe — story, GPT Store integration |
| `/consultation` | Book a 1-on-1 travel consultation ($150) |
| `/merch` | Merchandise drop countdown |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

---

## Tech Stack

- **Framework:** React 18 + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel (`globalgallivant.com`)
- **Monorepo:** pnpm workspaces

---

## AI & Agent Infrastructure

This site is fully wired for AI agent discovery and interaction:

| File | Purpose |
|------|---------|
| `/llms.txt` | LLM-readable site summary and MCP endpoint |
| `/.well-known/ai-plugin.json` | ChatGPT plugin manifest |
| `/robots.txt` | AI bot governance and MCP references |
| `/sitemap.xml` | XML sitemap (7 routes) |

**HTTP headers on every response:**
- `MCP-Endpoint: https://intercontinental-zoe-chat-gpt.vercel.app/mcp`
- `X-AI-Plugin: https://www.globalgallivant.com/.well-known/ai-plugin.json`

**MCP Server:** [`intercontinental-zoe-chat-gpt.vercel.app`](https://intercontinental-zoe-chat-gpt.vercel.app)
**Custom GPT:** [Global Gallivant on ChatGPT](https://chatgpt.com/g/g-69d9745556cc8191be7937e8b5be26b8-global-gallivant)

---

## SEO & Schema

Structured data included in `index.html`:

- `WebSite` + `Organization` + `Person` schemas
- `Service` schema
- `FAQPage` schema (7 Q&As)
- `HowTo` schema
- Open Graph + Twitter Card meta tags
- Canonical URL, `og:locale`, `og:site_name`

---

## Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm --filter @workspace/travel-youtuber run dev

# Build for production
pnpm --filter @workspace/travel-youtuber run build
```

---

## Links

- **YouTube:** [@INTERNATIONALZOE](https://www.youtube.com/@INTERNATIONALZOE)
- **Instagram:** [@international.zoe](https://www.instagram.com/international.zoe)
- **Patreon:** [patreon.com/internationalzoe](https://www.patreon.com/internationalzoe/shop)
- **Consultation:** [PayPal booking](https://paypal.me/barberworldtv/150)
- **Contact:** globalgallivantzoe@gmail.com
