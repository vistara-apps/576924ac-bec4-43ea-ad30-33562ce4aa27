'use client';

import { useState } from 'react';
import { Sparkles, Share2, Heart, RefreshCw } from 'lucide-react';
import { OutfitCard } from './OutfitCard';

interface Outfit {
  id: string;
  items: string[];
  score: number;
  colors: string[];
  description: string;
}

const SAMPLE_OUTFITS: Outfit[] = [
  {
    id: '1',
    items: ['Red Striped Shirt', 'Pink Pants', 'Black Sneakers'],
    score: 92,
    colors: ['#e63946', '#ffb3c1', '#000000'],
    description: 'Bold color blocking with complementary warm tones'
  },
  {
    id: '2',
    items: ['Pink Striped Top', 'Dark Jeans', 'Black Sneakers'],
    score: 88,
    colors: ['#ffb3c1', '#1d3557', '#000000'],
    description: 'Casual chic with balanced contrast'
  },
  {
    id: '3',
    items: ['White Tee', 'Pink Pants', 'White Sneakers'],
    score: 85,
    colors: ['#ffffff', '#ffb3c1', '#ffffff'],
    description: 'Soft monochromatic palette with pink accent'
  }
];

export function OutfitGenerator() {
  const [outfits, setOutfits] = useState<Outfit[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedOutfit, setSelectedOutfit] = useState<string | null>(null);

  const generateOutfits = async () => {
    setIsGenerating(true);
    // Simulate AI generation
    await new Promise(resolve => setTimeout(resolve, 2000));
    setOutfits(SAMPLE_OUTFITS);
    setIsGenerating(false);
  };

  return (
    <div className="space-y-4">
      <div className="glass-card p-6 rounded-fashion text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Generate Outfits</h2>
        <p className="text-fg/60 mb-6">
          Let AI create perfect combinations from your wardrobe
        </p>
        <button
          onClick={generateOutfits}
          disabled={isGenerating}
          className="btn-primary w-full flex items-center justify-center gap-2"
        >
          {isGenerating ? (
            <>
              <RefreshCw className="w-5 h-5 animate-spin" />
              <span>Creating Magic...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              <span>Generate Outfits</span>
            </>
          )}
        </button>
      </div>

      {outfits.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Your Outfit Ideas</h3>
          {outfits.map((outfit) => (
            <OutfitCard
              key={outfit.id}
              outfit={outfit}
              isSelected={selectedOutfit === outfit.id}
              onSelect={() => setSelectedOutfit(outfit.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
