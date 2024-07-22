function toggleTheme() {
  const currentTheme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
  const currentIcon = document.getElementById("theme-icon").innerHTML;
  const currentLogo = document.getElementById("logo-image").src;
  const newIcon = currentIcon === 'sunny' ? 'bedtime' : 'sunny';
  const newLogo = currentTheme === 'light' ? '/image/logo-dark.png' : '/image/logo-light.png';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  document.body.classList.remove(currentTheme + '-mode');
  document.body.classList.add(newTheme + '-mode');
  document.getElementById("theme-icon").innerHTML = newIcon;
  document.getElementById("logo-image").src = newLogo;

  localStorage.setItem('theme', newTheme);
  localStorage.setItem('theme-icon', newIcon);
  localStorage.setItem('logo', newLogo);

  console.log("Theme changed from", currentTheme, "to", newTheme);
  console.log("Icon changed from", currentIcon, "to", newIcon);
  console.log("Logo changed from", currentLogo, "to", newLogo);
}

document.addEventListener('DOMContentLoaded', (event) => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.classList.add(savedTheme + '-mode');
  const savedIcon = localStorage.getItem('theme-icon') || 'sunny';
  document.getElementById("theme-icon").innerHTML = savedIcon;
  const savedLogo = localStorage.getItem('logo') || '/image/logo-light.png';
  document.getElementById("logo-image").src = savedLogo;
  console.log("Loaded Logo from localStorage:", savedLogo); 
});

const themeToggleButton = document.getElementById('theme-toggle');
themeToggleButton.addEventListener('click', toggleTheme);
