import { useState } from "react";
import "./Quiz.css";

const quizQuestions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Transfer Markup Language",
      "Home Tool Markup Language",
    ],
    answer: 0,
  },
  {
    question: "Which language is used to style web pages?",
    options: ["Python", "HTML", "CSS", "Java"],
    answer: 2,
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["define", "let", "int", "variable"],
    answer: 1,
  },
  {
    question: "Which symbol is used for comments in CSS?",
    options: ["//", "<!-- -->", "/* */", "#"],
    answer: 2,
  },
  {
    question: "Which library is used to build React applications?",
    options: ["React", "Django", "Flask", "MySQL"],
    answer: 0,
  },
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const question = quizQuestions[currentQuestion];

  const handleNext = () => {
    if (selectedAnswer === null) return;

    if (selectedAnswer === question.answer) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestion === quizQuestions.length - 1) {
      setShowResult(true);
    } else {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="quiz-page">
      <div className="quiz-container">
        <div className="quiz-heading">
          <h1>Skill Verification Quiz</h1>
          <p>Test your knowledge and improve your skills with TRUEQUE.</p>
        </div>

        {!showResult ? (
          <div className="quiz-card">
            <div className="quiz-progress">
              <span>
                Question {currentQuestion + 1} of {quizQuestions.length}
              </span>

              <span>
                {Math.round(
                  ((currentQuestion + 1) / quizQuestions.length) * 100
                )}
                %
              </span>
            </div>

            <div className="quiz-progress-bar">
              <div
                className="quiz-progress-fill"
                style={{
                  width: `${
                    ((currentQuestion + 1) / quizQuestions.length) * 100
                  }%`,
                }}
              ></div>
            </div>

            <h2>{question.question}</h2>

            <div className="quiz-options">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  type="button"
                  className={`quiz-option ${
                    selectedAnswer === index ? "selected" : ""
                  }`}
                  onClick={() => setSelectedAnswer(index)}
                >
                  <span>{String.fromCharCode(65 + index)}.</span>
                  {option}
                </button>
              ))}
            </div>

            <button
              type="button"
              className="quiz-next-btn"
              onClick={handleNext}
              disabled={selectedAnswer === null}
            >
              {currentQuestion === quizQuestions.length - 1
                ? "Submit Quiz"
                : "Next Question"}
            </button>
          </div>
        ) : (
          <div className="quiz-result">
            <div className="quiz-result-icon">🏆</div>

            <h2>Quiz Completed!</h2>

            <p>Your TRUEQUE skill verification result</p>

            <div className="quiz-score">
              <h1>
                {score} / {quizQuestions.length}
              </h1>
              <span>Correct Answers</span>
            </div>

            <h3>
              {score >= 4
                ? "Excellent Performance!"
                : score >= 3
                ? "Good Job! Keep Practising."
                : "Keep Learning and Try Again!"}
            </h3>

            <button
              type="button"
              className="quiz-restart-btn"
              onClick={restartQuiz}
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;