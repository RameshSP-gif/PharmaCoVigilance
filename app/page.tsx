import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Home from './pages/index';

export default function HomePage() {
  return (
    <div>
      <Header />
      <Home />
      <Content />
      <Footer />
    </div>
  );
}
