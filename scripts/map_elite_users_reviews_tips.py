# map elite users to their tips and reviews

data = {}


# with open('../dataset/review.json') as reviews:
#     with open('../data/elite_users_list.json') as users:
#         real_users = [u[:-1] for u in users] # remove the unseen newline character

with open('../data/elite_users_list.json') as users:
    
    real_users = [u[:-1] for u in users] # remove the unseen newline character
    
    for u in real_users:
        user_data = {}
        user_reviews = []
        user_tips = []

        i = 0
        
        with open('../dataset/review.json') as reviews:
            j = 0
            print("user :" + i + " || review :" + j)

            for r in reviews:
                line = json.loads(r)
                user_id = line['user_id']
                if (u == user_id):
                    user_reviews.append(line['review_id'])

                j+=1

        with open('../dataset/tip.json') as tips:
            k = 0
            print("user :" + i + " || tip :" + k)

            for t in tips:
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