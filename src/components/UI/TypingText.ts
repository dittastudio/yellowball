function FnTypingText() {
  const typingTexts = document.querySelectorAll(
    '[data-js="typing"]',
  ) as NodeListOf<HTMLElement>;

  typingTexts.forEach(typingText => {
    const textList = (
      typingText.getAttribute('data-js-typing-list') || ''
    ).split(',');
    const textElement = typingText.querySelector('[data-js-typing-input]');

    const createTypingEffect = (textArray: string[]) => {
      let textIndex = 0;
      let charIndex = 0;
      let direction = 'forward';

      const pauseEnd = 2000;
      const typeSpeed = 110;

      const startTyping = () => {
        const current = textArray[textIndex];

        if (current && textElement && direction === 'forward') {
          if (charIndex <= current.length) {
            const text = current.substring(0, charIndex);
            textElement.textContent = text;
            charIndex++;

            setTimeout(startTyping, typeSpeed);
          } else {
            typingText.classList.add('is-hidden');

            setTimeout(() => {
              typingText.classList.remove('is-hidden');
              charIndex = 0;
              textIndex = (textIndex + 1) % textArray.length;
              startTyping();
            }, pauseEnd);
          }
        }
      };

      startTyping();
    };

    createTypingEffect(textList);
  });
}

export default FnTypingText;