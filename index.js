document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('menu-button');
    const menu = document.querySelector('.absolute');

    button.addEventListener('click', function() {
      menu.classList.toggle('hidden');
    });

    // Close the dropdown when clicking outside of it
    document.addEventListener('click', function(event) {
      if (!menu.contains(event.target) && event.target !== button) {
        menu.classList.add('hidden');
      }
    });

    // Handle item selection
    const menuItems = document.querySelectorAll('.py-1 a');

    menuItems.forEach(item => {
      item.addEventListener('click', function() {
        const selectedItemText = item.textContent;
        button.innerHTML = `${selectedItemText} <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"/></svg>`;
        menu.classList.add('hidden');
      });
    });
  });