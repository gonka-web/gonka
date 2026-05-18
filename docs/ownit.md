<div class="infra-page">
  
  <!-- Yellow Top Banner -->
  <div class="yellow-banner">
    <p class="yellow-banner-text">COMING SOON: Kimi K 2.5 and MiniMax</p>
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

          <div class="wallet-tooltip">
            <img src="/images/wallet.svg" alt="Wallet" class="wallet-icon" />
            <div class="wallet-text">
              <span>Wallet will be</span>
              <span>available soon</span>
            </div>
          </div>
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
            
            <div class="mobile-wallet-tooltip">
              <img src="/images/wallet.svg" alt="Wallet" class="mobile-wallet-icon" />
              <div class="mobile-wallet-text">
                <span>Wallet will be</span>
                <span>available soon</span>
              </div>
            </div>
          </div>
          
        <a href="https://x.com/gonka_ai" target="_blank" class="mobile-join-btn">join today</a>
        </div>
      </div>
    </div>
  </div>

<section class="ownit-hero">
  <div class="ownit-hero__container">
    <div class="infra-header ownit-hero__header">
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
        <span>GONKA</span> — YOUR SHARE IN THE<br />
        FUTURE OF AI
      </h1>

      <p class="infra-header__subtitle">
        Here, the GNK coin is not just a speculative asset. It is your share in the<br />
        future of artificial intelligence.
      </p>
    </div>
  </div>
</section>

<!-- Who Gonka Is Built For Section -->
<section class="ownit-for section-offset">
  <div class="ownit-for__container">
    <h2 class="ownit-for__title title title--center title--sm">
      Who Gonka Is Built For
      <img class="title__icon" src="/images/icons/subtracts.svg" alt="" />
    </h2>

    <div class="ownit-for__cards">
      <div class="ownit-for__card">
        <h3 class="ownit-for__card-title">
          AI Developers <br />
          and Creators.
        </h3>
        <p class="ownit-for__card-text">
          You need powerful models like Qwen3-235B for inference, but cloud
          giants overcharge and lock you into their ecosystems. GONKA provides
          an OpenAI-compatible API through a decentralized GPU network
          worldwide, connecting you directly with compute providers.
        </p>
      </div>

      <div class="ownit-for__card">
        <h3 class="ownit-for__card-title">
          GPU <br />
          Owners
        </h3>
        <p class="ownit-for__card-text">
          GPU owners willing to contribute computing power. Your hardware sits
          idle between projects. Connect it to GONKA, run real AI tasks from
          users, and earn GNK for every computation cycle. No useless
          proof-of-work — only meaningful work that powers the network.
        </p>
      </div>

      <div class="ownit-for__card">
        <h3 class="ownit-for__card-title">
          Coin <br />
          Holders
        </h3>
        <p class="ownit-for__card-text">
          Coin holders seeking exposure to AI growth. GNK reflects the total
          computational capacity of the network. As new nodes join and demand
          increases, your coins retain utility by granting access to compute at
          any time.
        </p>
      </div>
    </div>

    <div class="ownit-for__note important-note">
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
        <p>Gonka does not guarantee financial returns or token price growth.</p>
        <p>The coin's value depends on the scale of network adoption.</p>
      </div>
    </div>
  </div>
</section>

<!-- Section 1: Our Philosophy — text left, image right -->
<section class="ownit-section ownit-section--philosophy section-offset">
  <div class="ownit-section__container">

    <div class="ownit-section__content">
      <h2 class="ownit-section__title title title--sm">Our Philosophy</h2>
      <div class="ownit-section__texts">
        <p class="ownit-section__text">Today, access to powerful AI computing is determined by your bank account.</p>
        <p class="ownit-section__text">Gonka changes that.</p>
        <p class="ownit-section__text">GONKA is an infrastructure where computing power is distributed among people, not concentrated in the hands of a few.</p>
        <p class="ownit-section__text">It's a network that belongs to no one and simultaneously belongs to everyone who participates in it.</p>
      </div>
      <div class="ownit-section__quote">
        <p>AI should belong to everyone. Not corporations. Not governments. Not those with the most money. Everyone.</p>
      </div>
    </div>

    <div class="ownit-section__media">
      <img class="ownit-section__img" src="/images/ai-gnk.png" alt="AI GNK" />
    </div>

  </div>
</section>

