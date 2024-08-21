import React, { useState } from "react";

const CopyButton = ({ linkToCopy }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(linkToCopy)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => {
          setCopySuccess(false);
        }, 3000); 
      })
      .catch((err) => console.error("Failed to copy:", err));
  };

  return (
    <div>
      <button  style={{ background: "transparent", border: "none" , color:"#7b7583"}} onClick={copyToClipboard}>
        {copySuccess ? "Copied!" : "Copy Link"}
      </button>
    </div>
  );
};

export default CopyButton;
