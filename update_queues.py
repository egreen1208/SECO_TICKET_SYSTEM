import re

with open('app.js', 'r') as f:
    content = f.read()

# Replace all IT sub-queues with just "it"
content = re.sub(r'queue:\s*"it-support"', 'queue: "it"', content)
content = re.sub(r'queue:\s*"it-systems"', 'queue: "it"', content)
content = re.sub(r'queue:\s*"it-security"', 'queue: "it"', content)
content = re.sub(r'queue:\s*"it-networking"', 'queue: "it"', content)
content = re.sub(r'queue:\s*"it-applications"', 'queue: "it"', content)

# Replace electrical-services
content = re.sub(r'queue:\s*"electrical-services"', 'queue: "electrical"', content)

# Replace building-grounds with buildings-grounds
content = re.sub(r'queue:\s*"building-grounds"', 'queue: "buildings-grounds"', content)

with open('app.js', 'w') as f:
    f.write(content)

print("Queue names updated successfully")
