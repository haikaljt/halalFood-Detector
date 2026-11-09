function ProductStatus({ status }) {
  const statusConfig = {
    halal: {
      label: "Halal",
      description: "No non-halal ingredients were identified in the analysis.",
      className: "status-halal",
    },
    "non-halal": {
      label: "Non-Halal",
      description: "One or more ingredients were identified as non-halal.",
      className: "status-non-halal",
    },
    syubhat: {
      label: "Syubhat",
      description: "One or more ingredients require further verification.",
      className: "status-syubhat",
    },
  };

  const currentStatus = statusConfig[status] || statusConfig.syubhat;

  return (
    <div className={`product-status ${currentStatus.className}`}>
      <div className="product-status-indicator"></div>

      <div>
        <span className="product-status-label">Analysis Result</span>
        <h2>{currentStatus.label}</h2>
        <p>{currentStatus.description}</p>
      </div>
    </div>
  );
}

export default ProductStatus;
