# Nexra AI Website Production Audit

Audit date: 2026-06-21  
Scope: static inspection of the Next.js codebase under `/workspace/nexra`, source assets, metadata routes, and attempted local quality gates. No application rewrite was performed.

## Executive verdict

**Production approval: NO.** The site has a promising single-page marketing foundation, but it is not production-ready at Apple/Stripe/Linear/Vercel/OpenAI standards. The highest-risk blockers are missing legal routes linked from the footer, non-verifiable package install/build/lint pipeline in this environment, severe component/architecture drift with unused legacy sections, limited accessibility controls for motion and mobile menu state, weak SEO/structured-data depth, incomplete navigation state, and product credibility issues caused by mock screenshots containing personal-looking phone numbers.

## Evidence summary

| Area | Status | Key evidence |
| --- | --- | --- |
| App shape | ⚠ PARTIAL | One-page implementation is embedded directly in `app/page.tsx` instead of composing the section components that exist under `components/sections`. |
| Build/lint | ❌ FAIL | `npm run lint` fails because dependencies are not installed; `npm install` is blocked by registry policy with 403 for `@radix-ui/react-slot`. |
| SEO basics | ⚠ PARTIAL | Metadata, robots, sitemap, Open Graph, Twitter, and JSON-LD exist, but legal URLs are linked without pages and only the homepage is in the sitemap. |
| Accessibility | ⚠ PARTIAL | Semantic sections/headings and focus styles exist, but reduced motion is absent and mobile menu state/name behavior is weak. |
| Product credibility | ❌ FAIL | TableBoost visual assets are SVG mocks that expose phone-number-like strings and do not match the page copy about reservations/waitlist/floor management. |
| Production readiness | ❌ FAIL | Missing `/privacy` and `/terms` routes, no security headers, untested deploy pipeline, and inconsistent content model block launch. |

## 1. Project Architecture

| Check | Result | Finding | Impact | Recommendation | Priority |
| --- | --- | --- | --- | --- | --- |
| Folder structure | ⚠ PARTIAL | The project has conventional `app`, `components`, `lib`, `types`, and `public` directories, but page-level content is centralized in one large `Home` component. | Lower maintainability and harder section-level testing/reuse. | Split the live page into the existing section components or remove the unused section directory if intentionally abandoned. | High |
| Component organization | ❌ FAIL | `components/sections/*` and `components/footer.tsx` appear to be legacy/unused while `app/page.tsx` inlines hero, philosophy, products, roadmap, about, CTA, and footer. | Two competing implementations can diverge and confuse future engineers. | Establish one canonical component tree and delete or migrate stale components. | High |
| Reusability | ⚠ PARTIAL | `Button`, `Logo`, `Navigation`, and `MotionSection` are reusable, but most page markup and data arrays are local to `app/page.tsx`. | Content changes require editing a dense file instead of stable data/component boundaries. | Move products, principles, social links, and JSON-LD source data into typed content modules. | Medium |
| Separation of concerns | ❌ FAIL | `Home` combines content, schema data, layout, product sections, social links, and footer rendering. | Raises regression risk and prevents focused review. | Compose `Home` from section components with typed props. | High |
| Naming conventions | ⚠ PARTIAL | Names are mostly clear, but product/status/content naming conflicts between `lib/site-content.ts` and local arrays in `app/page.tsx`. | Ambiguous source of truth. | Rename legacy content or delete it; keep one product model. | Medium |
| TypeScript quality | ⚠ PARTIAL | `strict` is enabled and product types exist, but most content arrays are untyped tuples and JSON-LD is untyped. | Allows shape drift in business-critical content. | Type all content constants with `satisfies` or explicit interfaces. | Medium |
| Unused code | ❌ FAIL | Legacy section components, `Footer`, `lib/site-content.ts`, and `styles/tokens.css` are not referenced by the active page. | Dead code inflates maintenance surface and can mislead audits. | Confirm usage with dependency analysis and remove or wire them in. | High |
| Duplicate code | ❌ FAIL | Product/social/footer concepts are duplicated across active page and legacy content/components. | Inconsistent copy and routes are already visible. | Create a single content source. | High |
| Code smells | ❌ FAIL | Several JSX sections are minified onto very long lines, making diffs and review difficult. | Increased chance of missed defects. | Format JSX with standard multiline conventions. | Medium |
| SOLID / maintainability | ⚠ PARTIAL | Small primitives are reasonable, but the page component violates single-responsibility. | Difficult to extend for future pages/products. | Introduce page sections and content modules. | Medium |
| Scalability/extensibility | ⚠ PARTIAL | App Router can scale, but current sitemap and routes only support one page. | Future product/legal pages are not represented. | Add actual routes and include them in sitemap. | High |

