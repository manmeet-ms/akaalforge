 
function blockSpecificImages() {
  const imageUrlsToBlock = [
    'https://assets.unicorn.studio/media/free_user_logo.png',
    'https://assets.unicorn.studio/media/made_in_us_small_web.svg'
  ];

  // Find all img tags whose src matches one of the blocked URLs
  const imgElements = document.querySelectorAll('img, div, span, button');
  imgElements.forEach(img => {
    if (imageUrlsToBlock.includes(img.src)) {
      // Remove the img element itself
      img.remove();
      console.log(`Blocked and removed image: ${img.src}`);
    }
  });
}
function blockSpecificBackgroundImages() {
  const imageUrlsToBlock = [
    'https://assets.unicorn.studio/media/free_user_logo.png',
    'https://assets.unicorn.studio/media/made_in_us_small_web.svg'
  ];

  // Find all elements with a style attribute containing the URL
  // Note: This is less precise than src matching due to potential variations in the style string
  const allElements = document.querySelectorAll('*');
  allElements.forEach(element => {
    const computedStyle = window.getComputedStyle(element);
    const backgroundImage = computedStyle.backgroundImage;

    // Check if the computed background image matches any blocked URL
    for (const url of imageUrlsToBlock) {
      if (backgroundImage.includes(url)) {
        element.remove(); // Remove the element using the background
        console.log(`Blocked and removed element with background: ${url}`);
        break; // Move to the next element after removing one match
      }
    }
  });
}
function blockImageContainers() {
  const imageUrlsToBlock = [
    'https://assets.unicorn.studio/media/free_user_logo.png',
    'https://assets.unicorn.studio/media/made_in_us_small_web.svg'
  ];

  // Find img elements first
  const imgElements = document.querySelectorAll('img');
  imgElements.forEach(img => {
    if (imageUrlsToBlock.includes(img.src)) {
      // Get the parent element of the image
      const parentElement = img.parentElement;
      if (parentElement) {
        parentElement.remove(); // Remove the parent container
        console.log(`Removed parent container of image: ${img.src}`);
      }
    }

  });
}

  document.addEventListener('DOMContentLoaded', blockSpecificImages);
  document.addEventListener('DOMContentLoaded', blockSpecificBackgroundImages);
  document.addEventListener('DOMContentLoaded', blockImageContainers);
