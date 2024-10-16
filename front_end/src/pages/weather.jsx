import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';

const WeatherWidget = () => {
  useEffect(() => {
    // Dynamically create and insert the script
    const script = document.createElement('script');
    script.src = 'https://weatherwidget.io/js/widget.min.js';
    script.async = true;
    script.id = 'weatherwidget-io-js';
    document.body.appendChild(script);

    // Clean up the script when the component is unmounted
    return () => {
      if (document.getElementById('weatherwidget-io-js')) {
        document.getElementById('weatherwidget-io-js').remove();
      }
    };
  }, []);

  return (
    <Box sx={{ textAlign: 'center', mt: 0 }}>
      {/* <Typography variant="h5" sx={{ mb: 2 }}>
        Kabul Weather
      </Typography> */}
      <a
        className="weatherwidget-io"
        href="https://forecast7.com/en/34d5669d21/kabul/"
        data-label_1="KABUL"
        data-label_2="WEATHER"
        data-font="Helvetica"
        data-icons="Climacons Animated"
        data-theme="clear"
      >
        KABUL WEATHER
      </a>
    </Box>
  );
};

export default WeatherWidget;
