import requests

api_Key = 'tmc12SX5e6ESK7wAcIxCZf7zfTC7Oyz:A6o6BixvhBr32SQ7jxgqFS1JeJqRprJR7wcaU7vDva2nxQzZjb4rddvQAUuTjznGt8'
headers = {"Authorization": f'ApiKey {api_Key}', "api-version": "v1"}
res = requests.get('https://workload.us-1.cloudone.trendmicro.com/api/intrusionpreventionrules', headers=headers)

data = res.json()
data = data['intrusionPreventionRules']
