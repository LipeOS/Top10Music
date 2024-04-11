// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on a music item, open the modal
var musicItems = document.querySelectorAll(".music");
musicItems.forEach(function(item) {
  item.addEventListener("click", function() {
    var title = this.querySelector(".music-title").textContent;
    var artist = this.querySelector(".artist").textContent;
    var modalTitle = document.getElementById("modal-title");
    var modalArtist = document.getElementById("modal-artist");
    var youtubeLink = document.getElementById("youtube-link");

    modalTitle.textContent = title;
    modalArtist.textContent = "Artista: " + artist;
    youtubeLink.href = "link_do_clip_no_youtube";
    modal.style.display = "block";
  });
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

