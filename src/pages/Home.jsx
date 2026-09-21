import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import heroImage from "../assets/trueque-hero.png";

function Home() {
return (
<div className="trueque-home">

{/* ================= HERO SECTION ================= */}  
  <section className="home-hero">  

    <img  
      src={heroImage}  
      alt="Students learning together"  
      className="home-hero-image"  
    />  

    <div className="home-hero-overlay"></div>  

    <div className="home-hero-content">  

      <p className="home-hero-small">  
        AI-POWERED SKILL EXCHANGE PLATFORM  
      </p>  

      <h1>  
        Learn Skills.  
        <br />  
        Share Knowledge.  
        <br />  
        <span>Grow Together.</span>  
      </h1>  

      <p className="home-hero-description">  
        Connect with people, exchange skills,  
        learn from others and share what you know  
        through TRUEQUE.  
      </p>  

      <div className="home-hero-buttons">  

        <Link  
          to="/register"  
          className="home-primary-button"  
        >  
          Join TRUEQUE →  
        </Link>  

        <Link  
          to="/matching"  
          className="home-secondary-button"  
        >  
          Explore Skills  
        </Link>  

      </div>  

    </div>  
  </section>  


  {/* ================= WELCOME SECTION ================= */}  
  <section className="welcome-section">  

    <div className="welcome-container">  

      <p className="home-section-label">  
        WELCOME TO TRUEQUE  
      </p>  

      <h2>  
        What would you like  
        <br />  
        to do today?  
      </h2>  

      <p className="welcome-description">  
        TRUEQUE helps learners and skill-sharing  
        enthusiasts connect with the right people  
        to learn, teach and exchange knowledge.  
      </p>  


      <div className="purpose-grid">  

        <Link  
          to="/matching"  
          className="purpose-card"  
        >  
          <div className="purpose-number">  
            01  
          </div>  

          <div className="purpose-icon">  
            📚  
          </div>  

          <h3>  
            I Want to Learn  
          </h3>  

          <p>  
            Discover new skills and learn from  
            people who have knowledge and experience.  
          </p>  

          <span>  
            Explore Skills →  
          </span>  
        </Link>  


        <Link  
          to="/profile"  
          className="purpose-card"  
        >  
          <div className="purpose-number">  
            02  
          </div>  

          <div className="purpose-icon">  
            🎓  
          </div>  

          <h3>  
            I Want to Teach  
          </h3>  

          <p>  
            Share your knowledge and help others  
            develop valuable skills.  
          </p>  

          <span>  
            Share Your Skills →  
          </span>  
        </Link>  


        <Link  
          to="/matching"  
          className="purpose-card"  
        >  
          <div className="purpose-number">  
            03  
          </div>  

          <div className="purpose-icon">  
            ⇄  
          </div>  

          <h3>  
            Learn & Teach  
          </h3>  

          <p>  
            Exchange knowledge by learning new  
            skills while teaching the skills you know.  
          </p>  

          <span>  
            Start Skill Exchange →  
          </span>  
        </Link>  

      </div>  

    </div>  

  </section>  


  {/* ================= SKILLS SECTION ================= */}  
  <section className="home-skills-section">  

    <div className="home-section-heading">  

      <div>  

        <p className="home-section-label">  
          EXPLORE SKILLS  
        </p>  

        <h2>  
          Skills for every learner  
        </h2>  

        <p>  
          Discover skills you can learn,  
          teach and exchange through TRUEQUE.  
        </p>  

      </div>  

      <Link  
        to="/matching"  
        className="section-link"  
      >  
        View All Skills →  
      </Link>  

    </div>  


    <div className="home-skill-grid">  

      <div className="home-skill-card">  

        <div className="skill-image skill-programming">  
          <span>&lt;/&gt;</span>  
        </div>  

        <div className="skill-card-content">  

          <p className="skill-category">  
            TECHNOLOGY  
          </p>  

          <h3>  
            Programming  
          </h3>  

          <p>  
            Learn programming concepts,  
            languages and development skills.  
          </p>  

          <Link to="/matching">  
            Explore Skill →  
          </Link>  

        </div>  

      </div>  


      <div className="home-skill-card">  

        <div className="skill-image skill-web">  
          <span>◎</span>  
        </div>  

        <div className="skill-card-content">  

          <p className="skill-category">  
            TECHNOLOGY  
          </p>  

          <h3>  
            Web Development  
          </h3>  

          <p>  
            Build modern websites and learn  
            frontend development.  
          </p>  

          <Link to="/matching">  
            Explore Skill →  
          </Link>  

        </div>  

      </div>  


      <div className="home-skill-card">  

        <div className="skill-image skill-design">  
          <span>✎</span>  
        </div>  

        <div className="skill-card-content">  

          <p className="skill-category">  
            DESIGN  
          </p>  

          <h3>  
            UI/UX Design  
          </h3>  

          <p>  
            Learn how to create meaningful  
            digital experiences.  
          </p>  

          <Link to="/matching">  
            Explore Skill →  
          </Link>  

        </div>  

      </div>  


      <div className="home-skill-card">  

        <div className="skill-image skill-photo">  
          <span>📷</span>  
        </div>  

        <div className="skill-card-content">  

          <p className="skill-category">  
            CREATIVE  
          </p>  

          <h3>  
            Photography  
          </h3>  

          <p>  
            Improve your photography and  
            visual storytelling skills.  
          </p>  

          <Link to="/matching">  
            Explore Skill →  
          </Link>  

        </div>  

      </div>  

    </div>  

  </section>  


  {/* ================= TRUEQUE FEATURES ================= */}  
  <section className="features-section">  

    <div className="features-heading">  

      <p className="home-section-label">  
        WHAT TRUEQUE OFFERS  
      </p>  

      <h2>  
        Everything you need  
        <br />  
        to exchange skills  
      </h2>  

      <p>  
        From finding the right skill partner  
        to verifying your knowledge, TRUEQUE  
        supports your complete learning journey.  
      </p>  

    </div>  


    <div className="features-grid">  

      <div className="feature-card">  

        <div className="feature-number">  
          01  
        </div>  

        <div className="feature-icon">  
          🔎  
        </div>  

        <h3>  
          Skill Matching  
        </h3>  

        <p>  
          Find people whose skills match  
          what you want to learn or teach.  
        </p>  

        <Link to="/matching">  
          Find Matches →  
        </Link>  

      </div>  


      <div className="feature-card">  

        <div className="feature-number">  
          02  
        </div>  

        <div className="feature-icon">  
          ✓  
        </div>  

        <h3>  
          Skill Verification  
        </h3>  

        <p>  
          Take skill quizzes and earn  
          verification badges.  
        </p>  

        <Link to="/quiz">  
          Verify Skills →  
        </Link>  

      </div>  


      <div className="feature-card">  

        <div className="feature-number">  
          03  
        </div>  

        <div className="feature-icon">  
          💻  
        </div>  

        <h3>  
          Learning Sessions  
        </h3>  

        <p>  
          Connect with your partner and  
          learn together through sessions.  
        </p>  

        <Link to="/session">  
          Start Session →  
        </Link>  

      </div>  


      <div className="feature-card">  

        <div className="feature-number">  
          04  
        </div>  

        <div className="feature-icon">  
          ✎  
        </div>  

        <h3>  
          Interactive Whiteboard  
        </h3>  

        <p>  
          Explain concepts visually using  
          the TRUEQUE learning whiteboard.  
        </p>  

        <Link to="/whiteboard">  
          Open Whiteboard →  
        </Link>  

      </div>  

    </div>  

  </section>  


  {/* ================= PROMOTIONAL BANNER ================= */}  
  <section className="home-promo">  

    <div className="home-promo-overlay"></div>  

    <div className="home-promo-content">  

      <p className="home-section-label">  
        LEARNING MADE SIMPLE  
      </p>  

      <h2>  
        Your knowledge can  
        <br />  
        help someone grow.  
      </h2>  

      <p>  
        Share what you know.  
        Learn what you love.  
        Exchange skills with TRUEQUE.  
      </p>  

      <Link  
        to="/register"  
        className="home-primary-button"  
      >  
        Join For Free →  
      </Link>  

    </div>  

  </section>  


  {/* ================= WHY TRUEQUE ================= */}  
  <section className="why-trueque-section">  

    <div className="why-trueque-content">  

      <p className="home-section-label">  
        WHY TRUEQUE?  
      </p>  

      <h2>  
        Learning becomes  
        <br />  
        better together.  
      </h2>  

      <p>  
        TRUEQUE brings people together to exchange  
        knowledge, develop new skills and create  
        meaningful learning connections.  
      </p>  

      <p>  
        Instead of learning alone, connect with  
        someone who knows what you want to learn  
        and share the skills you already have.  
      </p>  

      <Link  
        to="/matching"  
        className="home-primary-button"  
      >  
        Discover TRUEQUE →  
      </Link>  

    </div>  


    <div className="why-trueque-visual">  

      <div className="why-visual-card">  

        <div className="visual-icon">  
          🤝  
        </div>  

        <h3>  
          Learn Together  
        </h3>  

        <p>  
          Knowledge grows when it is shared.  
        </p>  

      </div>  

      <div className="why-visual-card visual-card-two">  

        <div className="visual-icon">  
          🌱  
        </div>  

        <h3>  
          Grow Together  
        </h3>  

        <p>  
          Build skills through meaningful connections.  
        </p>  

      </div>  

    </div>  

  </section>  


  {/* ================= HOW IT WORKS ================= */}  
  <section className="how-section">  

    <div className="how-heading">  

      <p className="home-section-label">  
        HOW IT WORKS  
      </p>  

      <h2>  
        Start your skill exchange  
      </h2>  

      <p>  
        Getting started with TRUEQUE is simple.  
      </p>  

    </div>  


    <div className="how-grid">  

      <div className="how-step">  

        <span>  
          01  
        </span>  

        <h3>  
          Create Your Profile  
        </h3>  

        <p>  
          Register and tell us about your  
          education, location and interests.  
        </p>  

      </div>  


      <div className="how-line"></div>  


      <div className="how-step">  

        <span>  
          02  
        </span>  

        <h3>  
          Choose Your Skills  
        </h3>  

        <p>  
          Select skills you want to learn  
          and skills you can teach.  
        </p>  

      </div>  


      <div className="how-line"></div>  


      <div className="how-step">  

        <span>  
          03  
        </span>  

        <h3>  
          Find Your Match  
        </h3>  

        <p>  
          Connect with people who have  
          complementary skills.  
        </p>  

      </div>  


      <div className="how-line"></div>  


      <div className="how-step">  

        <span>  
          04  
        </span>  

        <h3>  
          Learn & Exchange  
        </h3>  

        <p>  
          Start your session, use the  
          whiteboard and exchange knowledge.  
        </p>  

      </div>  

    </div>  

  </section>  


  {/* ================= EXPLORE TRUEQUE ================= */}  
  <section className="explore-section">  

    <div className="explore-content">  

      <p className="home-section-label">  
        EXPLORE TRUEQUE  
      </p>  

      <h2>  
        Learn.  
        <br />  
        Teach.  
        <br />  
        Exchange.  
      </h2>  

      <p>  
        Explore the TRUEQUE learning community  
        and discover opportunities to develop  
        your skills with others.  
      </p>  

      <Link  
        to="/dashboard"  
        className="explore-button"  
      >  
        Explore Dashboard →  
      </Link>  

    </div>  


    <div className="explore-cards">  

      <div className="explore-card">  

        <span>  
          📚  
        </span>  

        <h3>  
          Learn New Skills  
        </h3>  

        <p>  
          Discover skills that interest you.  
        </p>  

      </div>  


      <div className="explore-card">  

        <span>  
          🎓  
        </span>  

        <h3>  
          Share Knowledge  
        </h3>  

        <p>  
          Teach skills you already know.  
        </p>  

      </div>  


      <div className="explore-card">  

        <span>  
          🤝  
        </span>  

        <h3>  
          Build Connections  
        </h3>  

        <p>  
          Meet people and learn together.  
        </p>  

      </div>  

    </div>  

  </section>  


  {/* ================= FINAL CTA ================= */}  
  <section className="final-cta">  

    <div>  

      <p className="home-section-label">  
        START YOUR JOURNEY  
      </p>  

      <h2>  
        Ready to exchange  
        <br />  
        your skills?  
      </h2>  

      <p>  
        Join TRUEQUE and become part of  
        a community where knowledge is shared.  
      </p>  

    </div>  


    <div className="final-cta-buttons">  

      <Link  
        to="/register"  
        className="final-primary-button"  
      >  
        Create Account →  
      </Link>  

      <Link  
        to="/login"  
        className="final-secondary-button"  
      >  
        Login  
      </Link>  

    </div>  

  </section>  

</div>

);
}

export default Home;
