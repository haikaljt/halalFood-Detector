import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <span className="section-label">
            AI-POWERED FOOD INGREDIENT DETECTOR
          </span>

          <h1>
            Know What You Eat.
            <span> Choose With Confidence.</span>
          </h1>

          <p>
            Identify food ingredients from product packaging using artificial
            intelligence. Understand what goes into your food before making a
            decision.
          </p>

          <div className="hero-actions">
            <Link to="/scanner" className="btn btn-primary">
              Scan Your Product
            </Link>

            <Link to="/about" className="btn btn-secondary">
              Learn More
            </Link>
          </div>

          <div className="hero-note">
            <span className="hero-note-icon">✓</span>
            AI-powered ingredient identification
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-placeholder">
            <div className="hero-icon">🥗</div>

            <h3>Food Ingredient Analysis</h3>

            <p>Helping you understand food ingredients through AI.</p>

            <div className="hero-decoration">
              <span>AI</span>
              <span>OCR</span>
              <span>NLP</span>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="section-heading">
          <span className="section-label">OUR FEATURES</span>

          <h2>Understand Your Food Ingredients</h2>

          <p>
            A simple way to identify and analyze ingredients listed on food
            product packaging.
          </p>
        </div>

        <div className="features-grid">
          <article className="feature-card">
            <div className="feature-icon">📷</div>

            <h3>Image Scanning</h3>

            <p>
              Upload a product packaging image to detect its ingredient list
              automatically.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-icon">🔍</div>

            <h3>Text Recognition</h3>

            <p>
              Extract ingredient information from packaging using Optical
              Character Recognition.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-icon">🧠</div>

            <h3>AI Classification</h3>

            <p>
              Analyze extracted ingredient names to identify their halal-related
              categories.
            </p>
          </article>
        </div>
      </section>

      <section className="how-it-works-section">
        <div className="section-heading">
          <span className="section-label">HOW IT WORKS</span>

          <h2>Three Simple Steps</h2>

          <p>
            The application processes product packaging images through an
            AI-powered pipeline.
          </p>
        </div>

        <div className="steps-grid">
          <article className="step-card">
            <span className="step-number">01</span>

            <h3>Upload Image</h3>

            <p>Select or upload a photo of the food product packaging.</p>
          </article>

          <article className="step-card">
            <span className="step-number">02</span>

            <h3>AI Processing</h3>

            <p>
              The system detects the ingredient list, extracts the text, and
              analyzes the ingredients.
            </p>
          </article>

          <article className="step-card">
            <span className="step-number">03</span>

            <h3>View Results</h3>

            <p>Review the ingredient classifications and the extracted text.</p>
          </article>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Analyze Your Food?</h2>

        <p>Start by uploading a picture of your food product packaging.</p>

        <Link to="/scanner" className="btn btn-light">
          Get Started
        </Link>
      </section>
    </div>
  );
}

export default HomePage;
