<div class="gonka-landing-2025">
  
  <!-- Yellow Top Banner -->
  <div class="yellow-banner">
    <p class="yellow-banner-text">COMING SOON: Kimi K 2.5 and MiniMax</p>
    <button class="banner-close">
      <img src="images/icons/x-mark.svg" alt="close" width="16" height="16" />
    </button>
  </div>

  <!-- Header -->
  <header class="landing-header">
    <div class="header-wrap">
    <div class="nav-section">
      <a href="/" class="logo-section">
        <img src="images/logos/gonka.svg" alt="Gonka" width="40" height="40" class="logo-light" />
        <img src="images/logos/dark-gonka.svg" alt="Gonka" width="40" height="40" class="logo-dark" />
      </a>

      <nav class="main-nav">
        <div class="nav-item-dropdown">
          <a href="#" class="nav-item" data-dropdown="developers">
            <span class="nav-text">Developers</span>
            <span class="nav-icon">+</span>
          </a>
          <div class="dropdown-menu" id="developers">
            <a href="/developer/quickstart" class="dropdown-link">Quickstart</a>
            <a href="/developer/details" class="dropdown-link">Details</a>
          </div>
        </div>

        <div class="nav-item-dropdown">
          <a href="#" class="nav-item" data-dropdown="miners">
            <span class="nav-text">miners</span>
            <span class="nav-icon">+</span>
          </a>
          <div class="dropdown-menu" id="miners">
            <a href="/host/quickstart" class="dropdown-link">Quickstart</a>
            <a href="/host/multiple-nodes" class="dropdown-link">Multiple nodes</a>
            <a href="/host/network-node-api" class="dropdown-link">Network Node API</a>
            <a href="/host/key-management" class="dropdown-link">Key Management</a>
            <a href="/host/access-account" class="dropdown-link">Access account</a>
            <a href="/host/benchmark-to-choose-optimal-deployment-config-for-llms" class="dropdown-link">Benchmark to Choose Optimal Deployment Config for LLMs</a>
            <a href="/host/hardware-specifications" class="dropdown-link">Hardware Specifications</a>
            <a href="/host/genesis" class="dropdown-link">Genesis</a>
            <a href="/host/validator_info" class="dropdown-link">How to edit validator public info</a>
            <a href="/host/optional-ssl-setup" class="dropdown-link">SSL setup</a>
          </div>
        </div>

        <!-- <div class="nav-item-dropdown">
          <a href="#" class="nav-item" data-dropdown="tokenomics">
            <span class="nav-text">tokenomics</span>
            <span class="nav-icon">+</span>
          </a>
          <div class="dropdown-menu" id="tokenomics">
            <a href="/tokenomics.pdf" class="dropdown-link">Tokenomics and more</a>
          </div>
        </div> -->

        <a href="/introduction" class="nav-item nav-item-link">
          <span class="nav-text">documentations</span>
          <svg style="margin-bottom: 12px; margin-left: 4px;" width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.0285645 1.00439H5.0006M5.0006 1.00439L5.0006 6.0006M5.0006 1.00439L0.503296 5.5006" stroke-width="1.3" stroke-linejoin="bevel"/>
          </svg>
        </a>
      </nav>
      </div>

      <!-- Mobile Menu Toggle -->
      <button class="mobile-menu-toggle" id="mobile-menu-toggle">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>

      <div class="header-actions">
        <div class="language-selector">
          <button class="language-btn" id="language-btn" aria-label="Select language">
            <span class="language-text" id="language-text">EN</span>
            <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" class="language-arrow">
              <path d="M1 1L4 4L7 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="language-dropdown" id="language-dropdown">
            <a href="#" class="language-option" data-lang="en" data-url="/">English</a>
            <a href="#" class="language-option" data-lang="zh" data-url="/zh/">中文</a>
          </div>
        </div>
        <div class="theme-toggle">
          <button class="theme-btn theme-btn-sun" data-theme="default">
            <img src="images/icons/light-theme.svg" alt="Light theme" width="18" height="18" class="sun-icon-light" />
            <img src="images/icons/dark-light-theme.svg" alt="Light theme" width="18" height="18" class="sun-icon-dark" />
          </button>
          <button class="theme-btn theme-btn-moon" data-theme="slate">
            <img src="images/icons/dark-theme.svg" alt="Dark theme" width="18" height="18" />
          </button>
        </div>
        <div class="buy-gnk-wrapper">
          <button class="buy-gnk-btn" onclick="return false;">
            buy gnk
            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.0285645 1.00439H5.0006M5.0006 1.00439L5.0006 6.0006M5.0006 1.00439L0.503296 5.5006" stroke-width="1.3" stroke-linejoin="bevel"/>
            </svg>
          </button>

          <div class="wallet-tooltip">
            <img src="images/wallet.svg" alt="Wallet" class="wallet-icon" />
            <div class="wallet-text">
              <span>Wallet will be</span>
              <span>available soon</span>
            </div>
          </div>
        </div>
        <a href="https://discord.com/invite/RADwCT2U6R" target="_blank" class="join-btn">join today</a>
      </div>
    </div>

  </header>

  <!-- Mobile Menu -->
  <div class="mobile-menu" id="mobile-menu">
    <!-- Mobile Menu Close Button -->
    <button class="mobile-menu-close" id="mobile-menu-close">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    
    <div class="mobile-menu-content">
      <div class="mobile-nav-section">
        <div class="mobile-nav-item-dropdown">
          <a href="#" class="mobile-nav-item" data-mobile-dropdown="developers">
            <span class="mobile-nav-text">Developers</span>
            <span class="mobile-nav-icon">+</span>
          </a>
          <div class="mobile-dropdown-menu" id="mobile-developers">
            <a href="/developer/quickstart" class="mobile-dropdown-link">Quickstart</a>
            <a href="/developer/details" class="mobile-dropdown-link">Details</a>
          </div>
        </div>
        
        <div class="mobile-nav-item-dropdown">
          <a href="#" class="mobile-nav-item" data-mobile-dropdown="miners">
            <span class="mobile-nav-text">miners</span>
            <span class="mobile-nav-icon">+</span>
          </a>
          <div class="mobile-dropdown-menu" id="mobile-miners">
            <a href="/host/quickstart" class="mobile-dropdown-link">Quickstart</a>
            <a href="/host/multiple-nodes" class="mobile-dropdown-link">Multiple nodes</a>
            <a href="/host/network-node-api" class="mobile-dropdown-link">Network Node API</a>
            <a href="/host/key-management" class="mobile-dropdown-link">Key Management</a>
            <a href="/host/access-account" class="mobile-dropdown-link">Access account</a>
            <a href="/host/benchmark-to-choose-optimal-deployment-config-for-llms" class="mobile-dropdown-link">Benchmark to Choose Optimal Deployment Config for LLMs</a>
            <a href="/host/hardware-specifications" class="mobile-dropdown-link">Hardware Specifications</a>
            <a href="/host/genesis" class="mobile-dropdown-link">Genesis</a>
            <a href="/host/validator_info" class="mobile-dropdown-link">How to edit validator public info</a>
            <a href="/host/optional-ssl-setup" class="mobile-dropdown-link">SSL setup</a>
          </div>
        </div>
        
        <!-- <div class="mobile-nav-item-dropdown">
          <a href="#" class="mobile-nav-item" data-mobile-dropdown="tokenomics">
            <span class="mobile-nav-text">tokenomics</span>
            <span class="mobile-nav-icon">+</span>
          </a>
          <div class="mobile-dropdown-menu" id="mobile-tokenomics">
            <a href="/tokenomics.pdf" class="mobile-dropdown-link">Tokenomics and more</a>
          </div>
        </div> -->
        
        <a href="/introduction" class="mobile-nav-item mobile-nav-item-link">
          <span class="mobile-nav-text">documentations</span>
          <svg style="margin-bottom: 12px; margin-left: 4px;" width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.0285645 1.00439H5.0006M5.0006 1.00439L5.0006 6.0006M5.0006 1.00439L0.503296 5.5006" stroke-width="1.3" stroke-linejoin="bevel"/>
          </svg>
        </a>
      </div>
      
      <!-- Mobile Menu Actions -->
      <div class="mobile-menu-actions">
        <div class="mobile-menu-actions-top">
          <div class="mobile-language-selector">
            <button class="mobile-language-btn" id="mobile-language-btn" aria-label="Select language">
              <span class="mobile-language-text" id="mobile-language-text">EN</span>
              <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" class="mobile-language-arrow">
                <path d="M1 1L4 4L7 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <div class="mobile-language-dropdown" id="mobile-language-dropdown">
              <a href="#" class="mobile-language-option" data-lang="en" data-url="/">English</a>
              <a href="#" class="mobile-language-option" data-lang="zh" data-url="/zh/">中文</a>
            </div>
          </div>
          <div class="mobile-theme-toggle">
            <button class="mobile-theme-btn mobile-theme-btn-sun" data-theme="default">
              <img src="images/icons/light-theme.svg" alt="Light theme" width="16" height="16" class="mobile-sun-icon-light" />
              <img src="images/icons/dark-light-theme.svg" alt="Light theme" width="16" height="16" class="mobile-sun-icon-dark" />
            </button>
            <button class="mobile-theme-btn mobile-theme-btn-moon" data-theme="slate">
              <img src="images/icons/dark-theme.svg" alt="Dark theme" width="16" height="16" />
            </button>
          </div>
        </div>
        
        <div class="mobile-buttons-group">
          <div class="mobile-buy-gnk-wrapper">
            <button class="mobile-buy-gnk-btn" onclick="return false;">
              buy gnk 
              <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.0285645 1.00439H5.0006M5.0006 1.00439L5.0006 6.0006M5.0006 1.00439L0.503296 5.5006" stroke-width="1.3" stroke-linejoin="bevel"/>
              </svg>
            </button>
            
            <div class="mobile-wallet-tooltip">
              <img src="images/wallet.svg" alt="Wallet" class="mobile-wallet-icon" />
              <div class="mobile-wallet-text">
                <span>Wallet will be</span>
                <span>available soon</span>
              </div>
            </div>
          </div>
          
        <a href="https://discord.com/invite/RADwCT2U6R" target="_blank" class="mobile-join-btn">join today</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Hero Section -->
  <section class="hero-wrapper">
    <div class="hero-container">
      
      <!-- Docs Demo (Left) -->
      <div class="docs-demo-section">
        <div class="docs-demo-card">
          <picture>
            <source srcset="images/docs.webp 1x, images/docs@2x.webp 2x" type="image/webp" />
            <img src="images/docs.png" srcset="images/docs.png 1x, images/docs@2x.png 2x" alt="Gonka documentation terminal walkthrough" class="docs-demo-image" />
          </picture>
            
          <a href="/developer/quickstart" class="docs-demo-link" aria-label="Open documentation">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M6.25 2.75H3.25V5.75" stroke-width="1.75" stroke-linecap="square" stroke-linejoin="miter"/>
              <path d="M11.75 2.75H14.75V5.75" stroke-width="1.75" stroke-linecap="square" stroke-linejoin="miter"/>
              <path d="M14.75 12.25V15.25H11.75" stroke-width="1.75" stroke-linecap="square" stroke-linejoin="miter"/>
              <path d="M3.25 12.25V15.25H6.25" stroke-width="1.75" stroke-linecap="square" stroke-linejoin="miter"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Hero Content (Right) -->
      <div class="hero-content">
        <div class="hero-badge">
          <span>Introducing</span>
        </div>
        <h1 class="hero-title">Gonka is decentralized<br/>AI infrastructure that<br/>belongs to all of us</h1>
        <div class="hero-actions">
          <a href="/mineit/" class="hero-btn">mine it</a>
          <a href="/ownit" class="hero-btn">own it</a>
          <a href="/useit" class="hero-btn">use it</a>
        </div>
        <h3 class="hero-subtitle">Choose your path in the Gonka network.</h3>
      </div>

    </div>

  </section>

  <!-- AI of the People Badge -->
  <div class="section-badge left">
    <p>AI <span class="tooltip-text" data-tooltip="AI represents artificial intelligence technology that serves humanity" data-scroll="#cards-title">of the people</span>,<br/><span class="tooltip-text" data-tooltip="Built and developed by community members, miners, and contributors worldwide" data-scroll="#cards-title">by the people</span>, <span class="tooltip-text" data-tooltip="AI for the people – serving the needs and well-being of everyone, not the narrow interests of a few" data-scroll="#cards-title">for the people</span></p>

    <span class="scroll-text">Scroll down \\\</span>

  </div>

  <!-- Mission Section -->
  <section class="mission-section">
    <div class="mission-content">
      <div class="mission-left">
        <div class="mission-badge">
          <span>our mission</span>
        </div>
      </div>
      <div class="mission-right">
        <p class="mission-text">
          We believe artificial intelligence should serve every human being — not just a privileged few. AI is built on the collective knowledge of humanity and should never be owned as private property.
        </p>
        <p class="mission-text">
          Today, access to AI is controlled by corporations: they set the prices, limit capabilities, filter knowledge, and decide who gets to participate in the future. We’re here to change that.
        </p>
      </div>
    </div>
  </section>

  <!-- Superintelligence Section -->
  <section class="superintelligence-section">
    <h2 class="super-title">Superintelligence<br/>must be built</h2>
    <div class="super-subtitle">
      <span class="super-by-us">by us <span class="super-separator">\\</span></span>
      <p class="super-replace">or it will be<br/>built to replace us</p>
    </div>

    <div class="super-content">
      <div class="mission-left">
      </div>
      <div class="mission-right">
    
        <p class="super-text">
          Gonka is building an open infrastructure for free and accessible AI — a network where anyone can participate, earn, and influence.We don’t collect your data. It belongs to you.
        </p>
      </div>
    </div>

  </section>

  <!-- Three Cards Section -->
  <section class="three-cards-section">
    <h2 class="cards-title" id="cards-title">AI <span class="tooltip-text" data-tooltip="AI represents artificial intelligence technology that serves humanity">of the people</span>, <span class="tooltip-text" data-tooltip="Built and developed by community members, miners, and contributors worldwide">by the people</span>,<br /> <span class="tooltip-text" data-tooltip="AI for the people – serving the needs and well-being of everyone, not the narrow interests of a few">for the people</span></h2>
    
    <div class="cards-grid">
      <a href="/developer/quickstart/" class="card card-developers">
        <h3>Developers</h3>
        <div class="card-content">
        <p>Using AI API? Switch to Gonka — cut costs fast.</p>
        <div  class="card-btn">read more</div>
        </div>
      </a>
      
      <a href="/host/quickstart/" class="card card-miners">
        <h3>Miners</h3>
        <div class="card-content">
        <p>Connect GPUs to Gonka — start earning coins right away. Your mining node works 24/7 solving AI jobs ordered by developers. Become part of global AI infrastructure.</p>
        <div class="card-btn primary">read more</div>
        </div>
      </a>
      
      <a href="/gonka_tokenomics_explained.pdf" class="card card-tokenomics">
        <h3>tokenomics</h3>
        <div class="card-content">
        <p>Buy coins — own a share of the future AI economy.</p>
        <div class="card-btn">read more</div>
        </div>
      </a>
    </div>
  </section>

  <!-- Join Today Section -->
  <section class="join-section">
    <h2 class="join-title">Gonka — AI that<br/>belongs to everyone</h2>
     <a href="https://discord.com/invite/RADwCT2U6R" target="_blank" class="join-cta">join today</a>
  </section>

  <!-- SAY Section -->
  <section class="say-section">
    <div class="say-header">
      <h2>SAY</h2>
      <div class="say-tabs">
        <a href="https://discord.com/invite/RADwCT2U6R" target="_blank" class="say-tab active">social</a>
        <a href="/announcement" class="say-tab say-tab--announcement">announcement</a>
      </div>
    </div>
    
    <div class="social-grid">
      <a href="https://github.com/gonka-ai/gonka/" target="_blank" class="social-card github">
      <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_392_3199)">
      <path d="M23 0.570312C10.2925 0.570312 0 10.8686 0 23.5703C0 33.7344 6.5895 42.3536 15.7262 45.3916C16.8762 45.6081 17.2979 44.8971 17.2979 44.2856C17.2979 43.7394 17.2787 42.2923 17.2692 40.3756C10.8713 41.7633 9.522 37.2898 9.522 37.2898C8.4755 34.6352 6.96325 33.9261 6.96325 33.9261C4.87983 32.5001 7.12425 32.5288 7.12425 32.5288C9.43383 32.6898 10.6471 34.8978 10.6471 34.8978C12.6979 38.4149 16.031 37.3991 17.3458 36.8106C17.5528 35.3233 18.1451 34.3094 18.8025 33.7344C13.6946 33.1594 8.326 31.1814 8.326 22.3686C8.326 19.8577 9.21725 17.8069 10.6931 16.1969C10.4343 15.6161 9.65808 13.2778 10.8943 10.1096C10.8943 10.1096 12.8206 9.4924 17.2193 12.4671C19.0593 11.9553 21.0143 11.7023 22.9693 11.6908C24.9243 11.7023 26.8793 11.9553 28.7193 12.4671C33.0893 9.4924 35.0156 10.1096 35.0156 10.1096C36.2518 13.2778 35.4756 15.6161 35.2456 16.1969C36.7118 17.8069 37.6031 19.8577 37.6031 22.3686C37.6031 31.2044 32.2268 33.1498 27.1093 33.7152C27.9143 34.4052 28.6618 35.8159 28.6618 37.9702C28.6618 41.0484 28.6331 43.5209 28.6331 44.2684C28.6331 44.8721 29.0356 45.5909 30.2143 45.3609C39.4162 42.3441 46 33.7191 46 23.5703C46 10.8686 35.7017 0.570312 23 0.570312Z" fill="#242424" style="fill:#242424;fill:color(display-p3 0.1403 0.1403 0.1403);fill-opacity:1;"/>
      </g>
      <defs>
      <clipPath id="clip0_392_3199">
      <rect width="46" height="46" fill="white" style="fill:white;fill-opacity:1;"/>
      </clipPath>
      </defs>
      </svg>

      </a>


      <a href="https://discord.com/invite/RADwCT2U6R" target="_blank" class="social-card discord">
        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_392_3201)">
          <path d="M23 46C35.7025 46 46 35.7025 46 23C46 10.2975 35.7025 0 23 0C10.2975 0 0 10.2975 0 23C0 35.7025 10.2975 46 23 46Z" fill="#242424" style="fill:#242424;fill:color(display-p3 0.1403 0.1403 0.1403);fill-opacity:1;"/>
          <path d="M18.7636 11.5017C16.6516 11.8729 14.63 12.5224 12.7441 13.406C12.7278 13.4133 12.7165 13.4242 12.7072 13.4397C8.87358 19.2843 7.82175 24.9857 8.33694 30.6159C8.33932 30.6435 8.35446 30.6698 8.37544 30.6865C10.9048 32.582 13.3541 33.7325 15.7587 34.4953C15.7972 34.5072 15.8385 34.4938 15.863 34.4616C16.4318 33.6689 16.9395 33.0142 17.3743 32.1353C17.3999 32.0838 17.3754 32.0225 17.3229 32.0021C16.5187 31.6908 15.7541 31.3117 15.0175 30.8807C14.9592 30.8459 14.9527 30.7609 15.0062 30.7202C15.1613 30.6017 15.3171 30.4774 15.4651 30.3528C15.4919 30.3301 15.5299 30.3256 15.5613 30.34C20.4008 32.5947 25.6401 32.5947 30.4225 30.34C30.4539 30.3244 30.4892 30.3284 30.5171 30.3512C30.6652 30.4757 30.8214 30.6017 30.9776 30.7202C31.0312 30.7609 31.0262 30.8459 30.9679 30.8807C30.2313 31.3201 29.4663 31.692 28.6609 32.0021C28.6084 32.0225 28.5855 32.0838 28.6111 32.1353C29.0552 33.013 29.5609 33.6673 30.1192 34.46C30.1426 34.4935 30.185 34.5073 30.2235 34.4953C32.6398 33.7325 35.0903 32.582 37.6196 30.6865C37.6417 30.6698 37.6574 30.6435 37.6597 30.6159C38.2763 24.1068 36.624 18.4553 33.2846 13.4429C33.2764 13.4262 33.2641 13.4132 33.2477 13.406C31.363 12.5235 29.343 11.8741 27.2298 11.5017C27.1913 11.4945 27.1518 11.5108 27.1319 11.5466C26.872 12.0184 26.5859 12.0752 26.3843 12.5589C24.1114 12.2117 21.8482 12.2117 19.622 12.5589C19.4203 12.0644 19.1226 12.0184 18.8615 11.5466C18.8417 11.5119 18.8021 11.4957 18.7636 11.5017ZM17.6582 22.1786C19.2718 22.1786 20.5617 23.4802 20.5364 25.0536C20.5364 26.6384 19.2592 27.9286 17.6582 27.9286C16.0824 27.9286 14.7864 26.6384 14.7864 25.0536C14.7864 23.4689 16.0572 22.1786 17.6582 22.1786ZM28.34 22.1786C29.9536 22.1786 31.2402 23.4802 31.215 25.0536C31.215 26.6384 29.9536 27.9286 28.34 27.9286C26.7642 27.9286 25.465 26.6384 25.465 25.0536C25.465 23.4689 26.739 22.1786 28.34 22.1786Z" fill="#DBDBDB" style="fill:#DBDBDB;fill:#dff200;fill-opacity:1;"/>
          </g>
          <defs>
          <clipPath id="clip0_392_3201">
          <rect width="46" height="46" fill="white" style="fill:white;fill-opacity:1;"/>
          </clipPath>
          </defs>
          </svg>

      </a>


      <a href="https://x.com/gonka_ai" target="_blank" class="social-card x">
        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_392_3204)">
        <path d="M0 0H46V46H0V0Z" fill="#242424" style="fill:#242424;fill:color(display-p3 0.1403 0.1403 0.1403);fill-opacity:1;"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9485 12.9668H12.043L20.2304 23.7814L12.5667 32.8535H16.1076L21.9039 25.992L27.0508 32.7904H33.9563L25.531 21.6615L25.5459 21.6807L32.8003 13.0931H29.2594L23.8721 19.4704L18.9485 12.9668ZM15.8547 14.8608H18.0045L30.1446 30.8964H27.9948L15.8547 14.8608Z" fill="#F2F2F3" style="fill:#F2F2F3;fill:#dff200;fill-opacity:1;"/>
        </g>
        <defs>
        <clipPath id="clip0_392_3204">
        <rect width="46" height="46" rx="23" fill="white" style="fill:white;fill-opacity:1;"/>
        </clipPath>
        </defs>
        </svg>

      </a>


      <a href="mailto:hello@productscience.ai" target="_blank" class="social-card twitter">
        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23 46C35.7025 46 46 35.7025 46 23C46 10.2975 35.7025 0 23 0C10.2975 0 0 10.2975 0 23C0 35.7025 10.2975 46 23 46Z" fill="#242424" style="fill:#242424;fill:color(display-p3 0.1403 0.1403 0.1403);fill-opacity:1;"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13 13.75C12.59 13.75 12.25 14.09 12.25 14.5V31.5C12.25 31.91 12.59 32.25 13 32.25H33C33.41 32.25 33.75 31.91 33.75 31.5V14.5C33.75 14.09 33.41 13.75 33 13.75H13ZM17.42 18.38L16.59 19.62L23 23.9L29.42 19.62L28.59 18.38L23 22.1L17.42 18.38Z" fill="#F2F2F3" style="fill:#F2F2F3;fill:#dff200;fill-opacity:1;"/>
        </svg>

      </a>


            <div class="social-card-empty">
      </div>
    </div>

  </section>

  <!-- Logos Section -->
  <section class="logos-section">
    <div class="logos-row">
      <div class="logos-group">
        <span class="logos-label">Auditor</span>
        <div class="logos-items">
          <a href="https://www.certik.com/" target="_blank" rel="noopener noreferrer">
            <img src="images/partners/certik.svg" alt="Certik" width="110" height="32" />
          </a>
        </div>
      </div>
      <div class="logos-group">
        <span class="logos-label">Community Partners</span>
        <div class="logos-items">
          <a href="https://web3.com/" target="_blank" rel="noopener noreferrer">
            <img src="images/partners/web3.svg" alt="Web3.com Ventures" width="98" height="32" />
          </a>
          <a href="https://www.hardyaka.com/" target="_blank" rel="noopener noreferrer">
            <img src="images/partners/hard-yaka.svg" alt="Hard Yaka" width="114" height="32" />
          </a>
          <a href="https://bitfury.com/" target="_blank" rel="noopener noreferrer">
            <img src="images/partners/bitfury.svg" alt="Bitfury" width="102" height="32" />
          </a>
          <a href="https://qtum.org/" target="_blank" rel="noopener noreferrer">
            <img src="images/partners/qtum.svg" alt="Qtum.AI" width="106" height="32" />
          </a>
        </div>
      </div>
      <div class="logos-group">
        <span class="logos-label">Select Hosts</span>
        <div class="logos-items">
          <a href="https://gcore.com/" target="_blank" rel="noopener noreferrer">
            <img src="images/partners/gcore.svg" alt="Gcore" width="90" height="32" />
          </a>
          <a href="https://hyperfusion.io/" target="_blank" rel="noopener noreferrer">
            <img src="images/partners/huperfusion.svg" alt="Hyperfusion" width="132" height="32" />
          </a>
          <a href="https://6block.com/" target="_blank" rel="noopener noreferrer">
            <img src="images/partners/block.svg" alt="6block" width="90" height="32" />
          </a>
        </div>
      </div>
      <div class="logos-group">
        <span class="logos-label">Select AI Developers</span>
        <div class="logos-items">
          <a href="https://aidenai.io/" target="_blank" rel="noopener noreferrer">
            <img src="images/logos/aiden.svg" alt="Aiden" width="90" height="32" />
          </a>
        </div>
      </div>
      <!-- <div class="logos-group">
        <span class="logos-label">Exchange Partners</span>
        <div class="logos-items">
          <img src="images/partners/uphold.svg" alt="Uphold" width="90" height="32" />
        </div>
      </div> -->
    </div>
    <div class="logos-row">
      <div class="logos-group">
        <span class="logos-label">Protocol Creator</span>
        <div class="logos-items">
          <a href="https://productscience.ai/" target="_blank" rel="noopener noreferrer">
            <img src="images/partners/product-science.svg" alt="Product Science" width="158" height="32" />
          </a>
        </div>
      </div>
      <div class="logos-group">
        <span class="logos-label">Backed by</span>
        <div class="logos-items">          
          <a href="https://www.coatue.com/" target="_blank" rel="noopener noreferrer">
            <img src="images/partners/coatue.svg" alt="COATUE" width="86" height="32" />
          </a>
          <a href="https://slow.co/" target="_blank" rel="noopener noreferrer">
            <img src="images/partners/slow.svg" alt="Slow" width="49" height="32" />
          </a>
          <a href="https://www.mantisvc.com/" target="_blank" rel="noopener noreferrer">
            <img src="images/partners/mantis.svg" alt="Mantis" width="100" height="32" />
          </a>
          <a href="https://k5ventures.com/" target="_blank" rel="noopener noreferrer">
            <img src="images/partners/k5.svg" alt="K5" width="31" height="32" />
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="landing-footer">
    <div class="footer-wrap">
      <div class="footer-brand">
        <a href="/" class="footer-logo">
          <img src="/images/icons/gonka-logo.svg" alt="Gonka" width="99" height="23" />
        </a>
        <a href="https://what-is-gonka.hashnode.dev/" target="_blank" class="footer-link-blog">Blog</a>
      </div>
      <div class="footer-links">
        <div class="footer-col">
          <h4>Protocol</h4>
            <a href="/whitepaper.pdf" target="_blank">Whitepaper</a>
            <a href="/pow-security-analysis.pdf" target="_blank">Transformer-Based-Proof-of-Work</a>
        </div>
        <div class="footer-col">
          <h4>Legal</h4>
          <a href="/protocol-license.pdf" target="_blank">Gonka Protocol License</a>
          <!-- <a href="/patents.pdf" target="_blank">Patents</a> -->
        </div>
      </div>
    </div>
          <div class="footer-bottom">
          <div class="footer-socials">
            <a href="https://github.com/gonka-ai/gonka/" class="footer-social" target="_blank" aria-label="Github">
              <img src="/images/icons/github.svg" alt="Github" width="25" height="25" />
            </a>
            <a href="https://discord.com/invite/RADwCT2U6R" class="footer-social" target="_blank" aria-label="Discord">
              <img src="/images/icons/discord.svg" alt="Discord" width="25" height="25" />
            </a>
            <a href="mailto:hello@productscience.ai" class="footer-social" target="_blank" aria-label="Mail">
              <img src="/images/icons/mail.svg" alt="Mail" width="25" height="25" />
            </a>
            <a href="https://x.com/gonka_ai" class="footer-social" target="_blank" aria-label="X">
              <img src="/images/icons/twitter.svg" alt="X" width="25" height="25" />
            </a>
            <!-- <a href="https://t.me/Gonka_AI" class="footer-social" target="_blank" aria-label="Telegram">
              <img src="/images/icons/telegram.svg" alt="Telegram" width="25" height="25" />
            </a> -->
          </div>

        <div class="footer-bottom-links">
      <a href="/help" class="footer-link">Help</a>
      <a href="/transactions-and-governance" class="footer-link">Transactions & Governance</a>
      <!-- <a href="#" class="footer-link">Terms & Policies</a> -->
          <div>
        </div>

  </footer>

</div>
