#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting deployment..."

# Pull latest changes
echo "📥 Pulling latest changes..."
git pull origin main

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build Next.js application
echo "🏗️ Building Next.js application..."
npm run build

# Restart Next.js with PM2
echo "🔄 Restarting Next.js application..."
pm2 restart codeaigent-website || pm2 start npm --name "codeaigent-website" -- start

# Start/Restart Ghost in production mode
echo "👻 Starting Ghost in production mode..."
./ghost.sh restart prod

# Verify services are running
echo "🔍 Verifying services..."
pm2 list
docker ps

echo "✅ Deployment complete!" 