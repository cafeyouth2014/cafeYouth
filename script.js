// Mobile nav toggle
document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('nav-links').classList.toggle('open');
});

// Menu tab switching
function showMenu(id, btn) {
    document.querySelectorAll('.menu-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.menu-tab').forEach(b => b.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    btn.classList.add('active');
    btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}

// Navbar active link highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 100) current = s.id;
    });
    navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + current
            ? '#e8843a' : '';
    });
});

// Price Update: <=150 pe +20, >150 pe +30
document.querySelectorAll('.prices span, .menu-item .prices span').forEach(el => {
  const match = el.textContent.match(/₹(\d+)/);
  if (match) {
    const oldPrice = parseInt(match[1]);
    const newPrice = oldPrice <= 150 ? oldPrice + 20 : oldPrice + 30;
    el.textContent = el.textContent.replace(/₹\d+/, '₹' + newPrice);
  }
});
