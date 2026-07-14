const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
}
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => navLinks?.classList.remove('open')));

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const form = document.getElementById('inquiryForm');
const note = document.getElementById('formNote');
if (form && note) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const plain = `Upit za čuvanje dece\n\nIme roditelja: ${data.get('parent')}\nUzrast deteta: ${data.get('age')}\nŽeljeni termin: ${data.get('date') || '-'}\nPoruka: ${data.get('message') || '-'}`;
    const whatsappUrl = `https://wa.me/381637436971?text=${encodeURIComponent(plain)}`;
    try {
      await navigator.clipboard.writeText(plain);
      note.innerHTML = 'Poruka je kopirana. Otvara se WhatsApp za slanje Katarini.';
    } catch (err) {
      note.textContent = 'Otvara se WhatsApp za slanje Katarini.';
    }
    window.open(whatsappUrl, '_blank', 'noopener');
  });
}
