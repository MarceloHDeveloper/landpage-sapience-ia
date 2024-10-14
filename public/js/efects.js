window.addEventListener('load', function() {
  
    function TextAnimation(textGeometry) {
        const bufferGeometry = new THREE.BAS.ModelBufferGeometry(textGeometry);
        const aAnimation = bufferGeometry.createAttribute('aAnimation', 2);
        const aCentroid = bufferGeometry.createAttribute('aCentroid', 3);
        const aControl0 = bufferGeometry.createAttribute('aControl0', 3);
        const aControl1 = bufferGeometry.createAttribute('aControl1', 3);
        const aEndPosition = bufferGeometry.createAttribute('aEndPosition', 3);

        const faceCount = bufferGeometry.faceCount;
        let i, i2, i3, i4, v;

        const size = textGeometry.userData.size;
        const maxDelayX = 2.0;
        const maxDelayY = 0.25;
        const minDuration = 2;
        const maxDuration = 8;
        const stretch = 0.25;

        this.animationDuration = maxDelayX + maxDelayY + maxDuration - 3;
        this._animationProgress = 0;

        for (i = 0, i2 = 0, i3 = 0, i4 = 0; i < faceCount; i++, i2 += 6, i3 += 9, i4 += 12) {
            const face = textGeometry.faces[i];
            const centroid = THREE.BAS.Utils.computeCentroid(textGeometry, face);

            const delayX = Math.max(0, (centroid.x / size.width) * maxDelayX);
            const delayY = Math.max(0, (1.0 - (centroid.y / size.height)) * maxDelayY);
            const duration = THREE.Math.randFloat(minDuration, maxDuration);

            for (v = 0; v < 6; v += 2) {
                aAnimation.array[i2 + v] = delayX + delayY + Math.random() * stretch;
                aAnimation.array[i2 + v + 1] = duration;
            }

            for (v = 0; v < 9; v += 3) {
                aCentroid.array[i3 + v] = centroid.x;
                aCentroid.array[i3 + v + 1] = centroid.y;
                aCentroid.array[i3 + v + 2] = centroid.z;
            }

            const c0x = centroid.x + THREE.Math.randFloat(40, 120);
            const c0y = centroid.y + size.height * THREE.Math.randFloat(0.0, 12.0);
            const c0z = THREE.Math.randFloatSpread(120);

            const c1x = centroid.x + THREE.Math.randFloat(80, 120) * -1;
            const c1y = centroid.y + size.height * THREE.Math.randFloat(0.0, 12.0);
            const c1z = THREE.Math.randFloatSpread(120);

            for (v = 0; v < 9; v += 3) {
                aControl0.array[i3 + v] = c0x;
                aControl0.array[i3 + v + 1] = c0y;
                aControl0.array[i3 + v + 2] = c0z;

                aControl1.array[i3 + v] = c1x;
                aControl1.array[i3 + v + 1] = c1y;
                aControl1.array[i3 + v + 2] = c1z;
            }

            const x = centroid.x + THREE.Math.randFloatSpread(120);
            const y = centroid.y + size.height * THREE.Math.randFloat(0.0, 12.0);
            const z = THREE.Math.randFloat(-20, 20);

            for (v = 0; v < 9; v += 3) {
                aEndPosition.array[i3 + v] = x;
                aEndPosition.array[i3 + v + 1] = y;
                aEndPosition.array[i3 + v + 2] = z;
            }
        }

        const material = new THREE.BAS.BasicAnimationMaterial({
            shading: THREE.FlatShading,
            side: THREE.DoubleSide,
            transparent: true,
            uniforms: {
                uTime: { type: 'f', value: 0 }
            },
            shaderFunctions: [
                THREE.BAS.ShaderChunk['cubic_bezier'],
                THREE.BAS.ShaderChunk['ease_out_cubic']
            ],
            shaderParameters: [
                'uniform float uTime;',
                'attribute vec2 aAnimation;',
                'attribute vec3 aCentroid;',
                'attribute vec3 aControl0;',
                'attribute vec3 aControl1;',
                'attribute vec3 aEndPosition;'
            ],
            shaderVertexInit: [
                'float tDelay = aAnimation.x;',
                'float tDuration = aAnimation.y;',
                'float tTime = clamp(uTime - tDelay, 0.0, tDuration);',
                'float tProgress = ease(tTime, 0.0, 1.0, tDuration);'
            ],
            shaderTransformPosition: [
                'vec3 tPosition = transformed - aCentroid;',
                'tPosition *= 1.0 - tProgress;',
                'tPosition += aCentroid;',
                'tPosition += cubicBezier(tPosition, aControl0, aControl1, aEndPosition, tProgress);',
                'transformed = tPosition;'
            ]
        }, {
            diffuse: 0xffffff
        });

        THREE.Mesh.call(this, bufferGeometry, material);

        this.frustumCulled = false;
    }
    TextAnimation.prototype = Object.create(THREE.Mesh.prototype);
    TextAnimation.prototype.constructor = TextAnimation;

    Object.defineProperty(TextAnimation.prototype, 'animationProgress', {
        get: function() {
            return this._animationProgress;
        },
        set: function(v) {
            this._animationProgress = v;
            this.material.uniforms['uTime'].value = this.animationDuration * v;
        }
    });

    // Create and animate text
    const textAnimation = createTextAnimation();
    textAnimation.position.y = -10;
    scene.add(textAnimation);

    const tl = new TimelineMax({
        repeat: -1,
        repeatDelay: 0.25,
        yoyo: true
    });

    tl.fromTo(textAnimation, 4, // 4
        { animationProgress: 0.0 },
        { animationProgress: 1.0, ease: Power1.easeInOut },
        0
    );

    createTweenScrubber(tl);

    // Handle window resize
    window.addEventListener('resize', function() {
        renderer.setSize(window.innerWidth, window.innerHeight, false);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    animate();
});
