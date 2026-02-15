import { e as createComponent, n as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead } from '../chunks/astro/server_DHtQyuwL.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_BjcEEDiN.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to My Blog", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero" data-astro-cid-j7pv25f6> <div class="container hero-inner" data-astro-cid-j7pv25f6> <h1 class="animate-fade-in" data-astro-cid-j7pv25f6>
Dev <span class="text-gradient" data-astro-cid-j7pv25f6>Blog</span> </h1> <p class="hero-text animate-fade-in" style="animation-delay: 0.1s;" data-astro-cid-j7pv25f6>
Astro, Bun, Hono でつくる未来。
</p> <div class="hero-actions animate-fade-in" style="animation-delay: 0.2s;" data-astro-cid-j7pv25f6> <a href="/blog" class="btn" data-astro-cid-j7pv25f6>記事を読む</a> <a href="https://github.com" target="_blank" class="btn btn-secondary" data-astro-cid-j7pv25f6>GitHub</a> </div> </div> </section> <section class="features" data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> <h2 class="section-title" data-astro-cid-j7pv25f6>最新の更新</h2> <div class="grid" data-astro-cid-j7pv25f6> <article class="card" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Bun を始めよう</h3> <p data-astro-cid-j7pv25f6>
なぜ Bun が JavaScript
						の最速ランタイムなのか、そしてその使い方について。
</p> <a href="#" class="read-more" data-astro-cid-j7pv25f6>もっと読む &rarr;</a> </article> <article class="card" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Astro 5.0 の機能</h3> <p data-astro-cid-j7pv25f6>
Astro 5.0
						の新機能とサーバーアイランドについて探求します。
</p> <a href="#" class="read-more" data-astro-cid-j7pv25f6>もっと読む &rarr;</a> </article> <article class="card" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>エッジでの Hono</h3> <p data-astro-cid-j7pv25f6>
Hono
						アプリケーションをエッジランタイムにデプロイして、最大限の速度を実現する方法。
</p> <a href="#" class="read-more" data-astro-cid-j7pv25f6>もっと読む &rarr;</a> </article> </div> </div> </section> ` })} `;
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
