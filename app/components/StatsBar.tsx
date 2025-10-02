'use client';

import { Shirt, Sparkles, Heart } from 'lucide-react';

export function StatsBar() {
  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="glass-card p-4 rounded-fashion text-center">
        <Shirt className="w-5 h-5 mx-auto mb-2 text-accent" />
        <div className="text-2xl font-bold text-fg">24</div>
        <div className="text-xs text-fg/60">Items</div>
      </div>
      
      <div className="glass-card p-4 rounded-fashion text-center">
        <Sparkles className="w-5 h-5 mx-auto mb-2 text-accent" />
        <div className="text-2xl font-bold text-fg">3</div>
        <div className="text-xs text-fg/60">Generations</div>
      </div>
      
      <div className="glass-card p-4 rounded-fashion text-center">
        <Heart className="w-5 h-5 mx-auto mb-2 text-accent" />
        <div className="text-2xl font-bold text-fg">12</div>
        <div className="text-xs text-fg/60">Saved</div>
      </div>
    </div>
  );
}