## 2. Branding Audit

| Check | Result | Finding | Impact | Recommendation | Priority |
| --- | --- | --- | --- | --- | --- |
| Premium | ⚠ PARTIAL | Minimal typography and whitespace support premium positioning, but default blue/cyan tokens and generic cards feel common. | Does not yet reach Stripe/Linear-level distinctiveness. | Refine token system, rhythm, and art direction without changing core layout. | Medium |
| Trustworthy/professional | ⚠ PARTIAL | Copy is calm and professional, but mock product screenshots include customer names and phone-number-like data. | Creates privacy and credibility concerns. | Replace with anonymized, clearly synthetic data. | Critical |
| Modern/minimal | ✅ PASS | Visual system is restrained and avoids cyberpunk/robot motifs in core site UI. | Positive. | Preserve restraint. | Low |
| Software company, not agency | ⚠ PARTIAL | Active page says “product studio” and “products,” but legacy components and content still position Nexra as consulting/AI adoption support. | Brand ambiguity for production handoff and content governance. | Remove legacy agency-oriented content or align it with product-company positioning. | High |
| Avoid crypto/futuristic/robot feel | ✅ PASS | No crypto/cyberpunk visual language is present in active page. | Positive. | Keep visuals grounded. | Low |

## 3. Visual Design Audit

| Check | Result | Finding | Impact | Recommendation | Priority |
| --- | --- | --- | --- | --- | --- |
| Spacing consistency | ⚠ PARTIAL | Sections mostly use `px-6 py-24`, but hero uses `py-20 md:py-28` and a `min-h-screen`; this may create excessive first-screen height on small devices. | Potential unbalanced mobile first impression. | Validate in browser and tune hero min-height. | Medium |
| Typography hierarchy | ⚠ PARTIAL | Strong headings exist, but `text-6xl md:text-8xl` with `leading-[0.92]` risks awkward wrapping on 360px. | Mobile polish risk. | Add smaller base breakpoint or `max()`/fluid type clamp. | High |
| Card consistency | ⚠ PARTIAL | Cards use rounded-3xl and border/shadow patterns, but hero/product image radius uses `rounded-[2rem]`; legacy components use different slate tokens. | Inconsistent system if components are reused. | Normalize radii/shadow tokens. | Medium |
| Alignment/grid | ⚠ PARTIAL | Main desktop grid is sensible, but mobile hero image stack has absolute mobile mockup and fixed min-height. | Could overlap or create large blank space. | Verify all breakpoints; use responsive container composition. | High |
| Overall polish | ⚠ PARTIAL | Good foundation, but mock assets, inconsistent content, and long-page single-file implementation prevent world-class polish. | Not yet Apple/Stripe-grade. | Conduct visual QA after architecture cleanup. | High |

## 4. Responsive Audit

| Breakpoint / scenario | Result | Findings | Recommendation | Priority |
| --- | --- | --- | --- | --- |
| 360px / 390px / 430px | ⚠ PARTIAL | Desktop navigation collapses, but headline sizing, hero `min-h-screen`, and absolute phone mockup can create overflow/awkward spacing. | Browser-test with real screenshots; reduce base headline size and avoid absolute overlap on the smallest widths. | High |
| 768px | ⚠ PARTIAL | Navigation switches at `md`; product/principle grids switch to multi-column, but some sections may become dense. | Validate card wrapping and tap targets. | Medium |
| 1024px / 1280px / 1440px | ✅ PASS | `max-w-7xl` layout should constrain content cleanly. | Continue using max-width containers. | Low |
| 1920px / ultra-wide | ⚠ PARTIAL | Content remains constrained, but hero min-height and image scale may feel sparse. | Add intentional ultra-wide composition or max hero height. | Low |
| Landscape tablets | ⚠ PARTIAL | Sticky nav plus `min-h-screen` hero may consume too much vertical space. | Test 1024x768 and 1180x820 specifically. | Medium |
| Horizontal overflow | ⚠ PARTIAL | No explicit evidence from runtime testing; image stack and large headings are risk points. | Run Playwright viewport checks before launch. | High |

