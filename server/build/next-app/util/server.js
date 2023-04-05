import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import next from 'next';
const app = next({
    dev: false,
    hostname: 'localhost',
    port: 3000,
    dir: resolve(dirname(fileURLToPath(import.meta.url))
        // Normalize path during build of @upleveled/learn.upleveled.io-server
        // dirname during dev: courses/packages/learn.upleveled.io/util
        // dirname during build: courses/packages/learn.upleveled.io-server/build/learn.upleveled.io/util
        .replace('server/build', ''), '..'),
});
// try/catch currently needed for showing error message from app.prepare()
// Ref: https://github.com/vercel/next.js/issues/47211
try {
    await app.prepare();
}
catch (err) {
    // eslint-disable-next-line no-console -- issue with app.prepare() force us to use console.error here
    console.error(err);
    process.exit(1);
}
export const nextRequestHandler = app.getRequestHandler();
