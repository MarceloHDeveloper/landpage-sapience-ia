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
- **KineticType Core**: Custom JavaScript library for creating kinetic typography effects.
- **Text Animation Effect**: Any of the various text animations provided by KineticType Core (e.g., textWave, textFadeInOut, textSlideIn).
- **Effect Application**: Process of applying a text animation effect to a DOM element.
- **Effect Removal**: Process of removing an applied text animation effect from a DOM element.
- **Animation Parameters**: Customizable options for each text animation effect (e.g., amplitude, frequency, colors).
- **Phrase Transition**: Smooth transition between different text phrases using KineticType Core's addPhrase and removePhrase functions.
- **Split Text Reveal**: Special effect that reveals text character by character.
- **Gradient Shift**: Text effect that applies a moving gradient to the text color.
- **3D Text Effects**: Group of effects that give text a three-dimensional appearance (e.g., text3DExtrude, rotate3D).

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

## License

Copyright © 2024 Sapience-IA. All rights reserved.

This project, including all source code, documentation, and assets, is the intellectual property of Sapience-IA. The Sapiencia landpage and KineticType Core library are proprietary software.

Unauthorized use, reproduction, or distribution of this software or any portion of it may result in severe civil and criminal penalties, and will be prosecuted to the maximum extent possible under the law.

For inquiries about licensing or usage, please contact Sapience-IA at [contact email or website].

## KineticType Core

KineticType Core is our proprietary JavaScript library for creating kinetic typography effects. It was specifically created for use in the Sapience-IA landpage project. This custom-built solution ensures that the text animations perfectly align with the unique design and interactive requirements of our website.

### Overview

KineticType Core was developed in-house to meet the specific needs of the Sapience-IA landpage. It offers a wide range of text animation effects that are tailored to our brand identity and user experience goals. The library is designed to be flexible, performant, and seamlessly integrated with other components of our landpage.

### Key Features

- 28+ predefined text animation effects, custom-designed for Sapience-IA's visual language
- Customizable animation parameters to fine-tune effects for different sections of the landpage
- Easy-to-use API for applying and removing effects, optimized for our development workflow
- Smooth transition handling between text phrases, crucial for our interactive storytelling approach
- Performance-optimized for smooth animations, ensuring a responsive user experience on our landpage

### Integration with Sapience-IA Landpage

KineticType Core is deeply integrated into the Sapience-IA landpage, providing dynamic text animations that enhance our brand message. It's used throughout the site, including:

1. The hero section for impactful headline animations that capture visitor attention
2. The presentation section for revealing key points about our AI and technology services
3. Various sections where text needs to be emphasized or animated to illustrate complex concepts

## Glossary of Technical Terms

- **API (Application Programming Interface)**: A set of routines, protocols, and tools for building software applications.

- **CSS (Cascading Style Sheets)**: A language used to describe the presentation of a document written in HTML or XML.

- **DOM (Document Object Model)**: A programming interface for HTML and XML documents, representing the structure of a document as a tree of objects.

- **ES6+ (ECMAScript 2015+)**: More recent versions of the ECMAScript standard, which is the standardized specification of JavaScript.

- **Git**: A distributed version control system for tracking changes in source code during software development.

- **HTML (HyperText Markup Language)**: The standard markup language for creating web pages.

- **JavaScript**: A high-level, interpreted programming language that enables interactive web pages.

- **JSON (JavaScript Object Notation)**: A lightweight data interchange format that is easy for humans to read and write and for machines to parse and generate.

- **Landing Page**: A single web page designed specifically for a marketing or advertising campaign.

- **Lottie**: A library that renders Adobe After Effects animations exported as json with Bodymovin.

- **Particles.js**: A lightweight JavaScript library for creating animated particles.

- **Responsive**: Design that adapts to different screen sizes and devices.

- **SVG (Scalable Vector Graphics)**: An XML-based vector image format for two-dimensional graphics with support for interactivity and animation.

- **Three.js**: A cross-browser JavaScript library/API used to create and display animated 3D computer graphics in a web browser.

- **Kinetic Typography**: An animation technique mixing motion and text to express ideas.

- **Vector**: A type of graphic based on mathematical formulas that can be scaled without loss of quality.

- **Webpack**: An open-source JavaScript module bundler, primarily used to bundle JavaScript files for usage in a browser.

- **Keyframe-based animation**: An animation technique where the animator defines key frames at specific points on a timeline and the software interpolates the intermediate frames.

- **Rendering**: The process of generating an image from a 2D or 3D model by means of computer programs.

- **Lazy-loading**: An optimization technique where the loading of non-critical content is deferred until it's needed.

- **ARIA (Accessible Rich Internet Applications)**: A set of attributes that define ways to make Web content and Web applications more accessible to people with disabilities.

- **Polyfill**: Code that implements a feature on web browsers that do not support it natively.

- **Minification**: The process of removing all unnecessary characters from source code without changing its functionality.

- **CDN (Content Delivery Network)**: A system of distributed servers that deliver web pages and other web content to users based on their geographic location.

- **KineticType Core**: Our proprietary JavaScript library for creating kinetic typography effects, specifically developed for the Sapience-IA landing page.

- **Ubiquitous Language**: A common, rigorous language between developers and users, used throughout the project from requirements to code.
