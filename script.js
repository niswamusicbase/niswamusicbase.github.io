// Highlight link halaman aktif
const links = document.querySelectorAll("nav a");
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.style.textDecoration = "underline";
  }
});
