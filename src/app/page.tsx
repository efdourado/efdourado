import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Showcase } from '@/components/sections/Showcase';
import { Details } from '@/components/sections/Details';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Showcase />
      <Details />
      <Footer />
    </main>
); }