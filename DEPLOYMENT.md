# SOLIENNE.AI Deployment Guide

## Quick Start

```bash
# 1. Setup assets (copy existing SOLIENNE images/videos)
chmod +x setup-assets.sh
./setup-assets.sh

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. View site at http://localhost:3000
```

## Production Deployment

### Option 1: Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial SOLIENNE.AI website"
   git remote add origin https://github.com/yourusername/solienne-ai
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Connect your GitHub repository
   - Auto-deployment will begin
   - Set custom domain: `solienne.ai`

3. **Domain Configuration:**
   - Add CNAME record: `solienne.ai` → `cname.vercel-dns.com`
   - Update Vercel project settings with custom domain

### Option 2: Netlify

1. **Build the site:**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify:**
   - Drag the `out/` folder to Netlify deploy
   - Or connect GitHub repository for auto-deployment
   - Configure custom domain: `solienne.ai`

### Option 3: Traditional Hosting

1. **Export static site:**
   ```bash
   npm run build
   ```

2. **Upload to hosting:**
   - Upload `out/` directory contents to web server
   - Configure DNS to point `solienne.ai` to your server

## Environment Configuration

### Production Settings

Add these to your hosting environment:

```env
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
```

### Analytics (Optional)

To add analytics tracking:

1. **Google Analytics:**
   ```env
   GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
   ```

2. **Update layout.tsx** with tracking code

## Performance Optimization

### Image Optimization

```bash
# Install image optimization tools
npm install -g imagemin imagemin-webp imagemin-mozjpeg

# Optimize images
imagemin public/images/*.jpg --out-dir=public/images --plugin=mozjpeg
imagemin public/images/*.png --out-dir=public/images --plugin=webp
```

### Video Optimization

```bash
# Compress videos with FFmpeg
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -c:a aac -b:a 128k output.mp4
```

## Domain Setup: solienne.ai

### DNS Configuration

```
Type: CNAME
Name: @
Value: cname.vercel-dns.com (or your hosting provider's value)

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### SSL Certificate

Most modern hosting providers (Vercel, Netlify) provide automatic SSL.

## Content Management

### Updating Manifestos

Edit `/app/about/page.tsx`:

```typescript
const manifestos = [
  {
    title: "NEW MANIFESTO TITLE",
    text: "Your new manifesto content..."
  },
  // ... existing manifestos
]
```

### Adding New Pages

1. Create new directory: `/app/new-page/`
2. Add `page.tsx` file
3. Update navigation in `/components/Navigation.tsx`

## Monitoring & Analytics

### Performance Monitoring

- Use Vercel Analytics (built-in)
- Google PageSpeed Insights
- GTmetrix for performance testing

### Error Tracking

Consider adding:
- Sentry for error tracking
- LogRocket for user session recording

## Security Considerations

### Headers Configuration

Add to `next.config.js`:

```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}
```

## Backup Strategy

### Regular Backups

1. **Code:** GitHub automatically backs up your repository
2. **Assets:** Keep original high-resolution images/videos in cloud storage
3. **Content:** Export manifestos and content regularly

### Recovery Plan

1. Repository is backed up on GitHub
2. Vercel maintains deployment history
3. Assets can be re-uploaded from cloud storage

## Maintenance

### Regular Updates

```bash
# Update dependencies monthly
npm update

# Security audit
npm audit

# Build test before deployment
npm run build
```

### Content Updates

1. Edit markdown/content files
2. Test locally with `npm run dev`
3. Commit and push to trigger deployment

---

**Ready for launch at solienne.ai** 🚀