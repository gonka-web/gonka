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

<!-- Hero Section: How to join -->
<section class="mining-hero">
  <div class="mining-hero__container">
    <h1 class="mining-hero__title">
      How to join the network<br />through mining
    </h1>
    <div class="mining-hero__cards">
      <div class="mining-hero__card">
        <h3 class="mining-hero__card-title">Renting<br />Hardware</h3>
        <p class="mining-hero__card-text">
          To mine the GNK token, you don't need to buy expensive equipment. Rent
          ready-to-use GPU power from trusted providers and launch a node right
          away. Earn PoC weight and GNK for computing without capital
          expenditures on hardware.
        </p>
      </div>
      <div class="mining-hero__card">
        <h3 class="mining-hero__card-title">
          Connecting your<br />own hardware
        </h3>
        <p class="mining-hero__card-text">
          Do you have powerful GPUs or know where to rent them? Connect them to
          the Gonka network and keep 100% of your PoC weight without pool fees.
          Your existing infrastructure becomes a source of GNK tokens and part
          of the global AI layer.
        </p>
      </div>
      <div class="mining-hero__card">
        <h3 class="mining-hero__card-title">
          Entering mining<br />through a pool
        </h3>
        <p class="mining-hero__card-text">
          The easiest way to start. Buy a share of computing power in a pool and
          receive GNK proportionally to your contribution. Operators handle the
          technical side. You simply provide capital and collect rewards.
        </p>
      </div>
    </div>
    <div class="mining-hero__note">
      <img src="/images/icons/subtracts.svg" alt="" /><span
        >Remember: an early network = a larger share of the emission</span
      >
    </div>
  </div>
</section>
<!-- mining-what -->
<section class="mining-what section-offset">
  <div class="mining-what__container">
    <div class="mining-what__left">
      <div class="badge">
        <div class="badge__text">What GNK Mining is</div>
        <svg
          class="badge__icon"
          width="24"
          height="28"
          viewBox="0 0 24 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.6"
            d="M4.99023 0L15.6113 27.4434H10.6211L0 0H4.99023Z"
            fill="#242424"
          />
          <path
            opacity="0.4"
            d="M12.8662 0C13.3812 9.4258e-05 13.8433 0.31664 14.0293 0.796875L23.6846 25.7461C24.0009 26.5635 23.3979 27.4432 22.5215 27.4434H19.3516L8.73047 0H12.8662Z"
            fill="#242424"
          />
        </svg>
      </div>
    </div>
    <div class="mining-what__right">
      <p class="mining-what__text">
        GNK mining means providing compute power (GPU) to the Gonka network.
      </p>
      <p class="mining-what__text">
        These resources are used for real AI workloads. The network rewards
        miners with GNK tokens based on the amount of GPU resources they
        provide.
      </p>
      <p class="mining-what__text">
        In simple terms:<br />Gonka's infrastructure is built on miners' GPU
        power — and they receive GNK in return for that contribution.
      </p>
    </div>
  </div>
</section>

<!-- Who Gonka Token Miners Are Section -->
<section class="mining-who section-offset">
  <div class="mining-who__container">
    <h2 class="title title--center">
      Who Gonka Token<br />Miners Are
        <img  class="title__icon" src="/images/icons/subtracts.svg" alt="">
    </h2>
    <div class="mining-who__card">
      <div class="mining-who__image">
        <img src="/images/gnk-miner.png" alt="Gonka miner" />
      </div>
      <div class="mining-who__content">
        <p class="mining-who__text">
          Miners in the Gonka network run compute nodes and turn AI
          infrastructure into income, receiving GNK tokens proportionally to
          their PoC weight — the amount of verified compute and the quality of
          participation in the network
        </p>
        <p class="mining-who__text">
          A miner connects hardware or rents a ready-made node and takes part in
          task processing and PoC sprints. Rewards are начисляются for the
          completed and verified volume of work.
        </p>
        <p class="mining-who__text">
          Each GNK miner earns crypto while simultaneously supporting the
          decentralized infrastructure of AI models backed by the network. This
          role gives miners a direct economic and personal incentive to ensure
          reliability and availability of capacity.
        </p>
      </div>
    </div>

  </div>
