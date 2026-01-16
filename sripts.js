const songs = [
  {
    title: "Song One",
    file: "music/song1.mp3",
    cover: "images/cover1.jpg"
  },
  {
    title: "Song Two",
    file: "music/song2.mp3",
    cover: "images/cover2.jpg"
  }
];

let index = 0;
const audio = document.getElementById("audio");
const title = document.getElementById("title");
const cover = document.getElementById("cover");
const progress = document.getElementById("progress");

function loadSong() {
  title.innerText = songs[index].title;
  audio.src = songs[index].file;
  cover.src = songs[index].cover;
}

function playPause() {
  if (audio.paused) audio.play();
  else audio.pause();
}

function nextSong() {
  index = (index + 1) % songs.length;
  loadSong();
  audio.play();
}

function prevSong() {
  index = (index - 1 + songs.length) % songs.length;
  loadSong();
  audio.play();
}

audio.addEventListener("timeupdate", () => {
  progress.value = (audio.currentTime / audio.duration) * 100;
});

progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

loadSong();
