import os
import time
import requests
from dotenv import load_dotenv

load_dotenv()

RETRY_STATUS = {429, 500, 502, 503, 504}


def call_gemini(prompt, retries=5, base_delay=2):
    api_key = os.environ.get("GEMINI_API_KEY")
    url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent"
    headers = {"Content-Type": "application/json", "x-goog-api-key": api_key}
    body = {"contents": [{"parts": [{"text": prompt}]}]}

    last_error = None
    for attempt in range(retries):
        try:
            response = requests.post(url, headers=headers, json=body, timeout=60)
        except (requests.ConnectionError, requests.Timeout) as exc:
            last_error = f"network error: {type(exc).__name__}"
        else:
            data = response.json()
            if response.status_code == 200:
                return data["candidates"][0]["content"]["parts"][0]["text"]
            last_error = f"Gemini API error {response.status_code}: {data}"
            if response.status_code not in RETRY_STATUS:
                raise Exception(last_error)
        if attempt < retries - 1:
            time.sleep(base_delay * (2 ** attempt))
    raise Exception(last_error)
