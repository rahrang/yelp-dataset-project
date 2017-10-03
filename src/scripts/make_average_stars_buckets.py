import json

PREFIX = '../data/'
SUFFIX = '.json'
SRC_PATH = 'raw/collections/'

src = 'average_stars'

filename = PREFIX + SRC_PATH + src + SUFFIX

with open(filename) as file:
    info = json.load(file)

data = {}
buckets = ['0-1.0', '1.0-2.0', '2.0-2.5', '2.5-3.0', '3.0-3.5', '3.5-4.0', '4.0-4.5', '4.5-5.0']

for b in buckets:
    data[b] = 0

for average_star in info:
    if average_star >= 4.5:
        data['4.5-5.0'] += 1
    elif average_star >= 4.0:
        data['4.0-4.5'] += 1
    elif average_star >= 3.5:
        data['3.5-4.0'] += 1
    elif average_star >= 3.0:
        data['3.0-3.5'] += 1
    elif average_star >= 2.5:
        data['2.5-3.0'] += 1
    elif average_star >= 2.0:
        data['2.0-2.5'] += 1
    elif average_star >= 1.0:
        data['1.0-2.0'] += 1
    elif average_star >= 0:
        data['0-1.0'] += 1
    else:
        print('average stars is: ' + str(average_star))

final_data = []

for key, value in data.items():
    temp_data = {}
    temp_data['bucket'] = key
    temp_data['value'] = value

    final_data.append(temp_data)

DST_PATH = 'final/'
dst = 'average_stars_buckets'

dst_file = PREFIX + DST_PATH + dst + SUFFIX

with open(dst_file, 'w') as outfile:
    json.dump(final_data, outfile)