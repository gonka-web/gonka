// Chat redirect functionality
document.addEventListener('DOMContentLoaded', function() {
  const chatUrl = 'https://chat.gonka.ai/';
  
  // Get all chat interactive elements
  const chatDemoWindow = document.querySelector('.chat-demo-window');
  const chatInputArea = document.querySelector('.chat-input-area');
  const chatInput = document.querySelector('.chat-input-area input');
  const chatSendBtn = document.querySelector('.chat-send');
  const chatMessages = document.querySelector('.chat-messages');
  
  // Function to redirect to chat
  function redirectToChat(e) {
    e.preventDefault();
    window.open(chatUrl, '_blank');
  }
  
  // Add click handlers
  if (chatDemoWindow) {
    // Make entire chat window clickable
    chatDemoWindow.style.cursor = 'pointer';
    chatDemoWindow.addEventListener('click', redirectToChat);
  }
  
  // Handle input click
  if (chatInput) {
    chatInput.addEventListener('click', redirectToChat);
    chatInput.addEventListener('focus', redirectToChat);
  }
  
  // Handle send button click
  if (chatSendBtn) {
    chatSendBtn.addEventListener('click', redirectToChat);
  }
  
  // Handle Enter key in input
  if (chatInput) {
    chatInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        redirectToChat(e);
      }
    });
  }
  
  // Handle message bubbles click
  if (chatMessages) {
    chatMessages.addEventListener('click', redirectToChat);
  }
});

