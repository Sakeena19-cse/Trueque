import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Quiz.css";

const STORAGE_KEY = "truequeDashboardData";

const saveVerifiedSkill = (skillName) => {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

    const data = {
      learningSkills: saved.learningSkills || [],
      teachingSkills: saved.teachingSkills || [],
      matches: saved.matches || [],
      verifiedSkills: saved.verifiedSkills || [],
    };

    if (!data.verifiedSkills.includes(skillName)) {
      data.verifiedSkills.push(skillName);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }
  } catch (error) {
    console.error("Could not save verified skill:", error);
  }
};

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

  // Select or remove an answer
  const handleAnswerClick = (option) => {
    if (selectedAnswer === option) {
      setSelectedAnswer(null);
    } else {
      setSelectedAnswer(option);
    }
  };

  // Next question or finish quiz
  const handleNext = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === question.answer;
    const updatedScore = score + (isCorrect ? 1 : 0);

    setScore(updatedScore);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((previous) => previous + 1);
      setSelectedAnswer(null);
    } else {
      if (updatedScore >= 3) {
        saveVerifiedSkill("Web Development");
      }

      setFinished(true);
    }
  };

  // Retry quiz
  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setFinished(false);
  };

  // Result page
  if (finished) {
    const passed = score >= 3;

    return (
      <div className="quiz-page">
        <div className="quiz-result-card">
          <div className="result-icon">
            {passed ? "✓" : "!"}
          </div>

          <p className="quiz-label">SKILL VERIFICATION</p>

          <h1>
            {passed ? "Skill Verified!" : "Keep Learning!"}
          </h1>

          <p className="result-description">
            {passed
              ? "Congratulations! You have successfully completed the Web Development skill quiz."
              : "You have completed the quiz. Keep practicing and try again to improve your score."}
          </p>

          <div className="score-box">
            <span>Your Score</span>
            <strong>
              {score} / {questions.length}
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
              to="/dashboard"
              className="profile-button"
            >
              View Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Quiz page
  return (
    <div className="quiz-page">
      <div className="quiz-card">
        {/* HEADER */}
        <div className="quiz-top">
          <div>
            <p className="quiz-label">SKILL QUIZ</p>
            <h1>Web Development</h1>
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
                ((currentQuestion + 1) / questions.length) * 100
              }%`,
            }}
          />
        </div>

        {/* QUESTION */}
        <div className="question-section">
          <p className="question-number">
            QUESTION {currentQuestion + 1}
          </p>

          <h2>{question.question}</h2>
        </div>

        {/* ANSWERS */}
        <div className="answers">
          {question.options.map((option) => {
            const isSelected = selectedAnswer === option;

            return (
              <button
                type="button"
                key={option}
                className={`quiz-option ${
                  isSelected ? "selected" : ""
                }`}
                onClick={() => handleAnswerClick(option)}
                aria-pressed={isSelected}
              >
                <span
                  className={`quiz-radio ${
                    isSelected ? "radio-selected" : ""
                  }`}
                >
                  {isSelected ? "✓" : ""}
                </span>

                <span className="option-text">{option}</span>
              </button>
            );
          })}
        </div>

        {/* BOTTOM */}
        <div className="quiz-bottom">
          <p className="quiz-hint">
            Select one answer and continue.
            You can click the selected answer again to remove the tick.
          </p>

          <button
            type="button"
            className={`next-button ${
              selectedAnswer === null ? "disabled" : ""
            }`}
            onClick={handleNext}
            disabled={selectedAnswer === null}
          >
            {currentQuestion === questions.length - 1
              ? "Finish Quiz ✓"
              : "Next Question →"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quiz;