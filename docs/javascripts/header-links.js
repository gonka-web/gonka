// Update header navigation links based on current language
// Only works on documentation pages (not on homepage or announcement page)
document.addEventListener('DOMContentLoaded', function () {
  // Check if we're on a documentation page (has custom-header)
  const customHeader = document.querySelector('.landing-header');
  if (!customHeader) {
    return; // Exit if not on documentation page
  }

  // Detect current language from URL
  function getCurrentLanguage() {
    const path = window.location.pathname;
    if (path.startsWith('/zh/')) {
      return 'zh';
    }
    return 'en';
  }

  // Update link href based on language
  function updateLinkHref(link, lang) {
    if (!link) return;

    const currentHref = link.getAttribute('href');
    if (!currentHref) return;

    // Skip external links, anchors, mailto, and PDF files
    if (currentHref.startsWith('http') ||
      currentHref.startsWith('#') ||
      currentHref.startsWith('mailto:') ||
      currentHref.endsWith('.pdf')) {
      return;
    }

    // NEVER update links to homepage - homepage is always English
    if (currentHref === '/' || currentHref === '/index.html' || currentHref === '/index' || currentHref === '') {
      // Always keep homepage link as / (English)
      link.setAttribute('href', '/');
      return;
    }

    // Skip if already has correct language prefix
    if (lang === 'zh' && currentHref.startsWith('/zh/')) {
      return;
    }
    if (lang === 'en' && !currentHref.startsWith('/zh/')) {
      return;
    }

    if (lang === 'zh') {
      // Add /zh/ prefix if not already present
      if (!currentHref.startsWith('/zh/')) {
        // Remove leading slash if present, then add /zh/ prefix
        const path = currentHref.replace(/^\//, '');
        link.setAttribute('href', '/zh/' + path);
      }
    } else {
      // Remove /zh/ prefix for English
      if (currentHref.startsWith('/zh/')) {
        const path = currentHref.replace('/zh/', '');
        link.setAttribute('href', path || '/');
      }
    }
  }

  const currentLang = getCurrentLanguage();

  // Update desktop navigation links
  const desktopLinks = document.querySelectorAll('.dropdown-link, .nav-item-link');
  desktopLinks.forEach(link => {
    updateLinkHref(link, currentLang);
  });

  // Update mobile navigation links
  const mobileLinks = document.querySelectorAll('.mobile-dropdown-link, .mobile-nav-item-link');
  mobileLinks.forEach(link => {
    updateLinkHref(link, currentLang);
  });

  // Update logo link - but always keep it pointing to homepage (English)
  const logoLink = document.querySelector('.logo-section');
  if (logoLink) {
    // Logo always links to homepage (English), never update it
    logoLink.setAttribute('href', '/');
  }
});

