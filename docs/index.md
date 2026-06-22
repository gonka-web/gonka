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

          --8<-- "overrides/partials/buy-gnk-dropdown.html"
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
            
            --8<-- "overrides/partials/buy-gnk-dropdown.html"
          </div>
          
        <a href="https://discord.com/invite/RADwCT2U6R" target="_blank" class="mobile-join-btn">join today</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Hero Section -->
  <section class="hero-wrapper">
    <div class="hero-container">
      
      <!-- Broker Commands (Left) -->
      <div class="docs-demo-section">
        <div class="broker-commands-card">
          <h2 class="broker-commands-title">Broker Commands</h2>

          <div class="broker-command-block broker-command-block--env highlight">
            <span class="broker-command-lang">bash</span>
            <pre><code><span class="broker-command-keyword">export</span> GONKA_BROKER_URL=&lt;broker-base-url&gt;
<span class="broker-command-keyword">export</span> GONKA_BROKER_API_KEY=&lt;your-api-key&gt;
<span class="broker-command-keyword">export</span> GONKA_MODEL=Qwen/Qwen3-235B-A22B-Instruct-2507-I</code></pre>
          </div>

          <div class="broker-command-block broker-command-block--single highlight">
            <span class="broker-command-lang">bash</span>
            <pre><code>pip install openai</code></pre>
          </div>

          <div class="broker-command-block broker-command-block--single highlight">
            <span class="broker-command-lang">bash</span>
            <pre><code>python example.py</code></pre>
          </div>

          <h3 class="broker-commands-subtitle">For Node.js:</h3>

          <div class="broker-command-block broker-command-block--node highlight">
            <span class="broker-command-lang">bash</span>
            <pre><code>npm install openai
