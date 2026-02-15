import { Hono } from 'hono';
import type { APIRoute } from 'astro';

const app = new Hono().basePath('/api');

app.get('/', (c) => {
    return c.json({ message: 'Hello Hono from Astro!' });
});

export const ALL: APIRoute = (context) => {
    return app.fetch(context.request);
};