## 5. Accessibility Audit

| Check | Result | Finding | Impact | Recommendation | Priority |
| --- | --- | --- | --- | --- | --- |
| Keyboard navigation | ⚠ PARTIAL | Links/buttons are native, but mobile menu uses `<details>/<summary>` with no explicit close behavior after choosing links. | Keyboard users may experience confusing state. | Implement accessible controlled menu with correct aria-expanded and close-on-navigation. | High |
| Focus states | ✅ PASS | Global focus-visible and Button focus-visible styles exist. | Good baseline. | Verify color contrast on all backgrounds. | Low |
| ARIA | ⚠ PARTIAL | Navigation labels exist; summary has an aria-label. Logo uses aria-label on a non-interactive span inside a link. | Screen reader announcement may be less clear than labeling the link itself. | Move accessible name to the anchor or use visible text only. | Medium |
| Semantic HTML | ✅ PASS | Uses header, nav, main, sections, articles, footer, lists. | Good baseline. | Preserve semantic structure. | Low |
| Heading hierarchy | ✅ PASS | One `h1`, section `h2`s, card `h3`s. | Good. | Keep hierarchy when splitting components. | Low |
| Alt text | ⚠ PARTIAL | Product images have descriptive alt text, but alt claims reservation/waitlist/table-map screens while SVGs show revenue dashboards. | Mismatched alt text misleads screen reader users. | Align images, copy, and alt text. | Critical |
| Contrast | ⚠ PARTIAL | Most text is likely sufficient, but cyan-on-dark and muted slate text need measured contrast verification. | WCAG risk. | Run automated contrast checks and adjust tokens. | Medium |
| Reduced motion | ❌ FAIL | Framer Motion runs without `useReducedMotion` or CSS `prefers-reduced-motion`. | Fails motion sensitivity expectations. | Disable or simplify reveal animation for reduced-motion users. | High |
| Form labels | ✅ PASS | No forms are present. | N/A. | If forms are added, label all controls. | Low |
| WCAG compliance | ⚠ PARTIAL | Baseline semantics are decent; motion/menu/image mismatches block confident WCAG AA. | Accessibility score and legal compliance risk. | Complete automated and manual audit. | High |

## 6. Performance Audit

| Check | Result | Finding | Impact | Recommendation | Priority |
| --- | --- | --- | --- | --- | --- |
| Image optimization | ⚠ PARTIAL | Uses `next/image`, but SVG screenshots are huge text-heavy files and hero loads two priority images. | Large initial payload and LCP risk. | Use optimized raster/WebP/AVIF screenshots or simplify SVGs; prioritize only true LCP image. | High |
| Lazy loading | ⚠ PARTIAL | Non-priority product image uses default lazy loading, but both hero desktop and mobile screenshots are priority. | More critical-path loading than needed. | Keep only above-fold primary asset priority. | Medium |
| Bundle size / JS | ⚠ PARTIAL | Framer Motion and Lucide add client JS for simple reveal/icon effects. | Hydration/bundle overhead on marketing page. | Consider CSS-only reveals or LazyMotion; import only needed icon modules if possible. | Medium |
| Code splitting | ⚠ PARTIAL | App Router helps, but entire homepage is one component and MotionSection is client code wrappers. | Less granular optimization. | Split sections and minimize client boundaries. | Medium |
| CLS/LCP/FCP | ⚠ PARTIAL | Width/height are set on images; layout risk remains from hero min-height and font loading. | Likely acceptable but unverified. | Run Lighthouse/Playwright after dependencies install. | High |
| Fonts | ✅ PASS | `next/font` with `display: swap` is used. | Good. | Consider variable weights needed for hierarchy. | Low |
| Caching | ⚠ PARTIAL | No explicit security/cache headers in `next.config.ts`. Static assets benefit from Next defaults only. | CDN behavior not production-tuned. | Add headers and deployment cache policy. | Medium |

