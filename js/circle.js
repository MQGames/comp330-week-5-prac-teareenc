"use strict";

class Circle {

    /**
    * Construct a polygon representing a unit circle with the specified number of sides and colour
    */
    
    constructor(nSides, colour) {
        check(isNumber(nSides), isArray(colour));

        this.colour = colour;
        this.points = new Float32Array(nSides * 2);

        for (let i = 0; i < nSides; i++) {
            this.points[2*i] = 0;     // TODO: set the x coordinate;
            this.points[2*i+1] = 0;   // TODO: set the y coordiante
        }
    }

    renderSelf(gl, colourUniform) {
        check(isContext(gl), isUniformLocation(colourUniform));

        // TODO: Write code to render the shape at the origin, in the desired colour

    }

}