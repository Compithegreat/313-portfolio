import "./style.css";
import data from "./data/data";
import imageRefData from "./data/image-refs";
import { createThreeScene } from "./threeScene";



//Modal image code courtesy of ChatGPT, modified and troubleshooted by myself

// Ensure script runs after DOM has fully loaded
window.onload = function () {
  // Create modal elements dynamically
  const modal = document.createElement("div");
  var modalCaption = "";
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
    grid.innerHTML = "";

    var srcArray = String(event.target.getAttribute("data-sources")).split(",");

    if (srcArray[0] != "") {
      srcHeader.textContent = "Sources";
    } else {
      srcHeader.textContent = "";
    }

    srcArray.forEach((item) => {
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
  document.querySelectorAll(".modalable").forEach((img) => {
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
      <span><p>${data.bio}</p> <p>DSGN 313 | Digital Modelling</p></span>
    </section>

    <section id="projects">
      <div id="project-row">
        <div id="project-title">
          <h3>Assignment 1</h3>
          <h3>Cadavre Exquis</h3>
          </br>
          <h2>In Transit</h2>
        </div>
        <div class="three-model">
          <div id="A1-model1">
            <img src="${imageRefData.cadavre.main}" alt="Cadavre Exquis." id="largeImg" class="modalable" data-sources="">
          </div>
        </div>
        <div id="images-description">
          <div id="images">
            ${imageRefData.cadavre.photos
              .map(
                (photo, index) => `<img src="${photo}" alt="${imageRefData.cadavre.captions[index]}" class="modalable" id="gallery-img" data-sources="${imageRefData.cadavre.sources[index]}" />`
              )
              .join("")}
            
          </div>
          <h4 id="description">After the advent of a severe dissociative episode, I’ve forgotten myself.
As I walk around, as I live my life, I explore the branching paths of my psyche and piece together a new identity. As my conscious being focuses on this reconstruction, my unconscious takes the reigns - They tackle projects, interact with friends, connect with strangers, professionals, and activists, and fight for better, more human-friendly communities.
When I wake up, when I disembark this train, I will be met with a world unfamiliar, though comfortable to myself.</h4>
        </div>
      </div> 



      <div id="project-row">
        <div id="project-title">
          <h3>Assignment 2</h3>
          <h3>Interoperability</h3>
          </br>
          <h2>Simple Pavilion</h2>
          <h2>Closed Torus</h2>
          <h2>Niko</h2>
        </div>
        <div class="three-model">
          <div id="A2-model1"></div>
          <div id="A2-model2"></div>
          <div id="A2-model3"></div>
        </div>
        <div id="images-description">
          <div id="images">
            <img src="${imageRefData.interop.chart}"id="four-three" class="modalable" data-sources=""/>
            ${imageRefData.trees
              .map(
                (photo, index) =>
                  `<img src="${photo}" alt="${imageRefData.interop.captions[index]}" class="modalable" id="gallery-img" data-sources="${imageRefData.interop.sources[index]}"/>`
              )
              .join("")}
          </div>
          <h4 id="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </h4>
        </div>
      </div>

      <div id="project-row">
        <div id="project-title">
          <h3>Assignment 3</h3>
          <h3>Object Creation</h3>
          </br>
          <h2>name pending</h2>
        </div>
        <div class="three-model">
          <div id="A3-model1">
            <img src="${imageRefData.cadavre.main}" alt="Cadavre Exquis." id="largeImg" class="modalable" data-sources="">
          </div>
        </div>
        <div id="images-description">
          <div id="images">
            <!--<img src="./interopPhotos/interopChart.png"id="four_two" class="modalable" data-sources=""/>-->
            ${imageRefData.trees
              .map(
                (trees, index) =>
                  `<img src="${trees}" alt="tree${index + 1}" class="modalable" id="gallery-img"/>`
              )
              .join("")}
          </div>
          <h4 id="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </h4>
        </div>
      </div>

      <div id="project-row">
        <div id="project-title">
          <h3>Assignment 4</h3>
          <h3>Placemaking</h3>
          </br>
          <h2>name pending</h2>
        </div>
        <div class="three-model">
          <div id="A3-model1">
            <img src="${imageRefData.cadavre.main}" alt="Cadavre Exquis." id="largeImg" class="modalable" data-sources="">
          </div>
        </div>
        <div id="images-description">
          <div id="images">
            <!--<img src="./interopPhotos/interopChart.png"id="four_two" class="modalable" data-sources=""/>-->
            ${imageRefData.trees
              .map(
                (trees, index) =>
                  `<img src="${trees}" alt="tree${index + 1}" class="modalable" id="gallery-img"/>`
              )
              .join("")}
          </div>
          <h4 id="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </h4>
        </div>
      </div>

      <div id="project-row">
        <div id="project-title">
          <h3>Assignment 5</h3>
          <h3>Architectural Fluidity</h3>
          </br>
          <h2>name pending</h2>
        </div>
        <div class="three-model">
          <div id="A3-model1">
            <img src="${imageRefData.cadavre.main}" alt="Cadavre Exquis." id="largeImg" class="modalable" data-sources="">
          </div>
        </div>
        <div id="images-description">
          <div id="images">
            <!--<img src="./interopPhotos/interopChart.png"id="four_two" class="modalable" data-sources=""/>-->
            ${imageRefData.trees
              .map(
                (trees, index) =>
                  `<img src="${trees}" alt="tree${index + 1}" class="modalable" id="gallery-img"/>`
              )
              .join("")}
          </div>
          <h4 id="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </h4>
        </div>
      </div>



              
    </section>

    <ul id="footer-items">
      
      <div><a href="mailto:${data.contact.email}"><i class="fas fa-envelope"></i> ${data.contact.email}</a></div>
      <!--<div><i class="fas fa-phone"></i> ${data.contact.phone}</div>-->
      <div><a href="${data.contact.linkedin}"><i class="fa-brands fa-linkedin"></i> Gianluca Cross-Bussoli</a></div>
      <div><a href="${data.contact.github}"><i class="fa-brands fa-github"></i> Compithegreat</a></div>
    </ul>
  </main>
`;

// Create three.js scenes for each
// createThreeScene("#model1", "/3DModels/project1/cube.obj");
createThreeScene("#A2-model1", imageRefData.interop.models[0]);
createThreeScene("#A2-model2", imageRefData.interop.models[1]);
createThreeScene("#A2-model3", imageRefData.interop.models[2]);





