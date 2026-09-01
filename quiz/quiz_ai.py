import json
import requests
import os
from dotenv import load_dotenv

load_dotenv()
def generate_quiz_questions(skill, level, num_questions=10):
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
    response = requests.post(
        f"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key={api_key}",
        headers={"Content-Type": "application/json"},
        json={"contents": [{"parts": [{"text": prompt}]}]},
    )
    data = response.json()
    print("STATUS:", response.status_code)
    print("RAW RESPONSE:", data)
    text = data["candidates"][0]["content"]["parts"][0]["text"]
    clean = text.replace("```json", "").replace("```", "").strip()
    parsed = json.loads(clean)
    return parsed["questions"]