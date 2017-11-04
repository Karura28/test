(function(){

    //vertex shader calcular posiciones y vertices de los primitivos
    //y el frament shader calcula el color y la posicion de los primitivos

    let scene = new THREE.Scene();
    const aspectRatio = window.innerWidth / window.innerHeight;
    let camera = new THREE.PerspectiveCamera(85, aspectRatio, 0.1, 100);
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.soft = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    //camara
    camera.position.z = 50;
    camera.position.y = 10;

    let planeGeometry = new THREE.PlaneGeometry(100,100);
    planeGeometry.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2));
    let groundMaterial = new THREE.MeshPhongMaterial({
        color: 0x60ffff
    });
    let plane = new THREE.Mesh(planeGeometry, groundMaterial);
    plane.receiveShadow  = true;
    let mesh;
    scene.background = new THREE.Color(0xeeeeee);
    scene.add(new THREE.AmbientLight(0x404040));
    scene.add(plane);

    let controls = new THREE.OrbitControls(camera, renderer.domElement);
//tetera
var points = [];
for ( var i = 0; i < 10; i ++ ) {
    points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 10 + 5, ( i - 0 ) * 2 ) );
}
var geometry = new THREE.LatheGeometry( points );
var material = new THREE.MeshBasicMaterial( { color: 0xf0ff00 } );
var lathe = new THREE.Mesh( geometry, material );
scene.add( lathe );
var geometry = new THREE.TorusBufferGeometry( 5, 2, 10, 10);
var material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
var torus = new THREE.Mesh( geometry, material );
scene.add( torus );
    function loop(){
        requestAnimationFrame(loop);
        //mesh.rotation.x += 0.01;
        renderer.render(scene, camera);
    }

    loop();

})();