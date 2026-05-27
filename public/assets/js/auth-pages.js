import { loginUser, signupUser, session } from "./api.js";

const toastElement = document.getElementById("appToast");

const getRoleHome = (role) => {
  if (role === "owner") {
    return "/owner";
  }

  if (role === "admin") {
    return "/admin";
  }

  return "/";
};

const showToast = (message, isError = false) => {
  toastElement.textContent = message;
  toastElement.style.background = isError ? "rgba(193, 67, 67, 0.95)" : "rgba(23, 54, 48, 0.92)";
  toastElement.classList.remove("hidden");
  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => {
    toastElement.classList.add("hidden");
  }, 3200);
};

if (session.getToken()) {
  window.location.replace(getRoleHome(session.getUser()?.role));
}

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

if (loginForm) {
  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(loginForm);
    const payload = Object.fromEntries(formData.entries());

    try {
      const data = await loginUser(payload);
      session.set(data);
      showToast("Logged in successfully.");
      window.setTimeout(() => {
        window.location.href = getRoleHome(data.user?.role);
      }, 500);
    } catch (error) {
      showToast(error.message, true);
    }
  });
}

if (signupForm) {
  signupForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(signupForm);
    const payload = Object.fromEntries(formData.entries());

    try {
      const data = await signupUser(payload);
      session.set(data);
      showToast("Account created successfully.");
      window.setTimeout(() => {
        window.location.href = getRoleHome(data.user?.role);
      }, 500);
    } catch (error) {
      showToast(error.message, true);
    }
  });
}
