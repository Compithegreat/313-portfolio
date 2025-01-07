import './style.css';
import data from './data/data';
import { createThreeScene } from './3DModels/threeScene';

const cubes = [
  './cubeDrawings/cube1.webp',
  './cubeDrawings/cube2.webp',
  './cubeDrawings/cube3.webp',
  './cubeDrawings/cube4.webp',
];

document.querySelector('#app').innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <section id="projects">
      // Model 1
      <div id="project-row">
        <div class="three-model">
          <div id="model1"></div>
        </div>
        <div id="images">
          <div>
            ${cubes.map((cube, index) => `<img src="${cube}" alt="cube${index + 1}" />`).join('')}
          </div>
        </div>
      </div>

      // Model 2
      <div id="project-row">
        <div class="three-model">
          <div id="model2"></div>
        </div>
        <div id="images">
          <div>
            ${cubes.map((cube, index) => `<img src="${cube}" alt="cube${index + 1}" />`).join('')}
          </div>
        </div>
      </div>

      // Model 3
      <div id="project-row">
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images">
          <div>
            ${cubes.map((cube, index) => `<img src="${cube}" alt="cube${index + 1}" />`).join('')}
          </div>
        </div>
      </div>
    </section>

    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li>LinkedIn: <a href="${data.contact.linkedin}">${data.contact.linkedin}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${data.contact.github}</a></li>
    </ul>
  </main>
`;

createThreeScene('#model1', './src/3DModels/project1/cube.obj', './src/3DModels/project1/cube.mtl');
createThreeScene('#model2', './src/3DModels/project2/tree.obj', './src/3DModels/project2/tree.mtl');
createThreeScene('#model3', './src/3DModels/project3/cottage.obj', './src/3DModels/project3/cottage.mtl');



