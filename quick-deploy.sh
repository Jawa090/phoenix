#!/bin/bash

# Quick Manual Deployment Script for Phoenix Estimating
# This script builds locally and deploys to your VPS

set -e  # Exit on any error

echo "🚀 Phoenix Estimating - Quick Deploy"
echo "===================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Configuration - UPDATE THESE!
VPS_USER="admin"  # CHANGE THIS
VPS_HOST="167.88.38.179"        # CHANGE THIS
VPS_WEB_DIR="/var/www/phoenixestimating.com"  # CHANGE THIS if different

echo "📦 Step 1: Building project..."
npm run build
echo -e "${GREEN}✓ Build complete${NC}"
echo ""

echo "📤 Step 2: Uploading to VPS..."
echo "Target: ${VPS_USER}@${VPS_HOST}:${VPS_WEB_DIR}"
rsync -avz --delete dist/ ${VPS_USER}@${VPS_HOST}:${VPS_WEB_DIR}/
echo -e "${GREEN}✓ Upload complete${NC}"
echo ""

echo "🔒 Step 3: Setting permissions..."
ssh ${VPS_USER}@${VPS_HOST} "sudo chown -R www-data:www-data ${VPS_WEB_DIR} && sudo chmod -R 755 ${VPS_WEB_DIR}"
echo -e "${GREEN}✓ Permissions set${NC}"
echo ""

echo -e "${GREEN}✅ Deployment complete!${NC}"
echo ""
echo "🌐 Your site: https://phoenixestimating.com/"
echo ""
echo "Next steps:"
echo "1. Clear your browser cache (Ctrl+Shift+Delete)"
echo "2. Open site in incognito mode"
echo "3. Check if favicon updated"
echo "4. Test contact form submission"
