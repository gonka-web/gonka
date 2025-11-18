// Dropdown Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.nav-item-dropdown');
    
    dropdowns.forEach(dropdown => {
      const trigger = dropdown.querySelector('.nav-item');
      const menu = dropdown.querySelector('.dropdown-menu');
      const icon = dropdown.querySelector('.nav-icon');
      
      // Toggle dropdown on click
      trigger.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Close all other dropdowns and reset their icons
        dropdowns.forEach(otherDropdown => {
          if (otherDropdown !== dropdown) {
            otherDropdown.classList.remove('active');
            const otherIcon = otherDropdown.querySelector('.nav-icon');
            if (otherIcon) otherIcon.textContent = '+';
          }
        });
        
        // Toggle current dropdown
        const isActive = dropdown.classList.toggle('active');
        
        // Change icon based on state
        if (icon) {
          icon.textContent = isActive ? '−' : '+';
        }
      });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.nav-item-dropdown')) {
        dropdowns.forEach(dropdown => {
          dropdown.classList.remove('active');
          const icon = dropdown.querySelector('.nav-icon');
          if (icon) icon.textContent = '+';
        });
      }
    });
    
    // Close dropdowns on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        dropdowns.forEach(dropdown => {
          dropdown.classList.remove('active');
          const icon = dropdown.querySelector('.nav-icon');
          if (icon) icon.textContent = '+';
        });
      }
    });
  });