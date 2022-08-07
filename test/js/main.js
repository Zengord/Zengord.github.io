document.documentElement.className = '';

function menuOpen() {
  if (document.documentElement.className == 'menu-open') {
    document.documentElement.className = '';
  } else {
    document.documentElement.className = 'menu-open';
  }
};