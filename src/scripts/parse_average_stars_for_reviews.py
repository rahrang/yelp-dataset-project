import json

PREFIX = '../data/raw/'
SUFFIX = '.json'

src = 'elite_reviews_info'

with open(PREFIX + src + SUFFIX) as file:
    info = json.load(file)

data = []
i = 0
for key, value in info.items():
    
    print('review: ' + str(i))
    
    data.append(value['stars'])
    
    i+=1

data = sorted(data)

dst = '../data/clean/average_stars_for_reviews.json'

with open(dst, 'w') as outfile:
    json.dump(data, outfile)