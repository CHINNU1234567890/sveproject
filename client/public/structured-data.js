// This file contains structured data (JSON-LD) for search engines
document.addEventListener('DOMContentLoaded', function() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sai Vinayaka Enterprises",
    "url": "https://saivinayakaenterprises.com",
    "logo": "https://saivinayakaenterprises.com/assets/logo.svg",
    "description": "Professional heavy equipment erection services for industries, hospitals, data centers, and manufacturing facilities. Established in 2022.",
    "foundingDate": "2022",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5-3-171/22, RP ROAD, JEERA",
      "addressLocality": "SECUNDERABAD",
      "postalCode": "500003",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9550222151",
      "contactType": "customer service",
      "email": "saivinayakaenterprises13@gmail.com",
      "availableLanguage": ["English", "Hindi", "Telugu"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/sai-vinayaka-enterprises",
      "https://wa.me/919550222151"
    ]
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Heavy Equipment Erection Services",
    "provider": {
      "@type": "Organization",
      "name": "Sai Vinayaka Enterprises"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://saivinayakaenterprises.com/services",
      "servicePhone": "+91-9550222151",
      "serviceSmsNumber": "+91-9550222151"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "availabilityStarts": "2022-01-01T00:00:00+05:30"
    },
    "termsOfService": "Available 24/7, 365 days a year"
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sai Vinayaka Enterprises",
    "image": "https://saivinayakaenterprises.com/assets/logo.svg",
    "telephone": "+91-9550222151",
    "email": "saivinayakaenterprises13@gmail.com",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5-3-171/22, RP ROAD, JEERA",
      "addressLocality": "SECUNDERABAD",
      "postalCode": "500003",
      "addressCountry": "IN"
    },
    "priceRange": "₹₹₹"
  };

  // Append the JSON-LD scripts to the document
  const organizationScript = document.createElement('script');
  organizationScript.type = 'application/ld+json';
  organizationScript.text = JSON.stringify(organizationSchema);
  document.head.appendChild(organizationScript);

  const servicesScript = document.createElement('script');
  servicesScript.type = 'application/ld+json';
  servicesScript.text = JSON.stringify(servicesSchema);
  document.head.appendChild(servicesScript);

  const localBusinessScript = document.createElement('script');
  localBusinessScript.type = 'application/ld+json';
  localBusinessScript.text = JSON.stringify(localBusinessSchema);
  document.head.appendChild(localBusinessScript);
});