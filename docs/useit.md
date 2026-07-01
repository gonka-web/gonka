<div class="infra-page">
  
  <!-- Yellow Top Banner -->
  <div class="yellow-banner">
      <p class="yellow-banner-text">Kimi K and MiniMax models are now available</p>
    <button class="banner-close">
      <img src="/images/icons/x-mark.svg" alt="close" width="16" height="16" />
    </button>
  </div>

  <!-- Header -->
  <header class="landing-header">
    <div class="header-wrap">
    <div class="nav-section">
      <a href="/" class="logo-section">
        <img src="/images/logos/gonka.svg" alt="Gonka" width="40" height="40" class="logo-light" />
        <img src="/images/logos/dark-gonka.svg" alt="Gonka" width="40" height="40" class="logo-dark" />
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
        <div class="theme-toggle">
          <button class="theme-btn theme-btn-sun" data-theme="default">
            <img src="/images/icons/light-theme.svg" alt="Light theme" width="18" height="18" class="sun-icon-light" />
            <img src="/images/icons/dark-light-theme.svg" alt="Light theme" width="18" height="18" class="sun-icon-dark" />
          </button>
          <button class="theme-btn theme-btn-moon" data-theme="slate">
            <img src="/images/icons/dark-theme.svg" alt="Dark theme" width="18" height="18" />
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
        <a href="https://x.com/gonka_ai" target="_blank" class="join-btn">join today</a>
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
        <div class="mobile-theme-toggle">
          <button class="mobile-theme-btn mobile-theme-btn-sun" data-theme="default">
            <img src="/images/icons/light-theme.svg" alt="Light theme" width="16" height="16" class="mobile-sun-icon-light" />
            <img src="/images/icons/dark-light-theme.svg" alt="Light theme" width="16" height="16" class="mobile-sun-icon-dark" />
          </button>
          <button class="mobile-theme-btn mobile-theme-btn-moon" data-theme="slate">
            <img src="/images/icons/dark-theme.svg" alt="Dark theme" width="16" height="16" />
          </button>
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
          
        <a href="https://x.com/gonka_ai" target="_blank" class="mobile-join-btn">join today</a>
        </div>
      </div>
    </div>
  </div>

<section class="useit-hero">
  <div class="useit-hero__container">
    <div class="infra-header useit-hero__header">
      <div class="infra-badge">
        <img
          class="infra-badge__icon"
          src="/images/icons/glob.svg"
          alt="Glob"
        />
        <span class="infra-badge__text"
          >Gonka.ai — a network that belongs to everyone</span
        >
      </div>

      <h1 class="main-title">
        <span>GONKA</span> —  cost-efficient AI compute with a single API key
      </h1>

      <p class="infra-header__subtitle">
       GONKA.AI gives you direct access to powerful AI. No subscriptions. No middle layers. You connect through a simple API. You pay in GNK. You run models exactly where you need them.
      </p>
    </div>
  </div>
</section>

