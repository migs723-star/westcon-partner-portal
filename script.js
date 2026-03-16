/* ===========================
   Weston Partner Landing Page
   - Simple local login for now (swap for API/SSO later)
   - Multi-user + role routing
=========================== */

const LOGIN_USERS = [
  // Demo Partner
  {
    login: "demo.partner@westcon.ai",
    password: "WestconDemo2026",
    name: "Demo Partner",
    role: "partner",
    redirect: "dashboard.html"
  },

  // Admin
  {
    login: "WestconAdmin",
    password: "NewGenIT.ai2026",
    name: "Westcon Admin",
    role: "admin",
    redirect: "WestconAdmin.html"
  },
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

function normalizeLogin(val){
  return String(val || "").trim().toLowerCase();
}

function findUser(login, password){
  const l = normalizeLogin(login);
  const p = String(password || "");
  return LOGIN_USERS.find(u => normalizeLogin(u.login) === l && u.password === p);
}

function updateSuccessCTA(user){
  const btn = document.querySelector("#successBox a.btn");
  if (!btn) return;

  // Keep styling identical; only adjust destination + label
  btn.href = user.redirect;

  if (user.role === "admin") {
    btn.textContent = "Continue to Admin Portal";
  } else {
    btn.textContent = "Continue to Dashboard";
  }
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
  if (existing?.login){
    clearAlert();
    setSuccess();
    $("loginHint").innerHTML = `Signed in as <b>${existing.login}</b>.`;
    updateSuccessCTA(existing);
  }

  // Login submit
  $("loginForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    clearAlert();
    clearSuccess();

    const login = $("email")?.value;
    const password = $("password")?.value;
    const remember = $("remember")?.checked;

    if (!login || !password){
      setAlert("Please enter both email/username and password.");
      return;
    }

    const user = findUser(login, password);
    if (!user){
      setAlert("Invalid credentials. Check your login/password or request access.");
      return;
    }

    // Set session
    const sessionData = {
      login: user.login,
      name: user.name,
      role: user.role,
      redirect: user.redirect
    };
    session.set(sessionData, !!remember);

    // Show success state
    $("loginHint").innerHTML = `Signed in as <b>${user.login}</b>.`;
    updateSuccessCTA(user);
    setSuccess();

    // Auto-route admin immediately (as requested)
    if (user.role === "admin") {
      window.location.href = user.redirect; // WestconAdmin.html
    }
  });
});
