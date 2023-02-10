document.addEventListener('click', (e) => {
  const isDropdownButton = e.target.matches('[data-dropdown-button]');
  // matches menggunakan css selector 

  if(!isDropdownButton && e.target.closest('[data-dropdown]') != null) return;
  // closest akan mengembalikan null jika target tidak sesuai selector
  // dan akan mengembalikan element jika sesuai selector
  // if diatas untuk mengabaikan setiap klik pada element tersebut

  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest('[data-dropdown]');
    currentDropdown.classList.toggle("act");
    // kok kalau pakai nama class active gak jalan ya? kenapa lagi ini?
  }

  // mematikan semua dropdown yang active
  document.querySelectorAll('[data-dropdown].act').forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove('act');
  });
});