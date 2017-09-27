import json

collections = ['average_stars', 'cool', 'fans', 'funny', 'num_friends', 'review_count', 'useful']
breakdowns = ['average', 'min', 'max', 'median', 'mode', '10', '25', '75', '90']

file_prefix = '../data/clean/'
file_suffix = '.json'

data = {}
for c in collections:
    
    print(c)
    print('-----------')

    filename = file_prefix + c + file_suffix

    with open(filename) as f:
        compliment_info = json.load(f)

    for b in breakdowns:
        print(b)
        to_store = {}
        to_store[c] = compliment_info[b]

        try:
            data[b].append(to_store)
        except KeyError:
            data[b] = [to_store]

    print('-- -- -- --')

dst = '../data/clean/general.json'

with open(dst, 'w') as outfile:
    json.dump(data, outfile)