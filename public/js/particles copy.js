class ParticleEffect {
    constructor(elementId) {
        this.elementId = elementId;
        this.particles = null;
        this.init();
    }

    init() {
        particlesJS(this.elementId, this.getParticleConfig());
        this.particles = window.pJSDom[0].pJS.particles.array;
        this.setupStats();
    }

    getParticleConfig() {
        return {
            "particles": {
                "number": {
                    "value": 100,
                    "density": {
                        "enable": true,
                        "value_area": 701.194221302933
                    }
                },
                "color": {
                    "value": "#43a6f8"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 4
                    },
                    "opacity": {
                        "value": 0, // Start particles at 0 opacity for fade-in
                        "random": false,
                        "anim": {
                            "enable": true,
                            "speed": 0.5,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 1.5,
                        "random": true,
                        "anim": {
                            "enable": true,
                            "speed": 10,
                            "size_min": 0.05,
                            "sync": true
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 170,
                        "color": "#29aae6",
                        "opacity": 0.48102361825965684,
                        "width": 1.4430708547789706
                    },
                    "move": {
                        "enable": true,
                        "speed": 3,
                        "direction": "none",
                        "random": true,
                        "straight": false,
                        "out_mode": "out", // Allow particles to move out of container
                        "bounce": false,
                        "attract": {
                            "enable": true,
                            "rotateX": 1783.5826639087988,
                            "rotateY": 1603.4120608655228
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "grab"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 480.89853095232286,
                            "line_linked": {
                                "opacity": 0.9706980799921036
                            }
                        },
                        "bubble": {
                            "distance": 70.9854800594439,
                            "size": 10.301930307533627,
                            "duration": 3.547632388887532,
                            "opacity": 0.47100478313478017,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 100,
                            "duration": 0.8
                        },
                        "push": {
                            "particles_nb": 6
                        },
                        "remove": {
                            "particles_nb": 4
                        }
                    }
                },
                "retina_detect": false
            }
        };
    }

    setupStats() {
        this.stats = new Stats();
        this.stats.setMode(0);
        this.stats.domElement.style.position = 'absolute';
        this.stats.domElement.style.left = '0px';
        this.stats.domElement.style.top = '0px';
        document.body.appendChild(this.stats.domElement);

        this.countParticles = document.querySelector('.js-count-particles');

        this.updateStats();
    }

    updateStats() {
        requestAnimationFrame(() => {
            this.stats.begin();
            this.stats.end();
            if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
                this.countParticles.innerText = window.pJSDom[0].pJS.particles.array.length;
            }
            this.updateStats();
        });
    }

    // Function to fade-in particles
    fadeInParticles(duration) {
        const step = 1 / (duration * 60); // Calculate step based on frame rate (60 FPS)
        let opacity = 0;

        const intervalId = setInterval(() => {
            if (opacity >= 1) {
                clearInterval(intervalId);
                opacity = 1; // Ensure full opacity
            }
            this.particles.forEach(p => p.opacity.value = opacity);
            opacity += step;
        }, 1000 / 60);
    }

    // Function to fade-out particles
    fadeOutParticles(duration) {
        const step = 1 / (duration * 60); // Calculate step based on frame rate (60 FPS)
        let opacity = 1;

        const intervalId = setInterval(() => {
            if (opacity <= 0) {
                clearInterval(intervalId);
                opacity = 0; // Ensure no opacity
            }
            this.particles.forEach(p => p.opacity.value = opacity);
            opacity -= step;
        }, 1000 / 60);
    }
}

// Instantiate the class and initiate the particle effect
document.addEventListener('DOMContentLoaded', () => {
    const particleEffect = new ParticleEffect("particles-js");

    // Example usage of fadeIn and fadeOut
    setTimeout(() => particleEffect.fadeInParticles(2), 500); // Fade in over 2 seconds
    setTimeout(() => particleEffect.fadeOutParticles(2), 5000); // Fade out over 2 seconds after 5 seconds
});
