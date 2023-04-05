import next from 'next';
const app = next({
    dev: false,
    hostname: 'localhost',
    port: 3000,
    dir: '/home/projects/vercel-next-js-v1d7bm/next-app/',
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
