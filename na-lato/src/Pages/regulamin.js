import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const Regulamin = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch('../static/media/docs/regulamin.md')
      .then((response) => response.text())
      .then((text) => {
        setMarkdown(text);
      });
  }, []);

  return (
    <div className="regulamin">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default Regulamin;
