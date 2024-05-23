const $ = (id) => document.getElementById(id);
const $$ = (selector) => document.querySelectorAll(selector);



//Modal para videos de youTube que se muestra con el ícono del footer
$("official_video").addEventListener("click", (event) => {
  event.preventDefault(); 

  const modal = new bootstrap.Modal($("youtubeModal"));
  modal.show(); // Mostrar el modal
});

const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
const videoIds = ["1uMA2cqq6Ig", "3kFKSXvtSEk"];
let currentVideoIndex = 0;

$("youtubeModal").addEventListener("shown.bs.modal", () => {
  if (!player) {
    player = new YT.Player("youtube-video", {
      height: "390", // Tamaño del reproductor
      width: "640",
      videoId: videoIds[currentVideoIndex], // ID del video a reproducir
      playerVars: {
        playsinline: 1, // Reproducción en línea para dispositivos móviles
      },
      events: {
        onReady: (event) => {
          event.target.playVideo();
          $("youtube-video").classList.add("ratio"); // Agrega la clase para hacer el iframe responsive
        },
      },

      onStateChange: onPlayerStateChange, // Manejo de eventos
    });
  }
});

$("youtubeModal").addEventListener("hidden.bs.modal", () => {
  if (player) {
    player.destroy(); // Destruir el reproductor para liberar recursos
    player = null; // Limpiar la referencia
  }
});

const onPlayerStateChange = (event) => {
  if (event.data === YT.PlayerState.ENDED) {
    currentVideoIndex++;
    if (currentVideoIndex < videoIds.length) {
      player.loadVideoById(videoIds[currentVideoIndex]); // Carga el siguiente video
    }
  }
};

//Función para mostrar modales de contacto y audiciones

const showModal = (modalId) => {
  const modalInnerHtml = {
    contactModal: `
            <div class="modal fade" id="contactModal" tabindex="-1" aria-labelledby="infoModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="infoModalLabel">Escribinos!</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                      
                        <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label visually-hidden">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                      </div>
                      <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label visually-hidden">Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                      </div>
                      </form>
                        </div>
                      
                        <div class="modal-footer d-flex justify-content-center">
                            
                            <button type="submit" class="btn btn-dark">Enviar</button>
                        </div>
                    </div>
                </div>
            </div>`,
    auditionModal: `
      
        <div class="modal fade" id="auditionModal" tabindex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
             <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                
                    <div class="modal-content">
                    
                        <div class="modal-header">
                      
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                      <div class="container mt-5">
                      <form class="row g-3">
                      <div class="col-md-6">
                      
                        <label class="visually-hidden" for="inputFirstName" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="inputFirstName" placeholder="Nombre">
                      </div>
                      <div class="col-md-6">
                      <label class="visually-hidden" for="inputLastName" class="form-label">Apellido</label>
                      <input type="text" class="form-control" id="inputLastName" placeholder="Apellido">
                      </div>
                      <div class="col-md-6">
                      <label class="visually-hidden" for="inputEmail4" class="form-label">Email</label>
                      <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
                      </div>
                      
                     
                      <div class="col-md-6">
                        <label class="visually-hidden" for="inputState" class="form-label">State</label>
                        <select id="inputState" class="form-select">
                          <option selected>Cuerda</option>                         
                          <option value="Soprano">Soprano</option>
                          <option value="Alto">Alto</option>
                          <option value="Tenor">Tenor</option>
                          <option value="Bajo">Bajo</option>
                          <option value="No lo sé">No lo sé</option>
                        </select>
                      </div>
                      <div class="row">
            <!-- Experiencia -->
            <div class="col-md-12 form-group mt-4 mb-4">
                <div class="form-inline">
                    <label class="form-check-label mr-2">Experiencia:</label>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="experiencia" id="experienciaSi" value="SI">
                        <label class="form-check-label" for="experienciaSi">SI</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="experiencia" id="experienciaNo" value="NO">
                        <label class="form-check-label" for="experienciaNo">NO</label>
                    </div>
                </div>
            </div>
            <!-- Lectura Musical -->
            <div class="col-md-12 form-group mb-4">
                <div class="form-inline">
                    <label class="form-check-label mr-2">Lectura Musical:</label>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="lecturaMusical" id="lecturaMusicalSi" value="SI">
                        <label class="form-check-label" for="lecturaMusicalSi">SI</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="lecturaMusical" id="lecturaMusicalNo" value="NO">
                        <label class="form-check-label" for="lecturaMusicalNo">NO</label>
                    </div>
                </div>
            </div>
            <!-- Estudios Musicales -->
            <div class="col-md-12 form-group mb-4">
                <div class="form-inline">
                    <label class="form-check-label mr-2">Estudios Musicales:</label>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="estudiosMusicales" id="estudiosMusicalesSi" value="SI">
                        <label class="form-check-label" for="estudiosMusicalesSi">SI</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="estudiosMusicales" id="estudiosMusicalesNo" value="NO">
                        <label class="form-check-label" for="estudiosMusicalesNo">NO</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 text-center">
                <button type="submit" class="btn btn-dark">Enviar</button>
            </div>
            </div>
            </form>
        </div>`,
  };

  // Inserta el HTML del modal en el body
  document.body.insertAdjacentHTML("beforeend", modalInnerHtml[modalId]);

  // Crea y muestra el modal
  const modal = new bootstrap.Modal($(`${modalId}`));
  modal.show();

  // Elimina el modal del DOM después de cerrarse
  $(`${modalId}`).addEventListener("hidden.bs.modal", function (event) {
    $(`${modalId}`).remove();
  });
};
