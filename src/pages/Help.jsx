import { useState } from "react";

function Help() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is TRUEQUE?",
      answer:
        "TRUEQUE is a skill exchange platform where users can teach their skills and learn new skills from other users.",
    },
    {
      question: "How do I create an account?",
      answer:
        "Click the Register button and enter your first name, last name, email, phone number, qualification and location to create your account.",
    },
    {
      question: "How can I select my skills?",
      answer:
        "After logging in, visit the Skills page. Select the skills you want to learn and the skills you can teach.",
    },
    {
      question: "How does skill matching work?",
      answer:
        "TRUEQUE helps users find learning partners based on their selected teaching and learning skills.",
    },
    {
      question: "How can I book a learning session?",
      answer:
        "Visit the Session Booking page, choose an available date and time, and book your learning session.",
    },
    {
      question: "Can I attend quizzes?",
      answer:
        "Yes. You can attend skill-based quizzes to test your knowledge and verify your skills.",
    },
    {
      question: "How can I give feedback?",
      answer:
        "After completing a session, visit the Rating and Review section to share your experience and feedback.",
    },
    {
      question: "Is TRUEQUE free to use?",
      answer:
        "TRUEQUE is designed as a skill exchange platform where users can share knowledge and learn from one another.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can use the contact or support options available on the TRUEQUE website for assistance.",
    },
    {
      question: "Can I update my profile?",
      answer:
        "Yes. Visit the Edit Profile section to update your personal information.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="trueque-help-page">

      {/* Hero Section */}
      <section className="help-hero">
        <h1>Help & Support</h1>

        <p>
          We're here to help you learn, teach and grow with TRUEQUE.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="help-section">

        <div className="help-heading">
          <h2>Frequently Asked Questions</h2>

          <p>
            Find answers to commonly asked questions about TRUEQUE.
          </p>
        </div>

        <div className="faq-container">

          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${
                openIndex === index ? "active" : ""
              }`}
              key={index}
            >

              <button
                type="button"
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>

                <span className="faq-icon">
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

      </section>

      {/* Contact Support Section */}
      <section className="help-contact">

        <h2>Still Need Help?</h2>

        <p>
          Have another question? We're happy to help you.
        </p>

        <a href="mailto:support@trueque.com">
          Contact Support
        </a>

      </section>

    </div>
  );
}

export default Help;