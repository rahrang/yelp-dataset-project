import json

file_prefix = '../data/raw/collections/'
file_suffix = '.json'
filename = 'compliments'

file = file_prefix + filename + file_suffix

with open(file) as f:
    compliment_info = json.load(f)

compliments_list = ['hot', 'more', 'plain', 'cute', 'list', 'note', 'plain', 'cool', 'funny', 'writer', 'photos']

data = []

for c in compliments_list:
    print(c)
    data = []
    for item in compliment_info:
        data.append(item[c])

    save_file = file_prefix + 'compliment_' + c + file_suffix

    with open(save_file, 'w') as outfile:
        json.dump(data, outfile)