node example.mjs</code></pre>
          </div>
        </div>
        <a href="https://gonka.ai/docs/developer/quickstart/" class="broker-commands-guide">
          <span class="broker-commands-guide__text">Full Setup Guide</span>
          <svg class="broker-commands-guide__arrow" aria-hidden="true" width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.0285645 1.00439H5.0006M5.0006 1.00439L5.0006 6.0006M5.0006 1.00439L0.503296 5.5006" stroke-width="1.3" stroke-linejoin="bevel"/>
          </svg>
        </a>
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
        <div class="gonka-uniswap-row">
          <span class="gonka-uniswap-text">Buy or Sell GNK on</span>
          <a
            href="https://app.uniswap.org/explore/tokens/ethereum/0x972a7a92d92796a98801a8818bcf91f1648f2f68?utm_medium=mobile&utm_source=share-tdp"
            target="_blank"
            rel="noopener noreferrer"
            class="gonka-uniswap-link"
            aria-label="Open Uniswap to buy or sell GNK"
          >
          <svg class="gonka-uniswap-icon" width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M6.84368 1.74872C6.53373 1.70049 6.52066 1.69483 6.66652 1.67236C6.94604 1.62924 7.60606 1.688 8.06088 1.79647C9.1227 2.04961 10.0889 2.69807 11.1202 3.84975L11.3942 4.15572L11.7862 4.09252C13.4375 3.82638 15.1174 4.03789 16.5224 4.68888C16.9089 4.86797 17.5184 5.22447 17.5945 5.31608C17.6187 5.34529 17.6633 5.53322 17.6935 5.73377C17.7978 6.4276 17.7455 6.95943 17.534 7.35664C17.4189 7.5728 17.4125 7.6413 17.4899 7.82629C17.5516 7.97391 17.7239 8.08317 17.8945 8.08293C18.2437 8.08246 18.6195 7.51636 18.7936 6.72869L18.8628 6.41581L18.9998 6.57148C19.7515 7.42554 20.3417 8.59027 20.4432 9.41932L20.4696 9.63548L20.3433 9.43897C20.1258 9.10083 19.9074 8.87064 19.6276 8.68498C19.1233 8.35033 18.5901 8.23644 17.178 8.16181C15.9026 8.0944 15.1808 7.98514 14.4651 7.75107C13.2473 7.35286 12.6334 6.82253 11.1869 4.91911C10.5444 4.07366 10.1473 3.60589 9.75229 3.22919C8.85468 2.37325 7.97269 1.92435 6.84368 1.74872Z" fill="#FF37C7"></path>
            <path d="M17.8821 3.63639C17.9142 3.06986 17.9908 2.69619 18.1449 2.35494C18.2058 2.21986 18.2629 2.10931 18.2717 2.10931C18.2806 2.10931 18.2541 2.20901 18.2128 2.33084C18.1009 2.66203 18.0825 3.11502 18.1596 3.64205C18.2575 4.31076 18.3132 4.40725 19.0179 5.1296C19.3485 5.46841 19.7329 5.89573 19.8723 6.07919L20.1257 6.41278L19.8723 6.17438C19.5624 5.88284 18.8497 5.31428 18.6922 5.233C18.5866 5.17849 18.571 5.17943 18.5058 5.24444C18.4459 5.30433 18.4332 5.39433 18.4248 5.81981C18.4119 6.48293 18.3218 6.90857 18.1043 7.33415C17.9866 7.56435 17.9681 7.51522 18.0745 7.2554C18.1541 7.06141 18.1621 6.97613 18.1616 6.33418C18.1603 5.04435 18.0076 4.73426 17.1122 4.20308C16.8855 4.0685 16.5117 3.87444 16.2818 3.77179C16.0518 3.66913 15.8692 3.57972 15.8757 3.57304C15.9012 3.54773 16.7744 3.80334 17.1258 3.93893C17.6486 4.14063 17.7348 4.16676 17.7984 4.14243C17.8409 4.12613 17.8615 4.00181 17.8821 3.63639Z" fill="#FF37C7"></path>
            <path d="M7.44574 5.84292C6.81652 4.97408 6.4272 3.64197 6.51148 2.64615L6.53754 2.33799L6.68077 2.36421C6.94974 2.41342 7.4135 2.58654 7.63065 2.71883C8.22658 3.08181 8.48457 3.55971 8.74704 4.78689C8.82393 5.14634 8.92479 5.55311 8.97121 5.69082C9.04593 5.91248 9.32829 6.43024 9.55784 6.76649C9.72319 7.00867 9.61336 7.12343 9.24786 7.09033C8.68965 7.03979 7.93352 6.51642 7.44574 5.84292Z" fill="#FF37C7"></path>
            <path d="M17.119 12.3092C14.1784 11.1217 13.1426 10.091 13.1426 8.35191C13.1426 8.09598 13.1515 7.88657 13.1622 7.88657C13.1729 7.88657 13.2867 7.97103 13.415 8.07428C14.0113 8.55395 14.6791 8.75882 16.5275 9.0293C17.6153 9.18847 18.2275 9.31702 18.7922 9.50484C20.5869 10.1018 21.6973 11.3133 21.9622 12.9635C22.0391 13.4429 21.994 14.3421 21.8692 14.8161C21.7708 15.1903 21.4702 15.865 21.3905 15.8909C21.3684 15.898 21.3467 15.8131 21.3411 15.6975C21.3107 15.0779 20.9986 14.4746 20.4743 14.0227C19.8782 13.509 19.0773 13.1 17.119 12.3092Z" fill="#FF37C7"></path>
            <path d="M15.0546 12.8025C15.0177 12.5826 14.9539 12.3018 14.9126 12.1785L14.8376 11.9542L14.9768 12.1112C15.1697 12.3283 15.3221 12.6061 15.4513 12.9761C15.5499 13.2585 15.561 13.3425 15.5603 13.8014C15.5595 14.2519 15.5472 14.3464 15.4562 14.6005C15.3126 15.0014 15.1344 15.2856 14.8355 15.5907C14.2983 16.139 13.6078 16.4426 12.6112 16.5685C12.438 16.5903 11.9331 16.6273 11.4893 16.6503C10.3706 16.7087 9.63434 16.8293 8.97278 17.0623C8.87767 17.0958 8.79275 17.1161 8.78413 17.1075C8.75736 17.0808 9.20777 16.8115 9.57981 16.6317C10.1044 16.3783 10.6266 16.24 11.7966 16.0446C12.3746 15.948 12.9715 15.831 13.123 15.7843C14.5543 15.3442 15.29 14.2083 15.0546 12.8025Z" fill="#FF37C7"></path>
            <path d="M16.4026 15.2035C16.0118 14.3612 15.9221 13.5479 16.1362 12.7894C16.1591 12.7083 16.1959 12.642 16.2181 12.642C16.2402 12.642 16.3325 12.692 16.423 12.753C16.603 12.8746 16.964 13.0793 17.926 13.6054C19.1264 14.2618 19.8109 14.7701 20.2763 15.3508C20.684 15.8594 20.9361 16.4386 21.0575 17.1449C21.1263 17.545 21.086 18.5077 20.9837 18.9106C20.6609 20.1808 19.9108 21.1786 18.8409 21.7609C18.6841 21.8462 18.5434 21.9162 18.5282 21.9166C18.513 21.9169 18.5701 21.7712 18.6552 21.5929C19.0151 20.8383 19.056 20.1043 18.7839 19.2873C18.6173 18.7871 18.2776 18.1767 17.5917 17.1451C16.7943 15.9456 16.5988 15.6265 16.4026 15.2035Z" fill="#FF37C7"></path>
            <path d="M5.35747 19.7485C6.44869 18.8244 7.80644 18.1678 9.04321 17.9663C9.57623 17.8795 10.4642 17.914 10.9577 18.0407C11.7489 18.2438 12.4566 18.6985 12.8247 19.2404C13.1844 19.77 13.3387 20.2316 13.4994 21.2584C13.5627 21.6635 13.6317 22.0703 13.6526 22.1624C13.7733 22.6945 14.008 23.1199 14.299 23.3336C14.7612 23.6728 15.557 23.6939 16.3398 23.3877C16.4726 23.3357 16.588 23.2997 16.5962 23.3078C16.6245 23.3361 16.2303 23.6008 15.9522 23.7401C15.578 23.9276 15.2805 24 14.8851 24C14.1681 24 13.5728 23.6342 13.0761 22.8883C12.9784 22.7415 12.7587 22.3018 12.5879 21.9113C12.0634 20.7116 11.8045 20.3462 11.1956 19.9462C10.6657 19.5982 9.98228 19.5358 9.46816 19.7886C8.79283 20.1207 8.60441 20.9863 9.0881 21.5348C9.28034 21.7528 9.63883 21.9409 9.93197 21.9775C10.4804 22.0459 10.9517 21.6275 10.9517 21.0721C10.9517 20.7116 10.8135 20.5058 10.4656 20.3483C9.9905 20.1334 9.47981 20.3847 9.48226 20.8323C9.48332 21.0231 9.56619 21.1431 9.75698 21.2296C9.87937 21.2852 9.88221 21.2895 9.78241 21.2688C9.34648 21.1781 9.24435 20.651 9.59485 20.3011C10.0157 19.881 10.8858 20.0664 11.1847 20.6398C11.3102 20.8807 11.3247 21.3603 11.2153 21.6499C10.9704 22.2982 10.2561 22.6391 9.53158 22.4536C9.03829 22.3273 8.83744 22.1905 8.24268 21.5761C7.20922 20.5084 6.80801 20.3016 5.3181 20.0682L5.03258 20.0235L5.35747 19.7485Z" fill="#FF37C7"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.508283 0.638644C3.95959 4.83986 6.33669 6.57321 6.60085 6.93942C6.81896 7.2418 6.73687 7.51365 6.36322 7.7267C6.15543 7.84516 5.72824 7.96518 5.51435 7.96518C5.27242 7.96518 5.18937 7.87158 5.18937 7.87158C5.0491 7.73815 4.9701 7.76149 4.24977 6.4791C3.24972 4.92277 2.41281 3.63172 2.38998 3.61011C2.33719 3.56012 2.33809 3.56181 4.1478 6.80938C4.44019 7.48625 4.20596 7.73471 4.20596 7.83113C4.20596 8.02724 4.15262 8.13032 3.9114 8.40017C3.50928 8.85009 3.32953 9.35562 3.19977 10.4019C3.0543 11.5746 2.64526 12.4031 1.51167 13.8211C0.84811 14.6511 0.739532 14.8032 0.572096 15.1378C0.361197 15.559 0.303207 15.7949 0.279704 16.3269C0.254862 16.8893 0.303244 17.2527 0.474578 17.7905C0.624574 18.2612 0.781143 18.5721 1.18141 19.1939C1.52683 19.7305 1.72572 20.1293 1.72572 20.2852C1.72572 20.4094 1.74935 20.4095 2.2846 20.2883C3.56555 19.9982 4.60567 19.4879 5.19066 18.8627C5.55269 18.4756 5.63769 18.2619 5.64045 17.7315C5.64226 17.3846 5.63009 17.312 5.53659 17.1124C5.38438 16.7876 5.10731 16.5175 4.49663 16.0988C3.69645 15.5502 3.35469 15.1086 3.26028 14.5012C3.18285 14.0027 3.27268 13.6511 3.71534 12.7206C4.17352 11.7575 4.28706 11.3471 4.36387 10.3762C4.41347 9.74902 4.48217 9.50166 4.66185 9.30311C4.84924 9.09607 5.01794 9.02595 5.48172 8.96241C6.23779 8.8588 6.71923 8.66262 7.11496 8.29688C7.45827 7.9796 7.60192 7.67388 7.62397 7.21366L7.6407 6.86483L7.44885 6.6405C6.75411 5.82806 0.043019 0 0.000264434 0C-0.00886914 0 0.219749 0.28741 0.508283 0.638644ZM2.11571 16.9634C2.27279 16.6843 2.18933 16.3256 1.92659 16.1504C1.67832 15.9849 1.29267 16.0628 1.29267 16.2786C1.29267 16.3445 1.32896 16.3924 1.41077 16.4346C1.54853 16.5057 1.55852 16.5856 1.45014 16.749C1.34038 16.9144 1.34924 17.0599 1.47514 17.1588C1.67805 17.3182 1.96528 17.2305 2.11571 16.9634Z" fill="#FF37C7"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.11785 9.14539C7.7629 9.25473 7.41787 9.63202 7.31106 10.0276C7.24591 10.269 7.28288 10.6923 7.38047 10.8231C7.53814 11.0342 7.69062 11.0899 8.10348 11.087C8.9118 11.0813 9.6145 10.7336 9.69619 10.299C9.76315 9.94266 9.45454 9.44887 9.02943 9.2321C8.81007 9.12028 8.34355 9.07591 8.11785 9.14539ZM9.06277 9.88646C9.18742 9.70882 9.1329 9.51683 8.92089 9.38698C8.51717 9.13973 7.90663 9.34433 7.90663 9.72685C7.90663 9.91726 8.22501 10.125 8.51685 10.125C8.7111 10.125 8.97691 10.0088 9.06277 9.88646Z" fill="#FF37C7"></path>
          </svg>
            <span class="gonka-uniswap-link__brand">Uniswap</span>
          </a>
        </div>
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
