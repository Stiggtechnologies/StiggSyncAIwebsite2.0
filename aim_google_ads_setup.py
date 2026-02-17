#!/usr/bin/env python3
"""
AIM Google Ads Campaign Setup
Creates search campaigns for Alberta Injury Management
"""

import json
import sys

# Campaign Configuration
CAMPAIGN_CONFIG = {
    "campaign_name": "AIM - Search - Lead Generation - Feb 2026",
    "budget": 18.67,  # Daily budget in CAD
    "currency": "CAD",
    "bidding_strategy": "TARGET_CPA",
    "target_cpa": 25.00,
    
    # Location: Edmonton + 15km
    "locations": [
        {"id": "9051182"},  # Edmonton, Alberta
    ],
    "location_radius": 15,  # km
    
    # Audience
    "languages": ["1000"],  # English
    "networks": ["SEARCH"],  # Search Network only
    
    # Schedule
    "ad_schedule": {
        "monday": [(8, 20)],
        "tuesday": [(8, 20)],
        "wednesday": [(8, 20)],
        "thursday": [(8, 20)],
        "friday": [(8, 18)],
        "saturday": [(9, 16)],
        "sunday": []  # Closed
    }
}

# Ad Groups with Keywords
AD_GROUPS = [
    {
        "name": "Physiotherapy Edmonton",
        "keywords": [
            "physiotherapist edmonton",
            "physiotherapy edmonton",
            "physical therapy edmonton",
            "sports injury physiotherapy",
            "back pain physiotherapist",
            "injury rehabilitation edmonton",
            "best physiotherapist edmonton",
            "physio near me",
            "physiotherapy clinic edmonton"
        ],
        "cpc_bid": 3.50,
        "ads": [
            {
                "headline_1": "Edmonton's Trusted Injury Clinic",
                "headline_2": "Same-Day Appointments",
                "headline_3": "Direct WCB Billing",
                "description_1": "Expert physiotherapy for sports injuries, back pain & accidents. No referral needed. Book today: 780-250-8188",
                "description_2": "Professional treatment to get you back to doing what you love. Initial consultation available.",
                "path_1": "physiotherapy",
                "path_2": "edmonton"
            },
            {
                "headline_1": "Injury Recovery Experts",
                "headline_2": "WCB Direct Billing",
                "headline_3": "Motor Vehicle Accident Care",
                "description_1": "Comprehensive injury assessment and treatment. We handle insurance paperwork so you focus on healing.",
                "description_2": "Book your initial consultation today. Professional physiotherapy in Edmonton. Call 780-250-8188",
                "path_1": "injury",
                "path_2": "recovery"
            }
        ]
    },
    {
        "name": "MVA Motor Vehicle Accident",
        "keywords": [
            "motor vehicle accident physiotherapy",
            "car accident injury treatment edmonton",
            "mva physiotherapy edmonton",
            "whiplash treatment edmonton",
            "car accident rehabilitation",
            "mva claims physiotherapy",
            "auto injury physiotherapist",
            "accident injury clinic edmonton"
        ],
        "cpc_bid": 5.00,
        "ads": [
            {
                "headline_1": "Car Accident Injury Treatment",
                "headline_2": "We Handle Insurance Claims",
                "headline_3": "Get Back To Your Life",
                "description_1": "Injured in a car accident? Expert MVA physiotherapy in Edmonton. We bill insurance directly.",
                "description_2": "Same-day appointments available. Comprehensive assessment & treatment plan. Call 780-250-8188",
                "path_1": "mva",
                "path_2": "claims"
            }
        ]
    },
    {
        "name": "WCB Work Injury",
        "keywords": [
            "wcb physiotherapy edmonton",
            "workers compensation physiotherapy",
            "work injury physiotherapist",
            "wcb approved clinic edmonton",
            "workplace injury treatment",
            "wcb direct billing physiotherapy",
            "occupational injury rehab"
        ],
        "cpc_bid": 4.00,
        "ads": [
            {
                "headline_1": "WCB Approved Physiotherapy",
                "headline_2": "Direct Billing - No Cost",
                "headline_3": "Work Injury Specialists",
                "description_1": "Work injury? We direct bill WCB. No out-of-pocket costs. Get back to work faster.",
                "description_2": "Professional rehabilitation for workplace injuries. Book your consultation: 780-250-8188",
                "path_1": "wcb",
                "path_2": "work-injury"
            }
        ]
    }
]

# Tracking
TRACKING = {
    "conversion_actions": [
        {
            "name": "Phone Call",
            "type": "PHONE_CALL",
            "value": 150.00  # Estimated value of a patient
        },
        {
            "name": "Lead Form Submit",
            "type": "FORM_SUBMIT",
            "value": 150.00
        }
    ],
    "phone_number": "780-250-8188"
}

