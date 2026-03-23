// =============================================
// script.js — YouTube Clone JavaScript
// =============================================


// ── Filter chips: toggle active class ──
const chips = document.querySelectorAll('.filter-chips button');

chips.forEach(function(btn) {
  btn.addEventListener('click', function() {
    // Remove active from all chips
    chips.forEach(function(b) {
      b.classList.remove('active');
    });
    // Set active on the clicked one
    btn.classList.add('active');
  });
});


// ── Sidebar links: toggle active class ──
const sidebarLinks = document.querySelectorAll('.sidebar a');

sidebarLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    // Remove active from all links
    sidebarLinks.forEach(function(l) {
      l.classList.remove('active');
    });
    // Set active on the clicked one
    link.classList.add('active');
  });
});