<!-- Section 2: What It Means To Own GNK — image left, text right -->
<section class="ownit-section ownit-section--own section-offset">
  <div class="ownit-section__container">

    <div class="ownit-section__media">
      <img class="ownit-section__img" src="/images/gnk-miner.png" alt="Miner GNK" />
    </div>

    <div class="ownit-section__content">
      <h2 class="ownit-section__title title title--sm">What It Means <br/> To Own GNK</h2>
      <div class="ownit-section__texts">
        <p class="ownit-section__text">GONKA coins are more than just a speculative asset. They represent a share of the network's real computing power—today and in the future.</p>
        <p class="ownit-section__text">As the network grows, so does the amount of computing power it produces.</p>
        <p class="ownit-section__text">Each coin is a key to accessing an ever-increasing amount of computation.</p>
      </div>
      <div class="ownit-section__quote">
        <p>By owning GNK, you control the AI computing of the future.</p>
      </div>
    </div>

  </div>
</section>

<!-- Three ways to participate in GONKA -->
<section class="infra-steps section-offset">
  <div class="infra-steps__container">
    <div class="infra-steps__header">
      <h2 class="title title--center title--sm">Three ways to participate in GONKA</h2>

      <p class="infra-steps__subtitle">
        Start simple and go deeper. Every step strengthens <br/> your connection with the network.
      </p>
    </div>

    <div class="infra-steps__cards infra-steps__cards--own">
      <div class="infra-steps__card">
        <div class="infra-steps__card-top">
          <span class="infra-steps__card-num">01</span>
          <img
            class="infra-steps__card-img"
            src="/images/coin-selling.png"
            alt=""
          />
        </div>
        <h3 class="infra-steps__card-title">Use GNK</h3>
        <div class="infra-steps__card-content">
          <p class="infra-steps__card-text">
           Spend GNK on AI inference right now.
          </p>
          <p class="infra-steps__card-text">
           Pay miners for computations and gain access to powerful AI without subscriptions, corporations, or intermediaries.
          </p>
          <p class="infra-steps__card-text">
           For $1 on GONKA, you get what OpenAI charges $100 for. The rest is yours.
          </p>
        </div>
      </div>

      <div class="infra-steps__card">
        <div class="infra-steps__card-top">
          <span class="infra-steps__card-num">02</span>
          <img
            class="infra-steps__card-img"
            src="/images/coin-holding.png"
            alt=""
          />
        </div>
        <h3 class="infra-steps__card-title">Hold GNK</h3>
        <div class="infra-steps__card-content">
          <p class="infra-steps__card-text">
           Compute is currency of the future that you can use or sell any time you need.
          </p>
          
        </div>
      </div>

      <div class="infra-steps__card">
        <div class="infra-steps__card-top">
          <span class="infra-steps__card-num">03</span>
          <img
            class="infra-steps__card-img"
            src="/images/coin-inference.png"
            alt=""
          />
        </div>
        <h3 class="infra-steps__card-title">Mine GNK</h3>
        <div class="infra-steps__card-content">
          <p class="infra-steps__card-text">
            Connect your hardware to the GONKA network.
          </p>
          <p class="infra-steps__card-text">
            Process other participants' tasks and earn GNK for every completed computing request.
          </p>
          <p class="infra-steps__card-text">
            Your GPU is working. You're earning. The network is growing.
          </p>
        </div>
      </div>
    </div>

  </div>
</section>

<!-- Section 3: Why This Changes Everything — image left top-aligned, badge + text right -->
<section class="ownit-section ownit-section--changes section-offset">
  <div class="ownit-section__container">

    <div class="ownit-section__media">
      <img class="ownit-section__img" src="/images/gpu.png" alt="GPU" />
    </div>

    <div class="ownit-section__content">
      <div class="badge">
        <div class="badge__text">Reasons</div>
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
      <h2 class="ownit-section__title title title--sm">Why This Changes Everything</h2>
      <div class="ownit-section__texts">
        <p class="ownit-section__text">Corporations are building AI that belongs to them.</p>
        <p class="ownit-section__text">They train models on your data, sell you access, and create systems that can replace you.</p>
        <p class="ownit-section__text">We're building infrastructure that's owned by people—those who believe in it and participate in it.</p>
        <p class="ownit-section__text">Bitcoin's reputation was once built solely on trust. Today, it's part of the global economy.</p>
        <p class="ownit-section__text">GONKA is following the same path.</p>
        <p class="ownit-section__text">Own it.</p>
      </div>
      <div class="ownit-section__quote">
        <p>By owning GONKA, you own the future of artificial intelligence.</p>
      </div>
    </div>

  </div>
</section>

<section class="ownit-join section-offset">
  <div class="ownit-join__container">
    <div class="infra-header">
        <h2 class="main-title">
          <span>Join us</span>
        </h2>
      <div class="infra-badge">
        <span class="infra-badge__text infra-badge__text--md">
          Own it. By owning GONKA, you secure your share of the future AI compute economy.
        </span>
      </div>
      <p class="infra-header__subtitle">
        New here? Set up a wallet and acquire GNK via OTC. Ready to <br/> contribute? Launch a node or test the API.
      </p>
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
