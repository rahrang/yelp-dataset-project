import json

PREFIX = '../data/'
SUFFIX = '.json'

src = 'clean/review_votes'

with open(PREFIX + src + SUFFIX) as file:
    info = json.load(file)

types = ['useful', 'cool', 'funny']

for t in types:
    data = []
    for i in info:
        data.append(i[t])

    data = sorted(data)

    with open(PREFIX + 'clean/review_' + t + SUFFIX, 'w') as outfile:
        json.dump(data, outfile)