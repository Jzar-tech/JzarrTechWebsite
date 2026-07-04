// const API_BASE_URL =
//   process.env.REACT_APP_API_BASE_URL || "http://localhost:5000/api/contact";

// export const CONTACT_API_URL = `${API_BASE_URL.replace(/\/$/, "")}/api/contact`;


const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

export const CONTACT_API_URL = `${API_BASE_URL.replace(/\/$/, "")}/api/contact`;