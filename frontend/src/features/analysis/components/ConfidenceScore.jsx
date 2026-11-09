function ConfidenceScore({ score }) {
  const percentage = Math.min(
    100,
    Math.max(0, score <= 1 ? score * 100 : score),
  );

  return (
    <div className="confidence-container">
      <div className="confidence-header">
        <div>
          <h3>Analysis Confidence</h3>
          <p>Model prediction confidence score</p>
        </div>

        <strong>{percentage.toFixed(1)}%</strong>
      </div>

      <div
        className="confidence-track"
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="Analysis confidence"
      >
        <div
          className="confidence-progress"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ConfidenceScore;