</section>
<!-- What Miners Receive Section -->
<section class="mining-receive section-offset">
  <div class="mining-receive__container">
    <div class="mining-receive__header">
      <div class="badge">
        <div class="badge__text">Reward</div>
        <svg
          class="badge__icon"
          width="24"
          height="28"
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

      <h2 class="title">What Miners Receive</h2>

      <p class="mining-receive__subtitle">
        GNK is the base token of the protocol and is used to pay for compute.
      </p>
    </div>

    <div class="mining-receive__cards">
      <div class="mining-receive__card">
        <p class="mining-receive__card-text">
          Miners in the Gonka network receive GNK tokens for verified compute
          work, including language-model inference and participation in the
          <a href="#" class="mining-receive__link"
            >Proof-of-Compute</a
          >
          mechanism.
        </p>
      </div>

      <div class="mining-receive__card">
        <p class="mining-receive__card-text">
          The reward size depends on node power, reliability, and contribution
          to overall network performance per epoch.
        </p>
      </div>

      <div class="mining-receive__card">
        <p class="mining-receive__card-text">
          Miner profitability depends on the amount of verified work performed
          and the market price of GNK.
        </p>
      </div>
    </div>

  </div>
</section>
<!-- How GNK Rewards Are Distributed Section -->
<section class="mining-distribution section-offset">
  <div class="mining-distribution__container">
    <div class="mining-distribution__header">
      <h2 class="title title--center">How GNK Rewards<br />Are Distributed</h2>

      <p class="mining-distribution__subtitle">
        Rewards are distributed per epoch based on verified compute
        contribution.
      </p>
    </div>

    <div class="mining-distribution__flow">
      <div class="mining-distribution__step ">
        <span>Task</span>
      </div>
      <svg
        class="mining-distribution__arrow"
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

      <div class="mining-distribution__step">
        <span>Compute</span>
      </div>

      <svg
        class="mining-distribution__arrow"
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

      <div class="mining-distribution__step">
        <span>Verification</span>
      </div>

      <svg
        class="mining-distribution__arrow"
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

      <div class="mining-distribution__step">
        <span>Weight Calculation</span>
      </div>

      <svg
        class="mining-distribution__arrow"
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
      <div class="mining-distribution__step">
        <span>GNK Distribution</span>
      </div>
    </div>

    <p class="mining-distribution__note">
      The total reward per epoch <strong>(323,000 GNK at launch)</strong> is
      formed as a fixed pool<br />and distributed proportionally to the PoC
      weight of all participants.
    </p>

  </div>
</section>
<!-- How Rewards Are Distributed Section -->
<section class="mining-rewards section-offset">
  <div class="mining-rewards__container">
    <div class="mining-rewards__inner">
      <h2 class="mining-rewards__title title">
        How Rewards Are <br />
        Distributed
        <img class="title__icon" src="/images/icons/subtracts_7.svg" alt="" />
      </h2>

      <div class="mining-rewards__content">
        <div class="mining-rewards__left">
          <div class="mining-rewards__item">
            <div class="badge">
              <div class=" badge__text badge__text-lg">Protocol-issued rewards</div>
              <svg
                class="badge__icon badge__icon-lg"
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
            <div class="mining-rewards__card">
              <p class="mining-rewards__card-text">
                The protocol issues GNK according to a predefined schedule
                similar to Bitcoin's emission model.
              </p>
            </div>
          </div>

          <div class="mining-rewards__item">
            <div class="badge">
              <div class=" badge__text badge__text-lg">Work-based rewards</div>
                <svg
                class="badge__icon badge__icon-lg"
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
            <div class="mining-rewards__card">
              <p class="mining-rewards__card-text">
                Payments for completed requests come directly from developers
                and clients. Funds are reserved in escrow and distributed to the
                nodes that successfully execute the tasks.
              </p>
            </div>
          </div>
        </div>

        <div class="mining-rewards__right">
          <p class="mining-rewards__text">
            The Gonka network rewards miners who provide GPU capacity and
            process inference requests.
          </p>
          <p class="mining-rewards__text">
            Each epoch has a fixed GNK reward pool, distributed among miners
            proportionally to their verified compute contribution
            (Proof-of-Compute).
          </p>
          <p class="mining-rewards__text">
            Each completed request increases the miner's PoC weight and
            influences GNK rewards.
          </p>
          <p class="mining-rewards__text">
            Since the reward pool is fixed, an increase in the number of miners
            reduces the reward share per GPU. At earlier stages of the network,
            the reward share per unit of compute is therefore higher.
          </p>
        </div>
      </div>
    </div>

  </div>
