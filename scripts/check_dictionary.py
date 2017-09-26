# used to ensure a dictionary has been formatted correctly

import json

with open('../data/elite_reviews_info.json') as data:
    d = json.load(data)
    # print (d)
    for key, value in d.items():
        print(key)
        print('---')
        print(value)

        break