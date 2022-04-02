const { BrowserWindow } = require('electron');
const { resolve } = require('path');

const { minimizeWindow } = require(resolve(__dirname, 'windowController.js'));

const createWindow = () => {
    const mainWindow = new BrowserWindow({
      frame: false,
      resizable: false,
      transparent: true,
      fullscreen: true,
      fullscreenable: true,
      skipTaskbar: true,
      title: 'screen-drawer',
    })
  

    mainWindow.webContents.on('before-input-event', (event, input) => {
        if(input.key === 'Escape') {
            minimizeWindow();
        }   
    })
    
    mainWindow.loadFile('index.html')
    return mainWindow;
}

module.exports = createWindow();
