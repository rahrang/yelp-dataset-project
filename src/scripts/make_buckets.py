import json

PREFIX = '../data/'
SUFFIX = '.json'
SRC_PATH = 'raw/collections/'

src = 'review_count'

filename = PREFIX + SRC_PATH + src + SUFFIX

with open(filename) as file:
    info = json.load(file)


data = {}
buckets = ['0-20', '20-50', '50-100', '100-500', '500-1000', '1000-5000', '5000-10000', '10000+']

for b in buckets:
    data[b] = 0


for review_count in info:
    if review_count >= 10000:
        data['10000+'] += 1
    elif review_count >= 5000:
        data['5000-10000'] += 1
    elif review_count >= 1000:
        data['1000-5000'] += 1
    elif review_count >= 500:
        data['500-1000'] += 1
    elif review_count >= 100:
        data['100-500'] += 1
    elif review_count >= 50:
        data['50-100'] += 1
    elif review_count >= 20:
        data['20-50'] += 1
    elif review_count >= 0:
        data['0-20'] += 1
    else:
        print('review count is: ' + str(review_count))

DST_PATH = 'clean/'
dst = 'review_count_buckets'

dst_file = PREFIX + DST_PATH + dst + SUFFIX

with open(dst_file, 'w') as outfile:
    json.dump(data, outfile)