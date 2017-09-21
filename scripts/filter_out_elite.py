# this code was used to filter user.json for elite yelp users (in elite_users.json)

import json

data = {}
with open('./dataset/user.json') as f:
    for line in f:
        real_line = json.loads(line);
        elite_exists = real_line.get('elite')
        if (elite_exists):
            data.append(real_line.get('user_id'))

with open('elite_users.json', 'w') as outfile:
    json.dump(data, outfile)


def formatElite(eliteUser):
    tempDict = {}
    tempDict.put('user_id', eliteUser.get('user_id'))
    tempDict.put('review_count', eliteUser.get('review_count'))
    tempDict.put('yelping_since', eliteUser.get('yelping_since'))
    tempDict.put('numFriends', eliteUser.get('friends').len)
    tempDict.put('useful', eliteUser.get('useful'))
    tempDict.put('funny', eliteUser.get('funny'))
    tempDict.put('cool', eliteUser.get('cool'))
    tempDict.put('fans', eliteUser.get('fans'))
    tempDict.put('elite', eliteUser.get('elite'))