# Extensions
EXTENSIONS = {
    "sitelinks": [
        {
            "text": "Book Appointment",
            "url": "https://albertainjurymanagement.ca/book",
            "description": "Schedule your consultation online"
        },
        {
            "text": "Our Services",
            "url": "https://albertainjurymanagement.ca/services",
            "description": "View all physiotherapy services"
        },
        {
            "text": "WCB Claims",
            "url": "https://albertainjurymanagement.ca/wcb",
            "description": "Workers compensation information"
        },
        {
            "text": "MVA Treatment",
            "url": "https://albertainjurymanagement.ca/mva",
            "description": "Motor vehicle accident care"
        }
    ],
    "callouts": [
        "Same-Day Appointments",
        "Direct WCB Billing",
        "No Referral Needed",
        "25+ Years Experience",
        "Motor Vehicle Specialists",
        "Work Injury Experts"
    ],
    "call_extension": {
        "phone_number": "780-250-8188",
        "country_code": "CA"
    },
    "location_extension": True,  # Link to Google Business Profile
    "structured_snippets": [
        {
            "type": "Services",
            "values": ["Physiotherapy", "Massage Therapy", "Chiropractic", "Acupuncture"]
        },
        {
            "type": "Types",
            "values": ["Sports Injuries", "Back Pain", "MVA Recovery", "Work Injuries"]
        }
    ]
}

def export_campaign_config():
    """Export full campaign configuration"""
    config = {
        "campaign": CAMPAIGN_CONFIG,
        "ad_groups": AD_GROUPS,
        "tracking": TRACKING,
        "extensions": EXTENSIONS
    }
    
    with open('aim_google_ads_config.json', 'w') as f:
        json.dump(config, f, indent=2)
    
    print("✅ Campaign configuration exported to aim_google_ads_config.json")
    return config

def print_google_ads_editor_import():
    """Print CSV format for Google Ads Editor bulk import"""
    print("\n" + "="*60)
    print("GOOGLE ADS EDITOR BULK IMPORT FORMAT")
    print("="*60)
    
    # Campaign
    print("\nCampaign CSV:")
    print("Campaign,Campaign status,Budget type,Daily budget,Campaign type,Bidding strategy type")
    print(f"\"{CAMPAIGN_CONFIG['campaign_name']}\",Enabled,Daily,\"{CAMPAIGN_CONFIG['budget']}\",Search,Target CPA")
    
    # Ad Groups
    print("\nAd Group CSV:")
    print("Campaign,Ad group,Ad group status,Max CPC,Ad group type")
    for ag in AD_GROUPS:
        print(f"\"{CAMPAIGN_CONFIG['campaign_name']}\",\"{ag['name']}\",Enabled,\"{ag['cpc_bid']}\",Standard")
    
    # Keywords
    print("\nKeyword CSV:")
    print("Campaign,Ad group,Keyword,Criterion type,Status,Max CPC")
    for ag in AD_GROUPS:
        for kw in ag['keywords']:
            print(f"\"{CAMPAIGN_CONFIG['campaign_name']}\",\"{ag['name']}\",\"{kw}\",Broad match,Enabled,")
    
    # Ads
    print("\nAd CSV:")
    print("Campaign,Ad group,Headline 1,Headline 2,Headline 3,Description 1,Description 2,Path 1,Path 2,Status")
    for ag in AD_GROUPS:
        for ad in ag['ads']:
            print(f"\"{CAMPAIGN_CONFIG['campaign_name']}\",\"{ag['name']}\",\"{ad['headline_1']}\",\"{ad['headline_2']}\",\"{ad['headline_3']}\",\"{ad['description_1']}\",\"{ad['description_2']}\",\"{ad.get('path_1', '')}\",\"{ad.get('path_2', '')}\",Enabled")

if __name__ == "__main__":
    print("🎯 AIM Google Ads Campaign Setup")
    print("="*60)
    
    config = export_campaign_config()
    
    print("\n📊 Campaign Summary:")
    print(f"  Name: {CAMPAIGN_CONFIG['campaign_name']}")
    print(f"  Daily Budget: ${CAMPAIGN_CONFIG['budget']} CAD")
    print(f"  Ad Groups: {len(AD_GROUPS)}")
    print(f"  Total Keywords: {sum(len(ag['keywords']) for ag in AD_GROUPS)}")
    print(f"  Total Ads: {sum(len(ag['ads']) for ag in AD_GROUPS)}")
    
    print_google_ads_editor_import()
    
    print("\n" + "="*60)
    print("NEXT STEPS:")
    print("="*60)
    print("1. Download Google Ads Editor: https://ads.google.com/home/tools/ads-editor/")
    print("2. Sign in with your Google Ads account")
    print("3. Import the CSV files above (Campaigns > Import > From file)")
    print("4. Review and post changes")
    print("5. Campaign will be live!")
    print("="*60)
