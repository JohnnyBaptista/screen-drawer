const { resolve } = require('path');
const { globalShortcut } = require('electron');
const { maximizeWindow } = require(resolve(__dirname, 'windowController.js'));

const registerMaximize = () => {
    const shortcut = globalShortcut.register('Alt+F12', () => {
        maximizeWindow();
    });
    if(!shortcut) {
        console.log('registration failed');
    }
    return shortcut;
}

module.exports = registerMaximize();
