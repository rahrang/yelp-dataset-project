# map elite users to their tips and reviews

import json

data = {}

with open('../data/elite_users_list.json') as users:
    
    real_users = [u[:-1] for u in users] # remove the unseen newline character
    i = 0
    
    for u in real_users:
        user_data = {}
        user_reviews = []
        user_tips = []

        
        
        with open('../dataset/review.json') as reviews:
            j = 0

            for r in reviews:

                print("user: " + str(i) + " || review: " + str(j))
                
                line = json.loads(r)
                user_id = line['user_id']
                if (u == user_id):
                    user_reviews.append(line['review_id'])

                j+=1

        with open('../dataset/tip.json') as tips:
            k = 0

            for t in tips:
                
                print("user: " + str(i) + " || tip: " + str(k))

                line = json.loads(t)
                user_id = line['user_id']
                if (u == user_id):
                    user_tips.append(line)

                k+=1

        user_data['reviews'] = user_reviews
        user_data['tips'] = user_tips
        data[u] = user_data

        i+=1


with open('../data/elite_user_map.json', 'w') as outfile:
    json.dumps(data);    