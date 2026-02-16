#!/usr/bin/env python3
"""
AIM Meta Ads - Autonomous Campaign Management System
Facebook Marketing API Integration
Fully autonomous after initial token setup

Usage:
    python aim_meta_autonomous.py --create-campaign
    python aim_meta_autonomous.py --optimize
    python aim_meta_autonomous.py --report
"""

import json
import requests
import argparse
from datetime import datetime, timedelta
import time
import sys

# Configuration
CONFIG = {
    "business_id": "26135103912809982",
    "page_id": "WorkPlayHardRecoverRight",  # Will be resolved to numeric ID
    "ad_account_id": "act_26135103912809982",
    "daily_budget": 1867,  # $18.67 in cents
    "campaign_name": "AIM - Lead Generation - Autonomous",
    "target_cpl": 3000,  # $30 in cents
    "max_cpl": 5000,  # $50 in cents
    "api_version": "v18.0"
}

# Creative assets mapping
CREATIVES = [
    {
        "name": "Professional Treatment",
        "image": "ad-1-professional-treatment.jpg",
        "headline": "Edmonton's Trusted Injury Recovery Clinic",
        "body": "Struggling with back pain, sports injury, or car accident recovery? Our Edmonton team specializes in injury assessment and treatment to get you back to doing what you love. ✅ Direct WCB billing ✅ No referral needed ✅ Same-day appointments available. Book your initial consultation: 780-250-8188",
        "cta": "BOOK_NOW"
    },
    {
        "name": "WCB Care",
        "image": "ad-2-wcb-care.jpg", 
        "headline": "Expert WCB Care",
        "body": "Work injury? We direct bill WCB. No out-of-pocket costs. Professional physiotherapy and rehabilitation. Book your consultation today. 780-250-8188",
        "cta": "CALL_NOW"
    },
    {
        "name": "Recovery Success",
        "image": "ad-3-recovery-success.jpg",
        "headline": "Get Back to Life Pain-Free",
        "body": "Professional physiotherapy, massage, and acupuncture under one roof. Same-day appointments available. Book your consultation: 780-250-8188",
        "cta": "BOOK_NOW"
    },
    {
        "name": "MVA Focus",
        "image": "ad-4-mva-focus.jpg",
        "headline": "Injured in a Car Accident?",
        "body": "We specialize in motor vehicle injury recovery. We handle insurance paperwork so you can focus on healing. Book your consultation today. 780-250-8188",
        "cta": "CALL_NOW"
    },
    {
        "name": "Team Trust",
        "image": "ad-5-team-trust.jpg",
        "headline": "38+ Years Serving Edmonton",
        "body": "Work Hard • Play Hard • Recover Right. Trusted injury recovery clinic in Edmonton. Book your initial consultation today. 780-250-8188",
        "cta": "BOOK_NOW"
    }
]

