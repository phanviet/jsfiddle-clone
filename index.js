(() => {
  'use strict';

  let htmlCode = '';
  let cssCode = '';
  let jsCode = '';

  const htmlCodeArea = document.querySelector('#html-code textarea');
  const cssCodeArea = document.querySelector('#css-code textarea');
  const jsCodeArea = document.querySelector('#js-code textarea');
  const resultIframe = document.querySelector('#result iframe');
  const runBtn = document.querySelector('#run');

  /**
   * Get Code from textarea element.
   *
   * @param areaElement HTML Element textarea Object
   *
   * @return String
   */
  const getCodeFromArea = (areaElement) => {
    const code = areaElement.value;
    return code;
  };

  const buildHTMLContent = (html, css, js) => {
    const content = `
    <html>
      <head>
        <style>
          ${css}
        </style>
      </head>
      <body>
        ${html}
      </body>

      <script>${js}</script>
    </html>
    `;
    return content;
  };

  /**
   * RUN button clicked handler.
   * All code from HTML, CSS, JS area will be saved and render
   * to the iframe
   *
   * @params e Event Object
   */
  const runHandler = (e) => {
    // Save code from HTML, CSS, JS
    htmlCode = getCodeFromArea(htmlCodeArea);
    cssCode = getCodeFromArea(cssCodeArea);
    jsCode = getCodeFromArea(jsCodeArea);

    // Render to iframe
    const content = buildHTMLContent(htmlCode, cssCode, jsCode);
    resultIframe.src = 'data:text/html,' + encodeURIComponent(content);
  };

  // Register Click Event for RUN button
  runBtn.addEventListener('click', runHandler);

})();
