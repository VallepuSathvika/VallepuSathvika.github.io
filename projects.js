// Save the scroll position so we can restore it later
let scrollPosition = 0;

function openModal(id) {
  const modal = document.getElementById(id);
  // Save current scroll
  scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  // Prevent page jump: lock scroll by fixing body and setting top
  document.body.style.top = `-${scrollPosition}px`;
  document.body.style.position = 'fixed';
  document.body.style.width = '100%';

  modal.style.display = 'flex';
}

function closeModal(id) {
  const modal = document.getElementById(id);
  modal.style.display = 'none';

  // Restore page scroll
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  window.scrollTo(0, scrollPosition);
}

// close modal when clicking outside modal-content
window.addEventListener('click', function (e) {
  const modal = document.getElementById('project1Modal');
  if (!modal) return;
  if (e.target === modal) closeModal('project1Modal');
});
