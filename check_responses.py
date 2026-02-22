import sys, json
data = json.load(sys.stdin)
keywords = ['please respond','please reply','rsvp','invited','registration','confirm','verify','sign','survey','feedback','review needed','response needed']
for e in data[:100]:
    subj = e['subject'].lower()
    if any(k in subj for k in keywords):
        print(f"{e['id']}: {e['subject']} [{e['from']['name']}]")