</section>
 <!-- How GNK Can Be Used Section -->
<section class="infra-steps section-offset">
  <div class="infra-steps__container">
    <div class="infra-steps__header">
      <h2 class="title title--center">How GNK Can Be Used</h2>

      <p class="infra-steps__subtitle">
        GNK in the Gonka ecosystem is a utility token. It is needed to pay for
        inference, obtain liquidity, and participate in long-term network
        incentives
      </p>
    </div>

    <div class="infra-steps__cards">
      <div class="infra-steps__card">
        <div class="infra-steps__card-top">
          <span class="infra-steps__card-num">01</span>
          <img
            class="infra-steps__card-img"
            src="/images/coin-selling.png"
            alt=""
          />
        </div>
        <h3 class="infra-steps__card-title">Selling</h3>
        <div class="infra-steps__card-content">
          <p class="infra-steps__card-text">
            GNK tokens do not yet have an official listing. However, they can be
            sold or exchanged via various OTC venues and through like-minded
            members of the Gonka ecosystem community.
          </p>
          <p class="infra-steps__card-text">
            This enables participants focused on short-term returns to use a
            "mine → sell" model without deep involvement in the long-term
            network economy.
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
        <h3 class="infra-steps__card-title">Holding</h3>
        <div class="infra-steps__card-content">
          <p class="infra-steps__card-text">
            Holding GNK is a strategy for participants who expect growing demand
            for decentralized inference and training in the Gonka network.
          </p>
          <p class="infra-steps__card-text">
            A host can hold GNK while waiting for the ecosystem to expand: new
            applications, integrations with external protocols, and growth in
            total inference request volume.
          </p>
          <p class="infra-steps__card-text">
            Holders may gain advantages in access to services, staking, and, in
            the future, governance features.
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
        <h3 class="infra-steps__card-title">Paying for Inference</h3>
        <div class="infra-steps__card-content">
          <p class="infra-steps__card-text">
            A GNK miner can use the mined token as "fuel" for their own AI
            queries in the Gonka network.
          </p>
          <p class="infra-steps__card-text">
            If you need to test an AI model, build a demo, launch your own bot
            or service — you simply pay those requests in GNK instead of
            stablecoins or another cryptocurrency.
          </p>
          <hr class="infra-steps__divider" />
          <p class="infra-steps__card-label">
            <strong>The process looks like this:</strong>
          </p>
          <ul class="infra-steps__list">
            <li>Top up your inference balance with GNK.</li>
            <li>Send requests via an OpenAI-compatible API.</li>
            <li>
              The network reserves tokens in escrow and, as tasks are completed,
              distributes them to hosts that compute your requests.
            </li>
          </ul>
          <p class="infra-steps__card-text">
            This way, the miner turns part of the mined GNK not into immediate
            cash via selling, but into access to real compute power. You "pay
            yourself and other hosts" for a useful AI service.
          </p>
        </div>
      </div>
    </div>

  </div>
