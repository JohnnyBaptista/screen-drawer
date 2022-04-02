const { Tray, Menu } = require('electron');
const { resolve } = require('path');


function createTray() {
    const iconPath = resolve(__dirname, '../', 'assets', 'pink.png');
    const tray = new Tray(iconPath);
    return tray;
}

module.exports = createTray();