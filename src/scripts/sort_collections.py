import json

collections = [
    'review_count',
    'num_friends',
    'useful',
    'funny',
    'cool',
    'fans',
    'elite',
    'average_stars',
    'compliment_cool',
    'compliment_cute',
    'compliment_funny',
    'compliment_hot',
    'compliment_list',
    'compliment_more',
    'compliment_note',
    'compliment_photos',
    'compliment_plain',
    'compliment_writer'
]

file_prefix = '../data/raw/collections/'
file_suffix = '.json'

for c in collections:
    file = file_prefix + c + file_suffix

    with open(file) as f:
        data = json.load(f)
        sorted_data = sorted(data)

    with open(file, 'w') as outfile:
        json.dump(sorted_data, outfile)