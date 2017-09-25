import json

with open('../data/elite_users_list.json') as users:
    real_users = [u[3:-3] for u in list(users)]
    sorted_users = sorted(real_users);

while ('' in sorted_users):
    sorted_users.remove('')

with open('../data/elite_users_clean.json', 'w') as outfile:
    json.dump(sorted_users, outfile)