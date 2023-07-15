from flask import Flask, request
import requests
import json

app = Flask(__name__)

apiKey = 'tmc12SX5e6ESK7wAcIxCZf7zfTC7Oyz:A6o6BixvhBr32SQ7jxgqFS1JeJqRprJR7wcaU7vDva2nxQzZjb4rddvQAUuTjznGt8'
headers = {"Authorization": f'ApiKey {apiKey}', "api-version": "v1"}
res = requests.get('https://workload.us-1.cloudone.trendmicro.com/api/intrusionpreventionrules', headers=headers)

data = res.json()
data = data['intrusionPreventionRules']

@app.route('/')
def index():
  return json.dumps(data)

@app.route('/id/<id>')
def id(id):
  filteredData = []
  for i in data:
    if i['ID'] == int(id):
      filteredData.append(i)
  return json.dumps(filteredData)
