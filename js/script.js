const newPostButton = document.querySelector("#new-post-button");
const titleElement = document.querySelector("#titulo");
const extractElement = document.querySelector("#extracto");
const linkElement = document.querySelector("#link");

function mostrarPostAleatorio() {
  fetch("https://es.wikipedia.org/api/rest_v1/page/random/summary?origin=*")
    .then((response) => response.json())
    .then((data) => {
      // Actualizar el título, extracto y enlace en la página web
      titleElement.textContent = data.title;
      extractElement.textContent = data.extract;
      linkElement.href = data.content_urls.desktop.page;
      linkElement.textContent = `Leer más en Wikipedia sobre ${data.title}`;
      if (data.originalimage && data.originalimage.source) {
        const imageElement = document.querySelector("#imagen");

        if (data.originalimage && data.originalimage.source) {
          imageElement.src = data.originalimage.source;
          imageElement.alt = data.title;
        } else {
          imageElement.src = "./images/pc-icon.png";
          imageElement.alt = "Imagen preestablecida";
        }
      }
    })

    .catch((error) => console.error(error));
}

mostrarPostAleatorio();

newPostButton.addEventListener("click", () => {
  mostrarPostAleatorio();
});
