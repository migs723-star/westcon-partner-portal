/* ===========================
   Weston Partner Landing Page
   - Simple local login for now (swap for API/SSO later)
   - Set your partner credentials below
=========================== */

/**
 * OPTION A (recommended): multiple partner users.
 * Add as many as you want.
 * Example:
 *  { email: "partner@company.com", password: "Pass1234!", name: "ACME Partner" }
 */
const LOGIN_USERS = [
  // TODO: replace these with the SAME login details from your previous portal build
  { email: "partner@company.com", password: "Weston@123", name: "Partner User" },
];

/**
 * Basic token/session helpers
 */
const session = {
  key: "weston_partner_session",
  set(data, remember) {
    const payload = { ...data, ts: Date.now() };
    if (remember) localStorage.setItem(this.key, JSON.stringify(payload));
    else sessionStorage.setItem(this.key, JSON.stringify(payload));
  },
  clear() {
    localStorage.removeItem(this.key);
    sessionStorage.removeItem(this.key);
  },
  get() {
    const a = localStorage.getItem(this.key);
    const b = sessionStorage.getItem(this.key);
    return a ? JSON.parse(a) : (b ? JSON.parse(b) : null);
  }
};

const $ = (id) => document.getElementById(id);

function show(el){ el.classList.remove("hidden"); }
function hide(el){ el.classList.add("hidden"); }

function setAlert(message){
  const alert = $("alert");
  alert.textContent = message;
  show(alert);
}

function clearAlert(){
  const alert = $("alert");
  alert.textContent = "";
  hide(alert);
}

function setSuccess(){
  show($("successBox"));
}

function clearSuccess(){
  hide($("successBox"));
}

function findUser(email, password){
  const e = String(email || "").trim().toLowerCase();
  const p = String(password || "");
  return LOGIN_USERS.find(u => u.email.toLowerCase() === e && u.password === p);
}

/* ===== UI init ===== */
document.addEventListener("DOMContentLoaded", () => {
  // Footer year
  $("year").textContent = new Date().getFullYear();

  // Mobile nav
  const hamburger = $("hamburger");
  const mobileNav = $("mobileNav");
  hamburger?.addEventListener("click", () => {
    mobileNav.classList.toggle("hidden");
  });

  // Open login (scroll)
  const goLogin = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    $("email")?.focus();
  };
  $("openLoginTop")?.addEventListener("click", goLogin);
  $("openLoginHero")?.addEventListener("click", goLogin);
  $("openLoginMobile")?.addEventListener("click", () => {
    mobileNav.classList.add("hidden");
    goLogin();
  });

  // Toggle password visibility
  $("togglePw")?.addEventListener("click", () => {
    const pw = $("password");
    if (!pw) return;
    pw.type = pw.type === "password" ? "text" : "password";
  });

  // Forgot password (placeholder)
  $("forgotLink")?.addEventListener("click", (e) => {
    e.preventDefault();
    clearSuccess();
    setAlert("Password reset isn’t wired yet. Connect this to your IAM/SSO or support flow.");
  });

  // If already logged in, show success UI
  const existing = session.get();
  if (existing?.email){
    clearAlert();
    setSuccess();
    $("loginHint").innerHTML = `Signed in as <b>${existing.email}</b>.`;
  }

  // Login submit
  $("loginForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    clearAlert();
    clearSuccess();

    const email = $("email")?.value;
    const password = $("password")?.value;
    const remember = $("remember")?.checked;

    if (!email || !password){
      setAlert("Please enter both email and password.");
      return;
    }

    const user = findUser(email, password);
    if (!user){
      setAlert("Invalid credentials. Check your email/password or request access.");
      return;
    }

    // Set session
    session.set({ email: user.email, name: user.name }, !!remember);

    // Show success state (you can also redirect immediately)
    $("loginHint").innerHTML = `Signed in as <b>${user.email}</b>.`;
    setSuccess();

    // Optional: auto-redirect after a short delay (enable if you want)
    // setTimeout(() => window.location.href = "dashboard.html", 600);
  });
});
