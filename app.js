document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu ul');
    const heroMessage = document.querySelector('.hero .text-animation');

    hamburger.addEventListener('click', function() {
        menu.classList.toggle('show');
    });

    const phrases = [
        " Soluções inteligentes para uma gestão eficiente"
     
    ];
    const phrases2 = [
        
        "Tecnologia responsável para um futuro verde",
        "Inteligência além do artificial",
        "Sistemas para desenvolver o potencial humano"
    ];

   
    // Start the typewriter effect and pass a function to be called when it ends
    typewriterEffect(heroMessage, phrases, 70, 1300, 50, false, () => {
        // Callback function to be executed after typewriter effect ends
        performOtherTasks();
    });
});

function typewriterEffect(domRef, phrases, typingSpeed = 100, delayBetweenPhrases = 1000, eraseSpeed = 50, loop = true, onComplete) {
    let phraseIndex = 0;
    let charIndex = 0;
    let isErasing = false;
    let cursorVisible = true;
    let isLastPhrase = false; // Flag to check if it's the last phrase in non-loop mode

    // Create a blinking cursor effect
    function toggleCursor() {
        if (cursorVisible) {
            domRef.innerHTML = domRef.innerHTML.replace('|', ''); // Remove cursor
        } else {
            domRef.innerHTML += '|'; // Add cursor at the end of text
        }
        cursorVisible = !cursorVisible;
        setTimeout(toggleCursor, 500); // Blink every 500ms
    }

    // Start blinking cursor
    toggleCursor();

    function type() {
        let currentPhrase = phrases[phraseIndex];

        if (!isErasing) {
            // Add a character to the DOM and keep the cursor at the end
            domRef.innerHTML = currentPhrase.substring(0, charIndex + 1) + '|';
            charIndex++;

            // If the phrase is complete, start erasing after a delay
            if (charIndex === currentPhrase.length) {
                if (!loop && phraseIndex === phrases.length - 1) {
                    // If loop is false and it's the last phrase, trigger the callback
                    domRef.innerHTML = currentPhrase + '|'; // Keep the last phrase with the cursor
                    setTimeout(() => {
                        fadeOutEffect(domRef, 1000, () => {
                            if (typeof onComplete === 'function') {
                                onComplete(); // Call the callback function
                            }
                        });
                    }, delayBetweenPhrases);
                    return;
                }

                setTimeout(() => {
                    isErasing = true;
                    setTimeout(type, eraseSpeed); // Start erasing
                }, delayBetweenPhrases);
            } else {
                setTimeout(type, typingSpeed);
            }
        } else {
            // Erase characters one by one and keep the cursor at the end
            domRef.innerHTML = currentPhrase.substring(0, charIndex - 1) + '|';
            charIndex--;

            // If erasing is complete, move to the next phrase
            if (charIndex === 0) {
                isErasing = false;
                phraseIndex = (phraseIndex + 1) % phrases.length; // Loop or move to the next phrase
                setTimeout(type, typingSpeed); // Start typing the next phrase
            } else {
                setTimeout(type, eraseSpeed);
            }
        }
    }

    type(); // Start the typing effect
}

// Function to show a logo or perform other actions


// Function to perform other tasks after the typewriter effect ends
function performOtherTasks() {
    // Perform any additional tasks here
    const heroLogo = document.querySelector('.hero .hero-logo');
    const slogan = document.querySelector('.hero .hero-slogan');
    // Example: Add a new message 
    
    fadeInEffect(heroLogo, 1000); 
}

// Fade-out effect with a callback when fade-out completes
function fadeOutEffect(domRef, duration = 1000, callback) {
    let opacity = 1; // Start with full opacity
    const intervalTime = 50; // The interval time for each step (50ms)

    // Calculate how much to decrease the opacity each interval
    const opacityDecrease = intervalTime / duration;

    function fade() {
        opacity -= opacityDecrease; // Decrease opacity
        if (opacity <= 0) {
            opacity = 0; // Ensure the opacity doesn't go below 0
            domRef.style.display = 'none'; // Optionally hide the element when fully transparent
            if (typeof callback === 'function') {
                callback(); // Call the callback once fade-out is done
            }
        }
        domRef.style.opacity = opacity; // Apply the opacity to the element

        if (opacity > 0) {
            setTimeout(fade, intervalTime); // Repeat until opacity is 0
        }
    }

    fade(); // Start the fade-out effect
}

// Fade-in effect
function fadeInEffect(domRef, duration = 1000) {
    let opacity = 0; // Start with 0 opacity (fully transparent)
    const intervalTime = 50; // The interval time for each step (50ms)

    // Calculate how much to increase the opacity each interval
    const opacityIncrease = intervalTime / duration;

    // Ensure the element is visible before starting the effect
    domRef.style.display = 'block';
    domRef.style.opacity = opacity;

    function fade() {
        opacity += opacityIncrease; // Increase opacity
        if (opacity >= 1) {
            opacity = 1; // Ensure the opacity doesn't go above 1
        }
        domRef.style.opacity = opacity; // Apply the opacity to the element

        if (opacity < 1) {
            setTimeout(fade, intervalTime); // Repeat until opacity is 1
        }
    }

    fade(); // Start the fade-in effect


      
 // Create SVG canvas
 const draw = SVG().addTo('#svg-container').size(400, 400);
    
 // Define two SVG elements
 const svg1 = draw.group().addClass('svg1');
 svg1.circle(100).fill('blue').move(50, 50);
 
 const svg2 = draw.group().addClass('svg2').hide();
 svg2.circle(150).fill('red').move(25, 25);
 
 // Animation function
 function interpolateSVG(fromSvg, toSvg, duration) {
   // Animate opacity of the first SVG to fade out
   fromSvg.animate(duration * 1000).opacity(0).after(() => {
     fromSvg.hide();
   });
   
   // Animate opacity of the second SVG to fade in
   toSvg.show().opacity(0).animate(duration * 1000).opacity(1);
 }
 
 // Trigger interpolation
 interpolateSVG(svg1, svg2, 2);

}
