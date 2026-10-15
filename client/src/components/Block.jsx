import React, { useRef } from 'react';

export default function Block({ block, sessionId, onSave }) {
  const contentRef = useRef(null);
  const originalContent = useRef(block.content);

  const handleFocus = () => {
    originalContent.current = block.content;
  };

  const handleBlur = () => {
    const newContent = contentRef.current.innerText;
    if (newContent !== originalContent.current) {
      onSave(block.id, newContent);
    }
  };

  return (
    <div
      ref={contentRef}
      className={`block block-${block.type}`}
      contentEditable
      suppressContentEditableWarning
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      {block.content}
    </div>
  );
}
