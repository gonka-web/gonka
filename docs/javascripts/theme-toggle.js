// Theme toggle for landing page
(function () {
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-md-color-scheme', theme);
    document.body.setAttribute('data-md-color-scheme', theme);

    if (typeof __md_set !== 'undefined') {
      __md_set('__palette', { color: { scheme: theme } });
    }

    if (typeof __md_get !== 'undefined') {
      var palette = __md_get('__palette');
      if (palette) {
        palette.color.scheme = theme;
        __md_set('__palette', palette);
      }
    }
  }

  var savedScheme = localStorage.getItem('data-md-color-scheme');
  if (savedScheme) {
    applyTheme(savedScheme);
  } else {
    applyTheme('default');
  }

  function initThemeButtons() {
    const themeButtons = document.querySelectorAll('.theme-btn, .mobile-theme-btn');

    // Add click handlers to theme buttons
    themeButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const targetTheme = this.getAttribute('data-theme');

        localStorage.setItem('data-md-color-scheme', targetTheme);
        applyTheme(targetTheme);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initThemeButtons();
      setTimeout(function () {
        var scheme = localStorage.getItem('data-md-color-scheme') || 'default';
        applyTheme(scheme);
      }, 100);
    });
  } else {
    initThemeButtons();
    setTimeout(function () {
      var scheme = localStorage.getItem('data-md-color-scheme') || 'default';
      applyTheme(scheme);
    }, 100);
  }

  document.addEventListener('md-palette', function (e) {
    var scheme = localStorage.getItem('data-md-color-scheme');
    if (scheme) {
      applyTheme(scheme);
    }
  });
})();

