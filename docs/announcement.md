---
template: announcement.html
---

<div class="gonka-landing-2025">
  
  <!-- Yellow Top Banner -->
  <div class="yellow-banner">
    <p class="yellow-banner-text">NEW MODELS AVAILABLE: In the recent voting miners decided to add two new models: OpenAI GPT-OSS-120b and Qwen3-235B-A22B-Thinking-2507 are now available via API</p>
    <a href="https://x.com/gonka_ai" target="_blank" class="banner-learn-more">learn more</a>
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

        <div class="nav-item-dropdown">
          <a href="#" class="nav-item" data-dropdown="tokenomics">
            <span class="nav-text">tokenomics</span>
            <span class="nav-icon">+</span>
          </a>
          <div class="dropdown-menu" id="tokenomics">
            <a href="/tokenomics.pdf" class="dropdown-link">Tokenomics and more</a>
          </div>
        </div>

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
        
        <div class="mobile-nav-item-dropdown">
          <a href="#" class="mobile-nav-item" data-mobile-dropdown="tokenomics">
            <span class="mobile-nav-text">tokenomics</span>
            <span class="mobile-nav-icon">+</span>
          </a>
          <div class="mobile-dropdown-menu" id="mobile-tokenomics">
            <a href="/tokenomics.pdf" class="mobile-dropdown-link">Tokenomics and more</a>
          </div>
        </div>
        
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
              <img src="/images/icons/light-theme.svg" alt="Light theme" width="16" height="16" class="mobile-sun-icon-light" />
              <img src="/images/icons/dark-light-theme.svg" alt="Light theme" width="16" height="16" class="mobile-sun-icon-dark" />
            </button>
            <button class="mobile-theme-btn mobile-theme-btn-moon" data-theme="slate">
              <img src="/images/icons/dark-theme.svg" alt="Dark theme" width="16" height="16" />
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

  <!-- Announcement Content -->
  <section class="announcement-content">
    <div class="announcement-container">
      <h1 class="announcement-title">announcement page</h1>
      
      <!-- Announcement Items -->
      <div class="announcement-items">
        
        <!-- Article 1 -->
        <div class="announcement-wrapper">
          <div class="announcement-badge">
            <span>22 AUG 2025</span>
          </div>
          <div class="announcement-item">
            <div class="announcement-wrapper">
              <div class="announcement-item-wrapper-content">
                <div class="announcement-item-wrapper">
                  <div class="announcement-item-header">
                    <h3 class="announcement-item-title">After Governance voting, Gonka chain supports new models.</h3>
                  </div>
                  <div class="announcement-item-content">
                    <p>The following models are now supported on the Gonka chain:</p>
                    <blockquote>
                      <p>Qwen/Qwen3-32B-FP8 (80GB VRAM)</p>
                      <p>Qwen/Qwen3-235B-A22B-Instruct-2507-FP8 (320GB VRAM)</p>
                    </blockquote>
                    <p>Community consensus expands the network's model set while preserving verifiability and stability.</p>
                  </div>
                </div>
                <button class="announcement-toggle">
                  <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 4V12M4 8H12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Article 2 -->
        <div class="announcement-wrapper">
          <div class="announcement-badge">
            <span>22 AUG 2025</span>
          </div>
          <div class="announcement-item">
            <div class="announcement-wrapper">
              <div class="announcement-item-wrapper-content">
                <div class="announcement-item-wrapper">
                  <div class="announcement-item-header">
                    <h3 class="announcement-item-title">Announcing the Launch of Gonka Decentralized AI Network!</h3>
                  </div>
                  <div class="announcement-item-content">
                    <p>As of Friday, August, 22, 2025, the protocol is fully operational. This marks a significant step forward in creating an AI infrastructure built on the principles of open access, verifiable performance, and user ownership. This post provides a comprehensive overview of the live protocol.</p>

                    <p><strong>Foundational Principles:</strong></p>

                    <p><strong>Self-Sovereign Interaction:</strong> You maintain full control over your digital assets. All on-chain actions are authorized by you, using your private key to sign transactions. This method provides cryptographic proof of ownership without ever exposing the key itself.</p>

                    <p><strong>Autonomous Governance:</strong> The protocol is designed to be operator-free and self-governing. Protocol upgrades, economic parameters, and system configurations are managed by on-chain consensus, ensuring a stable and community-guided system.</p>

                    <p><strong>Unified Security Model:</strong> The protocol's security and execution are integrated. The same network of nodes that secures the ledger via our non-wasteful Proof-of-Work also validates all AI inference outputs, creating a single, trust-based framework.</p>

                    <p><strong>For Hosts:</strong></p>

                    <p>The network is ready to utilize your hardware's computational power.</p>

                    <p><strong>Permissionless Onboarding:</strong> You can connect any compatible GPU and begin serving inference without requiring approval.</p>

                    <p><strong>Rewards for Useful Work:</strong> Earn our new native coin in direct proportion to the AI inference you successfully deliver.</p>

                    <p><strong>Verifiable Performance:</strong> Our Sprint-based benchmarking system measures your GPU's actual computational capacity on AI tasks. This proven performance, cross-validated by the network, determines your consensus weight and ensures fair rewards.</p>

                    <p><strong>Efficient &amp; Respectful Operation:</strong> Our low-energy Proof-of-Work uses brief competitions to secure the network, preserving your hardware for profitable inference. The protocol allocates your compute only when required.</p>

                    <p><strong>Guaranteed Service Uptime:</strong> An intelligent, timeslot-based scheduling system ensures a significant portion of the network is always reserved for serving paid inference tasks.</p>

                    <p><strong>For Developers:</strong></p>

                    <p>Build the next generation of AI on a decentralized, high-performance backend.</p>

                    <p><strong>OpenAI-Compatible API:</strong> Integrate the network using a familiar API surface. Our End-to-End Developer Experience is supported by a complete portal with documentation, tutorials, and SDKs.</p>

                    <p><strong>Live Decentralized Inference:</strong> Run jobs on open models, starting with QwQ 32B and Qwen 7B, executed on a distributed network of real GPUs.</p>

                    <p><strong>Optimized Performance:</strong> The protocol features intelligent load-balancing based on proven node capacity and achieves reliable result verification with minimal overhead (a ~5–10% check rate).</p>

                    <p><strong>Stable &amp; Governable Economics:</strong> The network launches with stable, empirically-tuned economic parameters. These are fully governable by on-chain community consensus.</p>

                    <p><strong>Protocol Architecture and Economics:</strong></p>

                    <p>The network is a self-sustaining ecosystem with a complete economic design. This includes payments for inference, workload-based rewards, validator incentives, a staking-backed collateral system, penalties for dishonest behavior, and a dynamic reputation score.</p>

                    <p>Furthermore, the protocol is designed for continued improvement: 20% of all inference revenue is dedicated to funding future AI model training, with the on-chain primitives for a decentralized training MVP already in place.</p>
                  </div>
                </div>
                <button class="announcement-toggle">
                  <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 4V12M4 8H12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
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
            <a href="https://t.me/Gonka_AI" class="footer-social" target="_blank" aria-label="Telegram">
              <img src="/images/icons/telegram.svg" alt="Telegram" width="25" height="25" />
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
