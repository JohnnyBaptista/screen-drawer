const { BrowserWindow } = require('electron');

const getWindow = () => BrowserWindow.getFocusedWindow();

const closeWindow = () => getWindow().close();

const minimizeWindow = () => getWindow().minimize();

const maximizeWindow = () => {  
    const myWindow = BrowserWindow.getAllWindows()[0];
    myWindow.show();
}

module.exports = { closeWindow, minimizeWindow, maximizeWindow };
