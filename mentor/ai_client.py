import os
import time
import requests
from dotenv import load_dotenv

load_dotenv()


def call_gemini(prompt, retries=3, delay=5):
    api_key = os.environ.get("GEMINI_API_KEY")
    for attempt in range(retries):
        response = requests.post(
            f"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key={api_key}",
            headers={"Content-Type": "application/json"},
            json={"contents": [{"parts": [{"text": prompt}]}]},
        )
        data = response.json()
        if response.status_code == 200:
            return data["candidates"][0]["content"]["parts"][0]["text"]
        if response.status_code == 503 and attempt < retries - 1:
            time.sleep(delay)
            continue
        raise Exception(f"Gemini API error {response.status_code}: {data}")