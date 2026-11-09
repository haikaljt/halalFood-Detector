const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

const MAX_FILE_SIZE = 5 * 1024 * 1024;

function validateImage(file) {
  if (!file) {
    return "Please select an image.";
  }

  if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
    return "Only JPG, PNG, and WEBP images are allowed.";
  }

  if (file.size > MAX_FILE_SIZE) {
    return "Image size must not exceed 5 MB.";
  }

  return null;
}

export default validateImage;
