# parse elite_users_info.json to collect like terms (items in collections)

import json

file_prefix = '../data/raw/'
file_suffix = '.json'

src_file = 'elite_reviews_info'

file = file = file_prefix + src_file + file_suffix

with open(file) as f:
    info = json.load(f)

data = []
details = ['useful', 'funny', 'cool']

for key, value in info.items():
    
    temp_data = {}
    for d in details:
        temp_data[d] = value[d]

    data.append(temp_data)

save_file = '../data/final/reviews/review_votes.json'

with open(save_file, 'w') as outfile:
    json.dump(data, outfile)