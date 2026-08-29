import base64, sys, os, json
from urllib.request import Request, urlopen
from urllib.error import HTTPError

TOKEN = os.environ.get('GITEE_TOKEN', '')
if not TOKEN:
    print("No GITEE_TOKEN provided, skipping Gitee upload")
    sys.exit(0)

REPO = 'xdbzys/app'

# Read version from app-update.json
with open('app-update.json', 'r') as f:
    update_data = json.load(f)
version = update_data.get('version', '2.5')
print(f"Updating app-update.json for version: {version}")

# 不修改 apkUrl，保持 app-update.json 中的原始值（Gitee URL）
# 仅添加 webHtmlUrl 用于网页版云更新
run_number = os.environ.get('GITHUB_RUN_NUMBER', '0')
update_data['webHtmlUrl'] = f'https://github.com/xdbzys/gaokao-vocab/releases/download/v{run_number}/index.html'

with open('app-update.json', 'w') as f:
    json.dump(update_data, f, ensure_ascii=False, indent=2)

with open('app-update.json', 'rb') as f:
    update_content = base64.b64encode(f.read()).decode()

def upload_file(filename, file_content, message):
    url = f'https://gitee.com/api/v5/repos/{REPO}/contents/{filename}'
    params = f'?access_token={TOKEN}'

    sha = ''
    try:
        req = Request(url + params)
        resp = urlopen(req, timeout=30)
        resp_data = json.loads(resp.read().decode())
        sha = resp_data.get('sha', '')
        print(f'  Current SHA: {sha[:10] if sha else "None"}...')
    except HTTPError as e:
        print(f'  GET {filename}: status={e.code}')
        return None
    except Exception as e:
        print(f'  GET {filename}: error={e}')
        return None

    payload = {'access_token': TOKEN, 'content': file_content, 'message': message}
    if sha:
        payload['sha'] = sha

    data = json.dumps(payload).encode()
    method = 'PUT' if sha else 'POST'
    req = Request(url, data=data, headers={'Content-Type': 'application/json'}, method=method)

    try:
        resp = urlopen(req, timeout=60)
        print(f'  {filename} uploaded successfully!')
        return resp
    except HTTPError as e:
        print(f'  {filename} upload failed: {e.code}')
        body = e.read().decode()
        print(f'  Error: {body[:200]}')
        return None
    except Exception as e:
        print(f'  {filename} upload failed: {e}')
        return None

print(f"\nUploading app-update.json to Gitee...")
upload_file('app-update.json', update_content, f'update app-update.json to v{version}')

print("\nDone!")