## 7. SEO Audit

| Check | Result | Finding | Impact | Recommendation | Priority |
| --- | --- | --- | --- | --- | --- |
| Metadata title/description | ✅ PASS | Basic title and description exist. | Good baseline. | A/B refine for product positioning. | Low |
| Open Graph/Twitter | ⚠ PARTIAL | OG/Twitter exist, but image is SVG and declared dimensions do not match the SVG's actual dimensions. | Social previews may render inconsistently. | Use a 1200x630 PNG/JPEG OG image with matching metadata. | High |
| robots/sitemap | ⚠ PARTIAL | Robots and sitemap routes exist, but sitemap only includes homepage. | Missing indexation for legal/product pages once added. | Add all canonical public routes. | High |
| Canonical | ✅ PASS | Canonical `/` exists. | Good. | Add per-page canonicals when routes are added. | Low |
| JSON-LD | ⚠ PARTIAL | Organization JSON-LD exists, but `makesOffer` contains `SoftwareApplication` objects directly and no `sameAs` validation. | Structured data may be weak or invalid. | Validate with Rich Results/schema validators and use appropriate Organization/Product/SoftwareApplication graph. | Medium |
| Heading hierarchy/semantic HTML | ✅ PASS | Single h1 and logical h2/h3 structure. | Good. | Preserve. | Low |
| Internal links | ❌ FAIL | Footer links `/privacy` and `/terms` do not have corresponding route files. | 404s hurt trust and crawl quality. | Add legal routes or remove links until ready. | Critical |
| Image alt text | ⚠ PARTIAL | Present but semantically mismatched to actual SVG content. | Accessibility and image SEO issue. | Align alt and assets. | Critical |

## 8. Animation Audit

| Check | Result | Finding | Impact | Recommendation | Priority |
| --- | --- | --- | --- | --- | --- |
| Framer Motion usage | ⚠ PARTIAL | Simple `motion.div` reveal on several sections. | Acceptable but heavier than necessary. | Use `LazyMotion` or CSS transitions for simple reveals. | Medium |
| Consistency | ✅ PASS | Same reveal duration/ease is reused. | Good. | Keep single motion token. | Low |
| Performance | ⚠ PARTIAL | Multiple viewport observers and client components for cosmetic motion. | Bundle/runtime cost. | Reduce client-side animation footprint. | Medium |
| Reduced motion | ❌ FAIL | No reduced-motion branch. | Accessibility failure. | Respect `prefers-reduced-motion`. | High |
| Premium feeling | ⚠ PARTIAL | Subtle enough, but default reveal is generic. | Not differentiated. | Make motion rarer and more intentional. | Low |

## 9. Navigation Audit

| Check | Result | Finding | Impact | Recommendation | Priority |
| --- | --- | --- | --- | --- | --- |
| Sticky navbar | ✅ PASS | Header is sticky, blurred, and bordered. | Good baseline. | Verify backdrop support. | Low |
| Desktop menu | ⚠ PARTIAL | Functional links exist; social icons are present, but all links are button-styled and crowded. | Navigation feels heavy and social-heavy for a premium SaaS homepage. | Separate primary nav from social/contact actions. | Medium |
| Mobile menu | ⚠ PARTIAL | Uses `details`, but imports `X` unused in navigation and does not change icon/open state. | Less polished and less accessible. | Implement controlled menu or improve `summary` state styling. | High |
| Current page highlighting | ❌ FAIL | No active/current section indication. | Weak orientation on long page. | Add active state for section anchors or at least current top state. | Low |
| Scroll behavior | ⚠ PARTIAL | Smooth scroll globally; no `scroll-margin-top` on targets. | Sticky header may cover anchored content. | Add scroll-margin to target sections. | Medium |
| Logo behavior | ⚠ PARTIAL | Logo anchor goes to `#top`; accessible name could be improved. | Minor accessibility/UX issue. | Label the anchor directly. | Low |
| Social links | ⚠ PARTIAL | Social links are present but external links lack `target`, `rel`, and no verification that accounts exist. | Potential trust/security issue. | Verify official accounts; add safe external-link behavior if opening new tabs. | Medium |

