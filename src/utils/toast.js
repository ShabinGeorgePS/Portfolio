import { toast } from "react-toastify";

/**
 * Show success toast notification
 * @param {string} message - Toast message
 * @param {number} autoClose - Auto close duration in ms
 */
export const showSuccessToast = (message, autoClose = 3000) => {
  toast.success(message, {
    position: "bottom-right",
    autoClose,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

/**
 * Show error toast notification
 * @param {string} message - Toast message
 * @param {number} autoClose - Auto close duration in ms
 */
export const showErrorToast = (message, autoClose = 4000) => {
  toast.error(message, {
    position: "bottom-right",
    autoClose,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

/**
 * Show info toast notification
 * @param {string} message - Toast message
 * @param {number} autoClose - Auto close duration in ms
 */
export const showInfoToast = (message, autoClose = 3000) => {
  toast.info(message, {
    position: "bottom-right",
    autoClose,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

/**
 * Show warning toast notification
 * @param {string} message - Toast message
 * @param {number} autoClose - Auto close duration in ms
 */
export const showWarningToast = (message, autoClose = 3000) => {
  toast.warning(message, {
    position: "bottom-right",
    autoClose,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

/**
 * Show loading toast notification
 * @param {string} message - Toast message
 * @returns {string} Toast ID for later updates
 */
export const showLoadingToast = (message) => {
  return toast.loading(message, {
    position: "bottom-right",
  });
};

/**
 * Update a loading toast with success
 * @param {string} toastId - Toast ID from showLoadingToast
 * @param {string} message - Success message
 * @param {number} autoClose - Auto close duration in ms
 */
export const updateToastSuccess = (toastId, message, autoClose = 3000) => {
  toast.update(toastId, {
    render: message,
    type: "success",
    isLoading: false,
    autoClose,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

/**
 * Update a loading toast with error
 * @param {string} toastId - Toast ID from showLoadingToast
 * @param {string} message - Error message
 * @param {number} autoClose - Auto close duration in ms
 */
export const updateToastError = (toastId, message, autoClose = 4000) => {
  toast.update(toastId, {
    render: message,
    type: "error",
    isLoading: false,
    autoClose,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

/**
 * Dismiss all toasts
 */
export const dismissAllToasts = () => {
  toast.dismiss();
};
