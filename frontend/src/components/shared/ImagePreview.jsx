function ImagePreview({ file, previewUrl, onRemove, onChange }) {
  const fileSize = (file.size / (1024 * 1024)).toFixed(2);

  return (
    <div className="image-preview-container">
      <div className="image-preview-header">
        <div>
          <h3>Image Preview</h3>
          <p>Your selected product image</p>
        </div>

        <span className="preview-status">Ready</span>
      </div>

      <div className="image-preview">
        <img src={previewUrl} alt="Selected food product packaging" />
      </div>

      <div className="image-file-info">
        <div>
          <p className="file-name">{file.name}</p>
          <p className="file-size">{fileSize} MB</p>
        </div>

        <div className="preview-actions">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onChange}
          >
            Change Image
          </button>

          <button type="button" className="btn btn-danger" onClick={onRemove}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImagePreview;
