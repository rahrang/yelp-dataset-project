# used to check how big (how many data points) were in each yelp dataset

datasets = ['business', 'checkin', 'photos', 'review', 'tip', 'user']

for d in datasets:
    num_lines = sum(1 for line in open('../dataset/' + d + '.json'))
    print(d + ': ' + str(num_lines))

"""
OUTPUT
------
business: 156639
checkin: 135148
photos: 196278
review: 4736879
tip: 1028802
user: 1183362
"""