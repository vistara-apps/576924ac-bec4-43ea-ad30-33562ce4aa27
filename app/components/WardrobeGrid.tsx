'use client';

import { Shirt, ShoppingBag } from 'lucide-react';

interface WardrobeItem {
  id: string;
  name: string;
  category: string;
  color: string;
  icon: 'shirt' | 'bag';
}

const SAMPLE_ITEMS: WardrobeItem[] = [
  { id: '1', name: 'Red Striped Shirt', category: 'Top', color: '#e63946', icon: 'shirt' },
  { id: '2', name: 'Pink Striped Top', category: 'Top', color: '#ffb3c1', icon: 'shirt' },
  { id: '3', name: 'White Tee', category: 'Top', color: '#ffffff', icon: 'shirt' },
  { id: '4', name: 'Pink Pants', category: 'Bottom', color: '#ffb3c1', icon: 'bag' },
  { id: '5', name: 'Dark Jeans', category: 'Bottom', color: '#1d3557', icon: 'bag' },
  { id: '6', name: 'Black Sneakers', category: 'Shoes', color: '#000000', icon: 'bag' },
];

export function WardrobeGrid() {
  return (
    <div className="grid grid-cols-3 gap-3">
      {SAMPLE_ITEMS.map((item) => (
        <div key={item.id} className="wardrobe-item">
          <div 
            className="w-full aspect-square rounded-lg mb-2 flex items-center justify-center"
            style={{ backgroundColor: item.color }}
          >
            {item.icon === 'shirt' ? (
              <Shirt className="w-8 h-8 text-white/80" />
            ) : (
              <ShoppingBag className="w-8 h-8 text-white/80" />
            )}
          </div>
          <p className="text-xs font-medium text-fg truncate">{item.name}</p>
          <p className="text-xs text-fg/50">{item.category}</p>
        </div>
      ))}
    </div>
  );
}