## 10. Hero Section Audit

| Check | Result | Finding | Impact | Recommendation | Priority |
| --- | --- | --- | --- | --- | --- |
| Headline | ✅ PASS | “Building Better Business Software.” is clear and software-company oriented. | Strong baseline. | Keep concise positioning. | Low |
| Subheadline | ✅ PASS | Communicates operations/customer/growth value without hype. | Good. | Tighten further after product alignment. | Low |
| CTAs | ⚠ PARTIAL | “Explore products” and mailto contact exist; no product demo/signup route. | Lower conversion credibility. | Add a real product CTA or waitlist route when available. | High |
| Visual hierarchy | ⚠ PARTIAL | Hero image is prominent; headline is very large and may wrap poorly. | Mobile polish risk. | Test and tune fluid heading. | High |
| Screenshot quality | ❌ FAIL | Hero alt describes reservations/waitlist/table map, while asset shows revenue dashboard/customer activity. | Broken product story and accessibility mismatch. | Use accurate TableBoost screenshots or update messaging. | Critical |
| Trust | ⚠ PARTIAL | Clean tone, but no proof, customer logos, security/privacy signals, or product availability details. | Enterprise buyers may not trust it yet. | Add proof and clear product status only when factual. | High |

## 11. Content Audit

| Check | Result | Finding | Impact | Recommendation | Priority |
| --- | --- | --- | --- | --- | --- |
| Grammar/readability | ✅ PASS | Active copy is generally grammatical and readable. | Good. | Minor editorial pass only. | Low |
| Consistency | ❌ FAIL | Active page says TableBoost is reservations/waitlist/floor management, while SVGs and legacy content describe revenue dashboards and table data workflows. | Core product narrative is inconsistent. | Define the product truth and align all copy/assets. | Critical |
| Tone/brand voice | ⚠ PARTIAL | Calm/professional, but “product studio” can imply agency/studio services. | Brand ambiguity. | If Nexra is a software company, use “software company” or “product company” consistently. | Medium |
| Repetition | ✅ PASS | Active page is not overly repetitive. | Good. | Preserve concision. | Low |
| Business positioning | ⚠ PARTIAL | Mission is plausible but lacks clear customer segment beyond TableBoost. | Weak strategic clarity. | State ICP and product category with precision. | High |
| Instagram/philosophy consistency | ⚠ PARTIAL | Code cannot verify Instagram branding externally in this audit. | Unknown brand mismatch risk. | Cross-check active social profile visuals/copy before launch. | Medium |

## 12. Product Audit

| Check | Result | Finding | Impact | Recommendation | Priority |
| --- | --- | --- | --- | --- | --- |
| TableBoost section | ⚠ PARTIAL | Has benefit bullets and screenshot, but product narrative conflicts with asset content. | Credibility gap. | Align with true TableBoost functionality. | Critical |
| Real screenshots | ❌ FAIL | Assets are hand-authored SVG mockups, not verifiable real product screenshots. | Visitors may distrust the product if UI does not exist or differs. | Use authentic screenshots or label as concept. | High |
| Image quality | ⚠ PARTIAL | SVG is crisp but uses symbolic icons and fake data that may look unpolished. | Less premium. | Replace icon glyphs with real product UI assets. | Medium |
| Benefits/messaging | ⚠ PARTIAL | Benefits are clear but generic and unsubstantiated. | Weak conversion. | Add concrete outcomes and proof points. | Medium |
| CTA | ❌ FAIL | No TableBoost-specific CTA beyond mailto/general products anchor. | Lost product conversion. | Add product page, demo request, waitlist, or launch CTA. | High |
| Future products | ⚠ PARTIAL | Roadmap lists products/statuses, but no “coming soon” framing or confidence details. | Could look speculative. | Add concise status disclaimers and expected availability only if real. | Medium |

## 13. Footer Audit