</section>
<!-- How GNK Mining Differs Section -->
<section class="mining-difference section-offset">
  <div class="mining-difference__container">
    <div class="mining-difference__header">
      <div class="badge">
        <div class="badge__text">Difference</div>
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
      <h2 class="mining-difference__title title title--sm">
        How GNK Mining Differs From Bitcoin, Ethereum and Bittensor Mining
      </h2>
    </div>
    <div class="mining-difference__content">
      <div class="mining-difference__left">
        <div class="mining-difference__main-card">
          <div class="mining-difference__coin-row">
            <img
              class="mining-difference__coin-img"
              src="/images/icons/coin-gonka.svg"
              alt="Gonka"
            />
            <h3 class="mining-difference__coin-name">Gonka</h3>
          </div>
          <div class="mining-difference__card-texts">
            <p class="mining-difference__card-text">
              GNK uses Proof-of-Compute (PoC). GPUs perform real AI tasks (LLM
              inference and validation), creating value for AI application
              developers while earning epoch rewards.
            </p>
            <p class="mining-difference__card-text">
              Gonka GNK focuses on inference for large language models.
              Currently this is Qwen3. More LLMs will be added later.
            </p>
            <p class="mining-difference__card-text">
              A single GNK network uses transformer-based PoC with transparent
              weight calculation by formula: compute volume + uptime +
              validation quality = share of the fixed GNK pool per epoch (323K
              at launch).
            </p>
            <p class="mining-difference__card-text">
              The key difference between TAO and GNK mining is that Bittensor is
              a marketplace of ML services with competing subnets, while Gonka
              is infrastructure for LLM inference with an emphasis on stability
              and scalability.
            </p>
          </div>
        </div>
      </div>
      <div class="mining-difference__right">
        <div class="mining-difference__item">
          <div class="mining-difference__coin-row">
            <img
              class="mining-difference__coin-img"
              src="/images/icons/coin-ethereum.svg"
              alt="Ethereum"
            />
            <h3 class="mining-difference__coin-name">Ethereum</h3>
          </div>
          <p class="mining-difference__item-text">
            Ethereum moved to Proof-of-Stake. Instead of GPU mining, validators
            stake ETH to produce blocks and provide security.
          </p>
        </div>
        <div class="mining-difference__item">
          <div class="mining-difference__coin-row">
            <img
              class="mining-difference__coin-img"
              src="/images/icons/coin-bitcoin.svg"
              alt="Bitcoin"
            />
            <h3 class="mining-difference__coin-name">Bitcoin</h3>
          </div>
          <p class="mining-difference__item-text">
            Bitcoin uses classic Proof-of-Work. ASIC miners solve cryptographic
            hash puzzles to secure the blockchain and issue BTC. Such
            computations do not create additional value outside the network.
          </p>
        </div>
        <div class="mining-difference__item">
          <div class="mining-difference__coin-row">
            <img
              class="mining-difference__coin-img"
              src="/images/icons/coin-bittensor.svg"
              alt="Bittensor"
            />
            <h3 class="mining-difference__coin-name">Bittensor</h3>
          </div>
          <p class="mining-difference__item-text">
            Bittensor (TAO) is a decentralized marketplace for ML models with
            many subnets. Validators assess the quality of miners' ML outputs
            using a complex matrix of metrics, creating competition across
            different model types and tasks.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- How Miners Influence The Gonka Network Section -->
<section class="mining-influence section-offset">
  <div class="mining-influence__container">
    <h2 class="mining-influence__title title title--center title--sm">
      How Miners Influence<br />The Gonka Network
    </h2>

    <div class="mining-influence__content">
      <div class="mining-influence__left">
        <img
          class="mining-influence__icon"
          src="/images/icons/subtracts_3.svg"
          alt=""
        />

        <div class="mining-influence__texts">
          <p class="mining-influence__text">
            Miners in Gonka do more than provide compute power — they
            participate in governing how the network evolves.
          </p>
          <p class="mining-influence__text">
            Your voting power is based on your verified contribution to the
            network.
          </p>
          <div class="mining-influence__list-block">
            <p class="mining-influence__text">It depends on:</p>
            <ul class="mining-influence__list">
              <li>the amount of GPU capacity you provide,</li>
              <li>the volume of completed and validated work,</li>
              <li>and your node's reliability and uptime.</li>
            </ul>
          </div>
          <p class="mining-influence__text">
            The more compute you contribute and the more work you complete, the
            stronger your influence in governance.
          </p>
          <p class="mining-influence__text mining-influence__text--bold">
            There is no centralized authority — decisions are made collectively
            by active contributors.
          </p>
        </div>
      </div>

      <div class="mining-influence__right">
        <div class="mining-influence__card">
          <div class="mining-influence__card-top">
            <h3 class="mining-influence__card-title">
              Vote on Protocol<br /> Updates
            </h3>
            <svg width="48" height="42" viewBox="0 0 48 42" fill="none" xmlns="http://www.w3.org/2000/svg">

            <img
              class="mining-influence__card-img"
              src="/images/icons/icon-vote.svg"
              alt=""
            />
          </div>
          <p class="mining-influence__card-text">
            Approve changes to how the network operates.
          </p>
        </div>

        <div class="mining-influence__card mining-influence__card--hover">
          <div class="mining-influence__card-top">
            <h3 class="mining-influence__card-title">
              Submit Governance Proposals and Vote on Them
            </h3>
            <img
              class="mining-influence__card-img"
              src="/images/icons/icon-proposals.svg"
              alt=""
            />
          </div>
          <p class="mining-influence__card-text">
            Propose improvements and participate in their approval.
          </p>
        </div>

        <div class="mining-influence__card">
          <div class="mining-influence__card-top">
            <h3 class="mining-influence__card-title">
              Vote on Emission and Key Network Parameters
            </h3>
            <img
              class="mining-influence__card-img"
              src="/images/icons/icon-network.svg"
              alt=""
            />
          </div>
          <p class="mining-influence__card-text">
            Influence reward structure and core system rules.
          </p>
        </div>
      </div>
    </div>

  </div>
