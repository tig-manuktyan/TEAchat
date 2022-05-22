import React, { useState, useRef, useEffect } from "react";
import "./styles.css";

const TextArea = ({
  placeholder = "Message",
  value,
  onChange,
  handleKeyDown,
}) => {
  const textAreaRef = useRef(null);

  const resizeTextArea = () => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  };

  useEffect(resizeTextArea, [value]);

  return (
    <div>
      <textarea
        ref={textAreaRef}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="input"
        value={value}
        onChange={onChange}
        rows={1}
      />
    </div>
  );
};

export default TextArea;
