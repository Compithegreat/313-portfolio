import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export function createThreeScene(containerSelector, objPath) {
  // Target container for the 3D model
  const container = document.querySelector(containerSelector);

  // Initialize scene, camera, and renderer
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x303030);

  const camera = new THREE.PerspectiveCamera(
    75,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  camera.position.set(5, 3, 4);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  // Add grid helper
  const gridHelper = new THREE.GridHelper(10, 10, 0xFFFFFF, 0x808080);
  scene.add(gridHelper);

  // Add lighting
  const light1 = new THREE.DirectionalLight(0x0000FF, 1);
  light1.position.set(5, 5, 5);
  scene.add(light1);

  const light2 = new THREE.DirectionalLight(0x0000FF, 1);
  light2.position.set(5, -5, 5);
  scene.add(light2);

  const light3 = new THREE.DirectionalLight(0xFF00FF, 1);
  light3.position.set(-5, 5, 5);
  scene.add(light3);

  const light4 = new THREE.DirectionalLight(0xFF00FF, 1);
  light4.position.set(-5, -5, 5);
  scene.add(light4);

  const light5 = new THREE.DirectionalLight(0xFFFFFF, 1);
  light5.position.set(-5, 5, -5);
  scene.add(light5);

  const light6 = new THREE.DirectionalLight(0xFFFFFF, 1);
  light6.position.set(-5, -5, -5);
  scene.add(light6);

  const light7 = new THREE.DirectionalLight(0x00FFFF, 1);
  light7.position.set(5, 5, -5);
  scene.add(light7);

  const light8 = new THREE.DirectionalLight(0x00FFFF, 1);
  light8.position.set(5, -5, -5);
  scene.add(light8);

  //const ambientLight = new THREE.AmbientLight(0x404040, 1);
  //scene.add(ambientLight);

  //const pointLight = new THREE.PointLight(0xffffff, 0.8, 100);
  //pointLight.position.set(2, 5, 5);
  //scene.add(pointLight);

  // Add OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; // Smooth rotation
  controls.dampingFactor = 0.05;
  controls.target.set(0, 0, 0);
  controls.update();

  // Load OBJ file
  const objLoader = new OBJLoader();

  objLoader.load(
    objPath,
    (object) => {
      object.traverse((child) => {
        if (child.isMesh) {
          child.geometry.computeVertexNormals();
          child.material = new THREE.MeshStandardMaterial({
            color: 0xFFFFFF, // Default material color
            wireframe: false, // toggle wireframe
            transparent: false, // toggle transparency
            opacity: 0.5, // change level of transparency
          });
        }
      });

      object.position.set(0, 0, 0);
      object.scale.set(1, 1, 1);

      scene.add(object);
    },
    (xhr) => {
      console.log(`Loading: ${(xhr.loaded / xhr.total) * 100}% loaded`);
    },
    (error) => {
      console.error("An error occurred while loading the model:", error);
    }
  );

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();

  // Handle window resize
  window.addEventListener("resize", () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });

  return { scene, camera, renderer };
}
