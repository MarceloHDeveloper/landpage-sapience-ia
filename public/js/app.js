import { ParticleEffect } from './particles.js';
import { createFullScreenLightEffect, revertFullScreenLightEffect } from './effects.js';

// Constants
const TYPING_SPEED = 70;
const DELAY_BETWEEN_PHRASES = 1300;
const ERASE_SPEED = 50;

// State variables
let isTransitioning = false;
let hasTriggeredEffect = false;

// DOM Elements
const elements = {
  hamburger: document.querySelector('.hamburger'),
  menu: document.querySelector('.menu ul'),
  heroMessage: document.querySelector('.hero .text-animation'),
  knowMoreBtn: document.querySelector('.know-more-btn'),
  glowEffect: document.querySelector('.glow-effect'),
  heroLogo: document.querySelector('.hero .hero-logo'),
  header: document.querySelector('header'),
  heroSection: document.querySelector('#hero'),
  svgSection: document.getElementById('svg-container-1')
};

// Event Listeners
document.addEventListener('DOMContentLoaded', initializeApp);
elements.hamburger.addEventListener('click', toggleMenu);
elements.knowMoreBtn.addEventListener('click', handleKnowMoreClick);
window.addEventListener('scroll', handleScroll);

function initializeApp() {
  const particleEffect = new ParticleEffect('particles-js');
  startTypewriterEffect();

  // Example of loading an image
  const img = new Image();
  img.src = '../../assets/images/image1.png';
  document.body.appendChild(img);
}

function toggleMenu() {
  elements.menu.classList.toggle('show');
}

function handleKnowMoreClick() {
    console.log('Know More button clicked');
    if (isTransitioning) {
        console.log('Already transitioning, ignoring click');
        return;
    }
    isTransitioning = true;

    // Play Lottie Animation
    if (window.LottieAnimations && typeof window.LottieAnimations.play === 'function') {
        console.log('Playing Lottie Animation');
        window.LottieAnimations.play();
    } else {
        console.error('LottieAnimations.play is not available');
    }

    // Start the light effect transition after the Lottie animation
    console.log('Scheduling light effect transition');
    setTimeout(() => {
        console.log('Triggering createFullScreenLightEffect');
        isTransitioning = false; // Reset isTransitioning before calling createFullScreenLightEffect
        createFullScreenLightEffect(elements);
    }, 2000); // Adjust this delay based on your Lottie animation duration
}

function startTypewriterEffect() {
  const phrases = [
    "Soluções inteligentes para uma gestão eficiente",
  ];

  typewriterEffect(elements.heroMessage, phrases, TYPING_SPEED, DELAY_BETWEEN_PHRASES, ERASE_SPEED, false, showLogo);
}

function typewriterEffect(domRef, phrases, typingSpeed, delayBetweenPhrases, eraseSpeed, loop, onComplete) {
    let phraseIndex = 0;
    let charIndex = 0;
    let isErasing = false;
    let cursorVisible = true;

    function toggleCursor() {
        if (cursorVisible) {
            domRef.innerHTML = domRef.innerHTML.replace('|', '');
        } else {
            domRef.innerHTML += '|';
        }
        cursorVisible = !cursorVisible;
        setTimeout(toggleCursor, 500);
    }

    toggleCursor();

    function type() {
        let currentPhrase = phrases[phraseIndex];

        if (!isErasing) {
            domRef.innerHTML = currentPhrase.substring(0, charIndex + 1) + '|';
            charIndex++;

            if (charIndex === currentPhrase.length) {
                if (!loop && phraseIndex === phrases.length - 1) {
                    domRef.innerHTML = currentPhrase + '|';
                    setTimeout(() => {
                        fadeOutEffect(domRef, 600, () => {
                            if (typeof onComplete === 'function') {
                                onComplete();
                            }
                        });
                    }, delayBetweenPhrases);
                    return;
                }

                setTimeout(() => {
                    isErasing = true;
                    setTimeout(type, eraseSpeed);
                }, delayBetweenPhrases);
            } else {
                setTimeout(type, typingSpeed);
            }
        } else {
            domRef.innerHTML = currentPhrase.substring(0, charIndex - 1) + '|';
            charIndex--;

            if (charIndex === 0) {
                isErasing = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                setTimeout(type, typingSpeed);
            } else {
                setTimeout(type, eraseSpeed);
            }
        }
    }
    
    type();
    showParticles();
}

function showParticles() {
    const particles = document.querySelector('#particles-js');
    particles.classList.add('show-particles');
}

function showLogo() {
    fadeInEffect(elements.heroLogo, 2500); 
}

function fadeOutEffect(domRef, duration = 1000, callback) {
    let opacity = 1;
    const intervalTime = 50;
    const opacityDecrease = intervalTime / duration;

    function fade() {
        opacity -= opacityDecrease;
        if (opacity <= 0) {
            opacity = 0;
            domRef.style.display = 'none';
            if (typeof callback === 'function') {
                callback();
            }
        }
        domRef.style.opacity = opacity;

        if (opacity > 0) {
            setTimeout(fade, intervalTime);
        }
    }

    fade();
}

function fadeInEffect(domRef, duration = 1000) {
    let opacity = 0;
    const intervalTime = 50;
    const opacityIncrease = intervalTime / duration;

    domRef.style.display = 'block';
    domRef.style.opacity = opacity;

    function fade() {
        opacity += opacityIncrease;
        if (opacity >= 1) {
            opacity = 1;
        }
        domRef.style.opacity = opacity;

        if (opacity < 1) {
            setTimeout(fade, intervalTime);
        }
    }

    fade();
}

function smoothScrollTo(targetY, duration) {
    const startY = window.pageYOffset;
    const difference = targetY - startY;
    const startTime = performance.now();

    function step() {
        const progress = (performance.now() - startTime) / duration;
        if (progress < 1) {
            window.scrollTo(0, startY + difference * easeInOutCubic(progress));
            requestAnimationFrame(step);
        } else {
            window.scrollTo(0, targetY);
        }
    }

    requestAnimationFrame(step);
}

function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}

function handleScroll() {
    // You can add scroll-related logic here if needed
    console.log('Scrolling');
}

// Export any functions that might be needed
export { handleKnowMoreClick, revertFullScreenLightEffect };