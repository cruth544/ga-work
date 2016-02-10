// Set up scene
var scene = new THREE.Scene();

// Set up camera
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Setting alpha: true creates a transparent bg
var renderer = new THREE.WebGLRenderer({alpha:true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// The render loop
function render() {
    requestAnimationFrame( render );

    // Any updates to scene, camera, or objects go here
    // That is, this is where the animation happens!

    renderer.render( scene, camera );
}
render();