var canvas = document.getElementById('demo-canvas');

var VSHADER_SOURCE, FSHDER_SOURCE;
VSHADER_SOURCE = '' +
    'attribute vec4 a_Position;\n' +
    'void main (){\n' +
    'gl_Position = a_Position;\n' +
    '}\n'
    + '';
FSHDER_SOURCE = '' +
    'void main(){\n' +
    'gl_FragColor = vec4(1.0,0.0,0.0,1.0);\n}\n'
    + '';
var gl = canvas.getContext('webgl');

var program = gl.createProgram();
var vertexShader, fragmentShader;


function createShader(gl, sourceCode, type) {
    //create shader
    var shader = gl.createShader(type);
    // gl.sourceCode(shader, sourceCode);
    gl.shaderSource(shader, sourceCode);
    gl.compileShader(shader);
    return shader;
}

//define vertex shader
vertexShader = createShader(gl, VSHADER_SOURCE, gl.VERTEX_SHADER);
//define frament shader
fragmentShader = createShader(gl, FSHDER_SOURCE, gl.FRAGMENT_SHADER);


//attach shader to program
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);


//link program to context
gl.linkProgram(program);
gl.useProgram(program);
gl.program = program;


//write the positions of vectices to a vertex shader

function initVertexBuffers() {
    var vertices = new Float32Array([
        // 0, 0.5, -0.5, -0.5, 0.5, -0.5
        -1, 1, -1, -1, 1, -1
    ]);
    var n = 3;
    var vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)
    //write data into the buffer object
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    //get attribute a_Position address in vertex shader
    var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);
    //enable a_Position variable
    gl.enableVertexAttribArray(a_Position);
    return n;

}

var n = initVertexBuffers(gl);
gl.clearColor(0, 0, 0, 1);

function draw() {
    //clear canvas and add background color

    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0, n)
}

draw();


// console.log(canvas, context);
