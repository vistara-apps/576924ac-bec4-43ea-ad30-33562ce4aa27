'use client';

import { Plus, Camera } from 'lucide-react';
import { WardrobeGrid } from './WardrobeGrid';

export function WardrobeSection() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">My Wardrobe</h3>
        <button className="btn-secondary text-sm py-2 px-4 flex items-center gap-2">
          <Camera className="w-4 h-4" />
          <span>Add Items</span>
        </button>
      </div>

      <WardrobeGrid />

      <div className="glass-card p-6 rounded-fashion text-center border-2 border-dashed border-border">
        <Plus className="w-8 h-8 mx-auto mb-2 text-fg/40" />
        <p className="text-sm text-fg/60 mb-3">
          Add more items to get better outfit suggestions
        </p>
        <button className="btn-primary text-sm py-2 px-4">
          Scan Wardrobe
        </button>
      </div>
    </div>
  );
}
