

const svgRoot =  SVG.find('#svg1');

const build1Clip = svgRoot.find('findclipPath351');

const build1Windows = svgRoot.find('#path351'); 

const build1Roof = SVG.find('#build-1-roof');
const build1Top = SVG.find('#g425');

const build1Cume = SVG.find("#g140")







build1Cume.transform({
    scaleX: 0.1,      // Scale factor for X axis
    scaleY: 0.1       // Scale factor for Y axis
  });



build1Cume.animate({
    duration: 2000, // Duration of the animation in milliseconds
    ease: '<>',     // Easing function
    delay: 500      // Delay before the animation starts
  }).transform({
    scaleX: 1,      // Scale factor for X axis
    scaleY: 1       // Scale factor for Y axis
  });

build1Roof.animate(3000).transform({
    e: 0,   // No horizontal movement (X stays the same)
    f: -350 // Move the roof up (negative Y value moves it up)
  });
  
  build1Top.animate(3000).translate(0, -130);

build1Windows.animate(
    {
      duration: 3000,
      delay: 1500,
    
    }
) 
  .attr({
    d: "M -64.965892,205.47387 -151.5152,155.22348 v 352.69994 l 86.602489,49.99997 z"
  });

const build1RightWall = SVG.find('#build-1-right-wall');
const build1LeftWall = SVG.find('#build-1-left-wall');

build1RightWall.animate(3000).attr({
    d: "m -2434.689,580.43588 86.6092,-51.4304 v 416.60929 l -86.6026,51.174 z" // increase paths's height
});

build1LeftWall.animate(3000).attr({
    d: "m -2434.6824,580.47812 -86.5493,-51.4303 0,416.61992 86.6025,51.174 z" // increase  paths's height
});


// build 2 

const build2Roof2 = SVG.find('#g85');
const build2Roof3 = SVG.find('#g115');
const build2Roof4 = SVG.find('#g141');


build2Roof2.transform({
     scaleX: 0.1,      // Scale factor for X axis
    scaleY: 0.1     
}) 

build2Roof3.transform({
     scaleX: 0.1,      // Scale factor for X axis
    scaleY: 0.1     
})

build2Roof4.transform({
     scaleX: 0.1,      // Scale factor for X axis
    scaleY: 0.1     
})