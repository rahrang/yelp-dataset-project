import json


PREFIX = '../data/'
SUFFIX = '.json'

data = []

for year in range(2005, 2018):

    with open(PREFIX + 'final/years_to_elite/' + str(year) + SUFFIX) as file:
        year_info = json.load(file)

    year_data = {}
    year_data['year'] = year

    for item in year_info:
        new_key = item['years_to_elite']
        new_value = item['num_users']

        year_data[new_key] = new_value

    data.append(year_data)

    with open(PREFIX + 'final/years_to_elite_good/' + str(year) + SUFFIX, 'w') as outfile:
        json.dump([year_data], outfile)


with open(PREFIX + 'final/years_to_elite_good/' + 'yearly' + SUFFIX, 'w') as outfile:
    json.dump(data, outfile) 
