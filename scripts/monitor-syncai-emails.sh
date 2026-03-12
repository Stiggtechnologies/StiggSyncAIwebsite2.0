#!/bin/bash
# Monitor ALL SyncAI email accounts for important messages
# Accounts: info@, security@, privacy@, legal@, reports@, oadavis@syncai.ca

set -euo pipefail

WORKSPACE="/Users/orvilledavis/.openclaw/workspace"
LOG_FILE="$WORKSPACE/memory/email-monitor-syncai.log"
STATE_FILE="$WORKSPACE/memory/syncai-email-state.json"

# Initialize state file if it doesn't exist
if [ ! -f "$STATE_FILE" ]; then
    echo '{"info": {"last_check": 0, "last_id": 0}, "security": {"last_check": 0, "last_id": 0}, "privacy": {"last_check": 0, "last_id": 0}, "legal": {"last_check": 0, "last_id": 0}, "reports": {"last_check": 0, "last_id": 0}, "oadavis": {"last_check": 0, "last_id": 0}}' > "$STATE_FILE"
fi

# Function to check an account
check_account() {
    local account=$1
    local account_name=$2
    
    echo "$(date '+%Y-%m-%d %H:%M:%S') - Checking $account_name..." >> "$LOG_FILE"
    
    # Get latest emails (last 10)
    local emails=$(himalaya envelope list --account "$account" --max-width 200 2>&1 | tail -n +2 || echo "")
    
    if [ -z "$emails" ]; then
        echo "$(date '+%Y-%m-%d %H:%M:%S') - No new emails in $account_name" >> "$LOG_FILE"
        return 0
    fi
    
    # Count emails
    local email_count=$(echo "$emails" | wc -l | tr -d ' ')
    echo "$(date '+%Y-%m-%d %H:%M:%S') - Found $email_count message(s) in $account_name" >> "$LOG_FILE"
    
    # Check for unread emails (marked with *)
    local unread=$(echo "$emails" | grep "^\|.*\*" || echo "")
    local unread_count=$(echo "$unread" | grep -v "^$" | wc -l | tr -d ' ')
    
    if [ "$unread_count" -gt 0 ]; then
        echo "$(date '+%Y-%m-%d %H:%M:%S') - ⚠️  $unread_count unread message(s) in $account_name" >> "$LOG_FILE"
        
        # Alert for critical accounts
        echo "ALERT: $unread_count unread email(s) in $account_name"
        echo ""
        echo "$unread"
    fi
    
    # Update state
    local now=$(date +%s)
    local state=$(cat "$STATE_FILE")
    local key=$(echo "$account" | sed 's/syncai-//')
    echo "$state" | jq ".$key.last_check = $now" > "$STATE_FILE.tmp" && mv "$STATE_FILE.tmp" "$STATE_FILE"
}

# Check all SyncAI accounts
check_account "syncai-info" "info@syncai.ca"
check_account "syncai-security" "security@syncai.ca"
check_account "syncai-privacy" "privacy@syncai.ca"
check_account "syncai-legal" "legal@syncai.ca"
check_account "syncai-reports" "reports@syncai.ca"
check_account "syncai-oadavis" "oadavis@syncai.ca"

echo "$(date '+%Y-%m-%d %H:%M:%S') - Monitor check complete (all 6 accounts)" >> "$LOG_FILE"
