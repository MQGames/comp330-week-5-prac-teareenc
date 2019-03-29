"use strict";

class Circle extends GameObject {

    /**
    * Construct a polygon representing a unit circle with the specified number of sides and colour
    */
    

    constructor(colour) {
        check(isArray(colour));
		super();
		
		const circleNSides = 8;

		
        this.colour = colour;
        this.points = new Float32Array(circleNSides * 2);
		
		const step = (2.0* Math.PI) / circleNSides;		
        for (let i = 0; i < circleNSides; i++) {
			const angle = step * i;
			const index = i*2;
            this.points[index+0] = Math.cos(angle);     // TODO: set the x coordinate;
            this.points[index+1] = Math.sin(angle);   // TODO: set the y coordinate
        }
    }

    renderSelf(gl, colourUniform) {
        check(isContext(gl), isUniformLocation(colourUniform));

        // TODO: Write code to render the shape at the origin, in the desired colour
        // Hint: use a TRIANGLE_FAN
				
		gl.bufferData(gl.ARRAY_BUFFER, this.points, gl.STATIC_DRAW);
		gl.uniform4fv(colourUniform, this.colour);
		gl.drawArrays(gl.TRIANGLE_FAN, 0, this.points.length/2);
		
    }

}