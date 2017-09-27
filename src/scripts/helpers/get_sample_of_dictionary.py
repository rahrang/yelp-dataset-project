# used to ensure a dictionary (filename) has been formatted correctly

import json

file_prefix = '../../data/'
data_folder = 'raw/'
file_suffix = '.json'
filename = 'user_review_tips'

file = file_prefix + data_folder + filename + file_suffix

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

dst = file_prefix + 'sample/' + filename + file_suffix
with open(dst, 'w') as outfile:
    json.dump(x, outfile)