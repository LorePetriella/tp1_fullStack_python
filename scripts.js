const $ = (id) => document.getElementById(id);
const $$ = (selector) => document.querySelectorAll(selector);

const showSection = (sectionToShow) => {
    $$('.section').forEach((section) => {
        section.classList.add("visually-hidden");
        $(`${sectionToShow}`).classList.remove("visually-hidden");
    });
};


$("official_video").addEventListener("click", (event) => {
    event.preventDefault();
    showSection("youtube"); 
    // toggleFullScreen($("youtube-video")); // Entrar en modo de pantalla completa
    const modal = new bootstrap.Modal($("youtubeModal"));
  modal.show(); // Mostrar el modal
  });


const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
const videoIds = ['1uMA2cqq6Ig', '3kFKSXvtSEk']; 
let currentVideoIndex = 0;


// function onYouTubeIframeAPIReady() {
//     player = new YT.Player('youtube-video', {
//       height: '390',
//       width: '640',
//       videoId: videoIds[currentVideoIndex],
//       events: {
//         onReady: onPlayerReady,
//         onStateChange: onPlayerStateChange,
//       },
//     });
//   }
  
 $('youtubeModal').addEventListener('shown.bs.modal', () => {
    if (!player) {
      player = new YT.Player('youtube-video', {
        height: '390', // Tamaño del reproductor
        width: '640',
        videoId: videoIds[currentVideoIndex], // ID del video que deseas reproducir
        events: {
          onReady: (event) => event.target.playVideo(), // Autoplay
          onStateChange: onPlayerStateChange, // Manejo de eventos
        },
      });
    }
  });
  
  $('youtubeModal').addEventListener('hidden.bs.modal', () => {
    if (player) {
      player.destroy(); // Destruir el reproductor para liberar recursos
      player = null; // Limpiar la referencia
    }
  });





const onPlayerReady = (event) => {
  event.target.playVideo(); // Autoplay. 
};


const onPlayerStateChange = (event) => {
    if (event.data === YT.PlayerState.ENDED) {
       
        currentVideoIndex++;
        if (currentVideoIndex <videoIds.length) {
           
          player.loadVideoById(videoIds[currentVideoIndex]); // Carga el siguiente video
        }    }
    };
   
    // const toggleFullScreen = (element) => {
    //     if (!document.fullscreenElement) {
    //       if (element.requestFullscreen) {
    //         element.requestFullscreen();
    //       } else if (element.webkitRequestFullscreen) {
    //         element.webkitRequestFullscreen(); // Safari
    //       } else if (element.msRequestFullscreen) {
    //         element.msRequestFullscreen(); // Edge/IE
    //       }
    //     }
    //   };
      
    
      

