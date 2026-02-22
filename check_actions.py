import sys, json
data = json.load(sys.stdin)
for e in data[:100]:
    subj = e['subject'].lower()
    if any(k in subj for k in ['action','required','deadline','urgent','asap','complete','form','approval','approve','payment','failed','overdue','reminder']):
        print(f"{e['id']}: {e['subject']} [{e['from']['name']}]")