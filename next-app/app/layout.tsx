import './global.css';

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <div className="bg-indigo-500">{children}</div>
      </body>
    </html>
  );
}
