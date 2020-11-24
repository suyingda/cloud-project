var scene, camera, renderer, mesh, geometry, create;
var x = 0;
var y = 0;

function init() {

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(90, 1280.0 / 720.0, 0.1, 1000);
    camera.position.set(0, 1.8, -3);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(1280, 720);
    //矩形平面
    geometry = new THREE.Mesh(new THREE.PlaneGeometry(10, 10),
        // new THREE.MeshBasicMaterial({
        new THREE.MeshLambertMaterial({
            color: 0x808080,
            side: THREE.DoubleSide,
            // wireframe:true
        })
    );
    geometry.rotation.x -= Math.PI / 2;
    geometry.position.y = -1.5;
    geometry.receiveShadow = true;

    mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1),
        new THREE.MeshPhongMaterial({
            color: 0xFF000ff
        })
    );
    mesh.castShadow = true;
    mesh.receiveShadow = true;

    //light
    // var spotLight = new THREE.SpotLight(0xffffff);
    var spotLight = new THREE.PointLight(0xffffff);
    spotLight.position.set(-3, 6, -3);
    spotLight.castShadow = true;
    spotLight.shadow.camera.near = 0.1;
    spotLight.shadow.camera.far = 25;
    scene.add(spotLight);

    //木箱
    var loader = new THREE.TextureLoader();
    var crateTexture = loader.load('./../../assets/threejs65tree.png');
    create = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.MeshPhongMaterial({
            color: 0xffffff,
            map: crateTexture
        })
    )
    create.receiveShadow = true;
    create.castShadow = true;
    scene.add(create);


    //加载3D模型
    var loader = new THREE.OBJLoader();
    loader.load('model.obj', function (mesh) {
        scene.add(mesh);
        mesh.position.x = -80;
        mesh.position.z = 160;
        mesh.position.y = 40;
        mesh.rotation.y = -Math.PI / 1.1;
        mesh.receiveShadow = true;
        mesh.castShadow = true;
    });


// scene.add(mesh);
    scene.add(geometry);

    renderer.shadowMap.enabled = true;

    document.body.appendChild(renderer.domElement);
    animation();
}


// function mouseMove(up, right, down, left) {
window.onkeydown = function (e) {
    if (38 === e.keyCode) {
        y += 0.5;
    }
    if (39 === e.keyCode) {
        x += 0.5;
    }

    if (40 === e.keyCode) {
        y -= 0.5;
    }
    if (37 === e.keyCode) {
        x -= 0.5;
    }

}

// }


function animation() {
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;


    mesh.position.x = x;
    mesh.position.y = y;


    create.position.x = x;
    create.position.y = y;

    create.rotation.x += 0.01;
    create.rotation.y += 0.01;

    requestAnimationFrame(animation);
    renderer.render(scene, camera);
}

window.onload = init;
