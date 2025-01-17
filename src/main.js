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
const cadavreMain = "./cadavrePhotos/cadavreMain.png"

const cadavreCaptions =[
  "test1",
  "testB",
  "test-iii",
  "testFour",
]



//Modal image code courtesy of ChatGPT

// Ensure script runs after DOM has fully loaded
window.onload = function () {
  // Create modal elements dynamically
  const modal = document.createElement("div");
  modal.id = "imageModal";
  modal.classList.add("modal");
  modal.innerHTML = `
    <span class="close">&times;</span>
    <img id="modalImg">
  `;
  document.body.appendChild(modal);

  const modalImg = document.getElementById("modalImg");
  const closeBtn = modal.querySelector(".close");

  // Function to open modal with clicked image
  function openModal(event) {
    modalImg.src = event.target.src;
    modal.style.display = "flex";
  }

  // Function to close modal
  function closeModal() {
    modal.style.display = "none";
  }

  // Attach event listeners to all images with class "modalable"
  document.querySelectorAll(".modalable").forEach(img => {
    img.addEventListener("click", openModal);
  });

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
};


//Main code

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
            <img src="${cadavreMain}" alt="Cadavre Exquis." id="largeImg" class="modalable">
          </div>
        </div>
        <div id="images-description">
          <div id="images">
            ${cadavrePhotos
              .map(
                (cadavre, index) => `<img src="${cadavre}" alt="${cadavreCaptions[index]}" class="modalable" id="gallery" />`
              )
              .join("")}
            
          </div>
          <h4 id="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
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
                  `<img src="${trees}" alt="tree${index + 1}" class="modalable" id="gallery"/>`
              )
              .join("")}
          </div>
          <h4 id="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </h4>
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
      
      <div><i class="fas fa-envelope"></i> ${data.contact.email}</div>
      <div><i class="fas fa-phone"></i> ${data.contact.phone}</div>
      <div><a href="${data.contact.linkedin}"><i class="fa-brands fa-linkedin"></i> Gianluca Cross-Bussoli</a></div>
      <div><a href="${data.contact.github}"><i class="fa-brands fa-github"></i> Compithegreat</a></div>

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
createThreeScene("#model2", "/3DModels/project2/top-shell.obj");
createThreeScene("#model3", "/3DModels/project3/cottage.obj");





