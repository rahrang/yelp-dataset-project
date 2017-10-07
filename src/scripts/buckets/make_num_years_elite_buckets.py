import json

PREFIX = '../data/'
SUFFIX = '.json'
SRC_PATH = 'raw/collections/'

src = 'num_years_elite'

filename = PREFIX + SRC_PATH + src + SUFFIX

with open(filename) as file:
    info = json.load(file)

data = {}
buckets = range(1, 14)

for b in buckets:
    data[b] = 0

for year in info:
    data[year] += 1

final_data = []

for key, value in data.items():
    temp_data = {}
    temp_data['bucket'] = key
    temp_data['value'] = value

    final_data.append(temp_data)

DST_PATH = 'final/'
dst = 'num_years_elite'

dst_file = PREFIX + DST_PATH + dst + SUFFIX

with open(dst_file, 'w') as outfile:
    json.dump(final_data, outfile)