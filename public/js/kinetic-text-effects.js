// Kinetic Text Effects Module
const KineticTextEffects = (function() {
    // Default configurations for effects
    const defaultConfigs = {
        duration: '2s',
        timingFunction: 'ease',
        iterationCount: '1',
        delay: '0s'
    };

    // Function to apply an effect to an element
    function applyEffect(element, effectName, config = {}) {
        if (!element || !effectName) return;

        const fullConfig = { ...defaultConfigs, ...config };
        const animationString = `${effectName} ${fullConfig.duration} ${fullConfig.timingFunction} ${fullConfig.delay} ${fullConfig.iterationCount}`;
        
        element.style.animation = animationString;
    }

    // Function to remove an effect from an element
    function removeEffect(element) {
        if (!element) return;
        element.style.animation = '';
    }

    // Function to add transition classes for entering
    function addPhrase(element, callback) {
        if (!element) return;
        element.classList.remove('phrase-hidden');
        element.classList.add('phrase-enter');
        
        setTimeout(() => {
            element.classList.add('phrase-enter-active');
            setTimeout(() => {
                element.classList.remove('phrase-enter', 'phrase-enter-active');
                if (callback) callback(element);
            }, 500);
        }, 20);
    }

    // Function to add transition classes for exiting
    function removePhrase(element, callback) {
        if (!element) return;
        element.classList.add('phrase-exit');
        
        setTimeout(() => {
            element.classList.add('phrase-exit-active');
            setTimeout(() => {
                element.classList.add('phrase-hidden');
                element.classList.remove('phrase-exit', 'phrase-exit-active');
                if (callback) callback(element);
            }, 500);
        }, 20);
    }

    // Specific effect functions with customizable parameters
    const effects = {
        textFadeInOut: (element, { minOpacity = 0, maxOpacity = 1 } = {}) => {
            const keyframes = `
                @keyframes textFadeInOut {
                    0%, 100% { opacity: ${minOpacity}; }
                    50% { opacity: ${maxOpacity}; }
                }
            `;
            applyEffect(element, 'textFadeInOut');
            addStyleSheet(keyframes);
        },

        textSlideIn: (element, { distance = '100%', direction = 'left' } = {}) => {
            const keyframes = `
                @keyframes textSlideIn {
                    from { transform: translate${direction === 'left' || direction === 'right' ? 'X' : 'Y'}(${direction === 'left' || direction === 'top' ? '-' : ''}${distance}); }
                    to { transform: translate${direction === 'left' || direction === 'right' ? 'X' : 'Y'}(0); }
                }
            `;
            applyEffect(element, 'textSlideIn');
            addStyleSheet(keyframes);
        },

        textTypewriter: (element, { steps = 40 } = {}) => {
            element.style.overflow = 'hidden';
            element.style.whiteSpace = 'nowrap';
            const keyframes = `
                @keyframes textTypewriter {
                    from { width: 0; }
                    to { width: 100%; }
                }
            `;
            applyEffect(element, 'textTypewriter', { timingFunction: `steps(${steps}, end)` });
            addStyleSheet(keyframes);
        },

        textZoom: (element, { minScale = 1, maxScale = 1.5 } = {}) => {
            const keyframes = `
                @keyframes textZoom {
                    0%, 100% { transform: scale(${minScale}); }
                    50% { transform: scale(${maxScale}); }
                }
            `;
            applyEffect(element, 'textZoom');
            addStyleSheet(keyframes);
        },

        textRotate: (element, { degrees = 360 } = {}) => {
            const keyframes = `
                @keyframes textRotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(${degrees}deg); }
                }
            `;
            applyEffect(element, 'textRotate');
            addStyleSheet(keyframes);
        },

        text3DExtrude: (element, { depth = '5px' } = {}) => {
            const keyframes = `
                @keyframes text3DExtrude {
                    0%, 100% { text-shadow: 0 0 0 #000; }
                    50% { text-shadow: ${depth} ${depth} 0 #000; }
                }
            `;
            applyEffect(element, 'text3DExtrude');
            addStyleSheet(keyframes);
        },

        textMorph: (element) => {
            const keyframes = `
                @keyframes textMorph {
                    0%, 100% { font-weight: normal; font-style: normal; }
                    50% { font-weight: bold; font-style: italic; }
                }
            `;
            applyEffect(element, 'textMorph');
            addStyleSheet(keyframes);
        },

        textBounce: (element, { height = '30px' } = {}) => {
            const keyframes = `
                @keyframes textBounce {
                    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
                    40% { transform: translateY(-${height}); }
                    60% { transform: translateY(-${parseInt(height)/2}px); }
                }
            `;
            applyEffect(element, 'textBounce');
            addStyleSheet(keyframes);
        },

        textSkew: (element, { angle = '20deg' } = {}) => {
            const keyframes = `
                @keyframes textSkew {
                    0%, 100% { transform: skew(0deg); }
                    50% { transform: skew(${angle}); }
                }
            `;
            applyEffect(element, 'textSkew');
            addStyleSheet(keyframes);
        },

        textGlitch: (element, { intensity = '5px' } = {}) => {
            const keyframes = `
                @keyframes textGlitch {
                    0% { transform: translate(0); }
                    20% { transform: translate(-${intensity}, ${intensity}); }
                    40% { transform: translate(${intensity}, -${intensity}); }
                    60% { transform: translate(0); }
                }
            `;
            applyEffect(element, 'textGlitch', { duration: '0.5s', iterationCount: 'infinite' });
            addStyleSheet(keyframes);
        },

        textTracking: (element, { spacing = '0.5em' } = {}) => {
            const keyframes = `
                @keyframes textTracking {
                    0%, 100% { letter-spacing: normal; }
                    50% { letter-spacing: ${spacing}; }
                }
            `;
            applyEffect(element, 'textTracking');
            addStyleSheet(keyframes);
        },

        textWave: (element, { amplitude = '15px' } = {}) => {
            const keyframes = `
                @keyframes textWave {
                    0%, 100% { transform: translateY(0); }
                    25% { transform: translateY(-${amplitude}); }
                    75% { transform: translateY(${amplitude}); }
                }
            `;
            applyEffect(element, 'textWave');
            addStyleSheet(keyframes);
        },

        textPath: (element, { path = 'M0,50 Q50,0 100,50 Q150,100 200,50' } = {}) => {
            element.style.offsetPath = `path('${path}')`;
            const keyframes = `
                @keyframes textPath {
                    0% { offset-distance: 0%; }
                    100% { offset-distance: 100%; }
                }
            `;
            applyEffect(element, 'textPath', { duration: '5s', iterationCount: 'infinite' });
            addStyleSheet(keyframes);
        },

        textColorShift: (element, { colors = ['#333', '#00a8ff'] } = {}) => {
            const keyframes = `
                @keyframes textColorShift {
                    0%, 100% { color: ${colors[0]}; }
                    50% { color: ${colors[1]}; }
                }
            `;
            applyEffect(element, 'textColorShift');
            addStyleSheet(keyframes);
        },

        textOpacityFlicker: (element, { minOpacity = 0.5, maxOpacity = 1 } = {}) => {
            const keyframes = `
                @keyframes textOpacityFlicker {
                    0%, 100% { opacity: ${maxOpacity}; }
                    50% { opacity: ${minOpacity}; }
                }
            `;
            applyEffect(element, 'textOpacityFlicker');
            addStyleSheet(keyframes);
        },

        textBlurFocus: (element, { maxBlur = '5px' } = {}) => {
            const keyframes = `
                @keyframes textBlurFocus {
                    0%, 100% { filter: blur(0px); }
                    50% { filter: blur(${maxBlur}); }
                }
            `;
            applyEffect(element, 'textBlurFocus');
            addStyleSheet(keyframes);
        },

        textLiquid: (element) => {
            const keyframes = `
                @keyframes textLiquid {
                    0%, 100% { border-radius: 0; }
                    50% { border-radius: 50%; }
                }
            `;
            applyEffect(element, 'textLiquid');
            addStyleSheet(keyframes);
        },

        textParallax: (element, { distance = '20px' } = {}) => {
            const keyframes = `
                @keyframes textParallax {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(${distance}); }
                }
            `;
            applyEffect(element, 'textParallax', { iterationCount: 'infinite', direction: 'alternate' });
            addStyleSheet(keyframes);
        },

        textExplode: (element, { scale = '1.5', opacity = '0' } = {}) => {
            const keyframes = `
                @keyframes textExplode {
                    0% { transform: scale(1); opacity: 1; }
                    100% { transform: scale(${scale}); opacity: ${opacity}; }
                }
            `;
            applyEffect(element, 'textExplode', { fillMode: 'forwards' });
            addStyleSheet(keyframes);
        },

        textMask: (element, { clipPath = 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)' } = {}) => {
            const keyframes = `
                @keyframes textMask {
                    0% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
                    100% { clip-path: ${clipPath}; }
                }
            `;
            applyEffect(element, 'textMask', { fillMode: 'forwards' });
            addStyleSheet(keyframes);
        },

        shadowMove: (element, { color1 = 'red', color2 = 'blue' } = {}) => {
            const keyframes = `
                @keyframes shadowMove {
                    0% { text-shadow: 2px 2px 5px ${color1}; }
                    100% { text-shadow: 5px 5px 10px ${color2}; }
                }
            `;
            applyEffect(element, 'shadowMove', { iterationCount: 'infinite', direction: 'alternate' });
            addStyleSheet(keyframes);
        },

        textStroke: (element, { color = 'black', width = '1px' } = {}) => {
            element.style.webkitTextStroke = `${width} ${color}`;
            element.style.color = 'transparent';
            const keyframes = `
                @keyframes textStroke {
                    0%, 100% { -webkit-text-stroke-width: ${width}; }
                    50% { -webkit-text-stroke-width: ${parseInt(width)*2}px; }
                }
            `;
            applyEffect(element, 'textStroke', { iterationCount: 'infinite', direction: 'alternate' });
            addStyleSheet(keyframes);
        },

        gradientShift: (element, { color1 = 'red', color2 = 'blue' } = {}) => {
            element.style.background = `linear-gradient(90deg, ${color1}, ${color2})`;
            element.style.webkitBackgroundClip = 'text';
            element.style.color = 'transparent';
            element.style.backgroundSize = '200% 100%';
            const keyframes = `
                @keyframes gradientShift {
                    0% { background-position: 0% 50%; }
                    100% { background-position: 100% 50%; }
                }
            `;
            applyEffect(element, 'gradientShift', { duration: '3s', iterationCount: 'infinite', timingFunction: 'linear' });
            addStyleSheet(keyframes);
        },

        rotate3D: (element, { x = 1, y = 1, z = 1, angle = 360 } = {}) => {
            const keyframes = `
                @keyframes rotate3D {
                    0% { transform: rotate3d(${x}, ${y}, ${z}, 0deg); }
                    100% { transform: rotate3d(${x}, ${y}, ${z}, ${angle}deg); }
                }
            `;
            applyEffect(element, 'rotate3D');
            addStyleSheet(keyframes);
        },

        textScroll: (element) => {
            element.style.whiteSpace = 'nowrap';
            const keyframes = `
                @keyframes textScroll {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(-100%); }
                }
            `;
            applyEffect(element, 'textScroll', { duration: '10s', iterationCount: 'infinite', timingFunction: 'linear' });
            addStyleSheet(keyframes);
        },

        fadeSlide: (element, { direction = 'up', distance = '20px' } = {}) => {
            const translateDirection = direction === 'up' ? 'Y' : 'X';
            const sign = direction === 'up' || direction === 'left' ? '-' : '';
            const keyframes = `
                @keyframes fadeSlide {
                    0% { opacity: 0; transform: translate${translateDirection}(${sign}${distance}); }
                    100% { opacity: 1; transform: translate${translateDirection}(0); }
                }
            `;
            applyEffect(element, 'fadeSlide', { fillMode: 'forwards' });
            addStyleSheet(keyframes);
        },

        textReveal: (element, { direction = 'left' } = {}) => {
            const keyframes = `
                @keyframes textReveal {
                    0% { clip-path: inset(0 100% 0 0); }
                    100% { clip-path: inset(0 0 0 0); }
                }
            `;
            applyEffect(element, 'textReveal', { fillMode: 'forwards' });
            addStyleSheet(keyframes);
        },

        textRipple: (element, { scale = '1.1', blur = '1px' } = {}) => {
            const keyframes = `
                @keyframes textRipple {
                    0%, 100% { transform: scale(1); filter: blur(0px); }
                    50% { transform: scale(${scale}); filter: blur(${blur}); }
                }
            `;
            applyEffect(element, 'textRipple');
            addStyleSheet(keyframes);
        },

        splitTextReveal: (element) => {
            const text = element.textContent;
            element.textContent = '';
            text.split('').forEach((char, index) => {
                const span = document.createElement('span');
                span.textContent = char;
                span.style.opacity = '0';
                span.style.transform = 'translateY(20px)';
                span.style.display = 'inline-block';
                span.style.animation = `splitTextReveal 0.5s forwards ${index * 0.1}s`;
                element.appendChild(span);
            });
            const keyframes = `
                @keyframes splitTextReveal {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `;
            addStyleSheet(keyframes);
        }
    };

    // Helper function to add a stylesheet
    function addStyleSheet(css) {
        const style = document.createElement('style');
        style.textContent = css;
        document.head.append(style);
    }

    // Public API
    return {
        applyEffect,
        removeEffect,
        addPhrase,
        removePhrase,
        ...effects
    };
})();

// Export the module
export default KineticTextEffects;