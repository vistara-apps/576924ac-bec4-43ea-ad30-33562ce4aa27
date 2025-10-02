import { Header } from './components/Header';
import { WardrobeSection } from './components/WardrobeSection';
import { OutfitGenerator } from './components/OutfitGenerator';
import { StatsBar } from './components/StatsBar';

export default function Home() {
  return (
    <main className="min-h-screen pb-20">
      <Header />
      <div className="max-w-md mx-auto px-4 space-y-6">
        <StatsBar />
        <OutfitGenerator />
        <WardrobeSection />
      </div>
    </main>
  );
}
