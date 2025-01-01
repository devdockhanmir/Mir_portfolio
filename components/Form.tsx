"use client";
import React, { useEffect } from "react";

const Form = () => {
  useEffect(() => {
    // Load the form embed script when the component mounts
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script on component unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full h-auto my-10">
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/6gmovo90wFcw9aZOVgAv"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          borderRadius: "3px",
        }}
        id="inline-6gmovo90wFcw9aZOVgAv" 
  data-layout="{'id':'INLINE'}"
  data-trigger-type="alwaysShow"
  data-trigger-value=""
  data-activation-type="alwaysActivated"
  data-activation-value=""
  data-deactivation-type="neverDeactivate"
  data-deactivation-value=""
  data-form-name="Creative Funding Form 1"
  data-height="465"
  data-layout-iframe-id="inline-6gmovo90wFcw9aZOVgAv"
  data-form-id="6gmovo90wFcw9aZOVgAv"
  title="Creative Funding Form 1"
      ></iframe>
    </div>
  );
};

export default Form;


