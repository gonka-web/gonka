// Theme toggle for landing page
document.addEventListener('DOMContentLoaded', function() {
  const themeButtons = document.querySelectorAll('.theme-btn');
  
  // Add click handlers to both theme buttons
  themeButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const targetTheme = this.getAttribute('data-theme');
      
      // Set theme
      document.body.setAttribute('data-md-color-scheme', targetTheme);
      localStorage.setItem('data-md-color-scheme', targetTheme);
    });
  });
  
  // Load saved theme on page load
  const savedScheme = localStorage.getItem('data-md-color-scheme');
  if (savedScheme) {
    document.body.setAttribute('data-md-color-scheme', savedScheme);
  } else {
    // Default to light theme if no saved preference
    document.body.setAttribute('data-md-color-scheme', 'default');
  }
});

