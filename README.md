# OutfitSync - Your AI Stylist

A Base Mini App that helps fashion-conscious users discover outfit combinations from their existing wardrobe through AI-powered style analysis.

## Features

- 🎨 **Wardrobe Scanner**: Digitize your clothing items with AI color and pattern extraction
- ✨ **Smart Outfit Generator**: AI-powered outfit combinations with compatibility scores
- 🚫 **Color Clash Alert**: Real-time style validation with color theory
- 🛍️ **Fitting Room Validator**: Check new purchases against your existing wardrobe
- 🎨 **Personal Color Palette**: Seasonal color analysis based on skin tone
- 🔗 **Farcaster Integration**: Share outfits as Frames, remix friends' looks, earn tips

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (via OnchainKit)
- **Styling**: Tailwind CSS with custom fashion theme
- **Payments**: MiniKit micro-transactions
- **Social**: Farcaster Frames v2

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.local.example .env.local
# Add your OnchainKit API key
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Theme Support

OutfitSync supports multiple blockchain themes:
- **Default**: Fashion-forward coral/pink theme
- **Celo**: Black & yellow sharp design
- **Solana**: Purple & magenta gradient
- **Base**: Dark blue with Base blue accents
- **Coinbase**: Navy with Coinbase blue

Access theme preview at `/theme-preview` or add `?theme=celo` to any URL.

## Business Model

- Free: Wardrobe upload + 3 AI outfit generations
- Pay-per-use: 0.0005 ETH (~$1-2) per 10 generations
- Premium: 0.001 ETH one-time color analysis per season

## Architecture

```
app/
├── components/          # React components
│   ├── Header.tsx      # App header with wallet connection
│   ├── StatsBar.tsx    # User statistics display
│   ├── OutfitGenerator.tsx  # AI outfit generation
│   ├── OutfitCard.tsx  # Individual outfit display
│   ├── WardrobeSection.tsx  # Wardrobe management
│   ├── WardrobeGrid.tsx     # Wardrobe item grid
│   └── ThemeProvider.tsx    # Theme switching
├── theme-preview/      # Theme preview page
├── layout.tsx          # Root layout
├── page.tsx           # Home page
├── providers.tsx      # OnchainKit provider
└── globals.css        # Global styles
```

## License

MIT
