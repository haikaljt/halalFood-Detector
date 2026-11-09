function ExtractedText({ text }) {
  return (
    <div className="extracted-text-container">
      <div className="extracted-text-header">
        <div>
          <h3>Extracted Text</h3>
          <p>Text recognized from the product image</p>
        </div>
      </div>

      <div className="extracted-text-content">
        {text ? (
          <p>{text}</p>
        ) : (
          <p className="empty-text">No text was extracted.</p>
        )}
      </div>
    </div>
  );
}

export default ExtractedText;
