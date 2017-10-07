import json
import statistics
import scipy as sp
from scipy import stats

PREFIX = '../data/'
SUFFIX = '.json'

types = ['cool', 'funny', 'useful']

data = []
for t in types:
    with open(PREFIX + 'clean/review_' + t + SUFFIX) as file:
        info = json.load(file)

    temp_data = {}
    temp_data['type'] = t

    temp_data['average'] = round(statistics.mean(info), 2)
    temp_data['median'] = round(statistics.median_grouped(info), 2)
    temp_data['mode'] = statistics.mode(info)
    temp_data['minimum'] = min(info)
    temp_data['maximum'] = max(info)
    temp_data['10'] = stats.scoreatpercentile(info, 10)
    temp_data['25'] = stats.scoreatpercentile(info, 25)
    temp_data['75'] = stats.scoreatpercentile(info, 75)
    temp_data['90'] = stats.scoreatpercentile(info, 90)

    data.append(temp_data)

with open(PREFIX + 'final/review_compliments' + SUFFIX, 'w') as outfile:
    json.dump(data, outfile)
