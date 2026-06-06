/* ─── SHARED UTILITIES ─────────────────────────── */
var API_BASE = "http://localhost:5000/api";

function showToast(msg, type) {
  var t = document.createElement("div");
  t.className = "toast" + (type === "error" ? " err" : "");
  t.innerText = msg;
  document.body.appendChild(t);
  setTimeout(function () { if (t.parentNode) t.remove(); }, 3000);
}

function badgeClass(status) {
  if (status === "Contacted") return "badge badge-contacted";
  if (status === "Converted") return "badge badge-converted";
  return "badge badge-new";
}

function logout() {
  if (confirm("Logout from Mini CRM?")) {
    localStorage.clear();
    window.location.href = "index.html";
  }
}

/* auth guard — call on every protected page */
function requireAuth() {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
    return false;
  }
  return true;
}
