import json
import time
import requests
import os
from dotenv import load_dotenv

load_dotenv()


def generate_quiz_questions(skill, level, num_questions=10, retries=3, delay=5):
    prompt = f"""Generate {num_questions} multiple-choice questions to verify {level}-level knowledge of {skill}.

Respond ONLY with strict JSON, no markdown fences, no preamble, in this exact shape:
{{
  "questions": [
    {{
      "text": "<question text>",
      "correct_answer": "<the correct answer>",
      "difficulty": "easy" | "medium" | "hard"
    }}
  ]
}}"""

    api_key = os.environ.get("GEMINI_API_KEY")

    for attempt in range(retries):
        response = requests.post(
            f"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key={api_key}",
            headers={"Content-Type": "application/json"},
            json={"contents": [{"parts": [{"text": prompt}]}]},
        )
        data = response.json()

        if response.status_code == 200:
            text = data["candidates"][0]["content"]["parts"][0]["text"]
            clean = text.replace("```json", "").replace("```", "").strip()
            parsed = json.loads(clean)
            return parsed["questions"]

        if response.status_code == 503 and attempt < retries - 1:
            time.sleep(delay)
            continue

        raise Exception(f"Gemini API error {response.status_code}: {data}")