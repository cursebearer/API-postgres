export default function Layout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Meu Aplicativo</title>
      </head>
      <body>
        <header>
          <h1>Meu Aplicativo</h1>
        </header>
        <main>{children}</main>
        <footer>
          <p>© 2023 Meu Aplicativo</p>
        </footer>
      </body>
    </html>
  );
}