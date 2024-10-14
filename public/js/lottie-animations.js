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
            this.animation.goToAndStop(1, true); // Stops at frame 0
        });

        console.log('Animation object created:', this.animation !== null);
    },
    play: function(duration = null, callback = null) {
        console.log('Play function called. Animation object exists:', this.animation !== null);
        if (this.animation) {
            const originalDuration = this.animation.getDuration() * 1000; // In milliseconds
            console.log('Original duration:', originalDuration, 'ms');

            // If a specific duration is provided, calculate the speed accordingly
            if (duration && duration !== originalDuration) {
                const speed = originalDuration / duration;
                console.log('Calculated speed:', speed);
                this.animation.setSpeed(speed); // Apply the calculated speed
            } else {
                this.animation.setSpeed(0.3); // Default slow speed (0.5x)
            }

            // Remove any previous event listeners to avoid conflicts
            this.animation.removeEventListener('complete');

            // Add a 'complete' event listener for when the animation ends
            this.animation.addEventListener('complete', () => {
                console.log('Lottie animation completed');
                if (callback && typeof callback === 'function') {
                    callback();
                }
            });

            console.log('Starting animation playback');
            this.animation.goToAndPlay(); // Start from the beginning
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

// Example usage:
document.addEventListener('DOMContentLoaded', function() {
    window.LottieAnimations.init();

    // Play animation at default slow speed
    document.getElementById('play').addEventListener('click', function() {
        window.LottieAnimations.play(); // Plays with speed 0.5
    });

    // Play animation with custom duration (e.g., 5 seconds)
    document.getElementById('play-fast').addEventListener('click', function() {
        window.LottieAnimations.play(5000); // Play over 5 seconds
    });
});

