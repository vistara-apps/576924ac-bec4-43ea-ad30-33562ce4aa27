'use client';

import { Wallet, ConnectWallet } from '@coinbase/onchainkit/wallet';
import { Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 glass-card border-b border-border">
      <div className="max-w-md mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gradient">OutfitSync</h1>
              <p className="text-xs text-fg/60">Your AI Stylist</p>
            </div>
          </div>
          
          <Wallet>
            <ConnectWallet className="btn-primary text-sm py-2 px-4">
              <span>Connect</span>
            </ConnectWallet>
          </Wallet>
        </div>
      </div>
    </header>
  );
}
