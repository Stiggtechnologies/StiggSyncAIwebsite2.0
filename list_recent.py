import sys, json
data = json.load(sys.stdin)
print(f'Total emails in inbox: {len(data)}')
print('\nRecent emails (last 30):')
for e in data[:30]:
    name = e['from']['name'] or 'Unknown'
    print(f"  {e['date'][:10]} | {name[:25]:25} | {e['subject'][:55]}")