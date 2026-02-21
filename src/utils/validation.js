/**
 * Validate email address
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number (basic validation)
 * @param {string} phone - Phone number to validate
 * @returns {boolean} True if valid
 */
export const validatePhone = (phone) => {
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, "").length >= 10;
};

/**
 * Validate required field
 * @param {string} value - Value to check
 * @param {number} minLength - Minimum length (default 1)
 * @returns {boolean} True if valid
 */
export const validateRequired = (value, minLength = 1) => {
  return value && value.trim().length >= minLength;
};

/**
 * Validate message length
 * @param {string} message - Message to validate
 * @param {number} minLength - Minimum length (default 10)
 * @param {number} maxLength - Maximum length (default 5000)
 * @returns {boolean} True if valid
 */
export const validateMessage = (message, minLength = 10, maxLength = 5000) => {
  if (!message) return false;
  const trimmed = message.trim();
  return trimmed.length >= minLength && trimmed.length <= maxLength;
};

/**
 * Validate entire contact form
 * @param {object} formData - Form data object
 * @returns {object} Validation result with isValid and errors
 */
export const validateContactForm = (formData) => {
  const errors = {};

  if (!validateRequired(formData.name)) {
    errors.name = "Name is required";
  }

  if (!validateEmail(formData.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!validateRequired(formData.subject)) {
    errors.subject = "Subject is required";
  }

  if (!validateMessage(formData.message)) {
    errors.message = "Message must be between 10 and 5000 characters";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

/**
 * Sanitize user input to prevent XSS
 * @param {string} input - User input to sanitize
 * @returns {string} Sanitized input
 */
export const sanitizeInput = (input) => {
  if (!input) return "";

  const div = document.createElement("div");
  div.textContent = input;
  return div.innerHTML;
};

/**
 * Check if form has been modified
 * @param {object} original - Original form values
 * @param {object} current - Current form values
 * @returns {boolean} True if modified
 */
export const hasFormChanged = (original, current) => {
  return JSON.stringify(original) !== JSON.stringify(current);
};