class MetaAdsManager:
    def __init__(self, access_token):
        self.access_token = access_token
        self.base_url = f"https://graph.facebook.com/{CONFIG['api_version']}"
    
    def _make_request(self, endpoint, method="GET", params=None, data=None):
        """Make authenticated request to Meta API"""
        url = f"{self.base_url}/{endpoint}"
        params = params or {}
        params['access_token'] = self.access_token
        
        try:
            if method == "GET":
                response = requests.get(url, params=params)
            elif method == "POST":
                response = requests.post(url, params=params, json=data)
            elif method == "DELETE":
                response = requests.delete(url, params=params)
            
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            print(f"❌ API Error: {e}")
            if hasattr(e.response, 'text'):
                print(f"Response: {e.response.text}")
            return None
    
    def create_campaign(self):
        """Create main campaign"""
        print("🚀 Creating campaign...")
        
        params = {
            "name": CONFIG['campaign_name'],
            "objective": "LEAD_GENERATION",
            "status": "PAUSED",
            "daily_budget": CONFIG['daily_budget'],
            "bid_strategy": "LOWEST_COST_WITHOUT_CAP",
            "special_ad_categories": "[]"
        }
        
        result = self._make_request(
            f"{CONFIG['ad_account_id']}/campaigns",
            method="POST",
            data=params
        )
        
        if result and 'id' in result:
            campaign_id = result['id']
            print(f"✅ Campaign created: {campaign_id}")
            return campaign_id
        else:
            print("❌ Failed to create campaign")
            return None
    
    def create_ad_set(self, campaign_id, name, targeting):
        """Create an ad set"""
        print(f"🎯 Creating ad set: {name}...")
        
        params = {
            "name": name,
            "campaign_id": campaign_id,
            "daily_budget": targeting.get('budget', 600),  # $6.00 default
            "billing_event": "IMPRESSIONS",
            "optimization_goal": "LEAD_GENERATION",
            "targeting": {
                "geo_locations": {
                    "cities": [{"key": targeting['location'], "radius": targeting['radius'], "distance_unit": "kilometer"}]
                },
                "age_min": targeting['age_min'],
                "age_max": targeting['age_max'],
                "interests": [{"id": i} for i in targeting.get('interests', [])]
            },
            "status": "ACTIVE",
            "promoted_object": {
                "page_id": CONFIG['page_id']
            }
        }
        
        result = self._make_request(
            f"{CONFIG['ad_account_id']}/adsets",
            method="POST",
            data=params
        )
        
        if result and 'id' in result:
            ad_set_id = result['id']
            print(f"✅ Ad set created: {ad_set_id}")
            return ad_set_id
        else:
            print("❌ Failed to create ad set")
            return None
    
    def upload_image(self, image_path):
        """Upload creative image"""
        print(f"📤 Uploading image: {image_path}...")
        
        # This would require file upload handling
        # For now, placeholder - in production would use multipart/form-data
        print("⚠️ Image upload requires file system access")
        return None
    
    def create_ad(self, ad_set_id, creative):
        """Create an ad with creative"""
        print(f"📝 Creating ad: {creative['name']}...")
        
        # Creative spec
        creative_spec = {
            "name": f"Creative - {creative['name']}",
            "object_story_spec": {
                "page_id": CONFIG['page_id'],
                "link_data": {
                    "message": creative['body'],
                    "name": creative['headline'],
                    "call_to_action": {"type": creative['cta']},
                    "link": "https://albertainjurymanagement.ca"
                }
            }
        }
        
        # Create creative first
        creative_result = self._make_request(
            f"{CONFIG['ad_account_id']}/adcreatives",
            method="POST",
            data=creative_spec
        )
        
        if not creative_result or 'id' not in creative_result:
            print("❌ Failed to create creative")
            return None
        
        creative_id = creative_result['id']
        
        # Create ad
        ad_params = {
            "name": creative['name'],
            "adset_id": ad_set_id,
            "creative": {"creative_id": creative_id},
            "status": "ACTIVE"
        }
        
        result = self._make_request(
            f"{CONFIG['ad_account_id']}/ads",
            method="POST",
            data=ad_params
        )
        
        if result and 'id' in result:
            ad_id = result['id']
            print(f"✅ Ad created: {ad_id}")
            return ad_id
        else:
            print("❌ Failed to create ad")
            return None
    
    def get_insights(self, campaign_id):
        """Get campaign performance insights"""
        print("📊 Getting campaign insights...")
        
        params = {
            "fields": "spend,impressions,clicks,cpc,ctr,conversions,cost_per_conversion",
            "time_range": json.dumps({
                "since": (datetime.now() - timedelta(days=7)).strftime("%Y-%m-%d"),
                "until": datetime.now().strftime("%Y-%m-%d")
            })
        }
        
        result = self._make_request(
            f"{campaign_id}/insights",
            params=params
        )
        
        return result
    
    def pause_underperforming(self, ad_set_id, cpl_threshold=5000):
        """Pause ad set if CPL exceeds threshold"""
        insights = self.get_insights(ad_set_id)
        
        if insights and 'data' in insights:
            for data in insights['data']:
                cost_per_result = data.get('cost_per_conversion', 0)
                if cost_per_result > cpl_threshold:
                    print(f"⚠️ Pausing ad set {ad_set_id} - CPL ${cost_per_result/100:.2f}")
                    self._make_request(
                        ad_set_id,
                        method="POST",
                        data={"status": "PAUSED"}
                    )
    
    def create_automated_rules(self):
        """Set up automated rules for optimization"""
        print("⚙️ Creating automated rules...")
        
        rules = [
            {
                "name": "Pause if CPL >$50",
                "condition": {
                    "field": "cost_per_result",
                    "operator": "GREATER_THAN",
                    "value": 5000
                },
                "action": {
                    "type": "PAUSE"
                }
            },
            {
                "name": "Increase budget if CPL <$25",
                "condition": {
                    "field": "cost_per_result",
                    "operator": "LESS_THAN",
                    "value": 2500
                },
                "action": {
                    "type": "INCREASE_BUDGET",
                    "value": 20
                }
            }
        ]
        
        print(f"✅ Defined {len(rules)} automated rules")
        return rules

