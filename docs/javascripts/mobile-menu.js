// Mobile Menu Functionality
(function () {
  // Store scroll position
  let scrollPosition = 0;

  function initMobileMenu() {
    // Wait for DOM to be ready
    setTimeout(function () {
      const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
      const mobileMenu = document.getElementById('mobile-menu');
      const mobileMenuClose = document.getElementById('mobile-menu-close');

      if (!mobileMenuToggle || !mobileMenu) return;

      // Function to prevent body scroll
      function preventBodyScroll() {
        scrollPosition = window.pageYOffset;
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollPosition}px`;
        document.body.style.width = '100%';
      }

      // Function to restore body scroll
      function restoreBodyScroll() {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollPosition);
      }

      // Function to close mobile menu
      function closeMobileMenu() {
        mobileMenuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        restoreBodyScroll();
      }

      // Check if we're on a documentation page
      function isDocumentationPage() {
        const path = window.location.pathname;
        if (path === '/' || path.startsWith('/zh/') && path.replace('/zh/', '') === '' ||
          path.includes('/announcement')) {
          return false;
        }
        return true;
      }

      // Setup documentation menu
      if (isDocumentationPage()) {
        const sidebarNav = document.querySelector('.md-sidebar--primary .md-nav');
        const mobileNavSection = document.querySelector('.mobile-menu-content .mobile-nav-section');

        if (sidebarNav && mobileNavSection) {
          mobileNavSection.innerHTML = '';

          // Add TOC first
          const tocNav = document.querySelector('.md-sidebar--secondary .md-nav--secondary');
          if (tocNav) {
            const tocItems = tocNav.querySelectorAll('.md-nav__list > .md-nav__item');
            if (tocItems.length > 0) {
              const tocContainer = document.createElement('div');
              tocContainer.className = 'mobile-nav-item-dropdown';
              tocContainer.innerHTML = `
                <a href="#" class="mobile-nav-item" data-mobile-dropdown="toc">
                  <span class="mobile-nav-text">TABLE OF CONTENTS</span>
                  <span class="mobile-nav-icon">+</span>
                </a>
                <div class="mobile-dropdown-menu" id="mobile-toc"></div>
              `;

              const tocMenu = tocContainer.querySelector('.mobile-dropdown-menu');
              tocItems.forEach(item => {
                const link = item.querySelector('.md-nav__link');
                if (link) {
                  let href = link.getAttribute('href');

                  // If link is a label (no href), find first actual anchor link in nested items
                  if (!href || href === 'null') {
                    const nestedNav = item.querySelector('.md-nav');
                    if (nestedNav) {
                      const firstAnchor = nestedNav.querySelector('a.md-nav__link');
                      if (firstAnchor) {
                        href = firstAnchor.getAttribute('href');
                      }
                    }
                  }

                  // Only create link if we have a valid href
                  if (href && href !== 'null') {
                    const a = document.createElement('a');
                    a.href = href;
                    a.className = 'mobile-dropdown-link mobile-toc-link';
                    a.textContent = link.textContent.trim();
                    tocMenu.appendChild(a);
                  }

                  const nested = item.querySelector('.md-nav');
                  if (nested) {
                    nested.querySelectorAll('a.md-nav__link').forEach(nLink => {
                      const nHref = nLink.getAttribute('href');
                      if (nHref && nHref !== 'null') {
                        const na = document.createElement('a');
                        na.href = nHref;
                        na.className = 'mobile-dropdown-link mobile-toc-link mobile-toc-nested';
                        na.textContent = '• ' + nLink.textContent.trim();
                        tocMenu.appendChild(na);
                      }
                    });
                  }
                }
              });
              mobileNavSection.appendChild(tocContainer);
            }
          }

          // Add sidebar sections
          sidebarNav.querySelectorAll('.md-nav__list > .md-nav__item').forEach(section => {
            let titleText = '';
            const titleEl = section.querySelector('.md-nav__title--primary');

            if (titleEl) {
              titleText = titleEl.textContent.trim();

              // For WALLET section, collect links from both Wallet and Additional sections
              if (titleText === 'WALLET' || titleText === '钱包') {
                const links = section.querySelectorAll('.md-nav .md-nav__link');

                // Also find Additional section links
                const additionalSection = Array.from(sidebarNav.querySelectorAll('.md-nav__list > .md-nav__item')).find(item => {
                  const nav = item.querySelector('.md-nav');
                  return nav && nav.getAttribute('aria-label') === 'Additional';
                });

                const additionalLinks = additionalSection ? additionalSection.querySelectorAll('.md-nav .md-nav__link') : [];

                const allLinks = [...links, ...additionalLinks];

                if (allLinks.length > 0) {
                  const id = titleText.toLowerCase().replace(/[^a-z0-9]/g, '-');
                  const container = document.createElement('div');
                  container.className = 'mobile-nav-item-dropdown';
                  container.innerHTML = `
                    <a href="#" class="mobile-nav-item" data-mobile-dropdown="${id}">
                      <span class="mobile-nav-text">${titleText}</span>
                      <span class="mobile-nav-icon">+</span>
                    </a>
                    <div class="mobile-dropdown-menu" id="mobile-${id}"></div>
                  `;

                  const menu = container.querySelector('.mobile-dropdown-menu');
                  allLinks.forEach(link => {
                    const a = document.createElement('a');
                    a.href = link.getAttribute('href');
                    a.className = 'mobile-dropdown-link';
                    if (link.classList.contains('md-nav__link--active')) a.classList.add('mobile-nav-link-active');
                    a.textContent = link.textContent.trim();
                    menu.appendChild(a);
                  });
                  mobileNavSection.appendChild(container);
                }
              } else {
                // For other sections (DOCS, DEVELOPER, PARTICIPANT)
                const links = section.querySelectorAll('.md-nav .md-nav__link');
                if (links.length > 0) {
                  const id = titleText.toLowerCase().replace(/[^a-z0-9]/g, '-');
                  const container = document.createElement('div');
                  container.className = 'mobile-nav-item-dropdown';
                  container.innerHTML = `
                    <a href="#" class="mobile-nav-item" data-mobile-dropdown="${id}">
                      <span class="mobile-nav-text">${titleText}</span>
                      <span class="mobile-nav-icon">+</span>
                    </a>
                    <div class="mobile-dropdown-menu" id="mobile-${id}"></div>
                  `;

                  const menu = container.querySelector('.mobile-dropdown-menu');
                  links.forEach(link => {
                    const a = document.createElement('a');
                    a.href = link.getAttribute('href');
                    a.className = 'mobile-dropdown-link';
                    if (link.classList.contains('md-nav__link--active')) a.classList.add('mobile-nav-link-active');
                    a.textContent = link.textContent.trim();
                    menu.appendChild(a);
                  });
                  mobileNavSection.appendChild(container);
                }
              }
            }
            // Skip Additional section as it's now included in WALLET
          });
        }
      }

      // Event Listeners
      mobileMenuToggle.addEventListener('click', function (e) {
        e.preventDefault();
        if (mobileMenu.classList.contains('active')) {
          closeMobileMenu();
        } else {
          mobileMenuToggle.classList.add('active');
          mobileMenu.classList.add('active');
          preventBodyScroll();
        }
      });

      if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', (e) => {
          e.preventDefault();
          closeMobileMenu();
        });
      }

      // Handle all clicks inside menu
      mobileMenu.addEventListener('click', function (e) {
        // Dropdowns
        const trigger = e.target.closest('.mobile-nav-item[data-mobile-dropdown]');
        if (trigger) {
          e.preventDefault();
          const parent = trigger.closest('.mobile-nav-item-dropdown');
          const wasActive = parent.classList.contains('active');

          // Close all others
          document.querySelectorAll('.mobile-nav-item-dropdown.active').forEach(el => {
            if (el !== parent) {
              el.classList.remove('active');
              el.querySelector('.mobile-nav-icon').textContent = '+';
            }
          });

          // Toggle current
          if (wasActive) {
            parent.classList.remove('active');
            trigger.querySelector('.mobile-nav-icon').textContent = '+';
          } else {
            parent.classList.add('active');
            trigger.querySelector('.mobile-nav-icon').textContent = '−';
          }
          return;
        }

        // Links
        const link = e.target.closest('a');
        if (link && !link.hasAttribute('data-mobile-dropdown')) {
          const href = link.getAttribute('href');

          // TOC links with anchors
          if (link.classList.contains('mobile-toc-link') && href && href.startsWith('#') && href.length > 1) {
            e.preventDefault();

            // 1. Completely reset body styles to allow scrolling
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';

            // 2. Close menu visually immediately
            mobileMenuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');

            // 3. Wait for layout to stabilize, then scroll
            setTimeout(() => {
              let target;
              try {
                // Try querySelector first
                target = document.querySelector(href);
              } catch (e) {
                // If selector is invalid (starts with number), use getElementById
                if (href.startsWith('#')) {
                  const id = href.substring(1);
                  target = document.getElementById(id);
                }
              }
              if (target) {
                const headerOffset = 80; // Header height
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                  top: offsetPosition,
                  behavior: "auto" // Use auto for instant jump, smooth might be interrupted
                });

                // Update URL without triggering scroll
                history.pushState(null, null, href);
              }
            }, 50);
          } else {
            // Regular links
            closeMobileMenu();
          }
        }
      });
    }, 100);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileMenu);
  } else {
    initMobileMenu();
  }
})();