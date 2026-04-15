import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Showcase } from '@/components/sections/Showcase';
import { Footer } from '@/components/sections/Footer';
import { FadeIn } from '@/components/ui/FadeIn';


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      <FadeIn>
        <Showcase />
      </FadeIn>
      
      <Footer />
    </main>
); }
