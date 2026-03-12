#!/bin/bash
# Monitor app.syncai.ca DNS propagation and verify deployment

LOG_FILE="/Users/orvilledavis/.openclaw/workspace/memory/syncai-dns-monitor.log"
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

echo "$TIMESTAMP - Checking DNS for app.syncai.ca..." >> "$LOG_FILE"

# Check DNS resolution
DNS_RESULT=$(dig app.syncai.ca +short 2>&1)

if [ -z "$DNS_RESULT" ]; then
  echo "$TIMESTAMP - DNS not propagated yet" >> "$LOG_FILE"
  echo "DNS_NOT_READY"
  exit 0
fi

echo "$TIMESTAMP - DNS resolved to: $DNS_RESULT" >> "$LOG_FILE"

# Check if it resolves to correct IP
if echo "$DNS_RESULT" | grep -q "76.76.21.21"; then
  echo "$TIMESTAMP - ✅ DNS correct (76.76.21.21)" >> "$LOG_FILE"
  
  # Test HTTPS
  HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://app.syncai.ca 2>&1)
  
  if [ "$HTTP_STATUS" = "200" ]; then
    echo "$TIMESTAMP - ✅ HTTPS working (200)" >> "$LOG_FILE"
    echo "DEPLOYMENT_LIVE"
  else
    echo "$TIMESTAMP - ⚠️  HTTPS not ready ($HTTP_STATUS)" >> "$LOG_FILE"
    echo "DNS_READY_HTTPS_PENDING"
  fi
else
  echo "$TIMESTAMP - ⚠️  DNS resolves but incorrect IP: $DNS_RESULT" >> "$LOG_FILE"
  echo "DNS_INCORRECT"
fi
