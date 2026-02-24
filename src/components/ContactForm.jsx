import React, { useState } from "react";
import { validateContactForm, sanitizeInput } from "../utils/validation";
import {
  showErrorToast,
  showLoadingToast,
  updateToastSuccess,
  updateToastError,
} from "../utils/toast";
import { sendContactEmail } from "../utils/emailjs-config";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: sanitizeInput(value),
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const now = Date.now();
    if (now - lastSubmitTime < 30000) {
      showErrorToast("Please wait before sending another message");
      return;
    }

    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      showErrorToast("Please fix the errors in the form");
      return;
    }

    setIsSubmitting(true);
    const toastId = showLoadingToast("Sending your message...");

    try {
      const result = await sendContactEmail(formData);

      if (result.success) {
        setLastSubmitTime(now);
        updateToastSuccess(toastId, "Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      } else {
        updateToastError(toastId, result.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      updateToastError(toastId, "An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (hasError) =>
    `w-full px-4 py-3 border-2 rounded-lg transition-colors focus:outline-none ${hasError ? "border-red-500 focus:border-red-500" : "focus:border-red-500"
    }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl mx-auto">
      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold mb-2 transition-colors"
          style={{ color: "var(--text-secondary)" }}
        >
          Your Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
          disabled={isSubmitting}
          className={inputClass(errors.name)}
          style={{
            backgroundColor: "var(--bg-tertiary)",
            color: "var(--text-primary)",
            borderColor: errors.name ? undefined : "var(--border)",
          }}
        />
        {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold mb-2 transition-colors"
          style={{ color: "var(--text-secondary)" }}
        >
          Your Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="your.email@example.com"
          disabled={isSubmitting}
          className={inputClass(errors.email)}
          style={{
            backgroundColor: "var(--bg-tertiary)",
            color: "var(--text-primary)",
            borderColor: errors.email ? undefined : "var(--border)",
          }}
        />
        {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
      </div>

      {/* Subject Field */}
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-semibold mb-2 transition-colors"
          style={{ color: "var(--text-secondary)" }}
        >
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          placeholder="Project Collaboration"
          disabled={isSubmitting}
          className={inputClass(errors.subject)}
          style={{
            backgroundColor: "var(--bg-tertiary)",
            color: "var(--text-primary)",
            borderColor: errors.subject ? undefined : "var(--border)",
          }}
        />
        {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold mb-2 transition-colors"
          style={{ color: "var(--text-secondary)" }}
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Tell me about your project or inquiry..."
          disabled={isSubmitting}
          rows="5"
          className={`${inputClass(errors.message)} resize-none`}
          style={{
            backgroundColor: "var(--bg-tertiary)",
            color: "var(--text-primary)",
            borderColor: errors.message ? undefined : "var(--border)",
          }}
        />
        {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
        <p className="text-sm mt-1 transition-colors" style={{ color: "var(--text-tertiary)" }}>
          {formData.message.length}/5000 characters
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-800 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <span className="inline-block w-4 h-4 border-2 border-white border-t-red-600 rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>

      <p className="text-xs text-center transition-colors" style={{ color: "var(--text-tertiary)" }}>
        * Required fields.
      </p>
    </form>
  );
};

export default ContactForm;
