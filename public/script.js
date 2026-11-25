// Nav: shadow on scroll
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 20);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Mobile menu
const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");
const setMenu = (open) => {
  links.classList.toggle("is-open", open);
  nav.classList.toggle("menu-open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
};
toggle.addEventListener("click", () => setMenu(!links.classList.contains("is-open")));
links.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));

// "Select" on a package pre-fills the booking form
const select = document.getElementById("packageSelect");
document.querySelectorAll("[data-package]").forEach((btn) =>
  btn.addEventListener("click", () => { select.value = btn.dataset.package; })
);

// Booking form (front-end only until a form service is connected)
const form = document.getElementById("bookForm");
const msg = document.getElementById("formMsg");
form.addEventListener("submit", (e) => {
  // Bot filled the hidden honeypot field: silently drop the submission
  if (form.querySelector('[name="_gotcha"]').value) { e.preventDefault(); form.reset(); return; }
  const required = form.querySelectorAll("[required]");
  let ok = true;
  required.forEach((f) => {
    const bad = !f.value.trim() || !f.checkValidity();
    f.classList.toggle("invalid", bad);
    if (bad) ok = false;
  });
  if (!form.getAttribute("action")) e.preventDefault();
  if (email.value && !email.checkValidity()) { email.classList.add("invalid"); ok = false; }
  if (!ok) { e.preventDefault(); msg.textContent = "Please add your name, phone number and vehicle (and check your email if you added one)."; return; }
  if (!form.getAttribute("action")) {
    msg.textContent = "Got it, thanks! I'll text or call you soon to set a time.";
    form.reset();
  }
});

// Clear error styling as the user types; block past dates
form.querySelectorAll("input, textarea").forEach((f) =>
  f.addEventListener("input", () => f.classList.remove("invalid"))
);
const email = form.querySelector('[name="email"]');
email.addEventListener("blur", () => email.classList.toggle("invalid", !!email.value && !email.checkValidity()));
const t = new Date();
form.querySelector('[name="date"]').min =
  `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}`;

document.getElementById("year").textContent = new Date().getFullYear();
