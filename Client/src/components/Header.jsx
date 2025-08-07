import Navbar from './Navbar';
import Hero from './Hero';

export default function Header() {
  return (
    <header className="bg-gray-100 pb-8">
      <Navbar />
      <Hero />
    </header>
  );
}
