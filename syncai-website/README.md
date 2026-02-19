# SyncAI Website

Modern, high-converting website for SyncAI - AI-powered operations automation platform.

## Overview

- **Design**: Dark theme with gradient accents
- **Framework**: Pure HTML/CSS/JS (no dependencies)
- **Deployment**: Vercel
- **Domain**: syncai.ca

## Features

- Responsive design
- Smooth scroll navigation
- Intersection Observer animations
- Performance optimized
- SEO meta tags included

## Local Development

```bash
# Serve locally (any static server)
npx serve .

# Or open index.html directly in browser
```

## Deployment to Vercel

### Option 1: CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Option 2: Git Integration

1. Push to GitHub
2. Connect repo to Vercel
3. Auto-deploys on push

### Option 3: Manual Upload

1. Go to https://vercel.com/new
2. Upload this folder
3. Configure domain: syncai.ca

## Domain Configuration

After deployment:

1. Go to Vercel Dashboard → Project Settings → Domains
2. Add domain: `syncai.ca`
3. Update DNS at registrar:
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com
   - OR use A record: 76.76.21.21

## Content Sections

1. **Hero**: Value prop + CTAs + Stats
2. **Features**: Four AI Guardian agents
3. **How It Works**: 3-step integration process
4. **Social Proof**: Testimonials + Recognition
5. **CTA**: Final conversion push
6. **Footer**: Links + Contact

## Contact Email

Update `mailto:` links to actual contact email when available.

## Analytics

Add Google Analytics or similar:

```html
<!-- Add to <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
```

---

Built by Axium for SyncAI / Stigg Technologies