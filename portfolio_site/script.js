// script.js - simple interactions: mobile nav toggle, smooth scroll, sendMail stub

document.addEventListener("DOMContentLoaded", function () {
  // update year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("primary-navigation");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.style.display = expanded ? null : "block"; // simple show/hide
    });
  }

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener("click", function(e){
      const targetId = this.getAttribute("href").slice(1);
      const target = document.getElementById(targetId);
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:"smooth", block:"start"});
      }
    });
  });
});

// contact form: open user's mail client with prefilled email (no backend)
function sendMail() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const subject = encodeURIComponent("Portfolio site message from " + name);
  const body = encodeURIComponent("Name: " + name + "\\nEmail: " + email + "\\n\\n" + message);

  // change the email address below to your real address
  window.location.href = "mailto:you@example.com?subject=" + subject + "&body=" + body;
  return false; // prevent actual form submission
}
