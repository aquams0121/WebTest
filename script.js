function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const main    = document.getElementById('main');
  const isOpen  = sidebar.classList.toggle('open');
  main.classList.toggle('dimmed', isOpen);
}