</section>
<!-- Why Participate Section -->
<section class="mining-why section-offset">
  <div class="mining-why__container">
    <div class="mining-why__left">
      <img class="mining-why__gpu" src="/images/gpu.png" alt="GPU" />
      <p class="mining-why__disclaimer">
        Participation in GNK mining does not guarantee financial outcomes.
        Rewards depend solely on verified compute contribution and network
        conditions.
      </p>
      <a href="#" class="mining-why__btn">Mine it</a>
    </div>
    <div class="mining-why__right">
      <div class="mining-why__header">
        <div class="badge">
          <div class="badge__text">Reasons</div>
          <svg
            class="badge__icon"
            width="24"
            height="28"
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
        <h2 class="mining-why__title">Why Participate...</h2>
      </div>

      <div class="mining-why__items">
        <div class="mining-why__item">
          <span class="mining-why__num">01</span>
          <div class="mining-why__item-content">
            <h3 class="mining-why__item-title">
              Lower network participation at early stages.
            </h3>
            <p class="mining-why__item-text">
              At earlier phases of network growth, fewer nodes share the fixed
              GNK reward pool per epoch.<br />As more GPU capacity joins, the
              same emission is distributed across a larger number of
              participants.
            </p>
          </div>
        </div>
        <div class="mining-why__item">
          <span class="mining-why__num">02</span>
          <div class="mining-why__item-content">
            <h3 class="mining-why__item-title">
              Structural growth in AI compute demand.
            </h3>
            <p class="mining-why__item-text">
              AI adoption continues to expand globally. The increasing use of
              large language models and AI applications drives sustained demand
              for compute infrastructure. Gonka operates within this broader
              compute market.
            </p>
          </div>
        </div>
        <div class="mining-why__item">
          <span class="mining-why__num">03</span>
          <div class="mining-why__item-content">
            <h3 class="mining-why__item-title">Network scaling phase</h3>
            <p class="mining-why__item-text">
              As the network grows, infrastructure matures and participation
              increases.<br />Early participants operate within the initial
              distribution phase of the protocol.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FAQ Section -->
