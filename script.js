{

let uri = "obsidian://";

let vault = "personal";

// Obsidian URI scheme example
let open_uri = "open?vault=MyVault&file=MyFile";
let actions = ["open", "new", "search", "daily"];
let parameters = {
    open: ["vault", "file", "path", "prepend", "append"],
    daily_new: ["vault", "name", "file", "path", "content", "clipboard", "silent", "append", "overwrite", "x-success"],
    search: ["vault", "query"],
}


let filePath = "test_javascript_file.md";
let text = "Hello, Obsidian!";


function formatTime(timeInSeconds) {
  // 1. Get whole seconds (removes decimals)
  const totalSeconds = Math.floor(timeInSeconds);
  
  // 2. Find the minutes
  const minutes = Math.floor(totalSeconds / 60);
  
  // 3. Find the remaining seconds
  const seconds = totalSeconds % 60;

  // 4. Format the seconds to always have two digits
  // .padStart(2, '0') will add a '0' to the start if it's only 1 digit
  const formattedSeconds = String(seconds).padStart(2, '0');
  
  // 5. Return the "M:SS" string
  return `${minutes}:${formattedSeconds}`;
}

console.log("Script loaded.");

function findVideo() {
  // Prefer YouTube main video, fallback to any <video>
  return document.getElementsByTagName("video");
}

function waitForVideo(timeoutMs = 8000) {
  const v = findVideo();
  if (v) return Promise.resolve(v);
  return new Promise((resolve, reject) => {
    const obs = new MutationObserver(() => {
      const v2 = findVideo();
      if (v2) { obs.disconnect(); resolve(v2); }
    });
    obs.observe(document.documentElement, { childList: true, subtree: true });
    setTimeout(() => { obs.disconnect(); reject(new Error("No video found")); }, timeoutMs);
  });
}

(async () => {
  try {
    const video = await waitForVideo();
    console.log("Found video:", video);
    const time = video.currentTime;
    const formattedTime = formatTime(time);

    let command = `${uri}new?vault=${encodeURIComponent(vault)}&file=${encodeURIComponent(filePath)}&content=${encodeURIComponent(formattedTime)}&append=true`;
    const win = window.open(command, "_blank");
    setTimeout(() => { try { if (win && !win.closed) win.close(); } catch {} }, 700);
  } catch (e) {
    console.warn("Video not found:", e);
  }
})();

}