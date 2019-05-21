var video = document.querySelector("#block-liw-content video");
var videoIsPaused = true;
var featuredStories = document.getElementsByClassName('story-read-more');
var overlay = document.querySelector('.overlay');
var article = document.querySelector('.overlay article');

// Allows video to be paused/unpaused by clicking anywhere on the video
video.addEventListener('click', function() {
  if (videoIsPaused) {
    video.play();
  } else {
    video.pause();
  }

  videoIsPaused = !videoIsPaused;
});

overlay.addEventListener('click', closeOverlay);

// Clicking to read more of a Feature Story populates the popup article
for (let story of featuredStories) {
  story.addEventListener('click', function() {
    document.body.style.overflow = 'hidden';
    overlay.style.display = "block";
    article.innerHTML = story.nextElementSibling.innerHTML;
    article.innerHTML += '<hr><p class="close-story text-center">Close</p>';
    document.querySelector('article .close-story').addEventListener('click', closeOverlay);
  });
}

// Closes overlay for full Feature Story
function closeOverlay() {
  document.body.style.overflow = 'auto';
  overlay.style.display = "none";
  article.innerHTML = '';

  console.log(featuredStories.length);
}

/* Source: https://www.codeply.com/go/sShh7372V1 */
$('#carouselExample').on('slide.bs.carousel', function (e) {

  var $e = $(e.relatedTarget);
  var idx = $e.index();
  var itemsPerSlide = 4;
  var totalItems = $('.carousel-item').length;
  
  if (idx >= totalItems-(itemsPerSlide-1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i=0; i<it; i++) {
          // append slides to end
          if (e.direction=="left") {
              $('.carousel-item').eq(i).appendTo('.carousel-inner');
          }
          else {
              $('.carousel-item').eq(0).appendTo('.carousel-inner');
          }
      }
  }
});