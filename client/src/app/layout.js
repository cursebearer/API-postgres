export default function Layout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <title>My App</title>
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}