<section class="mining-faq section-offset">
  <div class="mining-faq__container">

    <h2 class="title title--sm">Frequently Asked <br/> Questions</h2>

    <div class="mining-faq__list">

      <div class="mining-faq__item">
        <button class="mining-faq__question">
          <span>Do I need my own hardware to participate in GNK mining?</span>
          <div class="mining-faq__icon-wrap">
            <img class="mining-faq__icon" src="/images/icons/chevron-down.svg" alt="" />
          </div>
        </button>
        <div class="mining-faq__answer">
          <p>You can deploy your own node or use infrastructure from partner hosts. This choice allows you to pick a convenient level of involvement and technical responsibility.</p>
        </div>
      </div>

      <div class="mining-faq__item">
        <button class="mining-faq__question">
          <span>How difficult is setup?</span>
          <div class="mining-faq__icon-wrap">
            <img class="mining-faq__icon" src="/images/icons/chevron-down.svg" alt="" />
          </div>
        </button>
        <div class="mining-faq__answer">
          <p>Setup difficulty depends on your chosen method. Partner hosts handle the technical side for you.</p>
        </div>
      </div>

      <div class="mining-faq__item">
        <button class="mining-faq__question">
          <span>How is node honesty enforced?</span>
          <div class="mining-faq__icon-wrap">
            <img class="mining-faq__icon" src="/images/icons/chevron-down.svg" alt="" />
          </div>
        </button>
        <div class="mining-faq__answer">
          <p>The Proof-of-Compute mechanism verifies compute contributions through cryptographic validation.</p>
        </div>
      </div>

      <div class="mining-faq__item">
        <button class="mining-faq__question">
          <span>What is the liquidity of the Gonka token?</span>
          <div class="mining-faq__icon-wrap">
            <img class="mining-faq__icon" src="/images/icons/chevron-down.svg" alt="" />
          </div>
        </button>
        <div class="mining-faq__answer">
          <p>GNK tokens can be exchanged via OTC venues and through ecosystem community members.</p>
        </div>
      </div>

      <div class="mining-faq__item">
        <button class="mining-faq__question">
          <span>What are the risks of mining the Gonka GNK token?</span>
          <div class="mining-faq__icon-wrap">
            <img class="mining-faq__icon" src="/images/icons/chevron-down.svg" alt="" />
          </div>
        </button>
        <div class="mining-faq__answer">
          <p>Rewards depend on verified compute contribution and network conditions. Financial outcomes are not guaranteed.</p>
        </div>
      </div>

      <div class="mining-faq__item">
        <button class="mining-faq__question">
          <span>Can I scale my participation in GNK mining?</span>
          <div class="mining-faq__icon-wrap">
            <img class="mining-faq__icon" src="/images/icons/chevron-down.svg" alt="" />
          </div>
        </button>
        <div class="mining-faq__answer">
          <p>Yes, you can add more GPU capacity or nodes to increase your PoC weight and rewards.</p>
        </div>
      </div>

      <div class="mining-faq__item">
        <button class="mining-faq__question">
          <span>How does competition with large data centers affect GNK mining?</span>
          <div class="mining-faq__icon-wrap">
            <img class="mining-faq__icon" src="/images/icons/chevron-down.svg" alt="" />
          </div>
        </button>
        <div class="mining-faq__answer">
          <p>The fixed reward pool means more participants reduce individual shares, but growing demand offsets this over time.</p>
        </div>
      </div>

      <div class="mining-faq__item">
        <button class="mining-faq__question">
          <span>How stable is income from GNK mining?</span>
          <div class="mining-faq__icon-wrap">
            <img class="mining-faq__icon" src="/images/icons/chevron-down.svg" alt="" />
          </div>
        </button>
        <div class="mining-faq__answer">
          <p>Income depends on your node's uptime, reliability, and the overall network participation rate.</p>
        </div>
      </div>

      <div class="mining-faq__item">
        <button class="mining-faq__question">
          <span>How transparent is working with the Gonka AI token?</span>
          <div class="mining-faq__icon-wrap">
            <img class="mining-faq__icon" src="/images/icons/chevron-down.svg" alt="" />
          </div>
        </button>
        <div class="mining-faq__answer">
          <p>All weight calculations and reward distributions are transparent and verifiable on-chain.</p>
        </div>
      </div>

      <div class="mining-faq__item">
        <button class="mining-faq__question">
          <span>When is the best time to join Gonka token mining?</span>
          <div class="mining-faq__icon-wrap">
            <img class="mining-faq__icon" src="/images/icons/chevron-down.svg" alt="" />
          </div>
        </button>
        <div class="mining-faq__answer">
          <p>Early participation means fewer nodes share the fixed reward pool, resulting in a higher share per participant.</p>
        </div>
      </div>

      <div class="mining-faq__item">
        <button class="mining-faq__question">
          <span>I can't connect a GPU. How else can I participate in the Gonka network?</span>
          <div class="mining-faq__icon-wrap">
            <img class="mining-faq__icon" src="/images/icons/chevron-down.svg" alt="" />
          </div>
        </button>
        <div class="mining-faq__answer">
          <p>You can join through a mining pool, rent compute from partner hosts, or participate as a developer using the Gonka API.</p>
        </div>
      </div>

    </div>

  </div>
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
