# map elite users to their tips and reviews

import json

data = {}

with open('../data/elite_reviews_info.json') as elite_reviews_info:
    reviews_info = json.load(elite_reviews_info)

i = 0 # just to know where we're at in the process

for key, value in reviews_info.items():
    print('review: ' + str(i)) # just to know where we're at in the process
    user_id = value['user_id'] # get the user's id

    try:
        data[user_id]['review_ids'].append(key)
        data[user_id]['reviews'].append(value)
    except KeyError:
        data[user_id] = {}
        data[user_id]['review_ids'] = [key]
        data[user_id]['reviews'] = [value]

    i+=1

with open('../dataset/tip.json') as tips:
    
    j = 0
    for line in tips:
        print('tip: ' + str(j))

        t = json.loads(line)
        user_id = t['user_id']

        try:
            data[user_id]['tips'].append(t)
        
        except KeyError:
            
            try:
                testDict = data[user_id]['review_ids']
            
            except KeyError:
                continue

            data[user_id]['tips'] = [t]

        j+=1

with open('../data/map_users_to_reviews_and_tips.json', 'w') as outfile:
    json.dump(data, outfile);