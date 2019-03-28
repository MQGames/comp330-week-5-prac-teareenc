"use strict";

class Circle {

    /**
    * Construct a polygon representing a unit circle with the specified number of sides and colour
    */
    
    constructor(colour) {
        check(isArray(colour));

        const nSides = 8;
        this.colour = colour;
        this.points = new Float32Array(this.nSides * 2);

        for (let i = 0; i < this.nSides; i++) {
            this.points[2*i] = 0;     // TODO: set the x coordinate;
            this.points[2*i+1] = 0;   // TODO: set the y coordiante
        }
    }

    renderSelf(gl, colourUniform) {
        check(isContext(gl), isUniformLocation(colourUniform));

        // TODO: Write code to render the shape at the origin, in the desired colour
        // Hint: use a TRIANGLE_FAN

    }

}