import emailjs from "@emailjs/browser";

// EmailJS configuration
// For Vite, use import.meta.env instead of process.env
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_4hvuwvi";
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_6dtzpwe";
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "L-CJ0vJn-NyQqHHHa";

/**
 * Initialize EmailJS
 */
export const initializeEmailJS = () => {
  try {
    emailjs.init(PUBLIC_KEY);
  } catch (error) {
    console.error("Failed to initialize EmailJS:", error);
  }
};

/**
 * Send contact form email
 * @param {object} formData - Form data with name, email, subject, message
 * @returns {Promise} EmailJS response
 */
export const sendContactEmail = async (formData) => {
  try {
    // Check if EmailJS is properly initialized
    if (!PUBLIC_KEY) {
      return {
        success: false,
        message: "Email service not configured. Please check your environment variables.",
        error: new Error("Missing EmailJS configuration"),
      };
    }

    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      from_name: formData.name,
      from_email: formData.email,
      to_email: "shabingeorge6705@gmail.com", // Your email
      subject: formData.subject,
      message: formData.message,
      reply_to: formData.email,
    });

    return {
      success: true,
      message: "Email sent successfully!",
      response,
    };
  } catch (error) {
    console.error("EmailJS error:", error);

    // Provide user-friendly error messages
    let errorMessage = "Failed to send email. Please try again.";
    if (error.status === 404) {
      errorMessage = "Email service not properly configured. Please contact the site owner.";
    }

    return {
      success: false,
      message: errorMessage,
      error,
    };
  }
};

/**
 * Send test email (for verification)
 * @returns {Promise} EmailJS response
 */
export const sendTestEmail = async () => {
  return sendContactEmail({
    name: "Test User",
    email: "test@example.com",
    subject: "Test Email",
    message: "This is a test email to verify EmailJS integration.",
  });
};
