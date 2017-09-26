# used to ensure a dictionary (filename) has been formatted correctly

import json

file_prefix = '../data/'
file_suffix = '.json'
filename = 'user_review_tips'

file = file_prefix + filename + file_suffix

with open(file) as f:
    data = json.load(f)
    x = {}
    i = 0
    for key, value in data.items():
        x[key] = value
        print(key)
        print('---')
        print(value)

        if (i > 10):
            break

        i+=1

with open('../data/test.json', 'w') as outfile:
    json.dump(x, outfile)