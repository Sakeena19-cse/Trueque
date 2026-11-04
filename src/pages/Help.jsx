import React, { useState } from "react";
import { Link } from "react-router-dom";

function Help() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is TRUEQUE?",
      answer:
        "TRUEQUE is a skill-sharing platform where users can learn new skills and teach skills they already know."
    },
    {
      question: "How do I create an account?",
      answer:
        "Go to the Register page, enter your personal details and create your account."
    },
    {
      question: "How can I find a skill partner?",
      answer:
        "Visit the Matching page to explore people interested in learning or teaching your selected skills."
    },
    {
      question: "How can I verify my skills?",
      answer:
        "Go to the Quiz page, select a skill and complete the quiz to verify your knowledge."
    },
    {
      question: "How do I track my learning progress?",
      answer:
        "Open your Dashboard and use the Learning Progress Tracker to mark your skills as completed."
    },
    {
      question: "How can I contact my skill partner?",
      answer:
        "Visit the Chat page to communicate with your skill partner. The current frontend demo stores messages locally."
    },
    {
      question: "Can I update my profile?",
      answer:
        "Yes. Visit your Profile page and use the Edit Profile option to update your information."
    },
    {
      question: "How can I book a learning session?",
      answer:
        "Open your Session page and use the booking calendar to select your preferred date and time."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="help-page">

      <section className="help-hero">
        <p className="section-label">TRUEQUE SUPPORT CENTER</p>
        <h1>How Can We Help You?</h1>
        <p>
          Find answers to common questions and make
          your skill-sharing journey easier.
        </p>
      </section>

      <section className="faq-section">

        <div className="faq-heading">
          <p className="section-label">HELP & SUPPORT</p>
          <h2>Frequently Asked Questions</h2>
          <p>Click on a question to view its answer.</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>

              <button
                type="button"
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span>
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}

            </div>
          ))}
        </div>

        <div className="help-contact">
          <h2>Still Need Help?</h2>
          <p>
            Explore your TRUEQUE dashboard or contact
            your project support team.
          </p>

          <Link to="/dashboard">
            Back to Dashboard →
          </Link>
        </div>

      </section>
    </div>
  );
}

export default Help;