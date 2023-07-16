from flask import Flask, request
import requests
import json

app = Flask(__name__)

api_Key = 'tmc12SX5e6ESK7wAcIxCZf7zfTC7Oyz:A6o6BixvhBr32SQ7jxgqFS1JeJqRprJR7wcaU7vDva2nxQzZjb4rddvQAUuTjznGt8'
headers = {"Authorization": f'ApiKey {api_Key}', "api-version": "v1"}
res = requests.get('https://workload.us-1.cloudone.trendmicro.com/api/intrusionpreventionrules', headers=headers)

data = res.json()
data = data['intrusionPreventionRules']

@app.route('/')
def get_All():
  return json.dumps(data)

@app.route('/id/<id>')
def get_By_Id(id):
  filtered_Data = list(filter(lambda x: x['ID'] == int(id), data))
  if (not filtered_Data):
    return json.dumps({"response": f"no object find with the id {id}"})
  return json.dumps(filtered_Data)


@app.route('/ndjson')
def ndjson():
  ndjson_list = []
  for i in data:
    ndjson_list.append({
      "ID": str(i['ID']),
      "name": i['name'],
      "severity": i['severity'],
      "description": i['description']
    })
  result = [json.dumps(record) for record in ndjson_list]
  f = open('data.ndjson', "w")
  f.write('\n'.join(result))
  return ('\n'.join(result))
