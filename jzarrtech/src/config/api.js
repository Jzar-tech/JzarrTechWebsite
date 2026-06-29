const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "https://api.jzarrtech.com";

export const CONTACT_API_URL = `${API_BASE_URL.replace(/\/$/, "")}/api/contact`;
