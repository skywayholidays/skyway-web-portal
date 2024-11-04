import React from "react";

const Location = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center pb-10">
		<div className="relative w-full max-w-[1200px] h-40vh">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d737.089224006229!2d76.99210251279959!3d28.503419242646263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1749523fffff%3A0x9c037a3b9183108a!2sSkyway%20Holidays!5e0!3m2!1sen!2sin!4v1730711354539!5m2!1sen!2sin"
		className="w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"  // Use camelCase for React
        title="Google Maps Embed"
      ></iframe>

</div>		
    </div>
  );
};

export default Location;
