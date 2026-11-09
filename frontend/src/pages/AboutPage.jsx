function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <span className="section-label">ABOUT THE PROJECT</span>

        <h1>
          Making Food Ingredient Information
          <span> Easier to Understand</span>
        </h1>

        <p>
          HalalFood Detector is a web-based application designed to identify
          halal-related food ingredients from product packaging using artificial
          intelligence.
        </p>
      </section>

      <section className="about-section">
        <div className="about-content">
          <div>
            <span className="section-label">OUR PURPOSE</span>

            <h2>Why HalalFood Detector?</h2>
          </div>

          <p>
            Food product packaging contains important information about the
            ingredients used in a product. However, identifying and
            understanding unfamiliar ingredient names can be challenging for
            consumers.
          </p>

          <p>
            This application aims to help users analyze ingredient information
            by automatically detecting the composition area, extracting its
            text, and classifying the identified ingredients.
          </p>
        </div>
      </section>

      <section className="technology-section">
        <div className="section-heading">
          <span className="section-label">OUR TECHNOLOGY</span>

          <h2>Powered by Artificial Intelligence</h2>

          <p>
            The application combines computer vision, optical character
            recognition, and natural language processing.
          </p>
        </div>

        <div className="technology-grid">
          <article className="technology-card">
            <span className="technology-number">01</span>

            <h3>YOLO</h3>

            <p>
              Detects the ingredient-list region on the uploaded product
              packaging image.
            </p>
          </article>

          <article className="technology-card">
            <span className="technology-number">02</span>

            <h3>PaddleOCR</h3>

            <p>
              Extracts ingredient text from the detected region of the product
              packaging.
            </p>
          </article>

          <article className="technology-card">
            <span className="technology-number">03</span>

            <h3>mBERT</h3>

            <p>
              Analyzes the extracted ingredient text and predicts its
              halal-related category.
            </p>
          </article>
        </div>
      </section>

      <section className="about-section process-section">
        <div className="section-heading">
          <span className="section-label">SYSTEM WORKFLOW</span>

          <h2>How the System Works</h2>
        </div>

        <div className="workflow-list">
          <div className="workflow-item">
            <span>01</span>
            <div>
              <h3>Image Upload</h3>
              <p>Users upload a food product packaging image.</p>
            </div>
          </div>

          <div className="workflow-item">
            <span>02</span>
            <div>
              <h3>Ingredient Region Detection</h3>
              <p>YOLO identifies the area containing the ingredient list.</p>
            </div>
          </div>

          <div className="workflow-item">
            <span>03</span>
            <div>
              <h3>Text Extraction</h3>
              <p>PaddleOCR extracts text from the detected region.</p>
            </div>
          </div>

          <div className="workflow-item">
            <span>04</span>
            <div>
              <h3>Ingredient Classification</h3>
              <p>
                mBERT analyzes the extracted text and classifies the
                ingredients.
              </p>
            </div>
          </div>

          <div className="workflow-item">
            <span>05</span>
            <div>
              <h3>Display Results</h3>
              <p>The application presents the analysis results to the user.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="disclaimer-section">
        <div className="disclaimer-icon">ⓘ</div>

        <div>
          <h3>Important Information</h3>

          <p>
            The results provided by this application are based on automated
            analysis of ingredient information extracted from product packaging.
            They do not constitute official halal certification and should not
            replace verification from authorized halal certification bodies.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
