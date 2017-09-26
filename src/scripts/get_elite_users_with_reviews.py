# filter review.json for the elite reviews

import json

elite_users = []
elite_reviews = []

with open('../dataset/review.json') as data:
    with open('../data/elite_users_list.json') as users:
        real_users = [u[:-1] for u in users] # remove the unseen newline character
        for d in data: # iterate through each of the 4.7M+ reviews
            line = json.loads(d)
            userID = line['user_id']
            if (userID in real_users): # iterate through each of the 56K+ elite users (real_users)
                if (userID not in elite_users):
                    elite_users.append(userID)
                elite_reviews.append(line['review_id'])

with open('../data/elite_reviews.json', 'w') as outfile2:
    json.dump(elite_reviews, outfile2)