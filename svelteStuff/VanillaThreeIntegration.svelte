<script>
  import { useFrame, useThrelte } from "@threlte/core";
  import * as THREE from 'three';

  // We get the Threlte scene through useThrelte, this replaces the scene you were using
  // when you called stuff like 'scene.add(cube)'
  const { scene } = useThrelte();

  // This stuff is just cut and paste from whatever vanilla threejs stuff you have.
  // In this case it is coming from main.js
  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  const cube = new THREE.Mesh( geometry, material );
  scene.add( cube );

  // useFrame replaces you render loop, so everything you had in there, except the call
  // to the renderer and the recursive call to 'animate()' just gets copy pasted here.
  useFrame(() => {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  })
</script>