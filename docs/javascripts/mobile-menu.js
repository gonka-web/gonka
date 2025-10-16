// Mobile Menu Functionality
(function() {
  function initMobileMenu() {
    // Wait for DOM to be ready
    setTimeout(function() {
      const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
      const mobileMenu = document.getElementById('mobile-menu');
      const mobileMenuClose = document.getElementById('mobile-menu-close');
      
      if (!mobileMenuToggle || !mobileMenu) {
        console.log('Mobile menu elements not found');
        console.log('mobileMenuToggle:', mobileMenuToggle);
        console.log('mobileMenu:', mobileMenu);
        return;
      }
      
      console.log('Mobile menu elements found:', {
        toggle: mobileMenuToggle,
        menu: mobileMenu,
        close: mobileMenuClose
      });

      // Function to close mobile menu
      function closeMobileMenu() {
        mobileMenuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      }

      // Toggle mobile menu
      mobileMenuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        mobileMenuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (mobileMenu.classList.contains('active')) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
      });

      // Close mobile menu when clicking close button
      if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          closeMobileMenu();
        });
      }

      // Close mobile menu when clicking outside
      document.addEventListener('click', function(e) {
        if (mobileMenu.classList.contains('active') && 
            !mobileMenu.contains(e.target) && 
            !mobileMenuToggle.contains(e.target)) {
          closeMobileMenu();
        }
      });

      // Handle mobile dropdown toggles
      const mobileDropdownTriggers = document.querySelectorAll('.mobile-nav-item[data-mobile-dropdown]');
      
      mobileDropdownTriggers.forEach(function(trigger) {
        trigger.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          
          const dropdownId = this.getAttribute('data-mobile-dropdown');
          const dropdown = document.getElementById('mobile-' + dropdownId);
          const parent = this.closest('.mobile-nav-item-dropdown');
          
          if (!dropdown || !parent) return;
          
          // Close other dropdowns
          mobileDropdownTriggers.forEach(function(otherTrigger) {
            const otherDropdownId = otherTrigger.getAttribute('data-mobile-dropdown');
            const otherDropdown = document.getElementById('mobile-' + otherDropdownId);
            const otherParent = otherTrigger.closest('.mobile-nav-item-dropdown');
            
            if (otherParent !== parent && otherDropdown && otherParent) {
              otherParent.classList.remove('active');
            }
          });
          
          // Toggle current dropdown
          parent.classList.toggle('active');
          
          // Update icon
          const icon = this.querySelector('.mobile-nav-icon');
          if (icon) {
            if (parent.classList.contains('active')) {
              icon.textContent = '−';
            } else {
              icon.textContent = '+';
            }
          }
        });
      });

      // Close mobile menu when clicking on links
      const mobileLinks = document.querySelectorAll('.mobile-dropdown-link, .mobile-nav-item-link');
      mobileLinks.forEach(function(link) {
        link.addEventListener('click', function() {
          closeMobileMenu();
        });
      });

      // Handle escape key
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
          closeMobileMenu();
        }
      });

      // Handle mobile theme toggle
      const mobileThemeBtns = document.querySelectorAll('.mobile-theme-btn');
      mobileThemeBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          
          const theme = this.getAttribute('data-theme');
          if (theme) {
            // Find the corresponding desktop theme button and click it
            const desktopThemeBtn = document.querySelector(`[data-theme="${theme}"]`);
            if (desktopThemeBtn) {
              desktopThemeBtn.click();
            }
          }
        });
      });

      // Handle mobile join button
      const mobileJoinBtn = document.querySelector('.mobile-join-btn');
      if (mobileJoinBtn) {
        mobileJoinBtn.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          
          // Find the corresponding desktop join button and click it
          const desktopJoinBtn = document.querySelector('.join-btn');
          if (desktopJoinBtn) {
            desktopJoinBtn.click();
          }
          
          // Close mobile menu
          closeMobileMenu();
        });
      }

      console.log('Mobile menu initialized');
    }, 100);
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileMenu);
  } else {
    initMobileMenu();
  }
})();
