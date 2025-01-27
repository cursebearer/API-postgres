import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Bem-vindo ao Meu Aplicativo</h1>
      <Link href="/cadastro">Ir para Cadastro</Link>
    </div>
  );
}