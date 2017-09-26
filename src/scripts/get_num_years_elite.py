import json

with open('../data/raw/collections/elite.json') as f:
    data = json.load(f)

    cleaned_data = sorted([len(d) for d in data])

    with open('../data/raw/collections/num_years_elite.json', 'w') as outfile:
        json.dump(cleaned_data, outfile)