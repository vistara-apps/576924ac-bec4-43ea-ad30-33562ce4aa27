'use client';

import { Heart, Share2, CheckCircle2 } from 'lucide-react';

interface OutfitCardProps {
  outfit: {
    id: string;
    items: string[];
    score: number;
    colors: string[];
    description: string;
  };
  isSelected: boolean;
  onSelect: () => void;
}

export function OutfitCard({ outfit, isSelected, onSelect }: OutfitCardProps) {
  const getScoreClass = (score: number) => {
    if (score >= 90) return 'score-high';
    if (score >= 75) return 'score-medium';
    return 'score-low';
  };

  return (
    <div 
      className={`outfit-card cursor-pointer ${isSelected ? 'ring-2 ring-accent' : ''}`}
      onClick={onSelect}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className={`score-badge ${getScoreClass(outfit.score)}`}>
            {outfit.score}% Match
          </span>
          {isSelected && (
            <CheckCircle2 className="w-5 h-5 text-accent" />
          )}
        </div>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-muted rounded-lg transition-colors">
            <Heart className="w-5 h-5 text-fg/60 hover:text-accent" />
          </button>
          <button className="p-2 hover:bg-muted rounded-lg transition-colors">
            <Share2 className="w-5 h-5 text-fg/60 hover:text-accent" />
          </button>
        </div>
      </div>

      <div className="flex gap-2 mb-3">
        {outfit.colors.map((color, index) => (
          <div
            key={index}
            className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      <div className="space-y-2 mb-3">
        {outfit.items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-sm text-fg/80">{item}</span>
          </div>
        ))}
      </div>

      <p className="text-sm text-fg/60 italic">{outfit.description}</p>
    </div>
  );
}
