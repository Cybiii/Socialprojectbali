import { useEffect } from 'react';

const DonorBoxWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://donorbox.org/widget.js';
    script.async = true;
    script.setAttribute('paypalExpress', 'false');
    document.body.appendChild(script);
  }, []);

  return (
    <iframe 
      src="https://donorbox.org/embed/donate-to-social-project-bali"
      name="donorbox"
      frameBorder="0"
      scrolling="no"
      style={{ height: '900px', width: '100%', minWidth: '250px', maxHeight: 'none!important' }}
    ></iframe>
  );
};

export default DonorBoxWidget;
