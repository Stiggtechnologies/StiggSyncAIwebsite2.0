#!/usr/bin/env python3
"""
OAuth 2.0 flow for Google Calendar API
Generates authorization URL and exchanges code for refresh token
"""
import os
import sys
import json
import urllib.request
import urllib.parse

# Load credentials from .env file
env_path = os.path.join(os.path.dirname(__file__), '..', '.env')
if os.path.exists(env_path):
    with open(env_path) as f:
        for line in f:
            if '=' in line and not line.startswith('#'):
                key, value = line.strip().split('=', 1)
                os.environ[key] = value

CLIENT_ID = os.getenv('GOOGLE_CLIENT_ID')
CLIENT_SECRET = os.getenv('GOOGLE_CLIENT_SECRET')
REDIRECT_URI = 'http://localhost'

if not CLIENT_ID or not CLIENT_SECRET:
    print("Error: GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET must be set in .env file")
    sys.exit(1)

SCOPES = [
    'https://www.googleapis.com/auth/calendar',
    'https://www.googleapis.com/auth/calendar.events'
]

def generate_auth_url():
    params = {
        'client_id': CLIENT_ID,
        'redirect_uri': REDIRECT_URI,
        'scope': ' '.join(SCOPES),
        'access_type': 'offline',
        'prompt': 'consent',
        'response_type': 'code'
    }
    auth_url = 'https://accounts.google.com/o/oauth2/v2/auth?' + urllib.parse.urlencode(params)
    return auth_url

def exchange_code_for_token(auth_code):
    data = urllib.parse.urlencode({
        'code': auth_code,
        'client_id': CLIENT_ID,
        'client_secret': CLIENT_SECRET,
        'redirect_uri': REDIRECT_URI,
        'grant_type': 'authorization_code'
    }).encode()
    
    req = urllib.request.Request('https://oauth2.googleapis.com/token', data=data, method='POST')
    req.add_header('Content-Type', 'application/x-www-form-urlencoded')
    
    try:
        with urllib.request.urlopen(req) as resp:
            return json.load(resp)
    except urllib.error.HTTPError as e:
        print(f"Error: {e.code} - {e.read().decode()}")
        sys.exit(1)

def main():
    if len(sys.argv) > 1 and sys.argv[1] == '--code':
        # Exchange authorization code for tokens
        auth_code = sys.argv[2]
        print(f"Exchanging authorization code for tokens...")
        token_data = exchange_code_for_token(auth_code)
        
        print("\n" + "="*60)
        print("SUCCESS! Tokens received:")
        print("="*60)
        print(json.dumps(token_data, indent=2))
        
        refresh_token = token_data.get('refresh_token')
        if refresh_token:
            print("\n" + "="*60)
            print("IMPORTANT: Save this refresh token:")
            print("="*60)
            print(f"GOOGLE_REFRESH_TOKEN={refresh_token}")
            print("\nAdd this to your .env file:")
            print(f"GOOGLE_REFRESH_TOKEN={refresh_token}")
    else:
        # Generate authorization URL
        auth_url = generate_auth_url()
        print("="*60)
        print("Google Calendar OAuth Authorization")
        print("="*60)
        print("\n1. Open this URL in your browser:\n")
        print(auth_url)
        print("\n2. Sign in with your Google account and authorize the app")
        print("3. You will be redirected to localhost (may show an error - that's OK)")
        print("4. Copy the 'code' parameter from the URL")
        print("5. Run: python3 auth.py --code <paste_code_here>")
        print("\n" + "="*60)

if __name__ == '__main__':
    main()