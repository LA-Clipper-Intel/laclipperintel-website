# LA Clipper Intel — Website Backlog

_Maintained by the weekly Website & SEO Manager task. Replaced in full each run; changelog at the bottom keeps the last 5 runs._

> **Note on location:** this file is meant to live at the root of `LA-Clipper-Intel/Clipper-Intel-Productions`, but this session's GitHub access is scoped to `laclipperintel-website` only (confirmed via the GitHub MCP tools — `Clipper-Intel-Productions` exists but returns "not configured for this session"). Until that scope is widened, this backlog lives here instead.

## Fixed this run (2026-09-25)

- [Add SEO essentials: robots.txt, sitemap.xml, 404 page, favicon/OG image](https://github.com/LA-Clipper-Intel/laclipperintel-website/commit/c2265ec)
- [Wire SEO metadata into index.html and fix stale/fabricated content](https://github.com/LA-Clipper-Intel/laclipperintel-website/commit/c416fb7)

Summary: added canonical/OG/Twitter tags, JSON-LD (WebSite + Organization, sameAs limited to the 4 active accounts), favicon/apple-touch-icon, a generated 1200×630 OG image, robots.txt, sitemap.xml, and a branded 404 page. Removed Instagram/Threads (retired) from the social grid and schema, fixed the Facebook link to the correct page ID, corrected the breaking-news banner (Johni Broome was waived in July — no longer "locked in"), dropped a stale Trey Murphy III trade rumor from the ticker (verified: Pelicans are keeping him), replaced fabricated Shorts view counts and invented video titles/durations with honest copy, replaced the fake email-capture button with an honest YouTube/X follow CTA, and pointed the primary subscribe buttons at the `sub_confirmation=1` deep link. Deploy verified green via the `pages build and deployment` GitHub Action (run tied to commit c416fb7).

## Do next — ready for Claude Code

- **P1 — Real video embeds.** `#reelrow` (Quick Hits) and `#ylist` (Deep Dive) currently show honest but generic placeholder tiles instead of real videos, because this run's vidIQ connector had 0 credits and couldn't pull actual Shorts/video IDs, titles, or durations. Once credits are available, pull the real list (`vidiq_channel_videos` for `@LAClipperIntel`, both `short` and `long` formats) and swap in real thumbnails/titles/durations, embedding with `youtube-nocookie.com` + lazy loading per the standing site rules.
- **P1 — Re-verify GM Meter cap figures.** The $6.4M/$17M TPE/$1.0M MLE/$5.4M BAE numbers in `#gm` were spot-checked against Bobby Marks reporting this run (MLE and $17M Collins TPE check out; BAE reported elsewhere as $5.5M vs. the site's $5.4M — likely just a rounding/date difference, not confirmed exactly). The section now carries a "Cap sheet as of Sept 25, 2026" label as a stopgap; do a fresh, more precise cap-sheet pass next run rather than treating the label as a permanent fix.
- **P1 — Compress hero images.** `assets/banner.jpg` (198KB) and `assets/logo.jpg` (122KB) are uncompressed. No image-optimization tooling (ImageMagick/cwebp/PIL) was available in this session's sandbox to convert them to WebP or re-export at lower quality — needs an environment with that tooling, or Kyle can supply pre-optimized versions.
- **P2 — Fuller favicon set.** Only a 32px PNG favicon and a 180px apple-touch-icon were generated (via a headless-browser screenshot of the logo, since no image tools were available). A proper `favicon.ico` + a full size set (16/32/180/512) + manifest would be more robust across browsers.
- **P2 — Nicer OG image.** The current `assets/og-image.jpg` is a screenshot composited from the existing banner/logo — functional and on-brand, but a purpose-designed 1200×630 card (e.g. via Canva) would look sharper on social.

## Needs Kyle

- **Memory tool unavailable this session.** No `mcp__memory__*` tool was present in this session's tool list, so Step 5 (updating `/areas/clipper-intel.md` with a WEBSITE STATUS section) could not be completed. This looks like an MCP/connector configuration gap for this task — worth checking, since without it future runs lose continuity on what was fixed/open.
- **Google Search Console.** Verify the domain and submit `https://laclipperintel.com/sitemap.xml` — this run added the sitemap but submitting it requires Kyle's GSC account.
- **Real email-alert list.** The fake "Set ✓" signup was replaced with an honest follow-us CTA (no backend existed). If Kyle wants real email capture, he needs to set up a free-tier ESP (Formspree/Buttondown/etc.) and share the form endpoint/account.
- **vidIQ credits.** The connected vidIQ account had 0 credits this run, blocking real video/Shorts data lookups needed for the "Do next" item above.
- **GitHub scope.** This task's GitHub access only covers `laclipperintel-website`. The org also has `Clipper-Intel-Productions` (private) and `Clipper-Intel-Media-Staging` (public) repos this session can't reach — widen the scope if the backlog (or other assets) should live in `Clipper-Intel-Productions` per the standing instructions.
- **"Clippers Beat Monitor" task.** Per standing instructions, that task was reported to be updating an old claude.ai artifact copy of the site rather than this live GitHub Pages repo. This session has no way to check that task directly — please confirm whether it's still pointed at the wrong target, and if so redirect it to this repo.

## Changelog (last 5 runs)

- **2026-09-25** — First backlog write (no prior WEBSITE_BACKLOG.md found in this repo). Shipped SEO essentials (meta/OG/Twitter/JSON-LD/robots/sitemap/404/favicon/OG image) and fixed stale/fabricated content (Broome, Trey Murphy rumor, fake view counts/video specifics, fake email capture). See "Fixed this run" above for commit links.
