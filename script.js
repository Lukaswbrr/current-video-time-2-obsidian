const uri = "obsidian://";

const vault = "personal";

// Obsidian URI scheme example
const open_uri = "open?vault=MyVault&file=MyFile";
const actions = ["open", "new", "search", "daily"];
const parameters = {
    open: ["vault", "file", "path", "prepend", "append"],
    daily_new: ["vault", "name", "file", "path", "content", "clipboard", "silent", "append", "overwrite", "x-success"],
    search: ["vault", "query"],
}


const filePath = "test_javascript_file.md";
const text = "Hello, Obsidian!";

const command = `${uri}new?vault=${encodeURIComponent(vault)}&file=${encodeURIComponent(filePath)}&content=${encodeURIComponent(text)}`;


window.open(command);