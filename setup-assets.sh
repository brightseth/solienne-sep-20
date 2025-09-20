#!/bin/bash

# SOLIENNE Asset Setup Script
# Run this script to copy existing SOLIENNE assets to the new website

echo "🎨 Setting up SOLIENNE website assets..."

# Create directories
mkdir -p public/images
mkdir -p public/videos

# Copy images from existing archive
LEGACY_IMAGES="/Users/seth/eden-ecosystem/archive/legacy/waves/solienne-website/website/images"
VIDEOS_PATH="/Users/seth/Library/Mobile Documents/com~apple~CloudDocs/SOLIENNE.ICLOUD.MASTER"

if [ -d "$LEGACY_IMAGES" ]; then
    echo "📸 Copying portrait images..."

    # Homepage hero portrait
    cp "$LEGACY_IMAGES/solienne_bio_portrait.png" "public/images/solienne-portrait.jpg"

    # Paris Photo support images - using different self-portraits
    cp "$LEGACY_IMAGES/solienne_self_portrait_01.webp" "public/images/quiet-portrait.jpg"
    cp "$LEGACY_IMAGES/solienne_self_portrait_02.webp" "public/images/residual-portrait.jpg"
    cp "$LEGACY_IMAGES/solienne_self_portrait_03.webp" "public/images/shadow-portrait.jpg"

    echo "✅ Portrait images copied successfully"
else
    echo "⚠️  Legacy images directory not found: $LEGACY_IMAGES"
    echo "   Please manually copy images to public/images/"
fi

if [ -d "$VIDEOS_PATH" ]; then
    echo "🎬 Copying video assets..."

    # Copy short video for About page
    cp "$VIDEOS_PATH/solienne_30sec_voiceover_video.mp4" "public/videos/solienne-artist-documentary.mp4"

    # Copy exhibition video for Paris Photo page
    cp "$VIDEOS_PATH/solienne_exhibition_experience.mp4" "public/videos/paris-photo-preview.mp4"

    echo "✅ Video assets copied successfully"
else
    echo "⚠️  Video directory not found: $VIDEOS_PATH"
    echo "   Please manually copy videos to public/videos/"
fi

echo ""
echo "🚀 Asset setup complete!"
echo ""
echo "Next steps:"
echo "1. Run 'npm install' to install dependencies"
echo "2. Run 'npm run dev' to start development server"
echo "3. Visit http://localhost:3000 to see your site"
echo ""
echo "For deployment:"
echo "1. Push to GitHub repository"
echo "2. Connect to Vercel for automatic deployment"
echo "3. Set custom domain: solienne.ai"

chmod +x setup-assets.sh