import json


PREFIX = '../data/'
SUFFIX = '.json'

src = 'first_year_elite_vs_years_to_elite'

with open(PREFIX + 'clean/' + src + SUFFIX) as file:
    info = json.load(file)

temp_data = {}

for yr in range(2005, 2018):
    temp_data[yr] = {}
    for count in range(0, 13):
        temp_data[yr][count] = 0

"""
temp_data (initialized)

{
    2005: {
        0: 0,
        1: 0,
        ...,
        12: 0
    },
    ...,
    2017: {
        0: 0,
        ...,
        12: 0
    }
}
"""

for dictionary in info:
    year = dictionary['first_year_elite'] # 2015
    years_to_elite = dictionary['years_to_elite']

    temp_data[year][years_to_elite] += 1

"""
temp_data (made up values after running above for loop)

{
    2005: {
        0: 25,
        1: 90,
        ...,
        12: 0
    },
    ...,
    2017: {
        0: 470,
        1: 2333,
        ...,
        12: 1
    }
}
"""

for year, count_info in temp_data.items():
    data = []
    
    for years_to_elite, num_users in count_info.items():
        if (num_users == 0):
            continue

        to_store = {}
        to_store['years_to_elite'] = years_to_elite
        to_store['num_users'] = num_users

        data.append(to_store)

    with open(PREFIX + 'final/year_vs_years_to_elite/' + str(year) + SUFFIX, 'w') as outfile:
        json.dump(data, outfile) 
