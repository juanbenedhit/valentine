var mysong = document.getElementById("mysong");
var playbtn = document.getElementById("playbtn");
var pausebtn = document.getElementById("pausebtn");
var startTime = 45;
var endTime = 79;

mysong.volume = 0.2;

mysong.addEventListener("timeupdate", function () {
  if (mysong.currentTime >= endTime) {
    mysong.pause();
    pausebtn.style.display = "none";
    playbtn.style.display = "block";
  }
});

function myFunctionPlaySongShowfollow() {
  myFunction();
  playSong();
  showfollow();
}

function showfollow() {
  var follow = document.getElementById("follow");
  var followLink = document.getElementById("follow-link");

  follow.style.display = "block";
  followLink.style.display = "inline";
}

function playSong() {
  if (mysong.currentTime < startTime || mysong.currentTime >= endTime) {
    mysong.currentTime = startTime;
  }
  mysong.play();
  pausebtn.style.display = "block";
  playbtn.style.display = "none";
}

function pauseSong() {
  mysong.pause();
  pausebtn.style.display = "none";
  playbtn.style.display = "block";
}

function myFunction() {
  console.log("myFunctionPlaySongShowfollow called");
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "❤ Click ini ❤";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "❤ HAPPY VALENTINE ❤";
    moreText.style.display = "inline";
  }
}
