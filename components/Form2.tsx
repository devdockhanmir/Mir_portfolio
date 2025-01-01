"use client";
import React, { useEffect } from "react";

const Form2 = () => {
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
        src="https://api.leadconnectorhq.com/widget/form/UmnsA8KFg6qOYeP87QDu"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          borderRadius: "3px",
        }}
        id="inline-UmnsA8KFg6qOYeP87QDu" 
  data-layout="{'id':'INLINE'}"
  data-trigger-type="alwaysShow"
  data-trigger-value=""
  data-activation-type="alwaysActivated"
  data-activation-value=""
  data-deactivation-type="neverDeactivate"
  data-deactivation-value=""
  data-form-name="Creative funding Form2"
  data-height="976"
  data-layout-iframe-id="inline-UmnsA8KFg6qOYeP87QDu"
  data-form-id="UmnsA8KFg6qOYeP87QDu"
  title="Creative funding Form2"
      ></iframe>
    </div>
  );
};
export default Form2;


