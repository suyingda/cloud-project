/**
 * shader
 * */
function createShader(gl, VERTEX_SHADER, FRAG_SHADER) {
    var vertex = gl.createShader(gl.VERTEX_SHADER);  //创建顶点着色器
    var frag = gl.createShader(gl.FRAGMENT_SHADER);  //创建片元着色器

    gl.shaderSource(vertex, VERTEX_SHADER);  //指定顶点着色器对象
    gl.shaderSource(frag, FRAG_SHADER); //指定片元着色器对象

    gl.compileShader(vertex);
    gl.compileShader(frag);  //编译顶点和片元着色器

    var program = gl.createProgram();  //创建程序对象
    gl.attachShader(program, vertex);   //为程序对象分配顶点着色器
    gl.attachShader(program, frag);  //为程序对象分配片元着色器

    gl.linkProgram(program);  //链接程序对象
    gl.useProgram(program);  //告知使用的对象

    return program;
}

/**
 * buffer
 * */
function createBuffer(gl, dataMultiplePoint, a_posName, program) {
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, dataMultiplePoint, gl.STATIC_DRAW);
    var a_pos = gl.getAttribLocation(program, a_posName);
    gl.vertexAttribPointer(a_pos, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(a_pos);
}

/**
 * mouse move
 * */

function mouseMove(handle, x, y, up, right, down, left) {
    window.onkeydown = function (e) {
        if (37 == e.keyCode) {
            x -= left || up;
        }
        if (39 == e.keyCode) {
            x += right || up;
        }
        if (40 == e.keyCode) {
            y -= down || up;
        }
        if (38 == e.keyCode) {
            y += up;
        }
        handle(x, y)
    }
}


/**
 * matrix   translation
 * */
function translation(Tx, Ty, Tz) {
    var matrix = new Float32Array([
        1.0, 0.0, 0.0, 0.0,
        0.0, 1.0, 0.0, 0.0,
        0.0, 0.0, 1.0, 0.0,
        Tx, Ty, Tz, 1.0,
    ])
    return matrix;
}

/**
 * matrix   scale
 * */
function scale(Tx, Ty, Tz) {
    var matrix = new Float32Array([
        Tx, 0.0, 0.0, 0.0,
        0.0, Ty, 0.0, 0.0,
        0.0, 0.0, Tz, 0.0,
        0.0, 0.0, 0.0, 1.0,
    ]);
    return matrix;
}

/**
 * matrix   rotate
 * */
function rotate(angle) {
    var sinB = Math.sin(Math.PI * angle / 180.0);
    var cosB = Math.cos(Math.PI * angle / 180.0);
    //rotate矩阵
    var matrix = new Float32Array([
        cosB, sinB, 0.0, 0.0,
        -sinB, cosB, 0.0, 0.0,
        0.0, 0.0, 1.0, 0.0,
        0.0, 0.0, 0.0, 1.0,
    ]);
    return matrix;
}


/**
 *长度转换坐标
 * */
function equal(value, reversal) {
    const subtract = value - 250;
    if (reversal) {
        if (value > 0) {
            return 250 + 250 * value
        } else if (value === -1) {
            return 0;
        } else if (value < 0) {
            return 250 * Math.abs(value)
        } else {
            return 250;
        }
    }
    if (subtract === 0) {
        return 0.0;
    } else {
        return subtract / 250;
    }

}
