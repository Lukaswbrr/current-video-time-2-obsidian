import {add} from './script.js';

console.log("Background script loaded.");

browser.commands.onCommand.addListener((command) => {
    switch (command) {
        case "test-print":
            //browser.tabs.create({
            //    url: "https://www.youtube.com/watch?v=WiLu-2GbkFg"
            //});

            add("hello");

            browser.tabs.executeScript({
                file: 'add_note.js'
            });
            break;
    }
});
