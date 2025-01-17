import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";

const cubes = [
  "./cubeDrawings/cube1.webp",
  "./cubeDrawings/cube2.webp",
  "./cubeDrawings/cube3.webp",
  "./cubeDrawings/cube4.webp",
];

const trees = [
  "./treeDrawings/tree1.jpg",
  "./treeDrawings/tree2.jpg",
  "./treeDrawings/tree3.jpg",
  "./treeDrawings/tree4.jpg",
];

//TO BE UPDATED
const cadavrePhotos =[
  "./cadavrePhotos/cadavre1.jpg",
  "./cadavrePhotos/cadavre2.jpg",
  "./cadavrePhotos/cadavre3.jpg",
  "./cadavrePhotos/cadavre4.jpg",
]
const cadavreMain = "./cadavrePhotos/cadavreMain.jpg"

const cadavreCaptions =[
  "test1",
  "testB",
  "test-iii",
  "testFour",
]

document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <section id="projects">
      <div id="project-row">
        <div>
          <h3>Assignment 1</h3>
          </br>
          <h2>Cadavre Exquis</h2>
        </div>
        <div class="three-model">
          <div id="model1">
            <img src="${cadavreMain}" alt="Cadavre Exquis." />
          </div>
        </div>
        <div id="images-description">
          <div id="images">
            ${cadavrePhotos
              .map(
                (cadavre, index) => `<img src="${cadavre}" alt="${cadavreCaptions[index]}" />`
              )
              .join("")}
          </div>
          <h4 id="description">Lorem Ipsum.</h4>
        </div>
      </div> 
      
      
      <div id="project-row">
        <div>
          <h3>Assignment 2</h3>
          </br>
          <h2>Interoperability</h2>
        </div>
        <div class="three-model">
          <div id="model2"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${trees
              .map(
                (trees, index) =>
                  `<img src="${trees}" alt="tree${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D tree model is a geometric representation of a tree, featuring a trunk, branches, and foliage. The trunk is typically cylindrical, with textured bark, while the branches extend outward to support leaves or a canopy. It may include roots or flowers for added detail.</h4>
        </div>
      </div>
      <!--
      <div id="project-row">
        <div>
          <h3>Assignment 2</h3>
          </br>
          <h2>Interoperability</h2>
        </div>
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${cubes
              .map(
                (cube, index) => `<img src="${cube}" alt="cube${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D house model is a geometric representation of a house, featuring walls, a roof, and windows. It often includes additional details such as doors, chimneys, and balconies, with textures like brick, wood, or stucco to enhance realism. The interior may also feature rooms, furniture, and lighting for a more detailed design.</h4>
        </div>
      </div> -->
    </section>

    <ul id="footer-items">
      
      <div>scoob</div>
      <div>scoob</div>
      <div>scoob</div>
      <div>scoob</div>

      <!--
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li>LinkedIn: <a href="${data.contact.linkedin}">${data.contact.linkedin}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${data.contact.github}</a></li>
      -->
    </ul>
  </main>
`;

// Create three.js scenes for each
// createThreeScene("#model1", "/3DModels/project1/cube.obj");
createThreeScene("#model2", "/3DModels/project2/tree.obj");
createThreeScene("#model3", "/3DModels/project3/cottage.obj");
