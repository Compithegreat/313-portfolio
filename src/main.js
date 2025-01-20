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
  "./cadavrePhotos/cadavre1.png",
  "./cadavrePhotos/cadavre2.png",
  "./cadavrePhotos/cadavre3.png",
  "./cadavrePhotos/cadavre4.png",
]
const cadavreMain = "./cadavrePhotos/cadavreMain.png"

const cadavreCaptions =[
  "Here I am. </br>Unlike other pieces of the scene, I am not distorted. </br>Though, I am but a sketch. Unfinished, but getting there. </br>From my point of view, my own existence is undeniable - its shape, however, is hazy.",
  "The errors- the dissocation. </br>A distorted haze of something, obfuscating my gaze and outlook on reality and identity.",
  "The outside world - </br>or maybe, a world which I’m working towards? </br>As hazy as it is, even to my conscious mind, themes of urbanism and people-oriented planning are clear. </br>It’s an obsession that sticks in my mind.",
  "The branches. </br>In my pursuit of finding myself, I experiment with following different paths. </br>Each path reveals different aspects of myself which previously I had forgotten. </br>Each path reveals its own branching spurs - each with spurs of their own.",
]

const cadavreSources =[
  ["https://unsplash.com/photos/a-close-up-of-a-piece-of-white-paper-nW3XR5c1aCg"],
  [],
  [
    "https://www.makemyhouse.com/architectural-design/54x50-2700sqft-home-design/14680/354",
    "http://oliverarchitect.com/blog/2019/12/16/on-the-boards-little-italy-storefront",
    "https://freepngimg.com/png/16756-tree-png-clipart",
    "https://www.calgary.ca/green-line/trains.html",
    "https://www.gettyimages.ca/detail/video/flying-through-stars-and-nebula-stock-video-stock-footage/1514138928",
    "https://www.textures.com/download/floors-regular-0204/21948",
    "https://www.textures.com/download/high-rise-residential-0084/31620",
    ],
  [],
]


//Modal image code courtesy of ChatGPT

// Ensure script runs after DOM has fully loaded
window.onload = function () {
  // Create modal elements dynamically
  const modal = document.createElement("div");
  var modalCaption=""
  modal.id = "imageModal";
  modal.classList.add("modal");
  modal.innerHTML = `
    <span class="close">&times;</span>
    <img id="modalImg">
    <span id="modalSidebar">
      <h4 id="imgCaption">${modalCaption}</h4>
      </br>
      <h3 id="srcHeader"> Sources </h3>
      <div class="grid" id="buttonGrid">
      </div>
    </span>
  `;
  document.body.appendChild(modal);

  const modalImg = document.getElementById("modalImg");
  const closeBtn = modal.querySelector(".close");
  const grid = modal.querySelector(".grid");
  const srcHeader = document.getElementById("srcHeader");

  function genSources(event) {
    grid.innerHTML=""
    
    var srcArray = String(event.target.getAttribute("data-sources")).split(",")
    
    if (srcArray[0] != "") {
      srcHeader.textContent="Sources"
    }
    else {
      srcHeader.textContent=""
    }


    srcArray.forEach(item => {
      const anchor = document.createElement("a");
      anchor.href = item;
      anchor.textContent = item;
      anchor.target = "_blank"; // Open in new tab

      // Append to grid
      grid.appendChild(anchor);
    });

    

  }

  // Function to open modal with clicked image
  function openModal(event) {
    modalImg.src = event.target.src;
    document.getElementById("imgCaption").innerHTML = event.target.alt;
    modal.style.display = "flex";
    genSources(event);
    
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
    <section id="heading" style="text-align:center;">
      <h1>${data.name}</h1>
      <span><p>${data.bio}</p> <p>DSGN 313 | Digital Modelling</p></span>
    </section>

    <section id="projects">
      <div id="project-row">
        <div id="titler">
          <h3>Assignment 1</h3>
          <h3>Cadavre Exquis</h3>
          </br>
          <h2>In Transit</h2>
        </div>
        <div class="three-model">
          <div id="model1">
            <img src="${cadavreMain}" alt="Cadavre Exquis." id="largeImg" class="modalable" data-sources="">
          </div>
        </div>
        <div id="images-description">
          <div id="images">
            ${cadavrePhotos
              .map(
                (cadavre, index) => `<img src="${cadavre}" alt="${cadavreCaptions[index]}" class="modalable" id="gallery" data-sources="${cadavreSources[index]}" />`
              )
              .join("")}
            
          </div>
          <h4 id="description">After the advent of a severe dissociative episode, I’ve forgotten myself.
As I walk around, as I live my life, I explore the branching paths of my psyche and piece together a new identity. As my conscious being focuses on this reconstruction, my unconscious takes the reigns - They tackle projects, interact with friends, connect with strangers, professionals, and activists, and fight for better, more human-friendly communities.
When I wake up, when I disembark this train, I will be met with a world unfamiliar, though comfortable to myself.</h4>
        </div>
      </div> 
      
      
      <div id="project-row">
        <div id="titler">
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
        <div id="titler">
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





