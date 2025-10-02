'use client';

import { AlertCircle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="glass-card p-8 rounded-fashion text-center max-w-md">
        <AlertCircle className="w-12 h-12 mx-auto mb-4 text-error" />
        <h2 className="text-2xl font-bold mb-2">Something went wrong!</h2>
        <p className="text-fg/60 mb-6">
          {error.message || 'An unexpected error occurred'}
        </p>
        <button onClick={reset} className="btn-primary">
          Try Again
        </button>
      </div>
    </div>
  );
}
