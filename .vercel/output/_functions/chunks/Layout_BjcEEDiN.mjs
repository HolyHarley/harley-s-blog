import { e as createComponent, g as addAttribute, p as renderHead, o as renderSlot, r as renderTemplate, h as createAstro } from './astro/server_DHtQyuwL.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="ja" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Outfit:wght@500;700&display=swap" rel="stylesheet"><title>${title}</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> <div class="layout-wrapper" data-astro-cid-sckkx6r4> <header class="site-header" data-astro-cid-sckkx6r4> <div class="container header-inner" data-astro-cid-sckkx6r4> <a href="/" class="logo" data-astro-cid-sckkx6r4>My Blog</a> <nav data-astro-cid-sckkx6r4> <ul class="nav-list" data-astro-cid-sckkx6r4> <li data-astro-cid-sckkx6r4><a href="/" class="nav-link" data-astro-cid-sckkx6r4>ホーム</a></li> <li data-astro-cid-sckkx6r4><a href="/about" class="nav-link" data-astro-cid-sckkx6r4>概要</a></li> <li data-astro-cid-sckkx6r4><a href="/blog" class="nav-link" data-astro-cid-sckkx6r4>ブログ</a></li> </ul> </nav> </div> </header> <main data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> <footer class="site-footer" data-astro-cid-sckkx6r4> <div class="container" data-astro-cid-sckkx6r4> <p data-astro-cid-sckkx6r4>&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} My Blog. All rights reserved.</p> </div> </footer> </div> </body></html>`;
}, "/Users/kohori/WORKSPACE/dev/my_blog/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
