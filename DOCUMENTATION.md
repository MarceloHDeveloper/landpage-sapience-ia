# Landpage-sapience-ia Detailed Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Ubiquitous Language](#ubiquitous-language)
4. [Page Flow](#page-flow)
5. [Component Descriptions](#component-descriptions)
6. [Key Functions](#key-functions)
7. [Modules](#modules)
8. [Event Sequence](#event-sequence)
9. [Customization Points](#customization-points)
10. [Development Setup](#development-setup)
11. [Performance Considerations](#performance-considerations)
12. [Accessibility](#accessibility)
13. [Browser Compatibility](#browser-compatibility)
14. [Deployment](#deployment)

## Project Overview
Landpage-sapience-ia is a dynamic, single-page website showcasing Sapiencia's AI and technology services. It features interactive animations and transitions to engage users and present our offerings in an innovative way.

## Technology Stack

### Core Technologies
- HTML5
- CSS3
- JavaScript (ES6+)

### Libraries and Frameworks
- [Three.js](https://threejs.org/) (r128) - For 3D animations
- [Lottie](https://airbnb.design/lottie/) (v5.9.6) - For vector animations
- [Particles.js](https://vincentgarreau.com/particles.js/) (v2.0.0) - For particle effects
- [SVG.js](https://svgjs.dev/docs/3.0/) (v3.0) - For SVG manipulations
- [Font Awesome](https://fontawesome.com/) (v5.15.4) - For icons

### Version Control
- Git

## Ubiquitous Language

- **Know More Button**: Main CTA button in the hero section that initiates the presentation sequence.
- **Light Effect Transition**: Full-screen white light animation triggered by the Know More Button.
- **Header Transformation**: Process of changing the header's appearance and position during transition.
- **Hero Section**: Initial full-screen section with the main message and Know More Button.
- **Presentation Section**: New section appearing above the Hero Section after the Light Effect Transition.
- **Lottie Animation**: Animated SVG playing in the Presentation Section post-transition.
- **Particle Effect**: Interactive background animation created using Particles.js.

## Page Flow

1. **Initial State**
   - Hero Section visible
   - Know More Button active
   - Header in initial state
   - Particle Effect active in background

2. **Transition Sequence**
   - User clicks Know More Button
   - Light Effect Transition begins
   - Header Transformation occurs
   - Hero Section hidden
   - Presentation Section slides into view

3. **Post-Transition State**
   - Presentation Section fully visible
   - Lottie Animation begins playing
   - Header in transformed state
   - Particle Effect paused or removed

## Component Descriptions

### Know More Button
- Triggers presentation sequence
- Located in Hero Section
- Has 'active' state for visual feedback

### Light Effect Transition
- Full-screen white overlay
- Fades in on Know More Button click
- Implemented with div and CSS transitions

### Header
- Transforms during transition
- Changes include color scheme, position, and z-index

### Presentation Section
- Contains Lottie Animation
- Slides into view post-transition
- Positioned above Hero Section in z-index

### Lottie Animation
- SVG-based animation
- Plays after Presentation Section is fully visible
- JSON file: `animations/animation1.json`

### Particle Effect
- Created using Particles.js
- Configurable via `particles.json`
- Provides interactive Hero Section background

## Key Functions

### `handleKnowMoreClick()`
Initiates presentation sequence on Know More Button click.

### `createFullScreenLightEffect()`
Creates and animates Light Effect Transition.

### `transitionToNextSection()`
Handles Header Transformation and Presentation Section reveal.

### `startLottieAnimation()`
Begins Lottie Animation playback in Presentation Section.

## Modules

### LottieAnimations
Manages Lottie animation loading and playback.

#### Methods
- `init()`: Loads Lottie Animation without playing.
- `play()`: Starts Lottie Animation playback.

### ParticleEffect
Controls particle background animation.

#### Methods
- `init()`: Sets up particle system.
- `pause()`: Pauses particle animation.
- `resume()`: Resumes particle animation.
- `removeConnection()`: Removes inter-particle connections.

## Event Sequence

1. DOMContentLoaded
   - Initialize Particle Effect
   - Initialize Lottie Animation (load only)
   - Set up event listeners

2. Know More Button Click
   - Trigger Light Effect Transition
   - Begin Header Transformation
   - Pause or remove Particle Effect

3. After Light Effect Transition (500ms)
   - Complete Header Transformation
   - Reveal Presentation Section
   - Start Lottie Animation

## Customization Points

- Animation durations in `createFullScreenLightEffect()`
- Lottie Animation path in `LottieAnimations.init()`
- Header transformation styles in `transitionToNextSection()`
- Particle Effect configuration in `particles.json`

## Development Setup

1. Clone the repository
2. Ensure local server setup (e.g., Live Server VS Code extension)
3. Open `public/index.html` in browser through local server

## Performance Considerations

- Asynchronous loading of Lottie animations
- Optimized Particle Effect (adjustable in `particles.json`)
- Consider lazy-loading off-screen images and animations

## Accessibility

- Ensure keyboard accessibility for all interactive elements
- Provide appropriate ARIA labels for dynamic content
- Maintain sufficient color contrast ratios

## Browser Compatibility

- Tested on latest versions of Chrome, Firefox, Safari, and Edge
- Not compatible with IE11 due to ES6+ usage

## Deployment

- Host on static file server (e.g., Netlify, GitHub Pages)
- Ensure proper asset linking with relative paths
- Set appropriate cache headers for static assets