<!-- Familiar tools — decentralized compute -->
<section class="integration section-offset">
  <div class="integration__container">
    <div class="integration__header">
      <h2 class="title title--center title--sm">Familiar tools —<br />decentralized compute</h2>

      <p class="integration__subtitle">
       The network runs through an OpenAI-compatible API. <br/> You can use it with Cursor, Zed, OpenClaw, and other development environments just like a standard OpenAI key:
      </p>
    </div>

    <div class="integration__flow">
      <div class="integration__step ">
        <span>Open settings</span>
      </div>
      <svg
        class="integration__arrow"
        width="40"
        height="12"
        viewBox="0 0 40 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40 5.77344L30 -6.53267e-05L30 11.5469L40 5.77344ZM0 5.77344L-2.96433e-09 6.77344L31 6.77344L31 5.77344L31 4.77344L2.96433e-09 4.77344L0 5.77344Z"
          fill="black"
        />
      </svg>

      <div class="integration__step">
        <span>Insert your GONKA key instead of the default one</span>
      </div>

      <svg
        class="integration__arrow"
        width="40"
        height="12"
        viewBox="0 0 40 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40 5.77344L30 -6.53267e-05L30 11.5469L40 5.77344ZM0 5.77344L-2.96433e-09 6.77344L31 6.77344L31 5.77344L31 4.77344L2.96433e-09 4.77344L0 5.77344Z"
          fill="black"
        />
      </svg>

      <div class="integration__step">
        <span>Select a model</span>
      </div>

      <svg
        class="integration__arrow"
        width="40"
        height="12"
        viewBox="0 0 40 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40 5.77344L30 -6.53267e-05L30 11.5469L40 5.77344ZM0 5.77344L-2.96433e-09 6.77344L31 6.77344L31 5.77344L31 4.77344L2.96433e-09 4.77344L0 5.77344Z"
          fill="black"
        />
      </svg>

      <div class="integration__step">
        <span>Keep coding the way you’re used to</span>
      </div>
    </div>

    <div class="important-note">
      <div class="badge">
        <div class="badge__text">Important</div>
        <svg
          class="badge__icon"
          viewBox="0 0 24 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.6"
            d="M4.99023 0L15.6113 27.4434H10.6211L0 0H4.99023Z"
          />
          <path
            opacity="0.4"
            d="M12.8662 0C13.3812 9.4258e-05 13.8433 0.31664 14.0293 0.796875L23.6846 25.7461C24.0009 26.5635 23.3979 27.4432 22.5215 27.4434H19.3516L8.73047 0H12.8662Z"
          />
        </svg>
      </div>

      <div class="important-note__text">
        <p>Requests are routed not to a closed data center, <br/> but to a distributed network of nodes.</p>
      </div>
    </div>
  </div>
</section>

<!-- Gonka Accepts Payments In GNK Section -->
<section class="useit-payments section-offset">
  <div class="useit-payments__container">
    <div class="useit-payments__left">
      <h2 class="useit-payments__title title title--sm">Gonka Accepts Payments In GNK</h2>
      <div class="useit-payments__steps">
        <div class="useit-payments__step">
          <span class="useit-payments__num">01</span>
          <p class="useit-payments__step-text">Top up your balance</p>
        </div>
        <div class="useit-payments__step">
          <span class="useit-payments__num">02</span>
          <p class="useit-payments__step-text">Convert funds via the gateway;</p>
        </div>
        <div class="useit-payments__step">
          <span class="useit-payments__num">03</span>
          <p class="useit-payments__step-text">Spend coins based on the actual number of processed text tokens</p>
        </div>
      </div>
      <p class="useit-payments__note">The entry barrier is low. Minimal limits don't restrict experimentation.</p>
    </div>
    <div class="useit-payments__right">
      <img class="useit-payments__img" src="/images/wallet.png" alt="Create Wallet" />
    </div>
  </div>
</section>



