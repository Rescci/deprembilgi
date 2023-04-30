const animeButton = document.querySelector('nav ul li:nth-of-type(2) a');
const animeDropdown = document.querySelector('nav ul li:nth-of-type(2) ul.dropdown-menu');
const dropdownItems = document.querySelectorAll('.dropdown-menu a');

animeButton.addEventListener('mouseenter', () => {
  animeDropdown.classList.add('show');
});

animeButton.addEventListener('mouseleave', () => {
  animeDropdown.classList.remove('show');
});

animeDropdown.addEventListener('mouseenter', () => {
  animeDropdown.classList.add('show');
});

animeDropdown.addEventListener('mouseleave', () => {
  animeDropdown.classList.remove('show');
});

dropdownItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    animeDropdown.classList.add('show');
  });

  item.addEventListener('mouseleave', () => {
    animeDropdown.classList.remove('show');
  });
});
