import json

compliments = ['cool', 'cute', 'funny', 'hot', 'list', 'more', 'note', 'photos', 'plain', 'writer']
breakdowns = ['average', 'min', 'max', 'median', 'mode', '10', '25', '75', '90']

file_prefix = '../data/clean/compliment_'
file_suffix = '.json'

data = {}
for c in compliments:
    
    print(c)
    print('-----------')

    filename = file_prefix + c + file_suffix

    with open(filename) as f:
        compliment_info = json.load(f)

    for b in breakdowns:
        print(b)
        to_store = {}
        to_store['type'] = c
        to_store['value'] = compliment_info[b]

        try:
            data[b].append(to_store)
        except KeyError:
            data[b] = [to_store]

    print('-- -- -- --')

dst = '../data/clean/compliments.json'

with open(dst, 'w') as outfile:
    json.dump(data, outfile)