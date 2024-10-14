// SVG Animation Module
const SVGAnimation = (() => {
  const svgRoot = SVG.find('#svg1');

  const elements = {
    build1Clip: svgRoot.find('findclipPath351'),
    build1Windows: svgRoot.find('#path351'),
    build1Roof: SVG.find('#build-1-roof'),
    build1Top: SVG.find('#g425'),
    build1Cume: SVG.find("#g140"),
    build1RightWall: SVG.find('#build-1-right-wall'),
    build1LeftWall: SVG.find('#build-1-left-wall'),
    build2Roof2: SVG.find('#g174'),
    build2Roof3: SVG.find('#g208'),
    build2Roof4: SVG.find('#g230')
  };

  function animateBuild1() {
    elements.build1Cume.transform({ scaleX: 0.1, scaleY: 0.1 })
      .animate({ duration: 2000, ease: '<>', delay: 500 })
      .transform({ scaleX: 1, scaleY: 1 });

    elements.build1Roof.animate(3000).transform({ e: 0, f: -350 });
    elements.build1Top.animate(3000).translate(0, -130);

    elements.build1Windows.animate({ duration: 3000, delay: 1500 })
      .attr({ d: "M -64.965892,205.47387 -151.5152,155.22348 v 352.69994 l 86.602489,49.99997 z" });

    elements.build1RightWall.animate(3000)
      .attr({ d: "m -2434.689,580.43588 86.6092,-51.4304 v 416.60929 l -86.6026,51.174 z" });

    elements.build1LeftWall.animate(3000)
      .attr({ d: "m -2434.6824,580.47812 -86.5493,-51.4303 0,416.61992 86.6025,51.174 z" });
  }

  function animateBuild2() {
    elements.build2Roof2.animate(3000).translate(0, -90);
    elements.build2Roof3.animate(3000).translate(0, -180);
    elements.build2Roof4.animate(3000).translate(0, -270);
  }

  function initScrollAnimation() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-on-scroll');
        } else {
          entry.target.classList.remove('animate-on-scroll');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.logo svg, .hero-logo svg').forEach(svg => {
      observer.observe(svg);
    });
  }

  return {
    init: () => {
      animateBuild1();
      animateBuild2();
      initScrollAnimation();
    }
  };
})();

document.addEventListener('DOMContentLoaded', SVGAnimation.init);
