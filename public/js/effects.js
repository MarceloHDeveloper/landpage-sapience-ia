// State variables
let isTransitioning = false;
let hasTriggeredEffect = false;
let fullScreenLight = null;

export function createFullScreenLightEffect(elements) {
    console.log('createFullScreenLightEffect called');
    if (isTransitioning) {
        console.log('Already transitioning, ignoring');
        return;
    }
    isTransitioning = true;

    // Change header to white and ensure it's above the light effect
    elements.header.classList.add('header-light');
    elements.header.style.position = 'fixed';
    elements.header.style.top = '0';
    elements.header.style.left = '0';
    elements.header.style.right = '0';
    elements.header.style.zIndex = '10000'; // Ensure this is higher than the light effect

    // Change logo text color
    const logoText = document.querySelector('.logo-text');
    if (logoText) {
        logoText.style.color = '#000000'; // Change to black or any desired color
    }

    // Position SVG container above hero section but below the header
    elements.svgSection.style.position = 'fixed';
    elements.svgSection.style.top = '0';
    elements.svgSection.style.left = '0';
    elements.svgSection.style.width = '100%';
    elements.svgSection.style.height = '100%';
    elements.svgSection.style.zIndex = '9997';
    elements.svgSection.style.opacity = '0';
    elements.svgSection.style.display = 'block';

    // Fade in SVG container
    setTimeout(() => {
        elements.svgSection.style.transition = 'opacity 0.5s ease-in-out';
        elements.svgSection.style.opacity = '1';
    }, 50);

    if (!fullScreenLight) {
        fullScreenLight = document.createElement('div');
        fullScreenLight.className = 'full-screen-light';
        document.body.appendChild(fullScreenLight);
    }

    const glowEffect = document.querySelector('.brain-logo-container .glow-effect');
    if (!glowEffect) {
        console.error('Glow effect element not found');
        isTransitioning = false;
        return;
    }

    const glowRect = glowEffect.getBoundingClientRect();

    fullScreenLight.style.transition = 'none';
    fullScreenLight.style.width = `${glowRect.width}px`;
    fullScreenLight.style.height = `${glowRect.height}px`;
    fullScreenLight.style.top = `${glowRect.top}px`;
    fullScreenLight.style.left = `${glowRect.left}px`;
    fullScreenLight.style.borderRadius = '50%';
    fullScreenLight.style.position = 'fixed';
    fullScreenLight.style.backgroundColor = 'white';
    fullScreenLight.style.opacity = '1';
    fullScreenLight.style.zIndex = '9998'; // Ensure this is below the header
    fullScreenLight.style.display = 'block';

    // Force a reflow
    fullScreenLight.offsetHeight;

    console.log('Starting light effect expansion');
    setTimeout(() => {
        fullScreenLight.style.transition = 'all 0.5s ease-in-out';
        fullScreenLight.style.width = '200vw';
        fullScreenLight.style.height = '200vh';
        fullScreenLight.style.top = '-50vh';
        fullScreenLight.style.left = '-50vw';
        fullScreenLight.style.borderRadius = '0';

        setTimeout(() => {
            console.log('Light effect expansion complete');
            transitionToNextSection();
        }, 500);
    }, 50);
}

export function transitionToNextSection() {
    console.log('Transitioning to next section');
    // Add your transition logic here
    isTransitioning = false;
    if (fullScreenLight) {
        fullScreenLight.style.opacity = '0';
        setTimeout(() => {
            fullScreenLight.style.display = 'none';
        }, 500);
    }
}

export function revertFullScreenLightEffect(elements) {
    if (isTransitioning || !hasTriggeredEffect) return;
    isTransitioning = true;

    const glowEffect = document.querySelector('.brain-logo-container .glow-effect');
    const glowRect = glowEffect.getBoundingClientRect();

    if (fullScreenLight) {
        fullScreenLight.style.transition = 'all 0.5s ease-in-out';
        fullScreenLight.style.width = glowRect.width + 'px';
        fullScreenLight.style.height = glowRect.height + 'px';
        fullScreenLight.style.top = glowRect.top + 'px';
        fullScreenLight.style.left = glowRect.left + 'px';
        fullScreenLight.style.borderRadius = '50%';
        fullScreenLight.style.opacity = '0';
    }

    setTimeout(() => {
        elements.header.classList.remove('header-light');
        elements.header.style.position = '';
        elements.header.style.top = '';
        elements.header.style.left = '';
        elements.header.style.right = '';
        elements.header.style.zIndex = '';

        elements.heroSection.style.visibility = 'visible';

        const nextSection = document.getElementById('cards-services');
        if (nextSection) {
            nextSection.style.opacity = '0';
            nextSection.style.display = 'none';
            nextSection.style.marginTop = '';
        }

        if (fullScreenLight) {
            fullScreenLight.remove();
            fullScreenLight = null;
        }
        isTransitioning = false;
        hasTriggeredEffect = false;
    }, 500);
}
