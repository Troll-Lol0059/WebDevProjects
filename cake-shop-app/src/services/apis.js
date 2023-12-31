const BASE_URL = process.env.REACT_APP_BASE_URL

// AUTH ENDPOINTS
export const endpoints = {
    SENDOTP_API: BASE_URL + "/sendotp",
    SIGNUP_API: BASE_URL + "/createUser",
    LOGIN_API: BASE_URL + "/login",
    // RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
    // RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
  }
  