| Check | Result | Finding | Impact | Recommendation | Priority |
| --- | --- | --- | --- | --- | --- |
| Navigation | ⚠ PARTIAL | Footer has Products/About/Privacy/Terms only. | Minimal but incomplete. | Include core page anchors and social/contact where appropriate. | Low |
| Social links | ❌ FAIL | Footer omits social links despite social CTAs above. | Inconsistent findability. | Add verified social/contact links. | Medium |
| Copyright | ✅ PASS | Dynamic copyright exists. | Good. | Keep. | Low |
| Privacy/Terms | ❌ FAIL | Footer links to routes not implemented in the codebase. | Production legal/trust blocker. | Add pages before launch. | Critical |
| Spacing/accessibility | ✅ PASS | Footer is semantically structured and simple. | Good. | Preserve. | Low |

## 14. Mobile UX Audit

| Check | Result | Finding | Impact | Recommendation | Priority |
| --- | --- | --- | --- | --- | --- |
| Thumb reach/tap targets | ✅ PASS | Buttons are at least 44px high and mobile summary has generous padding. | Good baseline. | Verify actual menu item heights. | Low |
| Button sizes | ✅ PASS | Button sizes are mobile-friendly. | Good. | Preserve. | Low |
| Scrolling | ⚠ PARTIAL | Long single page with smooth scrolling; no skip link. | Keyboard/mobile assistive users need faster bypass. | Add skip-to-content link. | Medium |
| Typography | ⚠ PARTIAL | Large hero headings may be too aggressive at 360px. | Poor first impression on small phones. | Use fluid typography. | High |
| Navigation usability | ⚠ PARTIAL | Details menu is simple but lacks animated/open-state polish and close behavior. | Average mobile experience, not premium. | Improve mobile nav interaction accessibly. | High |

## 15. Code Quality Audit

| Check | Result | Finding | Impact | Recommendation | Priority |
| --- | --- | --- | --- | --- | --- |
| Type safety | ⚠ PARTIAL | TS strict is configured, but live content is under-typed. | Content/schema bugs can slip through. | Type content and schema builders. | Medium |
| ESLint | ❌ FAIL | ESLint could not run before dependency installation; dependency installation was blocked. | No verified lint gate. | Fix dependency access/lockfile and rerun CI. | Critical |
| Formatting | ❌ FAIL | Several TSX lines exceed practical review length and combine many elements. | Hard to review and maintain. | Apply Prettier or equivalent. | Medium |
| Reusable components/hooks | ⚠ PARTIAL | Good primitives exist; section components are unused. | Reusability not realized. | Compose live page from components. | Medium |
| State management | ✅ PASS | Static site has no unnecessary state. | Good. | Keep simple. | Low |
| Dead code | ❌ FAIL | Legacy components/content and unused `X` import are present. | Maintenance and lint risk. | Remove unused code/imports. | High |
| Console logs/error handling | ✅ PASS | No console logs found in inspected source. | Good. | Preserve. | Low |
| Magic numbers | ⚠ PARTIAL | Many arbitrary Tailwind values (`leading-[0.92]`, `rounded-[2rem]`, fixed min heights) appear without tokenization. | Visual system becomes inconsistent. | Promote repeated values to design tokens/classes. | Low |

## 16. Security Audit

| Check | Result | Finding | Impact | Recommendation | Priority |
| --- | --- | --- | --- | --- | --- |
| Exposed secrets | ✅ PASS | No obvious secrets or credentials were found in inspected source. | Good. | Add secret scanning in CI. | Low |
| Hardcoded credentials | ✅ PASS | None observed. | Good. | Continue scanning. | Low |
| Unsafe external links | ⚠ PARTIAL | Social links use external URLs; current same-tab behavior avoids tabnabbing, but no account verification is encoded. | Brand impersonation/trust risk if handles are wrong. | Verify all social profiles and decide same-tab/new-tab policy with `rel` if needed. | Medium |
| Dependencies | ⚠ PARTIAL | Dependency set is small, but Framer Motion may be unnecessary for static marketing. | Unneeded JS and attack surface. | Remove or defer if not needed. | Low |
| Security headers | ❌ FAIL | `next.config.ts` has no security headers/CSP. | Missing production hardening. | Add CSP, HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy. | High |

## 17. Production Readiness

