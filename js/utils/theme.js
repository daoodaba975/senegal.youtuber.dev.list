const THEME_KEY = "theme-preference";

export function setupTheme() {
  const themeToggle = document.getElementById("themeToggle");
  const moonIcon = document.getElementById("moonIcon");
  const sunIcon = document.getElementById("sunIcon");

  const savedTheme = localStorage.getItem(THEME_KEY);
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");

  setTheme(initialTheme);
  updateToggleButton(initialTheme === "dark");

  themeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.classList.contains("dark");
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);
    updateToggleButton(!isDark);
    localStorage.setItem(THEME_KEY, newTheme);
  });

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (!localStorage.getItem(THEME_KEY)) {
        const newTheme = e.matches ? "dark" : "light";
        setTheme(newTheme);
        updateToggleButton(e.matches);
      }
    });
}

function setTheme(theme) {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

function updateToggleButton(isDark) {
  const moonIcon = document.getElementById("moonIcon");
  const sunIcon = document.getElementById("sunIcon");

  if (isDark) {
    moonIcon.classList.add("hidden");
    sunIcon.classList.remove("hidden");
  } else {
    moonIcon.classList.remove("hidden");
    sunIcon.classList.add("hidden");
  }
}
