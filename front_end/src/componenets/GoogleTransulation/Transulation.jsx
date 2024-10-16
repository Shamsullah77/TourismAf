import React, { useEffect } from 'react';
import { Container, Typography } from '@mui/material';

const GoogleTranslateExample = () => {
  useEffect(() => {
    const googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        'google_translate_element'
      );
    };

    // Check if Google Translate already exists to avoid re-initialization
    if (!window.google || !window.google.translate) {
      // Load Google Translate script
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src =
        'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);

      // Clean up script on component unmount
      return () => {
        document.body.removeChild(script);
      };
    } else {
      // If script is already loaded, initialize the widget
      googleTranslateElementInit();
    }
  }, []);

  return (
    <Container>
      <div id="google_translate_element"></div>
   
    </Container>
  );
};

export default GoogleTranslateExample;
