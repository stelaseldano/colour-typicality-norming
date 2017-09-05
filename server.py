from fresco import context, FrescoApp, POST, Response
from whitenoise import WhiteNoise

app = FrescoApp()

def save_results():
	context.request.MAX_SIZE = 200 * 1024

	results = context.request.form.get('results')
	prolific_id = context.request.form.get('ID')

	with open('results/{}.json'.format(prolific_id), 'w') as f:
		f.write(results)

	return Response('')


app.route('/save', POST, save_results)

app = WhiteNoise(app, root='.')
app.add_files('index.html')