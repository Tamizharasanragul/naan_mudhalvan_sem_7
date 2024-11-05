import React, { useState } from 'react';
import marked from 'marked';

function App() {
  const [markdownText, setMarkdownText] = useState('');

  const handleChange = (event) => {
    setMarkdownText(event.target.value);
  };

  const renderMarkdown = (text) => {

    return { __html: marked(text) };
  };

  return (
    <div className="container">
      <div className="editor">
        <h2>Markdown Editor</h2>
        <textarea
          value={markdownText}
          onChange={handleChange}
          placeholder="Write your markdown here..."
        ></textarea>
      </div>
      <div className="preview">
        <h2>Preview</h2>
        <div
          className="preview-content"
          dangerouslySetInnerHTML={renderMarkdown(markdownText)}
        ></div>
      </div>
    </div>
  );
}

export default App;