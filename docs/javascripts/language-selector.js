// Language Selector Functionality
document.addEventListener('DOMContentLoaded', function () {
  function getCurrentLanguage() {
    const path = window.location.pathname;
    if (path.startsWith('/zh/')) {
      return 'zh';
    }
    return 'en';
  }

  function getCurrentPath() {
    const path = window.location.pathname;
    if (path.startsWith('/zh/')) {
      return path.replace('/zh', '');
    }
    if (path.startsWith('/en/')) {
      return path.replace('/en', '');
    }
    return path || '/';
  }

  function updateLanguageButton() {
    const currentLang = getCurrentLanguage();
    const languageText = document.getElementById('language-text');
    const mobileLanguageText = document.getElementById('mobile-language-text');

    if (languageText) {
      languageText.textContent = currentLang === 'zh' ? '中文' : 'EN';
    }
    if (mobileLanguageText) {
      mobileLanguageText.textContent = currentLang === 'zh' ? '中文' : 'EN';
    }
  }

  // Desktop languageselector
  const languageBtn = document.getElementById('language-btn');
  const languageDropdown = document.getElementById('language-dropdown');
  const languageOptions = document.querySelectorAll('.language-option');

  if (languageBtn && languageDropdown) {
    const languageSelector = languageBtn.closest('.language-selector');
    languageBtn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (languageSelector) {
        languageSelector.classList.toggle('active');
      }
    });

    languageOptions.forEach(option => {
      option.addEventListener('click', function (e) {
        e.preventDefault();
        const lang = this.getAttribute('data-lang');
        const baseUrl = this.getAttribute('data-url');
        const currentPath = getCurrentPath();


        let newUrl;
        if (lang === 'en') {
          newUrl = currentPath;
        } else {
          newUrl = baseUrl + currentPath.replace(/^\//, '');
        }

        window.location.href = newUrl;
      });
    });

    document.addEventListener('click', function (e) {
      if (!e.target.closest('.language-selector')) {
        if (languageSelector) {
          languageSelector.classList.remove('active');
        }
      }
    });
  }

  const mobileLanguageBtn = document.getElementById('mobile-language-btn');
  const mobileLanguageDropdown = document.getElementById('mobile-language-dropdown');
  const mobileLanguageOptions = document.querySelectorAll('.mobile-language-option');

  if (mobileLanguageBtn && mobileLanguageDropdown) {
    const mobileLanguageSelector = mobileLanguageBtn.closest('.mobile-language-selector');
    mobileLanguageBtn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (mobileLanguageSelector) {
        mobileLanguageSelector.classList.toggle('active');
      }
    });

    mobileLanguageOptions.forEach(option => {
      option.addEventListener('click', function (e) {
        e.preventDefault();
        const lang = this.getAttribute('data-lang');
        const baseUrl = this.getAttribute('data-url');
        const currentPath = getCurrentPath();


        let newUrl;
        if (lang === 'en') {
          newUrl = currentPath;
        } else {
          newUrl = baseUrl + currentPath.replace(/^\//, '');
        }

        window.location.href = newUrl;
      });
    });

    document.addEventListener('click', function (e) {
      if (!e.target.closest('.mobile-language-selector')) {
        if (mobileLanguageSelector) {
          mobileLanguageSelector.classList.remove('active');
        }
      }
    });
  }

  // Initialize language button text
  updateLanguageButton();
});

