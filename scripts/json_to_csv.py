import argparse
import json
import csv
import os.path

def main(json_data):
	data = json.load(json_data)["results"]
	prolific_id = json_data.name.split('/')[-1].split('.')[0]
	exists = os.path.exists('results/csv/95subjects.csv')


	with open('results/csv/95subjects.csv', 'a', encoding='utf-8') as f:
		writer = csv.writer(f)

		if not exists:
			writer.writerow(['prolific id', 'object', 'colour', 'typicality'])
			

		for line in data:
			writer.writerow([
				prolific_id,
				line["object"],
				line["colour"],
				line["typicality"]])

if __name__ == '__main__':
	parser = argparse.ArgumentParser(description=(
		'turns json data into csv'
		))

	parser.add_argument('file',
		help = 'path to json file',
		type = argparse.FileType('r', encoding="utf-8"))

	args = parser.parse_args()

	main(args.file)
