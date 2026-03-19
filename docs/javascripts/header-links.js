// Update header navigation links based on current language
// Only works on documentation pages (not on homepage or announcement page)
document.addEventListener('DOMContentLoaded', function () {
  const customHeader = document.querySelector('.landing-header');
  if (!customHeader) {
    return;
  }

  function getCurrentLanguage() {
    const path = window.location.pathname;
    if (path.startsWith('/zh/')) {
      return 'zh';
    }
    return 'en';
  }

  function updateLinkHref(link, lang) {
    if (!link) return;

    const currentHref = link.getAttribute('href');
    if (!currentHref) return;

    if (currentHref.startsWith('http') ||
      currentHref.startsWith('#') ||
      currentHref.startsWith('mailto:') ||
      currentHref.endsWith('.pdf')) {
      return;
    }

    if (currentHref === '/' || currentHref === '/index.html' || currentHref === '/index' || currentHref === '') {
      link.setAttribute('href', '/');
      return;
    }

    if (lang === 'zh' && currentHref.startsWith('/zh/')) {
      return;
    }
    if (lang === 'en' && !currentHref.startsWith('/zh/')) {
      return;
    }

    if (lang === 'zh') {
      if (!currentHref.startsWith('/zh/')) {
        const path = currentHref.replace(/^\//, '');
        link.setAttribute('href', '/zh/' + path);
      }
    } else {
      if (currentHref.startsWith('/zh/')) {
        const path = currentHref.replace('/zh/', '');
        link.setAttribute('href', path || '/');
      }
    }
  }

  const currentLang = getCurrentLanguage();

  const desktopLinks = document.querySelectorAll('.dropdown-link, .nav-item-link');
  desktopLinks.forEach(link => {
    updateLinkHref(link, currentLang);
  });

  const mobileLinks = document.querySelectorAll('.mobile-dropdown-link, .mobile-nav-item-link');
  mobileLinks.forEach(link => {
    updateLinkHref(link, currentLang);
  });

  const logoLink = document.querySelector('.logo-section');
  if (logoLink) {
    logoLink.setAttribute('href', '/');
  }
});

