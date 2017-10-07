# parse elite_users_info.json to collect like terms (items in collections)

import json

PREFIX = '../data/raw/'
SUFFIX = '.json'

src = 'elite_reviews_info'

data = []

with open(PREFIX + src + SUFFIX) as file:
    info = json.load(file)

length_data = []
word_data = []
i = 0
for key, value in info.items():
    # j = 0
    print('review: ' + str(i))

    temp_data = []

    text_array = value['text'].split()

    num_words = len(text_array)

    length_data.append(num_words)

    # for word in text_array:

    #     print ('review: ' + str(i) + '| word: ' + str(j) + ' out of ' + str(num_words) + 'words')

    #     word_data.append(word)

    #     j += 1

    i += 1

length_data = sorted(length_data)
# word_data = sorted(word_data)

save_length_file = '../data/clean/review_lengths2.json'
# save_review_words_file = '../data/clean/review_words.json'

with open(save_length_file, 'w') as outfile:
    json.dump(length_data, outfile)

# with open(save_review_words_file, 'w') as outfile:
#     json.dump(word_data, outfile)