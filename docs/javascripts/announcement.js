document.addEventListener('DOMContentLoaded', function() {
  // Get all announcement items
  const announcementItems = document.querySelectorAll('.announcement-item');
  
  announcementItems.forEach(item => {
    const header = item.querySelector('.announcement-item-header');
    const toggle = item.querySelector('.announcement-toggle');
    const content = item.querySelector('.announcement-item-content');
    const svg = toggle.querySelector('svg');
    
    // Add click event to entire item
    item.addEventListener('click', function() {
      // Close all other items
      announcementItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('expanded');
          const otherSvg = otherItem.querySelector('.announcement-toggle svg');
          otherSvg.innerHTML = '<path d="M8 4V12M4 8H12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
        }
      });
      
      // Toggle current item
      if (item.classList.contains('expanded')) {
        item.classList.remove('expanded');
        svg.innerHTML = '<path d="M8 4V12M4 8H12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
      } else {
        item.classList.add('expanded');
        svg.innerHTML = '<path d="M4 8H12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
      }
    });
  });
});
