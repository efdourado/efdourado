import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Showcase } from '@/components/sections/Showcase';
import { Details } from '@/components/sections/Details';
import { Footer } from '@/components/sections/Footer';
import { Services } from '@/components/sections/Services';
import { FadeIn } from '@/components/ui/FadeIn';


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      <FadeIn>
        <Showcase />
      </FadeIn>
      
      <Services />
      <Details />
      <Footer />
    </main>
); }