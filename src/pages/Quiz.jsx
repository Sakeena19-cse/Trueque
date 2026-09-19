import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Quiz() {
  const navigate = useNavigate();

  const questions = [
    {
      question: "Which language is mainly used to structure web pages?",
      options: ["HTML", "Python", "Java", "SQL"],
      answer: "HTML",
    },
    {
      question: "Which technology is used to style a web page?",
      options: ["CSS", "React", "Node.js", "MongoDB"],
      answer: "CSS",
    },
    {
      question: "Which JavaScript library is used to build user interfaces?",
      options: ["React", "MySQL", "Django", "PHP"],
      answer: "React",
    },
    {
      question: "Which symbol is commonly used for a JavaScript arrow function?",
      options: ["=>", "<=", "==", "::"],
      answer: "=>",
    },
    {
      question: "Which HTML element is used to create a hyperlink?",
      options: ["<a>", "<p>", "<h1>", "<img>"],
      answer: "<a>",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleNext = () => {
    if (!selectedAnswer) {
      alert("Please select an answer.");
      return;
    }

    const current = questions[currentQuestion];

    const newScore =
      selectedAnswer === current.answer
        ? score + 1
        : score;

    setScore(newScore);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      setCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setScore(0);
    setCompleted(false);
  };

  return (
    <div className="quiz-page">

      <section className="quiz-hero">
        <div className="quiz-hero-content">
          <p className="section-label">TRUEQUE SKILL VERIFICATION</p>

          <h1>
            Verify Your
            <br />
            <span>Skills.</span>
          </h1>

          <p>
            Complete the quiz to demonstrate your
            knowledge and earn a TRUEQUE skill
            verification badge.
          </p>
        </div>
      </section>

      {!completed ? (
        <section className="quiz-section">

          <div className="quiz-card">

            <div className="quiz-card-top">
              <div>
                <p className="section-label">
                  SKILL QUIZ
                </p>

                <h2>Web Development</h2>
              </div>

              <div className="quiz-counter">
                {currentQuestion + 1} / {questions.length}
              </div>
            </div>

            <div className="quiz-progress">
              <div
                className="quiz-progress-bar"
                style={{
                  width: `${
                    ((currentQuestion + 1) /
                      questions.length) *
                    100
                  }%`,
                }}
              ></div>
            </div>

            <div className="quiz-question">
              <p className="question-number">
                Question {currentQuestion + 1}
              </p>

              <h3>
                {questions[currentQuestion].question}
              </h3>
            </div>

            <div className="quiz-options">
              {questions[currentQuestion].options.map(
                (option) => (
                  <button
                    type="button"
                    key={option}
                    className={`quiz-option ${
                      selectedAnswer === option
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      setSelectedAnswer(option)
                    }
                  >
                    <span className="option-circle">
                      {selectedAnswer === option
                        ? "✓"
                        : ""}
                    </span>

                    <span>{option}</span>
                  </button>
                )
              )}
            </div>

            <div className="quiz-footer">
              <p>
                Select one answer and continue.
              </p>

              <button
                type="button"
                className="quiz-next-button"
                onClick={handleNext}
              >
                {currentQuestion ===
                questions.length - 1
                  ? "Finish Quiz →"
                  : "Next Question →"}
              </button>
            </div>

          </div>

        </section>
      ) : (
        <section className="quiz-result-section">

          <div className="quiz-result-card">

            <div className="quiz-result-icon">
              ✓
            </div>

            <p className="section-label">
              VERIFICATION COMPLETE
            </p>

            <h2>
              Quiz Completed
            </h2>

            <p className="quiz-score">
              Your Score
            </p>

            <strong className="quiz-score-number">
              {score} / {questions.length}
            </strong>

            {score >= 3 ? (
              <>
                <div className="quiz-badge">
                  ✓ Skill Verified
                </div>

                <p>
                  You have successfully completed
                  the skill verification quiz.
                </p>
              </>
            ) : (
              <>
                <div className="quiz-retry">
                  Try Again
                </div>

                <p>
                  Review the skill and take the quiz
                  again to complete verification.
                </p>
              </>
            )}

            <div className="quiz-result-actions">

              <button
                type="button"
                className="quiz-retry-button"
                onClick={restartQuiz}
              >
                Take Quiz Again
              </button>

              <button
                type="button"
                className="quiz-profile-button"
                onClick={() => navigate("/profile")}
              >
                View Profile →
              </button>

            </div>

          </div>

        </section>
      )}

    </div>
  );
}

export default Quiz;