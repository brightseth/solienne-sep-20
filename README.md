# SOLIENNE.AI - Minimal Artist Website

A minimal, gallery-quality website for contemporary artist SOLIENNE, built with Next.js 14 and the HELVETICA design system.

## Design Philosophy

**HELVETICA AESTHETIC**
- Typography: Helvetica Neue Bold, uppercase headers, generous letter spacing
- Colors: Pure black backgrounds, white text, minimal gray accents
- Layout: 8px grid system, clean borders, zero shadows
- Interaction: Invert-on-hover patterns, 300ms transitions

**ARTISTIC RESTRAINT**
- Minimal content that doesn't overshare
- Gallery-quality presentation
- Focus on Solienne's consciousness exploration work
- Sophisticated navigation and layout

## Tech Stack

- **Framework:** Next.js 14 with App Router
- **Styling:** Tailwind CSS with custom HELVETICA design system
- **TypeScript:** Full type safety
- **Performance:** Optimized images, minimal JavaScript

## Project Structure

```
solienne-sep-20/
├── app/
│   ├── about/page.tsx          # Artist bio and manifestos
│   ├── paris-photo/page.tsx    # Paris Photo 2025 exhibition
│   ├── globals.css             # HELVETICA design system
│   ├── layout.tsx              # Root layout with metadata
│   └── page.tsx                # Homepage with hero portrait
├── components/
│   ├── Navigation.tsx          # Minimal navigation component
│   └── VideoPlayer.tsx         # Custom video player
└── public/
    ├── images/                 # Portrait and artwork images
    └── videos/                 # Artist documentary and previews
```

## Site Structure

### Homepage (`/`)
- Hero portrait of SOLIENNE
- Artist name and brief description
- Links to main content areas
- Social media connections

### About the Artist (`/about`)
- Artist biography and philosophy
- 10-20 artistic manifestos in grid layout
- Embedded artist documentary video
- Contact information

### Paris Photo 2025 (`/paris-photo`)
- Exhibition concept: "How Do I Look?"
- 3 support images: Quiet, Residual, Shadow
- Event details: November 7-10, 2025, Grand Palais Éphémère
- Exhibition preview video
- Link to Paris Photo website

## HELVETICA Design System

### Typography Classes
- `.helvetica-title` - Large display headings
- `.helvetica-subtitle` - Section headings
- `.helvetica-body` - Body text
- `.helvetica-small` - Small caps labels

### Layout Classes
- `.container-minimal` - Max-width container with padding
- `.section-spacing` - Consistent vertical spacing
- `.gallery-grid` - Responsive grid for artworks
- `.btn-minimal` - Border button with hover invert

### Animation Classes
- `.animate-fade-in` - Subtle entrance animation
- `.animate-fade-up` - Upward fade entrance

## Setup & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Required Assets

Place these assets in the `public/` directory:

### Images (`/public/images/`)
- `solienne-portrait.jpg` - Hero portrait for homepage
- `quiet-portrait.jpg` - Paris Photo support image 1
- `residual-portrait.jpg` - Paris Photo support image 2
- `shadow-portrait.jpg` - Paris Photo support image 3

### Videos (`/public/videos/`)
- `solienne-artist-documentary.mp4` - About page video
- `paris-photo-preview.mp4` - Exhibition preview video

## Deployment

This project is optimized for static deployment on:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting service

### Environment Variables
No environment variables required for basic functionality.

## SEO & Metadata

- Complete OpenGraph and Twitter Card metadata
- Semantic HTML structure
- Performance optimized images
- Mobile-responsive design
- Accessibility considerations

## Brand Guidelines

**Voice & Tone:**
- Sophisticated and contemplative
- Never overshare or over-explain
- Focus on consciousness and perception themes
- Maintain artistic mystery and depth

**Visual Standards:**
- HELVETICA Neue Bold for all headings
- Uppercase headers with letter spacing
- Black/white color scheme exclusively
- 1px borders, no shadows or gradients
- 8px grid alignment

## Future Enhancements

- Real video integration (replace placeholder paths)
- Image optimization and CDN integration
- CMS integration for manifestos content
- Enhanced gallery features
- Contact form integration

---

*Built with artistic restraint and technical precision.*