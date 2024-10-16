import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Pages/Home/Home.jsx';

// Crisp Integration Component
const CrispIntegration = () => {
  useEffect(() => {
    // Crisp 
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "ba0e20e4-eedd-4565-b063-0ac8ed5c5524"; //Crisp Website ID

    (function () {
      var d = document;
      var s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();
  }, []); // Empty dependency array means it will run only once when component mounts

  return null; // It won't render anything, just load the script
};

// Main Render
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <CrispIntegration /> {/* Crisp chat add */}
  </React.StrictMode>
);
