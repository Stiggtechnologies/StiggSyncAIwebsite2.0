import sys, json
data = json.load(sys.stdin)
for e in data[:50]:
    subj = e['subject'].lower()
    if any(k in subj for k in ['meeting','calendar','invite','event','schedule','rsvp','attending','join','zoom','teams','conference','call','appointment']):
        print(f"{e['id']}: {e['subject']} [{e['from']['name']}]")