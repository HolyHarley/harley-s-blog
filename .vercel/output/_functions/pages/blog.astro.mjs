import { e as createComponent, n as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute } from '../chunks/astro/server_DHtQyuwL.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_BjcEEDiN.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const posts = [
    {
      url: "/blog/bun-overview",
      frontmatter: {
        title: "\u8D85\u9AD8\u901FJavaScript\u30E9\u30F3\u30BF\u30A4\u30E0\u300CBun\u300D\u5165\u9580\uFF1A\u7279\u5FB4\u304B\u3089\u4F7F\u3044\u65B9\u307E\u3067",
        description: "Node.js\u306B\u4EE3\u308F\u308B\u9AD8\u901F\u306AJavaScript\u30E9\u30F3\u30BF\u30A4\u30E0\u300CBun\u300D\u306E\u6982\u8981\u3001\u57FA\u672C\u7684\u306A\u4F7F\u3044\u65B9\u3001\u516C\u5F0F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3078\u306E\u30EA\u30F3\u30AF\u3092\u307E\u3068\u3081\u305F\u5165\u9580\u8A18\u4E8B\u3067\u3059\u3002"
      }
    },
    {
      url: "/blog/tech-stack",
      frontmatter: {
        title: "\u6280\u8853\u30B9\u30BF\u30C3\u30AF\u306E\u6982\u8981",
        description: "\u3053\u306E\u30D6\u30ED\u30B0\u3067\u4F7F\u7528\u3057\u3066\u3044\u308B\u6280\u8853\u30B9\u30BF\u30C3\u30AF\u306B\u3064\u3044\u3066"
      }
    },
    {
      url: "/blog/architecture",
      frontmatter: {
        title: "\u3053\u306E\u30D6\u30ED\u30B0\u306E\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u306B\u3064\u3044\u3066",
        description: "\u30D6\u30ED\u30B0\u306E\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u3068\u8A2D\u8A08\u601D\u60F3"
      }
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog Posts", "data-astro-cid-5tznm7mj": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" style="padding: 4rem 1.5rem;" data-astro-cid-5tznm7mj> <h1 class="page-title" data-astro-cid-5tznm7mj>ブログ記事一覧</h1> <div class="grid" data-astro-cid-5tznm7mj> ${posts.map((post) => renderTemplate`<article class="card" data-astro-cid-5tznm7mj> <h2 data-astro-cid-5tznm7mj> <a${addAttribute(post.url, "href")} data-astro-cid-5tznm7mj>${post.frontmatter.title}</a> </h2> <p class="excerpt" data-astro-cid-5tznm7mj> ${post.frontmatter.description || "\u8AAC\u660E\u306F\u3042\u308A\u307E\u305B\u3093\u3002"} </p> <a${addAttribute(post.url, "href")} class="read-more" data-astro-cid-5tznm7mj>
記事を読む &rarr;
</a> </article>`)} </div> </div> ` })} `;
}, "/Users/kohori/WORKSPACE/dev/my_blog/src/pages/blog/index.astro", void 0);

const $$file = "/Users/kohori/WORKSPACE/dev/my_blog/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
