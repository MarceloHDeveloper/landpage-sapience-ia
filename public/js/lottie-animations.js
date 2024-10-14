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
            path: 'animations/animation1.json' // Make sure this path is correct
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

window.LottieAnimations = LottieAnimations;
document.addEventListener('DOMContentLoaded', LottieAnimations.init);

console.log('Lottie library loaded:', typeof lottie !== 'undefined');
