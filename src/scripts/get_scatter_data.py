import json

PREFIX = '../data/'
SUFFIX = '.json'

src = 'elite_users_info'

filename = PREFIX + 'raw/' + src + SUFFIX

X_AXIS = 'elite'
Y_AXIS = 'average_stars'

with open(filename) as file:
    elite_users_info = json.load(file)

data = []
i = 0
for key, value in elite_users_info.items():

    print('user: ' + str(i))

    to_store = {}
    to_store[X_AXIS] = value[X_AXIS]
    to_store[Y_AXIS] = value[Y_AXIS]

    data.append(to_store)

    i+=1

dst = PREFIX + 'final/' + X_AXIS + '_vs_' + Y_AXIS + SUFFIX

with open(dst, 'w') as outfile:
    json.dump(data, outfile)