| Question | Result | Rationale |
| --- | --- | --- |
| Can this go live today? | ❌ FAIL | Missing legal routes, unverified build/lint, inconsistent product story. |
| Would a VC be impressed? | ⚠ PARTIAL | Minimal look is credible, but lack of proof and product inconsistencies weaken confidence. |
| Would enterprise customers trust it? | ❌ FAIL | No privacy/terms pages, no security signals, mock data privacy concerns. |
| Would developers admire the code? | ❌ FAIL | Dead code, one-file page composition, and failed quality gates block admiration. |
| Would designers admire the UI? | ⚠ PARTIAL | Clean base, but not yet world-class in polish/motion/responsive proof. |
| Would marketers be happy? | ⚠ PARTIAL | Positioning is clear at headline level but conversion paths/proof are weak. |
| Would this represent Nexra AI well? | ⚠ PARTIAL | It points in the right direction but needs production hardening. |

## 18. Lighthouse Prediction

These are estimates because the app could not be installed/built/run in this environment.

| Category | Expected score | Deductions |
| --- | ---: | --- |
| Performance | 80-90 | Large SVG screenshots, two priority hero images, Framer Motion client JS, unverified LCP. |
| Accessibility | 82-90 | No reduced-motion support, mobile menu limitations, mismatched alt text, no skip link. |
| SEO | 85-92 | Good basics, but missing legal routes, weak structured data, SVG OG mismatch. |
| Best Practices | 75-88 | No security headers/CSP and unverified dependencies/build pipeline. |

## 19. Improvement Opportunities

| Rank | Item | Priority | Effort | Impact |
| --- | --- | --- | --- | --- |
| 1 | Add real `/privacy` and `/terms` pages or remove links until ready. | Critical | Medium | Very High |
| 2 | Resolve dependency install/lockfile/CI so lint, typecheck, build, and Lighthouse can run. | Critical | Medium | Very High |
| 3 | Align TableBoost copy, screenshots, alt text, and product claims. | Critical | Medium-High | Very High |
| 4 | Remove/anonymize phone-number-like and personal-looking data in SVG assets. | Critical | Low | High |
| 5 | Respect `prefers-reduced-motion` in Framer Motion. | High | Low | High |
| 6 | Remove dead legacy components/content or wire them into the page. | High | Medium | High |
| 7 | Split `app/page.tsx` into composable sections with typed content sources. | High | Medium | High |
| 8 | Add security headers and CSP. | High | Low-Medium | High |
| 9 | Add product-specific conversion path for TableBoost. | High | Medium | High |
| 10 | Add active/accessible mobile navigation behavior and scroll-margin targets. | Medium | Low-Medium | Medium |
| 11 | Replace SVG OG with matching 1200x630 raster preview. | Medium | Low | Medium |
| 12 | Add skip link and complete manual keyboard screen-reader QA. | Medium | Low | Medium |
| 13 | Create design tokens for radius/shadow/spacing/type scale. | Medium | Medium | Medium |
| 14 | Add proof signals: screenshots, launch status, customer quotes, security posture, or founder/company details where factual. | Medium | Medium | High |
| 15 | Add sitemap entries for every public route. | Medium | Low | Medium |
| 16 | Validate structured data with schema tools. | Low | Low | Medium |

## 20. Final Scorecard

| Score | Rating |
| --- | ---: |
| Overall Score | 62/100 |
| Engineering Score | 58/100 |
| Design Score | 68/100 |
| UX Score | 64/100 |
| Brand Score | 66/100 |
| SEO Score | 72/100 |
| Performance Score | 78/100 estimated |
| Accessibility Score | 76/100 estimated |
| Production Readiness Score | 45/100 |

## Production blockers

1. Missing `/privacy` and `/terms` pages while the footer links to them.
2. Quality gates cannot be verified because dependencies are absent and `npm install` is blocked by registry policy.
3. TableBoost product narrative, image alt text, and screenshots contradict each other.
4. Product mockups include personal-looking names and phone-number-like strings.
5. Reduced-motion accessibility support is absent.
6. Dead/legacy code creates conflicting brand and product positioning.
7. Security headers and CSP are not configured.

