class LogoAnimation {
    constructor(svgElement) {
        this.svg = svgElement;
        this.paths = this.svg.querySelectorAll('.logo-path');
    }

    animate() {
        this.paths.forEach(path => {
            const length = path.getTotalLength();
            path.style.strokeDasharray = length;
            path.style.strokeDashoffset = length;
        });
    }

    start() {
        this.animate();
        this.svg.style.opacity = 1;
    }
}

// Usage
document.addEventListener('DOMContentLoaded', () => {
    const svgElement = document.querySelector('#hero-logo-img');
    const logoAnimation = new LogoAnimation(svgElement);
    logoAnimation.start();
});