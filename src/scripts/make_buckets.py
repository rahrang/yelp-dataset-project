import json

PREFIX = '../data/'
SUFFIX = '.json'
SRC_PATH = 'clean/'

src = 'review_lengths'

filename = PREFIX + SRC_PATH + src + SUFFIX

with open(filename) as file:
    info = json.load(file)


data = {}
buckets = ['0-20', '20-50', '50-100', '100-200', '200-300', '300-400', '400-500', '500-600', '600-700', '700-800', '800-900', '900-1000', '1000+']

for b in buckets:
    data[b] = 0

for word_count in info:
    if word_count >= 1000:
        data['1000+'] += 1
    elif word_count >= 900:
        data['900-1000'] += 1
    elif word_count >= 800:
        data['800-900'] += 1
    elif word_count >= 700:
        data['700-800'] += 1
    elif word_count >= 600:
        data['600-700'] += 1
    elif word_count >= 500:
        data['500-600'] += 1
    elif word_count >= 400:
        data['400-500'] += 1
    elif word_count >= 300:
        data['300-400'] += 1
    elif word_count >= 200:
        data['200-300'] += 1
    elif word_count >= 100:
        data['100-200'] += 1
    elif word_count >= 50:
        data['50-100'] += 1
    elif word_count >= 20:
        data['20-50'] += 1
    elif word_count >= 0:
        data['0-20'] += 1
    else:
        print('word count is: ' + str(word_count))

DST_PATH = 'clean/'
dst = 'review_lengths_buckets'

dst_file = PREFIX + DST_PATH + dst + SUFFIX

with open(dst_file, 'w') as outfile:
    json.dump(data, outfile)