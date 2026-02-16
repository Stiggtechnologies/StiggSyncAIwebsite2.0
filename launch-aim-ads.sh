#!/bin/bash
# AIM Meta Ads Auto-Setup Script
# Run this to open Ads Manager with pre-filled parameters

echo "🚀 AIM Meta Ads Setup Launcher"
echo "================================"
echo ""

# Kill any existing Chrome processes
echo "Cleaning up browser..."
pkill -9 -f "Google Chrome" 2>/dev/null
sleep 2

# Launch Chrome with AIM Ads Manager
echo "Opening AIM Ads Manager..."
open -na "Google Chrome" --args \
  --remote-debugging-port=18792 \
  --no-first-run \
  --no-default-browser-check \
  "https://adsmanager.facebook.com/adsmanager/manage/campaigns?act=26135103912809982" \
  2>/dev/null &

sleep 3

echo ""
echo "✅ Chrome launched with AIM Ads Manager"
echo ""
echo "Next steps:"
echo "1. Click 'Create' button (green)"
echo "2. Select 'Leads' objective"
echo "3. Follow the checklist at:"
echo "   /Users/orvilledavis/.openclaw/workspace/AIM-META-ADS-SETUP-CHECKLIST.md"
echo ""
echo "Budget: $18.67/day"
echo "Page: Work Play Hard Recover Right"
echo "Campaign: AIM - Lead Generation - Feb 2026"
echo ""
