import { animateScroll as scroll } from 'react-scroll';

export const scrollToSection = (elementId) => {
  scroll.scrollTo(document.getElementById(elementId).offsetTop - 80, {
    duration: 800,
    smooth: 'easeInOutQuart',
  });
};