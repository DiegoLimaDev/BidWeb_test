from flask import Flask
import json
from request import data

app = Flask(__name__)

@app.route('/')
def get_All():
  return json.dumps(data)

@app.route('/id/<id>')
def get_By_Id(id):
  filtered_Data = list(filter(lambda x: x['ID'] == int(id), data))
  if (not filtered_Data):
    return json.dumps({"response": f"no object find with the id {id}"})
  return json.dumps(filtered_Data)

@app.route('/page/<page>')
def get_by_page(page):
  page_number = int(page)
  filtered_Data = list(filter(lambda x: (page_number - 1) * 50 < x['ID'] <= (page_number * 50), data))
  if (not filtered_Data):
    return json.dumps({"response": f"there's no data for the page {page}"})
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
