
class ParticleEffect {
    constructor(elementId) {
        this.elementId = elementId;
        this.init();
    }

    init() {
        particlesJS(this.elementId, this.getParticleConfig());
      
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
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.48102361825965684,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 0.9744926547616141,
                        "opacity_min": 0.1,
                        "sync": true
                    }
                },
                "size": {
                    "value": 4,
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
                    "color": "#3af779",
                    "opacity": 0.48102361825965684,
                    "width": 1.4430708547789706
                },
                "move": {
                    "enable": true,
                    "speed": 3,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",  // Alterado para "out" para permitir que partículas saiam do contêiner
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
                        "size": 0.301930307533627,
                        "duration": 3.547632388887532,
                        "opacity": 0.47100478313478017,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 60,
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
        };
    }
    

   

   
}

// Instanciar a classe e iniciar o efeito de partículas
document.addEventListener('DOMContentLoaded', () => {
    new ParticleEffect("particles-js");
});
