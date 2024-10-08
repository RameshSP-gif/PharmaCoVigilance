import Link from 'next/link';

const Home = () => {
  return (
    <>
    <div>
      <h1>Welcome to the Pharmacovigilance App</h1>
      <nav>
        <Link href="/routing/login">Login</Link>
        <Link href="/routing/register">Register</Link>
        <Link href="/routing/questions">Questions</Link>

      </nav>

    </div>
    <nav>
        <div>
        <Link href="/routing/home">Home</Link>
        <Link href="/routing/aboutus">About us</Link>
        <Link href="/routing/contactus">Contact Us</Link>
        </div>
    </nav>
    </>
  );
};

export default Home;
