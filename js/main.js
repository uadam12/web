const darkMode = document.getElementById('dark-mode');


darkMode.addEventListener('change', () => {
  if(darkMode.checked) {
    document.documentElement.setAttribute('data-bs-theme', 'dark');
    localStorage.setItem("theme", "Smith");
  } else {
    document.documentElement.setAttribute('data-bs-theme', 'light');
  }
});