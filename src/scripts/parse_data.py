# parse elite_users_info.json to collect like terms (items in collections)

import json

with open('../data/raw/elite_users_list.json') as elite_users_list:
    users = json.load(elite_users_list)

file_prefix = '../data/raw/'
file_suffix = '.json'
filename = 'elite_users_info'

file = file_prefix + filename + file_suffix

with open(file) as f:
    user_info = json.load(f)

collections = [
    'review_count',
    'num_friends',
    'useful',
    'funny',
    'cool',
    'fans',
    'elite',
    'average_stars',
    'compliments'
]

for c in collections:
    print(c)
    data = []
    for u in users:
        data.append(user_info[u][c])

    save_file = file_prefix + 'collections/' + c + file_suffix

    with open(save_file, 'w') as outfile:
        json.dump(data, outfile)