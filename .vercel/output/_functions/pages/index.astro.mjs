import { e as createComponent, g as addAttribute, k as renderHead, l as renderSlot, r as renderTemplate, h as createAstro, n as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BxQsOMIE.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="ja" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Outfit:wght@500;700&display=swap" rel="stylesheet"><title>${title}</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> <div class="layout-wrapper" data-astro-cid-sckkx6r4> <header class="site-header" data-astro-cid-sckkx6r4> <div class="container header-inner" data-astro-cid-sckkx6r4> <a href="/" class="logo" data-astro-cid-sckkx6r4>My Blog</a> <nav data-astro-cid-sckkx6r4> <ul class="nav-list" data-astro-cid-sckkx6r4> <li data-astro-cid-sckkx6r4><a href="/" class="nav-link" data-astro-cid-sckkx6r4>Home</a></li> <li data-astro-cid-sckkx6r4><a href="/about" class="nav-link" data-astro-cid-sckkx6r4>About</a></li> <li data-astro-cid-sckkx6r4><a href="/blog" class="nav-link" data-astro-cid-sckkx6r4>Blog</a></li> </ul> </nav> </div> </header> <main data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> <footer class="site-footer" data-astro-cid-sckkx6r4> <div class="container" data-astro-cid-sckkx6r4> <p data-astro-cid-sckkx6r4>&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} My Blog. All rights reserved.</p> </div> </footer> </div> </body></html>`;
}, "/Users/kohori/WORKSPACE/dev/my_blog/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to My Blog", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero" data-astro-cid-j7pv25f6> <div class="container hero-inner" data-astro-cid-j7pv25f6> <h1 class="animate-fade-in" data-astro-cid-j7pv25f6>Dev <span class="text-gradient" data-astro-cid-j7pv25f6>Blog</span></h1> <p class="hero-text animate-fade-in" style="animation-delay: 0.1s;" data-astro-cid-j7pv25f6>
Building the future with Astro, Bun, and Hono.
</p> <div class="hero-actions animate-fade-in" style="animation-delay: 0.2s;" data-astro-cid-j7pv25f6> <a href="/blog" class="btn" data-astro-cid-j7pv25f6>Read Articles</a> <a href="https://github.com" target="_blank" class="btn btn-secondary" data-astro-cid-j7pv25f6>GitHub</a> </div> </div> </section> <section class="features" data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> <h2 class="section-title" data-astro-cid-j7pv25f6>Latest Updates</h2> <div class="grid" data-astro-cid-j7pv25f6> <article class="card" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Getting Started with Bun</h3> <p data-astro-cid-j7pv25f6>Why Bun is the fastest runtime for JavaScript and how to use it.</p> <a href="#" class="read-more" data-astro-cid-j7pv25f6>Read more &rarr;</a> </article> <article class="card" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Astro 5.0 Features</h3> <p data-astro-cid-j7pv25f6>Exploring the new features in Astro 5.0 and server islands.</p> <a href="#" class="read-more" data-astro-cid-j7pv25f6>Read more &rarr;</a> </article> <article class="card" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Hono on the Edge</h3> <p data-astro-cid-j7pv25f6>Deploying Hono applications to edge runtimes for maximum speed.</p> <a href="#" class="read-more" data-astro-cid-j7pv25f6>Read more &rarr;</a> </article> </div> </div> </section> ` })} `;
}, "/Users/kohori/WORKSPACE/dev/my_blog/src/pages/index.astro", void 0);

const $$file = "/Users/kohori/WORKSPACE/dev/my_blog/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
