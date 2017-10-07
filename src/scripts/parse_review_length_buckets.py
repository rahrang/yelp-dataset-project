import json

PREFIX = '../data/clean/'
SUFFIX = '.json'

src = 'review_lengths_buckets'

with open(PREFIX + src + SUFFIX) as file:
    info = json.load(file)

data = []
for key, value in info.items():
    temp_data = {}
    temp_data['bucket'] = key
    temp_data['value'] = value

    data.append(temp_data)

with open('../data/final/reviews/review_lengths.json', 'w') as outfile:
    json.dump(data, outfile)
