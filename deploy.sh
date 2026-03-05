#!/bin/bash

# VPS Deployment Script for RSD Bharti Website

echo "🚀 Starting deployment..."

# Update code
git pull origin main

# Install dependencies
npm install

# Build the project
npm run build

# Restart PM2
pm2 restart ecosystem.config.js

echo "✅ Deployment complete!"
