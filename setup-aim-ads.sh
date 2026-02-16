#!/bin/bash
# AIM Meta Ads Campaign Creator - Local Execution Script
# Run this on your Mac to automate campaign setup

echo "🚀 AIM Meta Ads Campaign Setup Script"
echo "======================================"
echo ""

# Configuration
CAMPAIGN_NAME="AIM - Lead Generation - Feb 2026"
DAILY_BUDGET="18.67"
BUSINESS_ID="26135103912809982"
PAGE_NAME="Work Play Hard Recover Right"

echo "Campaign: $CAMPAIGN_NAME"
echo "Budget: $$DAILY_BUDGET/day"
echo "Account: Alberta Injury Management"
echo ""

# Kill existing Chrome
pkill -9 -f "Google Chrome" 2>/dev/null
sleep 2

# Launch Chrome with AIM Ads Manager
echo "Opening Chrome with AIM Ads Manager..."
open -na "Google Chrome" --args \
  --remote-debugging-port=9222 \
  --no-first-run \
  --no-default-browser-check \
  "https://adsmanager.facebook.com/adsmanager/manage/campaigns?act=$BUSINESS_ID"

sleep 5

echo ""
echo "✅ Chrome launched!"
echo ""
echo "⚠️  MANUAL STEPS REQUIRED:"
echo ""
echo "Step 1: Click the GREEN 'Create' button"
echo "Step 2: Select 'Leads' objective"
echo "Step 3: Click 'Continue'"
echo ""
echo "Campaign Settings:"
echo "  Name: $CAMPAIGN_NAME"
echo "  Budget: $$DAILY_BUDGET daily"
echo "  Status: PAUSED (for now)"
echo ""
echo "Ad Set 1 - Physiotherapy:"
echo "  Location: Edmonton + 10km"
echo "  Age: 25-65"
echo "  Interests: Health & wellness, Physical fitness, Pain management"
echo ""
echo "Ad Set 2 - MVA:"
echo "  Location: Edmonton + 15km"
echo "  Age: 25-55"
echo "  Interests: Auto insurance, Personal injury"
echo ""
echo "Ad Set 3 - WCB:"
echo "  Location: Edmonton + 15km"
echo "  Age: 30-60"
echo "  Job Titles: Construction, Warehouse, Trades"
echo ""
echo "Images to upload:"
echo "  1. ad-1-professional-treatment.jpg"
echo "  2. ad-2-wcb-care.jpg"
echo "  3. ad-3-recovery-success.jpg"
echo "  4. ad-4-mva-focus.jpg"
echo "  5. ad-5-team-trust.jpg"
echo ""
echo "Location: /Users/orvilledavis/.openclaw/workspace/aim-meta-ads-creative/"
echo ""
echo "⚠️  IMPORTANT: Use compliant copy (NO 'free assessment'):"
echo "  ❌ 'Book your free assessment'"
echo "  ✅ 'Book your initial consultation'"
echo ""
echo "Page to select: Work Play Hard Recover Right"
echo ""
echo "🎯 After setup:"
echo "  - Activate campaign"
echo "  - Set automated rules (pause if CPL >\$50)"
echo "  - Monitor daily"
echo ""
echo "For detailed steps, open:"
echo "  /Users/orvilledavis/.openclaw/workspace/AIM-META-ADS-QUICK-START.html"
echo ""
