// Lottie Animations Module
const LottieAnimations = (function() {
    let animation;

    function init() {
        console.log('Initializing Lottie Animations');
        const container = document.getElementById('lottie-animation');
        if (!container) {
            console.error('Lottie animation container not found');
            return;
        }

        animation = lottie.loadAnimation({
            container: container,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: 'animations/animation1.json'
        });

        animation.addEventListener('DOMLoaded', function() {
            console.log('Lottie animation loaded');
        });

        animation.addEventListener('complete', function() {
            console.log('Lottie animation completed');
        });
    }

    function play() {
        console.log('Playing Lottie animation');
        if (animation) {
            animation.goToAndPlay(0);
        } else {
            console.error('Animation not loaded');
        }
    }

    return {
        init: init,
        play: play
    };
})();

window.LottieAnimations = {
    animation: null,
    init: function() {
        console.log('Initializing Lottie Animations');
        const container = document.getElementById('lottie-animation');
        if (!container) {
            console.error('Lottie animation container not found');
            return;
        }

        this.animation = lottie.loadAnimation({
            container: container,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: 'animations/animation1.json' // Ensure this path is correct
        });

        this.animation.addEventListener('DOMLoaded', () => {
            console.log('Lottie animation loaded');
            this.animation.goToAndStop(0, true);
        });

        console.log('Animation object created:', this.animation !== null);
    },
    play: function(duration = null, callback = null) {
        console.log('Play function called. Animation object exists:', this.animation !== null);
        if (this.animation) {
            const originalDuration = this.animation.getDuration() * 3000; // Convert to milliseconds
            console.log('Original duration:', originalDuration, 'ms');
            
            if (duration && duration !== originalDuration) {
                const speed = originalDuration / duration;
                console.log('Setting speed to:', speed);
                this.animation.setSpeed(speed);
            } else {
                this.animation.setSpeed(3);
            }
            
            // Remove any existing 'complete' event listeners
            this.animation.removeEventListener('complete');
            
            // Add the new 'complete' event listener
            this.animation.addEventListener('complete', () => {
                console.log('Lottie animation completed (from lottie-animations.js)');
                if (callback && typeof callback === 'function') {
                    callback();
                }
            });
            
            console.log('Starting animation playback');
            this.animation.goToAndPlay(0);
        } else {
            console.error('Animation not loaded');
            if (callback && typeof callback === 'function') {
                callback();
            }
        }
    },
    stop: function() {
        if (this.animation) {
            this.animation.stop();
        }
    },
    getDuration: function() {
        return this.animation ? this.animation.getDuration() * 1000 : 0; // Return duration in milliseconds
    }
};

document.addEventListener('DOMContentLoaded', () => {
    window.LottieAnimations.init();
});

console.log('Lottie library loaded:', typeof lottie !== 'undefined');
