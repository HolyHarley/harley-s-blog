import { Hono } from 'hono';
export { renderers } from '../../renderers.mjs';

const app = new Hono().basePath("/api");
app.get("/", (c) => {
  return c.json({ message: "Hello Hono from Astro!" });
});
const ALL = (context) => {
  return app.fetch(context.request);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    ALL
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
