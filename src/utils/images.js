function importAll(r) {
    let images = {};
    r.keys().forEach((item) => { 
      // Extract filename without extension
      const fileName = item.replace('./', '').replace(/\.[^/.]+$/, '');
      images[fileName] = r(item); 
    });
    return images;
  }
  
  // Import all images with common image formats
  const servicesImages = importAll(require.context(
    '../assets/images/services',
    false,
    /\.(png|jpe?g|svg|gif|webp|avif|bmp|ico|tiff?)$/i
  ));
  
  const testimonialImages = importAll(require.context(
    '../assets/images/testimonials',
    false,
    /\.(png|jpe?g|svg|gif|webp|avif|bmp|ico|tiff?)$/i
  ));
  
  const heroImages = importAll(require.context(
    '../assets/images/hero',
    false,
    /\.(png|jpe?g|svg|gif|webp|avif|bmp|ico|tiff?)$/i
  ));

  const logoImage = importAll(require.context(
    '../assets/images/logo',
    false,
    /\.(png|jpe?g|svg|gif|webp|avif|bmp|ico|tiff?)$/i
  ));
  
  export const images = {
    services: servicesImages,
    testimonials: testimonialImages,
    hero: heroImages,
    logo: logoImage
  };
  
  export const getServiceImage = (imageName) => {
    return images.services[imageName];
  };
  
  export const getTestimonialImage = (imageName) => {
    return images.testimonials[imageName];
  };
  
  export const getHeroImage = () => {
    // Get the first hero image found
    const heroImageKey = Object.keys(images.hero)[0];
    return images.hero[heroImageKey];
  };

  export const getLogo = () => {
    const logoKey = Object.keys(images.logo)[0];
    return images.logo[logoKey];
  };