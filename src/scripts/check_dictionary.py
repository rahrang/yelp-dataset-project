# used to ensure a dictionary has been formatted correctly

import json

with open('../data/map_users_to_reviews_and_tips.json') as data:
    d = json.load(data)
    # print (d)
    x = {}
    i = 0
    for key, value in d.items():
        x[key] = value
        print(key)
        print('---')
        print(value)

        if (i > 10):
            break

        i+=1

with open('../data/test.json', 'w') as outfile:
    json.dump(x, outfile)