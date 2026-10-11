import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Quiz.css";

function Quiz() {
  const questions = [
    {
      question: "Which language is mainly used to structure web pages?",
      options: ["HTML", "Python", "Java", "SQL"],
      answer: "HTML",
    },
    {
      question: "Which language is mainly used to style web pages?",
      options: ["HTML", "CSS", "Java", "SQL"],
      answer: "CSS",
    },
    {
      question: "Which language is mainly used to add interactivity to web pages?",
      options: ["HTML", "CSS", "JavaScript", "SQL"],
      answer: "JavaScript",
    },
    {
      question: "Which HTML tag is used to create a hyperlink?",
      options: ["<p>", "<a>", "<img>", "<div>"],
      answer: "<a>",
    },
    {
      question: "Which CSS property is used to change text color?",
      options: ["font-size", "background", "color", "border"],
      answer: "color",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = questions[currentQuestion];

  /* ================================
     SELECT / DESELECT ANSWER
     ================================ */

  const handleAnswerClick = (option) => {
    /*
      If the user clicks the already-selected answer,
      remove the tick.
    */

    if (selectedAnswer === option) {
      setSelectedAnswer(null);
      return;
    }

    /*
      Otherwise select the new answer.
    */
    setSelectedAnswer(option);
  };

  /* ================================
     NEXT QUESTION
     ================================ */

  const handleNext = () => {
    if (selectedAnswer === null) {
      return;
    }

    if (selectedAnswer === question.answer) {
      setScore((previousScore) => previousScore + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((previousQuestion) => previousQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setFinished(true);
    }
  };

  /* ================================
     RETRY QUIZ
     ================================ */

  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setFinished(false);
  };

  /* ================================
     RESULT PAGE
     ================================ */

  if (finished) {
    const finalScore =
      score +
      (selectedAnswer === question.answer ? 1 : 0);

    const passed = finalScore >= 3;

    return (
      <div className="quiz-page">

        <div className="quiz-result-card">

          <div className="result-icon">
            {passed ? "✓" : "!"}
          </div>

          <p className="quiz-label">
            SKILL VERIFICATION
          </p>

          <h1>
            {passed
              ? "Skill Verified!"
              : "Keep Learning!"}
          </h1>

          <p className="result-description">
            {passed
              ? "Congratulations! You have successfully completed the Web Development skill quiz."
              : "You have completed the quiz. Keep practicing and try again to improve your score."}
          </p>

          <div className="score-box">

            <span>Your Score</span>

            <strong>
              {finalScore} / {questions.length}
            </strong>

          </div>

          {passed && (
            <div className="verified-badge">
              ✓ Web Development Verified
            </div>
          )}

          <div className="result-buttons">

            <button
              className="retry-button"
              onClick={handleRetry}
            >
              Try Again
            </button>

            <Link
              to="/profile"
              className="profile-button"
            >
              View Profile
            </Link>

          </div>

        </div>

      </div>
    );
  }

  /* ================================
     QUIZ PAGE
     ================================ */

  return (
    <div className="quiz-page">

      <div className="quiz-card">

        {/* HEADER */}

        <div className="quiz-top">

          <div>

            <p className="quiz-label">
              SKILL QUIZ
            </p>

            <h1>
              Web Development
            </h1>

          </div>

          <div className="question-count">
            {currentQuestion + 1} / {questions.length}
          </div>

        </div>


        {/* PROGRESS BAR */}

        <div className="progress-container">

          <div
            className="progress-bar"
            style={{
              width: `${
                ((currentQuestion + 1) /
                  questions.length) *
                100
              }%`,
            }}
          ></div>

        </div>


        {/* QUESTION */}

        <div className="question-section">

          <p className="question-number">
            QUESTION {currentQuestion + 1}
          </p>

          <h2>
            {question.question}
          </h2>

        </div>


        {/* ANSWERS */}

        <div className="answers">

          {question.options.map((option) => {

            const isSelected =
              selectedAnswer === option;

            return (
              <button
                key={option}
                className={`quiz-option ${
                  isSelected ? "selected" : ""
                }`}
                onClick={() =>
                  handleAnswerClick(option)
                }
              >

                <span
                  className={`quiz-radio ${
                    isSelected
                      ? "radio-selected"
                      : ""
                  }`}
                >
                  {isSelected ? "✓" : ""}
                </span>

                <span className="option-text">
                  {option}
                </span>

              </button>
            );
          })}

        </div>


        {/* BOTTOM */}

        <div className="quiz-bottom">

          <p className="quiz-hint">
            Select one answer and continue.
          </p>

          <button
            className={`next-button ${
              selectedAnswer === null
                ? "disabled"
                : ""
            }`}
            onClick={handleNext}
            disabled={selectedAnswer === null}
          >
            {currentQuestion ===
            questions.length - 1
              ? "Finish Quiz ✓"
              : "Next Question →"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default Quiz;