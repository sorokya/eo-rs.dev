import hljs from 'highlight.js/lib/core';

import rust from 'highlight.js/lib/languages/rust';

hljs.registerLanguage('rust', rust);

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block);
  });
});