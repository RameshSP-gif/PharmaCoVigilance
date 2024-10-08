import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Pharmacovigilance App</h1>
      <nav>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
        <Link href="/questions">Questions</Link>
      </nav>
    </div>
  );
};

export default Home;
