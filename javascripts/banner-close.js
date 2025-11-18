// Banner Close Functionality
(function() {
  function initBannerClose() {
    // Wait for DOM to be ready
    setTimeout(function() {
      const bannerClose = document.querySelector('.banner-close');
      const yellowBanner = document.querySelector('.yellow-banner');
      
      if (!bannerClose || !yellowBanner) {
        console.log('Banner elements not found');
        return;
      }
      
      console.log('Banner elements found:', {
        close: bannerClose,
        banner: yellowBanner
      });

      // Close banner when clicking close button
      bannerClose.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        console.log('Closing banner');
        yellowBanner.style.display = 'none';
      });

      console.log('Banner close functionality initialized');
    }, 100);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBannerClose);
  } else {
    initBannerClose();
  }
})();
