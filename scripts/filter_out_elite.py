# filter user.json for elite yelp users (in elite_users.json)

import json

data = []
with open('../dataset/user.json') as f:
    for line in f:
        real_line = json.loads(line);
        elite_exists = real_line.get('elite')
        if (elite_exists):
            data.append(real_line.get('user_id'))

with open('elite_users.json', 'w') as outfile:
    json.dump(data, outfile)