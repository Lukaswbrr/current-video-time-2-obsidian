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


let time = document.getElementsByTagName('video')[0].currentTime;
let formattedTime = formatTime(time);

let command = `${uri}new?vault=${encodeURIComponent(vault)}&file=${encodeURIComponent(filePath)}&content=${encodeURIComponent(formattedTime)}&append=true`;

const win = window.open(command);

win.close();
/*
setTimeout(() => {
  try {
    if (win && !win.closed) win.close();
  } catch (e) {}
}, 300);
*/
}