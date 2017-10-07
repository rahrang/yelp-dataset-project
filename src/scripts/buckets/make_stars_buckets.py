import json

PREFIX = '../data/'
SUFFIX = '.json'
SRC_PATH = 'clean/'

src = 'stars_for_reviews'

filename = PREFIX + SRC_PATH + src + SUFFIX

with open(filename) as file:
    info = json.load(file)

data = {}
buckets = range(0, 6)

for b in buckets:
    data[b] = 0

for star in info:
    data[star] += 1

final_data = []

for key, value in data.items():
    temp_data = {}
    temp_data['bucket'] = key
    temp_data['value'] = value

    final_data.append(temp_data)

DST_PATH = 'final/reviews/'
dst = 'review_stars'

dst_file = PREFIX + DST_PATH + dst + SUFFIX

with open(dst_file, 'w') as outfile:
    json.dump(final_data, outfile)