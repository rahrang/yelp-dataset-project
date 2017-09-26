# filter review.json for the elite reviews

import json

elite_reviews = {}

with open('../dataset/review.json') as data:
    with open('../data/elite_users_list.json') as users:
        elite_users = json.load(users)
        j = 0
        for d in data:
            print("review: " + str(j))
            line = json.loads(d)
            userID = line['user_id']
            if (userID in elite_users):
                review_id = line['review_id']
                elite_reviews[review_id] = line
            j+=1

with open('../data/elite_reviews_info.json', 'w') as outfile:
    json.dump(elite_reviews, outfile)