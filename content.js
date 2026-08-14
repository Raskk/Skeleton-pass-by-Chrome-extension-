// Probability per second
// 1 / 10000 = 0.01% per second.
const PROBABILITY = 1 / 10000;

const EXTENSION_API = typeof browser !== "undefined" ? browser : chrome;
const VIDEO_URL = EXTENSION_API.runtime.getURL("video.webm");

let running = false;

setInterval(() => {
  if (document.visibilityState !== "visible") return;
  if (running) return;

  if (Math.random() < PROBABILITY) {
    runVideo();
  }
}, 1000);

function runVideo() {
  running = true;

  const container = document.createElement("div");

  Object.assign(container.style, {
    position: "fixed",
    left: "100%",
    top: "100%",
    transform: "translate(-93%, -100%)",
    zIndex: "2147483647",
    pointerEvents: "none",
    background: "transparent",
  });

  const video = document.createElement("video");

  video.src = VIDEO_URL;
  video.autoplay = true;
  video.playsInline = true;
  video.muted = true;

  Object.assign(video.style, {
    width: "120vw",
    height: "120vh",
    objectFit: "contain",
    background: "transparent",
  });

  container.appendChild(video);
  document.body.appendChild(container);

  function endVideo() {
    video.pause();
    container.remove();
    running = false;
  }

  video.addEventListener("ended", endVideo);
  video.addEventListener("error", endVideo);

  video.play().catch((error) => {
    console.log("Browser blocked the auto reproduction", error);
    endVideo();
  });

  setTimeout(() => {
    if (container.isConnected) {
      endVideo();
    }
  }, 30000);
}
