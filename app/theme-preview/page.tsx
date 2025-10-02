'use client';

import { useTheme } from '../components/ThemeProvider';
import { Sparkles } from 'lucide-react';

export default function ThemePreview() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { id: 'default', name: 'Fashion (Default)', desc: 'Coral & Pink elegance' },
    { id: 'celo', name: 'Celo', desc: 'Black & Yellow sharp' },
    { id: 'solana', name: 'Solana', desc: 'Purple & Magenta' },
    { id: 'base', name: 'Base', desc: 'Dark Blue & Base Blue' },
    { id: 'coinbase', name: 'Coinbase', desc: 'Navy & Coinbase Blue' },
  ] as const;

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Theme Preview</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => setTheme(t.id as any)}
              className={`glass-card p-6 rounded-fashion text-left transition-all ${
                theme === t.id ? 'ring-2 ring-accent' : ''
              }`}
            >
              <h3 className="font-bold mb-1">{t.name}</h3>
              <p className="text-sm text-fg/60">{t.desc}</p>
            </button>
          ))}
        </div>

        <div className="space-y-6">
          <div className="glass-card p-6 rounded-fashion">
            <h2 className="text-2xl font-bold mb-4">Color Palette</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <div className="w-full h-20 rounded-lg bg-bg border border-border mb-2" />
                <p className="text-sm">Background</p>
              </div>
              <div>
                <div className="w-full h-20 rounded-lg bg-fg mb-2" />
                <p className="text-sm">Foreground</p>
              </div>
              <div>
                <div className="w-full h-20 rounded-lg bg-accent mb-2" />
                <p className="text-sm">Accent</p>
              </div>
              <div>
                <div className="w-full h-20 rounded-lg bg-accent-secondary mb-2" />
                <p className="text-sm">Accent 2</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 rounded-fashion">
            <h2 className="text-2xl font-bold mb-4">Components</h2>
            <div className="space-y-4">
              <button className="btn-primary w-full">Primary Button</button>
              <button className="btn-secondary w-full">Secondary Button</button>
              <div className="outfit-card">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-accent" />
                  <span className="font-semibold">Outfit Card</span>
                </div>
                <p className="text-sm text-fg/60">Sample outfit card component</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
