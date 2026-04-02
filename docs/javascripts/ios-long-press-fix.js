// Fix for iOS long press selection issue
(function () {
  let longPressTimer;
  let isLongPress = false;

  function preventLongPress(element) {
    element.addEventListener('touchstart', function (e) {
      isLongPress = false;
      longPressTimer = setTimeout(function () {
        isLongPress = true;
        // Prevent the long press action
        e.preventDefault();
        e.stopPropagation();
      }, 500); // 500ms threshold
    }, { passive: false });

    element.addEventListener('touchend', function (e) {
      clearTimeout(longPressTimer);
      if (isLongPress) {
        e.preventDefault();
        e.stopPropagation();
        isLongPress = false;
      }
    }, { passive: false });

    element.addEventListener('touchmove', function (e) {
      clearTimeout(longPressTimer);
      isLongPress = false;
    }, { passive: false });

    element.addEventListener('contextmenu', function (e) {
      e.preventDefault();
      return false;
    });

    // Prevent selection
    element.addEventListener('selectstart', function (e) {
      e.preventDefault();
      return false;
    });
  }

  // Apply to buttons when DOM is ready
  document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.hero-btn, .join-btn, .card-btn, .mobile-join-btn, .buy-gnk-btn, .mobile-buy-gnk-btn');
    buttons.forEach(preventLongPress);
  });

  // Also apply when page is already loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      const buttons = document.querySelectorAll('.hero-btn, .join-btn, .card-btn, .mobile-join-btn, .buy-gnk-btn, .mobile-buy-gnk-btn');
      buttons.forEach(preventLongPress);
    });
  } else {
    const buttons = document.querySelectorAll('.hero-btn, .join-btn, .card-btn, .mobile-join-btn, .buy-gnk-btn, .mobile-buy-gnk-btn');
    buttons.forEach(preventLongPress);
  }
})();