<!-- How to start using the GONKA API -->
<section class="infra-steps section-offset">
  <div class="infra-steps__container">
    <div class="infra-steps__header">
      <h2 class="title title--center title--sm">How to start using the GONKA API</h2>
    </div>
    <div class="infra-steps__cards infra-steps__cards--own">
      <div class="infra-steps__card active">
        <div class="infra-steps__card-top">
          <span class="infra-steps__card-num">01</span>
        </div>
        <div class="infra-steps__card-content">
          <p class="infra-steps__card-text">
           Create a developer account and get an access key to the gateway that connects your code to the decentralized network.
          </p>
        </div>
      </div>
      <div class="infra-steps__card active">
        <div class="infra-steps__card-top">
          <span class="infra-steps__card-num">02</span>
        </div>
        <h3 class="infra-steps__card-subtitle">Choose your integration method:</h3>
        <div class="infra-steps__card-content">
          <p class="infra-steps__card-text">
            Install the Gonka OpenAI client for Python, TypeScript, Go, or another language. Use it like a standard OpenAI SDK — just change the endpoint and key.
          </p>
          <p class="infra-steps__card-text">
           Or specify the API endpoint and key directly in Cursor, Zed, or any editor that supports external providers.
          </p>
        </div>
      </div>
      <div class="infra-steps__card active">
        <div class="infra-steps__card-top">
          <span class="infra-steps__card-num">03</span>
        </div>
        <h3 class="infra-steps__card-subtitle">Let your environment work with the network like a standard OpenAI-compatible service:</h3>
        <div class="infra-steps__card-content">
         <ol class="infra-steps__list">
            <li>Send your first request.</li>
            <li>Define the model, prompt, and parameters.</li>
            <li>
              Run an example from the documentation.
            </li>
            <li>
              Receive a response from GONKA nodes within seconds.
            </li>
            <li>
              Move your key into environment variables.
            </li>
            <li>
              Add error handling.
            </li>
            <li>
              Integrate AI into your services, bot, internal tools, or workflow.
            </li>
          </ol>
        </div>
      </div>
    </div>
    <div class="important-note">
      <div class="badge">
        <div class="badge__text">Important</div>
        <svg
          class="badge__icon"
          viewBox="0 0 24 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.6"
            d="M4.99023 0L15.6113 27.4434H10.6211L0 0H4.99023Z"
          />
          <path
            opacity="0.4"
            d="M12.8662 0C13.3812 9.4258e-05 13.8433 0.31664 14.0293 0.796875L23.6846 25.7461C24.0009 26.5635 23.3979 27.4432 22.5215 27.4434H19.3516L8.73047 0H12.8662Z"
          />
        </svg>
      </div>
      <div class="important-note__text">
        <p>Payments are made in GNK. Detailed logs show how many text <br/> tokens you’ve processed and how much compute you’ve used.</p>
       
      </div>
    </div>
  </div>
</section>


</section>
  <!-- Logos Section -->
  <section class="logos-section">
    <div class="logos-row">
      <div class="logos-group">
        <span class="logos-label">Auditor</span>
        <div class="logos-items">
          <img src="/images/partners/certik.svg" alt="Certik" width="110" height="32" />
        </div>
      </div>
      <div class="logos-group">
        <span class="logos-label">Community Partners</span>
        <div class="logos-items">
          <img src="/images/partners/web3.svg" alt="Web3.com Ventures" width="98" height="32" />
          <img src="/images/partners/hard-yaka.svg" alt="Hard Yaka" width="114" height="32" />
          <img src="/images/partners/bitfury.svg" alt="Bitfury" width="102" height="32" />
          <img src="/images/partners/qtum.svg" alt="Qtum.AI" width="106" height="32" />
        </div>
      </div>
      <div class="logos-group">
        <span class="logos-label">Select Hosts</span>
        <div class="logos-items">
          <img src="/images/partners/gcore.svg" alt="Qtum.AI" width="90" height="32" />
          <img src="/images/partners/huperfusion.svg" alt="Hyperfusion" width="132" height="32" />
          <img src="/images/partners/block.svg" alt="6block" width="90" height="32" />
        </div>
      </div>
      <!-- <div class="logos-group">
        <span class="logos-label">Exchange Partners</span>
        <div class="logos-items">
          <img src="/images/partners/uphold.svg" alt="Uphold" width="90" height="32" />
        </div>
      </div> -->
    </div>
    <div class="logos-row">
      <div class="logos-group">
        <span class="logos-label">Protocol Creator</span>
        <div class="logos-items">
          <img src="/images/partners/product-science.svg" alt="Product Science" width="158" height="32" />
        </div>
      </div>
      <div class="logos-group">
        <span class="logos-label">Backed by</span>
        <div class="logos-items">          
          <img src="/images/partners/coatue.svg" alt="COATUE" width="86" height="32" />
          <img src="/images/partners/slow.svg" alt="Slow" width="49" height="32" />
          <img src="/images/partners/mantis.svg" alt="Mantis" width="100" height="32" />
          <img src="/images/partners/k5.svg" alt="K5" width="31" height="32" /></div>
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
          <a href="/patents.pdf" target="_blank">Patents</a>
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
          </div>

        <div class="footer-bottom-links">
      <a href="/help" class="footer-link">Help</a>
      <a href="/transactions-and-governance" class="footer-link">Transactions & Governance</a>
      <!-- <a href="#" class="footer-link">Terms & Policies</a> -->
          <div>
        </div>

  </footer>

</div>