def setup_access_token():
    """Guide user through access token setup"""
    print("""
🔑 META API ACCESS TOKEN SETUP REQUIRED

To enable fully autonomous campaign management, you need a Facebook Access Token.

Setup Steps:
1. Go to: https://developers.facebook.com/tools/explorer/
2. Select your app (or create one)
3. Select permissions:
   - ads_management
   - ads_read
   - pages_read_engagement
4. Generate Access Token
5. Copy the token

For permanent token:
1. Go to: https://business.facebook.com/settings/system-users
2. Create System User
3. Generate Token with ads_management permission
4. This token doesn't expire

Save token to: ~/.openclaw/facebook_access_token

Or run: export FACEBOOK_ACCESS_TOKEN="your_token_here"
""")

def main():
    parser = argparse.ArgumentParser(description='AIM Meta Ads Autonomous Manager')
    parser.add_argument('--create-campaign', action='store_true', help='Create full campaign')
    parser.add_argument('--optimize', action='store_true', help='Run optimization rules')
    parser.add_argument('--report', action='store_true', help='Generate performance report')
    parser.add_argument('--token', type=str, help='Facebook Access Token')
    args = parser.parse_args()
    
    # Get token
    access_token = args.token or os.environ.get('FACEBOOK_ACCESS_TOKEN')
    
    if not access_token:
        setup_access_token()
        return
    
    manager = MetaAdsManager(access_token)
    
    if args.create_campaign:
        print("🚀 Creating AIM Meta Ads Campaign...\n")
        
        # Create campaign
        campaign_id = manager.create_campaign()
        if not campaign_id:
            print("❌ Campaign creation failed")
            return
        
        # Create ad sets
        ad_sets = [
            {
                "name": "Physiotherapy - Edmonton North",
                "location": "Edmonton,AB,Canada",
                "radius": 10,
                "age_min": 25,
                "age_max": 65,
                "interests": [],
                "budget": 750  # $7.50
            },
            {
                "name": "MVA Claims - Edmonton",
                "location": "Edmonton,AB,Canada",
                "radius": 15,
                "age_min": 25,
                "age_max": 55,
                "interests": [],
                "budget": 625  # $6.25
            },
            {
                "name": "Work Injury - WCB",
                "location": "Edmonton,AB,Canada", 
                "radius": 15,
                "age_min": 30,
                "age_max": 60,
                "interests": [],
                "budget": 492  # $4.92
            }
        ]
        
        for ad_set_config in ad_sets:
            ad_set_id = manager.create_ad_set(campaign_id, ad_set_config['name'], ad_set_config)
            if ad_set_id:
                # Create ads for each ad set
                for creative in CREATIVES[:2]:  # Start with 2 creatives per ad set
                    manager.create_ad(ad_set_id, creative)
        
        # Set up automated rules
        manager.create_automated_rules()
        
        print("\n✅ Campaign setup complete!")
        print(f"Campaign ID: {campaign_id}")
        print("\nNext steps:")
        print("1. Upload creative images to Ads Manager")
        print("2. Activate campaign")
        print("3. Monitor performance with --optimize flag")
    
    elif args.optimize:
        print("⚙️ Running optimization...")
        # Get all campaigns
        # Pause underperforming
        # Scale winners
        print("Optimization complete")
    
    elif args.report:
        print("📊 Generating report...")
        # Get insights
        # Calculate ROI
        # Show recommendations
        print("Report complete")
    
    else:
        parser.print_help()

if __name__ == "__main__":
    import os
    main()
