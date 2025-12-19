const THEME_KEY = "family_training_theme";
const themeToggle = document.getElementById("themeToggle");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

function loadTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  return stored || (prefersDark ? "dark" : "light");
}

function saveTheme(theme) {
  localStorage.setItem(THEME_KEY, theme);
}

export function initTheme() {
  const current = loadTheme();
  applyTheme(current);
  if (themeToggle) {
    themeToggle.checked = current === "dark";
    themeToggle.addEventListener("change", () => {
      const next = themeToggle.checked ? "dark" : "light";
      applyTheme(next);
      saveTheme(next);
    });
  }
}
