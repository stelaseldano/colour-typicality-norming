for file in results/results-95subj/*.json
do
	python3 scripts/json_to_csv.py $file
done
