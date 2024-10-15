window.LottieAnimations = {
    animation1: null,
    animation2: null,
    
    init: function() {
        console.log('Initializing Lottie Animations');
        
        const container1 = document.getElementById('lottie-animation');
        const container2 = document.getElementById('lottie-animation-2');
        
        if (!container1 || !container2) {
            console.error('One or more Lottie animation containers not found');
            return;
        }

        // Load the first animation
        this.animation1 = lottie.loadAnimation({
            container: container1,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: 'animations/animation1.json'
        });

        // Load the second animation
        this.animation2 = lottie.loadAnimation({
            container: container2,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: 'animations/animation2.json'
        });

        // Ensure both animations stop at the first frame initially
        this.animation1.addEventListener('DOMLoaded', () => {
            console.log('Lottie animation1 loaded');
            this.animation1.goToAndStop(1, true);
        });

        this.animation2.addEventListener('DOMLoaded', () => {
            console.log('Lottie animation2 loaded');
            this.animation2.goToAndStop(1, true);
        });

        // Hide animation2 container initially
        if (container2) {
            container2.style.display = 'none';
        }

        console.log('Animations initialized:', this.animation1 !== null, this.animation2 !== null);
    },
    
    playAnimation1: function(duration = null, callback = null) {
        this.playAnimation(this.animation1, duration, () => {
            // Show animation2 container and hide animation1 container
            const container1 = document.getElementById('lottie-animation');
            const container2 = document.getElementById('lottie-animation-2');
            if (container1) {
                container1.style.display = 'none';
            }
            if (container2) {
                container2.style.display = 'block';
            }
            
            // Call the original callback if provided
            if (callback && typeof callback === 'function') {
                callback();
            }
        });
    },
    
    playAnimation2: function(duration = null, callback = null) {
        this.playAnimation(this.animation2, duration, callback);
    },
    
    playAnimation: function(animation, duration = null, callback = null) {
        console.log('Play function called. Animation object exists:', animation !== null);
        if (animation) {
            const originalDuration = animation.getDuration() * 1000; // Convert to milliseconds
            console.log('Original duration:', originalDuration, 'ms');
            
            // Set a slower default speed
            let speed = 0.2; // This will make the animation play at half speed

            if (duration && duration !== originalDuration) {
                speed = originalDuration / duration;
            }

            console.log('Setting speed to:', speed);
            animation.setSpeed(speed);
            
            // Remove any existing 'complete' event listeners
            animation.removeEventListener('complete');
            
            // Add the new 'complete' event listener
            animation.addEventListener('complete', () => {
                console.log('Lottie animation completed');
                if (callback && typeof callback === 'function') {
                    callback();
                }
            });
            
            animation.goToAndPlay(0, true);
        } else {
            console.error('Animation not loaded');
            if (callback && typeof callback === 'function') {
                callback();
            }
        }
    },
    
    stopAll: function() {
        if (this.animation1) {
            this.animation1.stop();
        }
        if (this.animation2) {
            this.animation2.stop();
        }
    },
    
    getDuration: function(animation) {
        return animation ? animation.getDuration() * 1000 : 0; // Return duration in milliseconds
    }
};

document.addEventListener('DOMContentLoaded', () => {
    window.LottieAnimations.init();
});

console.log('Lottie library loaded:', typeof lottie !== 'undefined');
