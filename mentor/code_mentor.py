import json
from .ai_client import call_gemini


def analyze_code_error(code, error_message):
    prompt = f"""You are an AI Code Mentor helping a student understand a coding mistake.

CODE:
{code}

ERROR:
{error_message}

Respond ONLY with strict JSON, no markdown fences, no preamble, in this exact shape:
{{
  "what_went_wrong": "<1 sentence>",
  "why_it_went_wrong": "<1-2 sentences>",
  "concept": "<the underlying programming/DSA/OOP concept, 1 sentence>",
  "approach": "<1-2 sentences on how to approach fixing/thinking about this>",
  "practice_examples": ["<practice question 1>", "<practice question 2>"]
}}"""

    text = call_gemini(prompt)
    clean = text.replace("```json", "").replace("```", "").strip()
    return json.loads(clean)