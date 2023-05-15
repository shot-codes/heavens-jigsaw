import * as THREE from 'three';

// Here we mount our svelte app
import ThrelteComponent from "./svelteStuff/App.svelte";
const appRoot = document.getElementById("svelte_root");
const svelteApp = new ThrelteComponent({
  target: appRoot,
})

// You can omit all of this stuff, as we will be relying on threltes renderer and canvas.
const canvas = document.getElementById("three_canvas");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setSize( 200, 300 );

// This is all the stuff you want to keep. You can see it copied over to VanillaThreeIntegration.svelte
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

// Put everything from you render loop into the useFrame in VanillaThreeIntegration.svelte.
// Don't add the call to 'renderer.render()' or the call to 'requestAnimationFrame()'.
function animate() {
  requestAnimationFrame( animate );

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render( scene, camera );
}

animate();
