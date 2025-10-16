// Smooth scroll and card hover effects
(function(){
  function init() {
    // Wait a bit to ensure DOM is fully loaded
    setTimeout(function() {
      // 1. Hero section tooltips - only scroll on click
      var heroTriggers = document.querySelectorAll('.section-badge .tooltip-text[data-scroll]');
      console.log('Found hero triggers:', heroTriggers.length);
      
      heroTriggers.forEach(function(el){
        el.addEventListener('click', function(e){
          var target = this.getAttribute('data-scroll');
          if (!target) return;
          var node = document.querySelector(target);
          if (!node) return;
          e.preventDefault();
          node.scrollIntoView({behavior: 'smooth', block: 'start'});
        });
      });
      
      // 2. Cards section tooltips - add hover effects to cards
      var cardsTriggers = document.querySelectorAll('.cards-title .tooltip-text');
      console.log('Found cards triggers:', cardsTriggers.length);
      
      // Find card elements
      var developersCard = document.querySelector('.card-developers');
      var minersCard = document.querySelector('.card-miners');
      var tokenomicsCard = document.querySelector('.card-tokenomics');
      
      console.log('Cards found:', {
        developers: !!developersCard,
        miners: !!minersCard,
        tokenomics: !!tokenomicsCard
      });
      
      cardsTriggers.forEach(function(el){
        // Hover handlers for card highlighting
        el.addEventListener('mouseenter', function(){
          var tooltipText = this.textContent.trim();
          console.log('Hovering over in cards section:', tooltipText);
          
          // Remove any existing hover classes
          if (developersCard) developersCard.classList.remove('card-hover');
          if (minersCard) minersCard.classList.remove('card-hover');
          if (tokenomicsCard) tokenomicsCard.classList.remove('card-hover');
          
          // Add hover class based on tooltip text
          if (tooltipText === 'of the people' && developersCard) {
            console.log('Adding hover to developers card');
            developersCard.classList.add('card-hover');
          } else if (tooltipText === 'by the people' && minersCard) {
            console.log('Adding hover to miners card');
            minersCard.classList.add('card-hover');
          } else if (tooltipText === 'for the people' && tokenomicsCard) {
            console.log('Adding hover to tokenomics card');
            tokenomicsCard.classList.add('card-hover');
          }
        });

        el.addEventListener('mouseleave', function(){
          console.log('Mouse left tooltip in cards section');
          // Remove hover classes when mouse leaves
          if (developersCard) developersCard.classList.remove('card-hover');
          if (minersCard) minersCard.classList.remove('card-hover');
          if (tokenomicsCard) tokenomicsCard.classList.remove('card-hover');
        });
      });
    }, 500);
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
