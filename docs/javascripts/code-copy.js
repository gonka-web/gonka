// Code copy button functionality
document.addEventListener('DOMContentLoaded', function () {
  const codeBlocks = document.querySelectorAll('.highlight');

  codeBlocks.forEach(function (block, index) {
    if (block.querySelector('.md-clipboard')) {
      return;
    }

    const computedStyle = window.getComputedStyle(block);
    if (computedStyle.position === 'static') {
      block.style.position = 'relative';
    }

    const copyButton = document.createElement('button');
    copyButton.className = 'md-clipboard md-icon';
    copyButton.setAttribute('title', 'Copy to clipboard');
    copyButton.setAttribute('aria-label', 'Copy to clipboard');

    block.appendChild(copyButton);

    copyButton.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      const codeElement = block.querySelector('code');
      if (!codeElement) return;

      let text = '';
      if (codeElement.innerText !== undefined) {
        text = codeElement.innerText;
      } else {
        text = codeElement.textContent || '';
        text = text.replace(/\u00A0/g, ' ');
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () {
          const originalTitle = copyButton.getAttribute('title');
          copyButton.setAttribute('title', 'Copied!');
          copyButton.classList.add('copied');

          setTimeout(function () {
            copyButton.setAttribute('title', originalTitle);
            copyButton.classList.remove('copied');
          }, 2000);
        }).catch(function (err) {
          console.error('Failed to copy:', err);
        });
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '0';
        textArea.setAttribute('readonly', '');
        document.body.appendChild(textArea);

        if (navigator.userAgent.match(/ipad|iphone/i)) {
          const range = document.createRange();
          range.selectNodeContents(textArea);
          const selection = window.getSelection();
          selection.removeAllRanges();
          selection.addRange(range);
          textArea.setSelectionRange(0, 999999);
        } else {
          textArea.select();
        }

        try {
          const successful = document.execCommand('copy');
          if (successful) {
            const originalTitle = copyButton.getAttribute('title');
            copyButton.setAttribute('title', 'Copied!');
            copyButton.classList.add('copied');

            setTimeout(function () {
              copyButton.setAttribute('title', originalTitle);
              copyButton.classList.remove('copied');
            }, 2000);
          }
        } catch (err) {
          console.error('Failed to copy:', err);
        }

        document.body.removeChild(textArea);
      }
    });
  });
});

