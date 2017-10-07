# used to ensure a dictionary (filename) has been formatted correctly

import json

file_prefix = '../../data/'
data_folder = 'final/reviews/'
file_suffix = '.json'
filename = 'review_votes'

file = file_prefix + data_folder + filename + file_suffix

with open(file) as f:
    data = json.load(f)
    x = {}
    i = 0
    for key, value in data.items():
        x[key] = value

        if (i > 5):
            break

        i+=1

dst = file_prefix + 'samples/' + filename + '_sample' + file_suffix
with open(dst, 'w') as outfile:
    json.dump(x, outfile)