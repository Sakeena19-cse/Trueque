import os
import requests
from dotenv import load_dotenv

load_dotenv()


def call_gemini(prompt):
    api_key = os.environ.get("GEMINI_API_KEY")
    response = requests.post(
        f"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key={api_key}",
        headers={"Content-Type": "application/json"},
        json={"contents": [{"parts": [{"text": prompt}]}]},
    )
    data = response.json()
    return data["candidates"][0]["content"]["parts"][0]["text"]