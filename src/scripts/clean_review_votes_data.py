import json
import statistics
import scipy as sp
from scipy import stats

src_prefix = '../data/raw/'
dst_prefix = '../data/clean/'
suffix = '.json'

src_file = 'elite_reviews_info'

for c in collections:
    print (c)

    src = src_prefix + c + suffix
    cleaned_data = {}

    with open(src) as f:
        data = json.load(f)

    cleaned_data['average'] = round(statistics.mean(data), 2)
    cleaned_data['median'] = round(statistics.median_grouped(data), 2)
    cleaned_data['mode'] = statistics.mode(data)
    cleaned_data['stdev'] = round(statistics.stdev(data), 2)
    cleaned_data['variance'] = round(statistics.variance(data), 2)
    cleaned_data['min'] = min(data)
    cleaned_data['max'] = max(data)
    cleaned_data['10'] = stats.scoreatpercentile(data, 10)
    cleaned_data['25'] = stats.scoreatpercentile(data, 25)
    cleaned_data['75'] = stats.scoreatpercentile(data, 75)
    cleaned_data['90'] = stats.scoreatpercentile(data, 90)

    dst = dst_prefix + c + suffix

    with open(dst, 'w') as outfile:
        json.dump(cleaned_data, outfile)