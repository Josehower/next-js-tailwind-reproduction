export default function NotFoundPage() {
  return (
    <div className="ml-4">
      {/*
        Hack to work around lack of metadata support in not-found.tsx
        https://github.com/vercel/next.js/issues/45620#issuecomment-1488933853
      */}
      <title>Not Found | learn.upleveled.io</title>
      <h1 id="not-found" className="mb-7 text-5xl font-bold sm:mt-4">
        <a href="#not-found">Not Found</a>
      </h1>
      <div className="text-lg">
        Oops, we couldn't find that file. Wrong URL?
      </div>
    </div>
  );
}
