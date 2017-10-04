# parse elite_users_info.json to collect like terms (items in collections)

import json

file_prefix = '../data/clean/'
file_suffix = '.json'

files = ['cool', 'funny', 'useful']
traits = ['average', 'median', 'max']

data = []

for f in files:
    file = file = file_prefix + f + file_suffix

    with open(file) as fle:
        info = json.load(fle)

    review_data = {}
    review_data['type'] = f
    for t in traits:
        review_data[t] = info[t]

    data.append(review_data)

save_file = '../data/final/users/review_votes.json'

with open(save_file, 'w') as outfile:
    json.dump(data, outfile)