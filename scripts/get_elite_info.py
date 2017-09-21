# this code was used to filter user.json for elite yelp users' info (in get_elite_info.json)

import json

"""
    this function removes unecessary information, such as:
    - the elite user's name,
    - converts the list of friends into the number of friends,
    - converts compliments into a more usable dictionary
"""
def formatElite(eliteUser):
    tempDict = {}

    tempDict['user_id'] = eliteUser.get('user_id')
    tempDict['review_count'] = eliteUser.get('review_count')
    tempDict['yelping_since'] = eliteUser.get('yelping_since')
    tempDict['numFriends'] = len(eliteUser.get('friends'))
    tempDict['useful'] = eliteUser.get('useful')
    tempDict['funny'] = eliteUser.get('funny')
    tempDict['cool'] = eliteUser.get('cool')
    tempDict['fans'] = eliteUser.get('fans')
    tempDict['elite'] = eliteUser.get('elite')
    tempDict['average_stars'] = eliteUser.get('average_stars')

    compliments = {}
    compliments['hot'] = eliteUser.get('compliment_hot')
    compliments['more'] = eliteUser.get('compliment_more')
    compliments['profile'] = eliteUser.get('compliment_profile')
    compliments['cute'] = eliteUser.get('compliment_cute')
    compliments['list'] = eliteUser.get('compliment_list')
    compliments['note'] = eliteUser.get('compliment_note')
    compliments['plain'] = eliteUser.get('compliment_plain')
    compliments['cool'] = eliteUser.get('compliment_cool')
    compliments['funny'] = eliteUser.get('compliment_funny')
    compliments['writer'] = eliteUser.get('compliment_writer')
    compliments['photos'] = eliteUser.get('compliment_photos')

    tempDict['compliments'] = compliments

    return tempDict


data = {}
with open('./dataset/user.json') as f:
    for line in f:
        real_line = json.loads(line);
        elite_exists = real_line.get('elite')
        if (elite_exists):
            user_id = real_line.get('user_id')
            elite_user = formatElite(real_line)
            data[user_id] = elite_user

with open('elite_users_data.json', 'w') as outfile:
    json.dump(data, outfile)