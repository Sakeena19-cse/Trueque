from quiz_helpers import create_ai_quiz
quiz = create_ai_quiz(skill="python", level="intermediate", host_name="Sakeena", num_questions=3)
print(f"Created quiz:{quiz.title}")
print(f"Room Code:{quiz.room_code}")
print(f"Questions saved:{quiz.questions.count()}")

for q in quiz.questions.all():
    print(f"- {q.text} (answer:{q.correct_answer}, difficulty:{q.difficulty})")