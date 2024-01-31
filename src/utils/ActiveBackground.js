/**
 * BIS Charts Brand Search v3.0
 */
 class ActiveBackground {
    constructor(canvas) {
        this.canvas = canvas;
        
        this.options = {
            imgSize: 255,
            mapSize: 1024
        };

        this.context = this.canvas.getContext('2d');

        this.canvas.width = this.options.imgSize;
        this.canvas.height = this.options.imgSize;

        this.image = this.context.createImageData(this.options.imgSize, this.options.imgSize);

        // offsets for moving height maps
        this.dx1 = 0;
        this.dy1 = 0;

        this.dx2 = 0;
        this.dy2 = 0;

        this.heightMap1 = [];
        this.heightMap2 = [];

        this.setup();
    }

    setup() {
        // init image data with black pixels
       
        for (let i = 0; i < this.image.data.length; i += 4) {
            this.image.data[i] = 0; // R
            this.image.data[i + 1] = 0; // G
            this.image.data[i + 2] = 0; // B
            this.image.data[i + 3] = 255; // A
        }

        // init height map 1
        
        for (let u = 0; u < this.options.mapSize; u++) {
            for (let v = 0; v < this.options.mapSize; v++) {
                // index of coordinate in height map array
                const i = u * this.options.mapSize + v;

                // u,v are coordinates with origin at upper left corner
                // cx and cy are coordinates with origin at the
                // center of the map
                const cx = u - this.options.mapSize / 2;
                const cy = v - this.options.mapSize / 2;

                // distance from middle of map
                const d = this.distance(cx, cy);

                // stretching so we get the desired ripple density on our map
                const stretch = (3 * Math.PI) / (this.options.mapSize / 2);

                // wavy height value between -1 and 1
                const ripple = Math.sin(d * stretch);

                // wavy height value normalized to 0..1
                const normalized = (ripple + 1) / 2;

                // height map value 0..128, integer
                this.heightMap1[i] = Math.floor(normalized * 128);
            }
        }

        
        for (let u = 0; u < this.options.mapSize; u++) {
            for (let v = 0; v < this.options.mapSize; v++) {
                const i = u * this.options.mapSize + v;
                const cx = u - this.options.mapSize / 2;
                const cy = v - this.options.mapSize / 2;

                // skewed distance as input to chaos field calculation,
                // scaled for smoothness over map distance
                const d1 = this.distance(0.8 * cx, 1.3 * cy) * 0.022;
                const d2 = this.distance(1.35 * cx, 0.45 * cy) * 0.022;

                const s = Math.sin(d1);
                const c = Math.cos(d2);
                // height value between -2 and +2
                const h = s + c;

                // height value between 0..1
                const normalized = (h + 2) / 4;
                // height value between 0..127, integer
                this.heightMap2[i] = Math.floor(normalized * 127);
            }
        }


        
    }

    linearGradient(c1, c2) {
        const g = [];
        // interpolate between the colors in the gradient
        for (let i = 0; i < 256; i++) {
            const f = i / 255;
            g[i] = this.interpolate(c1, c2, f);
        }
        return g;
    }

    interpolate(c1, c2, f) {  
        return {
            r: Math.floor(c1.r + (c2.r - c1.r) * f),
            g: Math.floor(c1.g + (c2.g - c1.g) * f),
            b: Math.floor(c1.b + (c2.b - c1.b) * f)
        };
    }


    // adjust height maps offsets
    moveHeightMaps(t) {
        this.dx1 = Math.floor(
            (((Math.cos(t * 0.0002 + 0.4 + Math.PI) + 1) / 2) * this.options.mapSize) / 4
        );
        this.dy1 = Math.floor(
            (((Math.cos(t * 0.0003 - 0.1) + 1) / 2) * this.options.mapSize) / 4
        );
        this.dx2 = Math.floor(
            (((Math.cos(t * -0.0002 + 1.2) + 1) / 2) * this.options.mapSize) / 4
        );
        this.dy2 = Math.floor(
            (((Math.cos(t * -0.0003 - 0.8 + Math.PI) + 1) / 2) * this.options.mapSize) / 4
        );
    }

    updateImageData(palette) {
        for (let u = 0; u < this.options.imgSize; u++) {
            for (let v = 0; v < this.options.imgSize; v++) {
                // indexes into height maps for pixel
                const i = (u + this.dy1) * this.options.mapSize + (v + this.dx1);
                const k = (u + this.dy2) * this.options.mapSize + (v + this.dx2);

                // index for pixel in image data
                // remember it's 4 bytes per pixel
                const j = u * this.options.imgSize * 4 + v * 4;

                // height value of 0..255
                let h = this.heightMap1[i] + this.heightMap2[k];

                const c = palette[h];//{ r: h, g: h, b: h };

                // set pixel data
                this.image.data[j] = c.r;
                this.image.data[j + 1] = c.g;
                this.image.data[j + 2] = c.b;
                this.image.data[j + 3] = 150;
            }
        }
    }

    distance(x, y) { 
        return Math.sqrt(x * x + y * y);
    }

    run() {
        let palette = this.linearGradient(
            { r: 120, g: 208, b: 246, a: 255 },
            { r: 255, g: 255, b: 255, a: 255 },
        );

        const tick = time => {
            this.moveHeightMaps(time);
            this.updateImageData(palette);
      
            this.context.putImageData(this.image, 0, 0);
      
            requestAnimationFrame(tick);
          };
      
          requestAnimationFrame(tick);
    }

}

export default ActiveBackground;